import { useFormik } from "formik";
import { ZodError, z } from "zod";
import { useState } from "react";
import { FormPoints, Subcategory } from "./types";
import { NumberInput } from "../../inputs/NumberInput";
import { SelectInput } from "../../inputs/SelectInput";
import { useCategoriesQuery } from "../../../graphql/categories.graphql.types";
import { useEditionSelection } from "../../../hooks/common/useEditionSelection";
import { Styles } from "../../../utils/Styles";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 12,
    border: "1px solid black",
    width: 500,
  },
  error: { color: "red" },
};

type PointsFormValues = z.infer<typeof ValidationSchema>;

const ValidationSchema = z.object({
  categoryId: z.string().min(1, "required"),
  subcategoryId: z.string().min(1, "required"),
  points: z.number().min(0, "min number of points is 0"),
});

type PointFormProps = {
  handleAddPoints: (formPoints: FormPoints) => void;
  createError?: string;
};

export const PointsForm = ({
  handleAddPoints,
  createError,
}: PointFormProps) => {
  const formik = useFormik({
    initialValues: {
      categoryId: "",
      subcategoryId: "",
      points: 0,
    },
    validate: (values: PointsFormValues) => {
      try {
        ValidationSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },
    onSubmit: (values: PointsFormValues) => {
      const points: FormPoints = {
        points: values.points,
        subcategoryId: values.subcategoryId,
      };
      handleAddPoints(points);
    },
  });

  const [subcategories, setSubcategories] = useState<
    Subcategory[] | undefined
  >();
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useCategoriesQuery({
    variables: { editionId: selectedEdition?.editionId ?? "-1" },
  });

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error.message}</div>;
  }
  const categories = data?.categories;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setSubcategories(
      categories?.find((category) => category.categoryId === categoryId)
        ?.subcategories,
    );
    formik.setFieldValue("categoryId", categoryId);
    formik.setFieldValue("subcategoryId", "-");
  };

  return (
    <div style={styles.container}>
      <div>add points</div>
      <form onSubmit={formik.handleSubmit}>
        <SelectInput
          handleChange={handleCategoryChange}
          handleBlur={formik.handleBlur}
          value={formik.values.categoryId}
          error={formik.errors.categoryId}
          touched={formik.touched.categoryId}
          name="categoryId"
          optionItems={categories?.map((category) => ({
            value: category.categoryId,
            title: category.categoryName,
          }))}
          label="category"
        />
        <SelectInput
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.subcategoryId}
          error={formik.errors.subcategoryId}
          touched={formik.touched.subcategoryId}
          name="subcategoryId"
          optionItems={subcategories?.map((subcategory) => ({
            value: subcategory.subcategoryId,
            title: subcategory.subcategoryName,
          }))}
          label="subcategory"
        />
        <NumberInput
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.points}
          error={formik.errors.points}
          touched={formik.touched.points}
          name="points"
          label="points"
        />
        <button type="submit">add points</button>
      </form>
      {createError && <p style={styles.error}>Error: {createError}</p>}
    </div>
  );
};
