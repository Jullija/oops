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
  group: {
    name: string;
    id: string;
    weekday: string;
    time: {
      start: string;
      end: string;
    };
    teacherDisplayName: string;
  };
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
        // TODO add level to backend
        level: -1,
        group: {
          // TODO userGroups cannot be null
          name: user.userGroups[0]?.group.groupName ?? "-",
          id: user.userGroups[0]?.group.groupsId ?? "-1",
          weekday: user.userGroups[0]?.group.weekday ?? "-",
          time: {
            start: user.userGroups[0]?.group.startTime ?? "-",
            end: user.userGroups[0]?.group.endTime ?? "-",
          },
          // TODO: later on
          teacherDisplayName: "TBA",
        },
        totalPoints: data.getStudentPoints.sumOfAll,
      }
    : undefined;

  const uniqueCategories: Map<string, FilterItem> = new Map();

  // TODO: points undefined
  points
    .map((p) => {
      return {
        id: p?.subcategory.category.categoryId.toString(),
        name: p?.subcategory.category.categoryName,
      };
    })
    .forEach((entry) => {
      if (!uniqueCategories.has(entry.id ?? "-1")) {
        uniqueCategories.set(entry.id ?? "-1", { id: "1", name: "1" });
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
