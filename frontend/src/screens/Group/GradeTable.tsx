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
import { GroupPointsQuery } from "../../graphql/groupPoints.graphql.types";

type GradeTableProps = {
  data: GroupPointsQuery | undefined;
  headers: string[];
};
export const GradeTable = ({ data, headers }: GradeTableProps) => {
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
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  style={{ fontWeight: "bold", fontSize: 16 }}
                  align="center"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.getUsersInGroupWithPoints.map((item, idx) => (
              <TableRow>
                <TableCell>
                  {idx + 1}. {item?.user.firstName} {item?.user.secondName}
                </TableCell>
                {item?.categoriesPoints[0].subcategoryPoints.map((i) => (
                  <TableCell align="center">
                    {i.points.purePoints?.value}
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
