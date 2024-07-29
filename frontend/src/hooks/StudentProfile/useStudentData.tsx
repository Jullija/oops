import { FilterItem } from "../../components/StudentProfile/table/FilterMenu";
import {
  StudentPointsQuery,
  useStudentPointsQuery,
} from "../../graphql/studentPoints.graphql.types";

export type Points = NonNullable<
  StudentPointsQuery["getStudentPoints"]
>["subcategoryPoints"][number];

export type StudentCardData = {
  // TODO add student avatar
  id: string;
  displayName: string;
  index: number;
  level: number;
  // TODO group do not work for now
  // group: {
  //   name: string;
  //   id: string;
  //   weekday: string;
  //   time: {
  //     start: string;
  //     end: string;
  //   };
  //   teacherDisplayName: string;
  // };
  totalPoints: number;
};

export const useStudentData = (props: {
  editionId: string;
  studentId: string;
}) => {
  const { editionId, studentId } = props;

  const {
    data,
    loading: studentPointsLoading,
    error: studentPointsError,
    refetch: studentPointsRefetch,
  } = useStudentPointsQuery({
    variables: {
      editionId: parseInt(editionId),
      studentId: parseInt(studentId),
    },
  });

  const points: Points[] = data?.getStudentPoints.subcategoryPoints ?? [];

  const user = data?.getStudentPoints.user;

  const studentData: StudentCardData | undefined = user
    ? {
        id: user.userId.toString(),
        displayName: `${user.firstName} ${user.secondName}`,
        index: user.indexNumber,
        level: -1,
        // group: {
        //   name: user.groups[0].group_name,
        //   id: user.groups[0].groups_id,
        //   weekday: user.groups[0].weekday,
        //   time: {
        //     start: user.groups[0].start_time,
        //     end: user.groups[0].end_time,
        //   },
        //   teacherDisplayName: "TBA",
        // },
        totalPoints: data.getStudentPoints.sumOfAll,
      }
    : undefined;

  const uniqueCategories: Map<string, FilterItem> = new Map();

  points
    .map((p) => {
      return {
        id: p.subcategory.category.categoryId.toString(),
        name: p.subcategory.category.categoryName,
      };
    })
    .forEach((entry) => {
      if (!uniqueCategories.has(entry.id)) {
        uniqueCategories.set(entry.id, entry);
      }
    });

  const filterHeaderNames: FilterItem[] =
    Array.from(uniqueCategories.values()) ?? [];

  return {
    studentData,
    points,
    filterHeaderNames,
    studentPointsLoading,
    studentPointsError,
    studentPointsRefetch,
  };
};
