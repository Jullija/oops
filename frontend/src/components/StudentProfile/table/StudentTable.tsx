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
import { ActionButton } from "./ActionButton";
import { PointsCellContent } from "./cellContent/PointsCellContent";
import { AwardsCellContent } from "./cellContent/AwardsCellContent";
import { DateCellContent } from "./cellContent/DateCellContent";

type StudentTableProps = {
  points: Points[];
  handleEditClick?: (points: Points) => void;
  handleDeleteClick?: (pointsId: string) => void;
  handleAddClick?: (points: Points) => void;
  showActionButtons: boolean;
  blockActionButtons: boolean;
};

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
  handleAddClick,
  showActionButtons,
  blockActionButtons,
}: StudentTableProps) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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
                      {p.points.purePoints ? (
                        <ActionButton
                          type="edit"
                          onClick={() => handleEditClick?.(p)}
                          // TODO maybe + should be displayed here
                          isDisabled={blockActionButtons}
                        />
                      ) : (
                        <ActionButton
                          type="add"
                          onClick={() => handleAddClick?.(p)}
                          // TODO maybe + should be displayed here
                          isDisabled={blockActionButtons}
                        />
                      )}

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
                <TableCell align="center">
                  <AwardsCellContent points={p} />
                </TableCell>
                <TableCell align="center">
                  <CategoryTag
                    id={p.subcategory.category.categoryId}
                    name={p.subcategory.category.categoryName}
                  />
                </TableCell>
                <TableCell align="center">
                  <PointsCellContent points={p} />
                </TableCell>
                <TableCell align="center">{p.subcategory.maxPoints}</TableCell>
                <TableCell align="center">
                  <DateCellContent points={p} />
                </TableCell>
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
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
};
