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

type GradeTableProps = {
  data: GradeRowData[];
  subcategoriesHeaders: GradeSubcategory[];
};
export const GradeTable = ({ data, subcategoriesHeaders }: GradeTableProps) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontSize: 16 }}>
                student
              </TableCell>
              {subcategoriesHeaders.map((header, index) => (
                <TableCell
                  key={index}
                  style={{ fontWeight: "bold", fontSize: 16 }}
                  align="center"
                >
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow>
                <TableCell>
                  {idx + 1}. {item.student.fullName}
                </TableCell>
                {item.subcategories.map((s) => (
                  <TableCell>{s.pure}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};
