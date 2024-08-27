import { FilterItem } from "../../components/StudentProfile/table/FilterMenu";
import {
  StudentPointsQuery,
  useStudentPointsQuery,
} from "../../graphql/studentPoints.graphql.types";

export type Points = NonNullable<
  StudentPointsQuery["getStudentPoints"]
>["subcategoryPoints"][number];

export type StudentCardData = {
  id: string;
  displayName: string;
  index: number;
  // TODO to delete
  level: {
    name: string;
    ordinalNumber: number;
    highest: boolean;
  };
  group?: {
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
  imageIds: {
    avatar?: string;
    level?: string;
  };
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
        level: {
          name: data?.getStudentPoints.level?.levelName ?? "-",
          ordinalNumber: data?.getStudentPoints.level?.ordinalNumber,
          highest: data?.getStudentPoints.level?.highest,
        },
        group: user.userGroups[0]
          ? {
              name: user.userGroups[0].group.groupName,
              id: user.userGroups[0].group.groupsId,
              weekday: user.userGroups[0].group.weekday,
              time: {
                start: user.userGroups[0].group.startTime,
                end: user.userGroups[0].group.endTime,
              },
              // TODO: why no display name
              teacherDisplayName: `${user.userGroups[0].group.teacher?.firstName ?? "-"} ${user.userGroups[0].group.teacher?.secondName ?? "-"}`,
            }
          : undefined,
        totalPoints: data.getStudentPoints.sumOfAll,
        imageIds: {
          avatar: user.imageFile?.fileId,
          level: data.getStudentPoints.level?.imageFile?.fileId,
        },
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
