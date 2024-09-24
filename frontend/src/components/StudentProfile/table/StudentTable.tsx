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
import { Button } from "../../Button";

type StudentTableProps = {
  points: Points[];
  handleEditClick?: (points: Points) => void;
  handleDeleteClick?: (pointsId: string) => void;
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

export const StudentTable = ({
  points,
  handleEditClick,
  handleDeleteClick,
}: StudentTableProps) => {
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

  const displayButtonRow = handleEditClick || handleDeleteClick;

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {displayButtonRow && <TableCell />}
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
                {displayButtonRow && (
                  <TableCell>
                    <div style={styles.buttonsContainer}>
                      {handleEditClick && (
                        <Button
                          onClick={() => handleEditClick(p)}
                          color="lightgreen"
                        >
                          edit
                        </Button>
                      )}
                      {handleDeleteClick && p.points.purePoints?.pointsId && (
                        <Button
                          onClick={() => {
                            // TODO display info that there is no pure points - bonus only
                            if (p.points.purePoints?.pointsId) {
                              handleDeleteClick(p.points.purePoints?.pointsId);
                            }
                          }}
                          color="pink"
                        >
                          delete
                        </Button>
                      )}
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
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
};
