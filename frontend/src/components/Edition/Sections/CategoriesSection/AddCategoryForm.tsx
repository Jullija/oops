import { z, ZodError } from "zod";
import { useFormik } from "formik";
import { SelectInput } from "../../../inputs/SelectInput";
import { TextInput } from "../../../inputs/TextInput";
import { Styles } from "../../../../utils/Styles";

type CategoriesFormValues = z.infer<typeof ValidationSchema>;

const ValidationSchema = z.object({
  categoryName: z.string().min(1, "required"),
  // TODO xd
  canAddPoints: z.string(),
});

type AddCategoryFormProps = {
  handleAddConfirmation: (values: CategoriesFormValues) => void;
  createError?: string;
};

export const AddCategoryForm = ({
  handleAddConfirmation,
  createError,
}: AddCategoryFormProps) => {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      canAddPoints: "no",
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
      handleAddConfirmation(values);
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.title}>add category</div>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.categoryName}
          error={formik.errors.categoryName}
          touched={formik.touched.categoryName}
          name="categoryName"
          label="category name"
        />
        <SelectInput
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.canAddPoints}
          error={formik.errors.canAddPoints}
          touched={formik.touched.canAddPoints}
          name="canAddPoints"
          optionItems={[
            {
              value: "yes",
              title: "yes",
            },
            {
              value: "no",
              title: "no",
            },
          ]}
          label="can add points"
          withEmpty={false}
        />
        <button type="submit">add points</button>
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
