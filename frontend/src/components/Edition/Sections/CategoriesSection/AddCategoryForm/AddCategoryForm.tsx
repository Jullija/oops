import { z, ZodError } from "zod";
import { useFormik } from "formik";
import { Styles } from "../../../../../utils/Styles";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { Row, SubcategoryRows } from "./SubcategoryRows";
import { useState } from "react";
import { SubcategoriesFormValues } from "./SubcategoryRow";

export type CategoriesFormValues = z.infer<typeof ValidationSchema>;

const ValidationSchema = z.object({
  categoryName: z.string().min(1, "required"),
  canAddPoints: z.boolean(),
});

type AddCategoryFormProps = {
  handleAddCategory: (values: CategoriesFormValues, rows: Row[]) => void;
  createError?: string;
};

export const AddCategoryForm = ({
  handleAddCategory,
  createError,
}: AddCategoryFormProps) => {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      canAddPoints: false,
    },
    validate: (values: CategoriesFormValues) => {
      try {
        ValidationSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },
    onSubmit: (values: CategoriesFormValues) => {
      handleAddCategory(values, rows);
    },
  });

  const [rows, setRows] = useState<Row[]>([]);

  const handleAddSubcategory = (subcategory: SubcategoriesFormValues) => {
    setRows((prev) => [
      ...prev,
      {
        name: subcategory.name,
        ordinal: subcategory.ordinal,
        max: subcategory.maxPoints,
      },
    ]);
  };

  const handleDeleteCategory = (ordinal: number) => {
    const updatedRows = rows
      .filter((_, index) => index + 1 !== ordinal)
      .map((row, index) => {
        return { ...row, ordinal: index + 1 };
      });
    setRows(updatedRows);
  };

  const handleUp = (ordinal: number) => {
    const index = ordinal - 1;

    const updated = rows.map((row, i) => {
      if (i === index - 1) return rows[index];
      if (i === index) return rows[index - 1];
      return row;
    });

    setRows(updated);
  };

  const handleDown = (ordinal: number) => {
    const index = ordinal - 1;

    const updated = rows.map((row, i) => {
      if (i === index) return rows[index + 1];
      if (i === index + 1) return rows[index];
      return row;
    });

    setRows(updated);
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Add Category</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            name="categoryName"
            label="nazwa"
            variant="outlined"
            value={formik.values.categoryName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.categoryName && formik.errors.categoryName,
            )}
            helperText={
              formik.touched.categoryName && formik.errors.categoryName
            }
          />

          <FormControlLabel
            control={
              <Switch
                name="canAddPoints"
                checked={formik.values.canAddPoints}
                onChange={(event) =>
                  formik.setFieldValue("canAddPoints", event.target.checked)
                }
                onBlur={formik.handleBlur}
              />
            }
            label="dodawanie punktów"
          />

          <SubcategoryRows
            rows={rows}
            handleSubcategoryAdd={handleAddSubcategory}
            handleDeleteCategory={handleDeleteCategory}
            handleUp={handleUp}
            handleDown={handleDown}
          />
        </div>

        <button type="submit">add category</button>
      </form>

      {createError && <p style={styles.error}>Error: {createError}</p>}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 12,
    border: "1px solid black",
  },
  title: { fontWeight: "bold" },
  error: { color: "red" },
};