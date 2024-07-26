import { getCategories } from "../../../api/categories";
import { getSubcategoriesByCategory } from "../../../api/subcategories";
import { useFormik } from "formik";
import { Subcategory } from "../../../utils/types";
import { ZodError, z } from "zod";
import { useState } from "react";
import { FormPoints } from "./types";
import { NumberInput } from "../../inputs/NumberInput";
import { SelectInput } from "../../inputs/SelectInput";

type PointFormProps = {
  studentId: string;
  handleAdd: (formPoints: FormPoints) => void;
};

type PointsFormValues = z.infer<typeof ValidationSchema>;

const ValidationSchema = z.object({
  categoryId: z.string().min(1, "required"),
  subcategoryId: z.string().min(1, "required"),
  points: z
    .number()
    .min(0, "min number of points is 0")
    .max(12, "max number of points is 12"),
});

// we need real data here
export const PointsForm = ({ studentId, handleAdd }: PointFormProps) => {
  const categories = getCategories();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    const categorySubcategories = getSubcategoriesByCategory(categoryId);
    setSubcategories(categorySubcategories);
    formik.setFieldValue("categoryId", categoryId);
    formik.setFieldValue("subcategoryId", "");
  };

  const validate = (values: PointsFormValues) => {
    try {
      ValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = (values: PointsFormValues) => {
    const points: FormPoints = {
      studentId: studentId,
      number: values.points,
      subcategoryId: values.subcategoryId,
    };
    handleAdd(points);
  };

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      subcategoryId: "",
      points: 0,
    },
    validate: validate,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <SelectInput
        handleChange={handleCategoryChange}
        handleBlur={formik.handleBlur}
        value={formik.values.categoryId}
        error={formik.errors.categoryId}
        touched={formik.touched.categoryId}
        name="categoryId"
        optionItems={categories.map((category) => {
          return { value: category.id, title: category.name };
        })}
        label="category"
      />
      <SelectInput
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.subcategoryId}
        error={formik.errors.subcategoryId}
        touched={formik.touched.subcategoryId}
        name="subcategoryId"
        optionItems={subcategories.map((subcategory) => {
          return { value: subcategory.id, title: subcategory.name };
        })}
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
  );
};
