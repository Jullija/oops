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
  GradeRowData,
  GradeSubcategory,
} from "../../../hooks/Group/useGroupScreenData";
import { Styles } from "../../../utils/Styles";

type GroupTableProps = {
  data: GradeRowData[];
  subcategoriesHeaders: GradeSubcategory[];
};

export const GroupTable = ({ data, subcategoriesHeaders }: GroupTableProps) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.headerStudentCell}>Student</TableCell>
              {subcategoriesHeaders.map((header, index) => (
                <TableCell key={index} style={styles.headerCell} align="center">
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell style={styles.regularStudentCell}>
                  {idx + 1}. {item.student.fullName}
                </TableCell>
                {item.subcategories.map((subcategory, subIdx) => (
                  <TableCell key={subIdx}>{subcategory.pure}</TableCell>
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
