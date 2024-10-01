import {
  createTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import { Points } from "../../../hooks/StudentProfile/useStudentData";
import { CategoryTag } from "../../CategoryTag";
import { Styles } from "../../../utils/Styles";
import { AwardImage } from "../../images/AwardImage";
import { ActionButton } from "./ActionButton";
import { PointsCell } from "./PointsCell";

type StudentTableProps = {
  points: Points[];
  handleEditClick?: (points: Points) => void;
  handleDeleteClick?: (pointsId: string) => void;
  showActionButtons: boolean;
  blockActionButtons: boolean;
};

const EMPTY_FIELD = "---";

type HeaderTitle = {
  name: string;
  align?: "center" | "left" | "right" | "justify" | "inherit" | undefined;
};

const headerTitles: HeaderTitle[] = [
  { name: "nazwa", align: "center" },
  { name: "bonusy", align: "center" },
  { name: "kategoria", align: "center" },
  { name: "punkty", align: "center" },
  { name: "max punktów", align: "center" },
  { name: "data", align: "center" },
  { name: "prowadzący", align: "center" },
];

export const StudentTable = ({
  points,
  handleEditClick,
  handleDeleteClick,
  showActionButtons,
  blockActionButtons,
}: StudentTableProps) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const getDisplayDateString = (points: Points): string => {
    const date = new Date(points.updatedAt ?? points.createdAt);
    return date.toLocaleDateString("pl-PL", dateOptions);
  };

  const getAwardsPhotos = (points: Points) => {
    const bonuses = points.points.partialBonusType;
    if (bonuses.length === 0) {
      return EMPTY_FIELD;
    }

    return (
      <div style={styles.awardsContainer}>
        {bonuses.map((bonus) => {
          return (
            <AwardImage id={bonus?.bonuses.award.imageFile?.fileId} size="s" />
          );
        })}
      </div>
    );
  };

  if (showActionButtons && (!handleEditClick || !handleDeleteClick)) {
    throw new Error(
      "Invalid arguments passed - handleEditClick or handleDeleteClick is undefined.",
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {showActionButtons && <TableCell />}
              {headerTitles.map((header) => (
                <TableCell style={styles.header} align={header.align}>
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {points.map((p, index) => (
              <TableRow key={index}>
                {showActionButtons && (
                  <TableCell>
                    <div style={styles.buttonsContainer}>
                      <ActionButton
                        type="edit"
                        onClick={() => handleEditClick?.(p)}
                        isDisabled={blockActionButtons}
                      />

                      <ActionButton
                        type="delete"
                        onClick={() => {
                          if (p.points.purePoints?.pointsId) {
                            handleDeleteClick?.(p.points.purePoints?.pointsId);
                          }
                        }}
                        // TODO disable if pure points is empty
                        isDisabled={
                          blockActionButtons || !p.points.purePoints?.pointsId
                        }
                      />
                    </div>
                  </TableCell>
                )}
                <TableCell align="center">
                  {p.subcategory.subcategoryName}
                </TableCell>
                <TableCell align="center">{getAwardsPhotos(p)}</TableCell>
                <TableCell align="center">
                  <CategoryTag
                    id={p.subcategory.category.categoryId}
                    name={p.subcategory.category.categoryName}
                  />
                </TableCell>
                <TableCell align="center">
                  <PointsCell points={p} />
                </TableCell>
                <TableCell align="center">{p.subcategory.maxPoints}</TableCell>
                <TableCell align="center">{getDisplayDateString(p)}</TableCell>
                <TableCell align="center">
                  {p.teacher.firstName} {p.teacher.secondName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

const styles: Styles = {
  header: {
    fontWeight: "bold",
    fontSize: 16,
  },
  awardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
};
