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
                  {subcategory.name}
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
  headerCell: {
    fontWeight: "bold",
    fontSize: 16,
    position: "sticky",
    top: 0,
    backgroundColor: "black",
    zIndex: 1,
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
