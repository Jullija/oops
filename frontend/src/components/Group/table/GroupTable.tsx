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
import {
  GroupTableRow,
  Subcategory,
} from "../../../hooks/Group/useGroupScreenData";
import { Styles } from "../../../utils/Styles";

type GroupTableProps = {
  rows: GroupTableRow[];
  subcategories: Subcategory[];
};

export const GroupTable = ({ rows, subcategories }: GroupTableProps) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper} sx={{ maxHeight: 560 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.headerStudentCell}>Student</TableCell>
              {subcategories.map((subcategory) => (
                <TableCell key={subcategory.id} style={styles.headerCell}>
                  <div style={styles.headerContentContainer}>
                    <div style={styles.title}>{subcategory.name}</div>
                    <div>max. {subcategory.maxPoints}</div>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.student.id}>
                <TableCell style={styles.regularStudentCell}>
                  {index + 1}. {row.student.fullName}
                </TableCell>
                {row.subcategories.map((subcategory) => (
                  <TableCell
                    key={`${row.student.id}-${subcategory.subcategoryId}`}
                  >
                    {subcategory.pure ?? "---"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

const styles: Styles = {
  headerCell: {
    position: "sticky",
    top: 0,
    backgroundColor: "black",
    zIndex: 1,
  },
  headerContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    textWrap: "nowrap",
  },
  title: {
    fontWeight: "bold",
  },
  headerStudentCell: {
    fontWeight: "bold",
    fontSize: 16,
    position: "sticky",
    top: 0,
    left: 0,
    width: 200,
    minWidth: 200,
    maxWidth: 200,
    backgroundColor: "black",
    zIndex: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  regularStudentCell: {
    position: "sticky",
    left: 0,
    width: 200,
    minWidth: 200,
    maxWidth: 200,
    backgroundColor: "black",
    zIndex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
