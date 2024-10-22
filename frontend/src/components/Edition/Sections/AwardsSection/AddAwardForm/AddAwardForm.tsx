import { z, ZodError } from "zod";
import { useFormik } from "formik";
import { Styles } from "../../../../../utils/Styles";
import { TextField } from "@mui/material";

const ValidationSchema = z.object({
  awardName: z.string().min(1),
  awardType: z.string().min(1),
  awardValue: z.number().min(0),
  categoryId: z.string().min(1),
  description: z.string(),
  maxUsages: z.number().min(0),
});

export type AwardFormValues = z.infer<typeof ValidationSchema>;

type AddAwardFormProps = {
  handleAddAward: (values: AwardFormValues) => void;
  createError?: string;
};

export const AddAwardForm = ({
  handleAddAward,
  createError,
}: AddAwardFormProps) => {
  const formik = useFormik({
    initialValues: {
      awardName: "",
      awardType: "",
      awardValue: 0,
      categoryId: "",
      description: "",
      maxUsages: 0,
    },
    validate: (values: AwardFormValues) => {
      try {
        ValidationSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
      return {};
    },
    onSubmit: (values: AwardFormValues) => {
      handleAddAward(values);
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.title}>Add Award</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            name="awardName"
            label="Award Name"
            variant="outlined"
            value={formik.values.awardName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.awardName && formik.errors.awardName)}
            helperText={formik.touched.awardName && formik.errors.awardName}
          />

          <TextField
            fullWidth
            name="awardType"
            label="Award Type"
            variant="outlined"
            value={formik.values.awardType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.awardType && formik.errors.awardType)}
            helperText={formik.touched.awardType && formik.errors.awardType}
          />

          <TextField
            fullWidth
            name="awardValue"
            label="Award Value"
            type="number"
            variant="outlined"
            value={formik.values.awardValue}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.awardValue && formik.errors.awardValue,
            )}
            helperText={formik.touched.awardValue && formik.errors.awardValue}
          />

          <TextField
            fullWidth
            name="categoryId"
            label="Category ID"
            variant="outlined"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.categoryId && formik.errors.categoryId,
            )}
            helperText={formik.touched.categoryId && formik.errors.categoryId}
          />

          <TextField
            fullWidth
            name="description"
            label="Description"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.description && formik.errors.description,
            )}
            helperText={formik.touched.description && formik.errors.description}
          />

          <TextField
            fullWidth
            name="maxUsages"
            label="Max Usages"
            type="number"
            variant="outlined"
            value={formik.values.maxUsages}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.maxUsages && formik.errors.maxUsages)}
            helperText={formik.touched.maxUsages && formik.errors.maxUsages}
          />
        </div>

        <button type="submit">Add Award</button>
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
