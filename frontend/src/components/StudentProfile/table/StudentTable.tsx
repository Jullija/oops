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

type StudentTableProps = {
  points: Points[];
};

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
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

export const StudentTable = ({ points }: StudentTableProps) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const getPointsValueString = (points: Points): string => {
    const pure = points.points.purePoints?.value ?? 0;
    let totalBonus = 0;
    points.points.partialBonusType.forEach(
      (bonus) => (totalBonus += bonus?.partialValue ?? 0),
    );
    if (totalBonus === 0 && pure === 0) {
      return "0.0";
    }
    if (totalBonus === 0) {
      return pure.toFixed(1);
    }
    // TODO must be a better way than tofixed
    return `${pure.toFixed(1)} + ${totalBonus.toFixed(1)} = ${(pure + totalBonus).toFixed(1)}`;
  };

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

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
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
                <TableCell align="center">{getPointsValueString(p)}</TableCell>
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
};
