import { FilterItem } from "../../components/Groups/FilterBar/FilterOptionsSection";
import {
  StudentPointsQuery,
  useStudentPointsQuery,
} from "../../graphql/studentPoints.graphql.types";
import { Timestamp, Weekday } from "../common/useGroupsData";

export type Points =
  StudentPointsQuery["getStudentPoints"]["subcategoryPoints"][number];

export type StudentCardData = {
  id: string;
  displayName: string;
  index: number;
  group?: {
    name: string;
    id: string;
    weekday: Weekday;
    time: Timestamp;
    teacherDisplayName: string;
  };
  totalPoints: number;
  avatarId: string | undefined;
};

export const useStudentData = (props: {
  editionId: string | undefined;
  studentId: string | undefined;
}) => {
  const { editionId, studentId } = props;

  const { data, loading, error, refetch } = useStudentPointsQuery({
    variables: {
      editionId: parseInt(editionId as string),
      studentId: parseInt(studentId as string),
    },
    skip: !editionId || !studentId,
  });

  const points: Points[] = data?.getStudentPoints.subcategoryPoints ?? [];

  const user = data?.getStudentPoints.user;

  const studentData: StudentCardData | undefined = user
    ? {
        id: user.userId.toString(),
        displayName: `${user.firstName} ${user.secondName}`,
        index: user.indexNumber,
        group: user.userGroups[0]
          ? {
              name: user.userGroups[0].group.groupName,
              id: user.userGroups[0].group.groupsId,
              weekday: {
                id: user.userGroups[0].group.weekday.weekdayId,
                name: user.userGroups[0].group.weekday.weekdayName,
              },
              time: {
                start: user.userGroups[0].group.startTime,
                end: user.userGroups[0].group.endTime,
              },
              teacherDisplayName: `${user.userGroups[0].group.teacher?.firstName ?? "-"} ${user.userGroups[0].group.teacher?.secondName ?? "-"}`,
            }
          : undefined,
        totalPoints: data.getStudentPoints.sumOfAll,
        avatarId: user.imageFile?.fileId,
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
    studentPointsLoading: loading,
    studentPointsError: error,
    studentPointsRefetch: refetch,
  };
};
