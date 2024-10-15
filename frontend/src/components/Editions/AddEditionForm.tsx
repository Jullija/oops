import { z, ZodError } from "zod";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { NumberInput } from "../inputs/NumberInput";
import { Styles } from "../../utils/Styles";

export type EditionFormValues = z.infer<typeof ValidationSchema>;

const ValidationSchema = z.object({
  name: z.string().min(1, "required"),
  year: z.number().min(2000).max(2500),
});

type AddCategoryFormProps = {
  handleAddEdition: (values: EditionFormValues) => void;
  createError?: string;
};

export const AddEditionForm = ({
  handleAddEdition,
  createError,
}: AddCategoryFormProps) => {
  const currYear = new Date().getFullYear();
  const formik = useFormik({
    initialValues: {
      name: `edycja ${currYear}/${currYear + 1}`,
      year: currYear,
    },
    validate: (values: EditionFormValues) => {
      try {
        ValidationSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },
    onSubmit: (values: EditionFormValues) => {
      handleAddEdition(values);
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.title}>Add Category</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            name="name"
            label="nazwa"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <NumberInput
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.year}
            error={formik.errors.year}
            touched={formik.touched.year}
            name="year"
            label="year"
          />
        </div>

        <button type="submit">add edition</button>
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
    width: 500,
  },
  title: { fontWeight: "bold" },
  error: { color: "red" },
};
