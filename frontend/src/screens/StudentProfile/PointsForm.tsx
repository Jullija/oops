import {
  getCategories,
  getProviders,
  getSubcategoriesByCategory,
} from "../../api";
import { useFormik } from "formik";
import { Subcategory } from "../../utils";
import { ZodError, z } from "zod";
import { useState } from "react";
import { FormPoints } from "./types";

type PointFormProps = {
  studentId: string;
  handleAdd: (formPoints: FormPoints) => void;
};

const ValidationSchema = z.object({
  categoryId: z.string().min(1, "required"),
  subcategoryId: z.string().min(1, "required"),
  providerId: z.string().min(1, "required"),
  points: z
    .number()
    .min(0, "min number of points is 0")
    .max(12, "max number of points is 12"),
});

type PointsFormValues = z.infer<typeof ValidationSchema>;

export const PointsForm = ({ studentId, handleAdd }: PointFormProps) => {
  const categories = getCategories();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const providers = getProviders();
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    const categorySubcategories = getSubcategoriesByCategory(categoryId);
    setSubcategories(categorySubcategories);
    formik.setFieldValue("categoryId", categoryId);
    formik.setFieldValue("subcategoryId", "");
  };

  const validate = (values: PointsFormValues) => {
    console.log(values);
    try {
      ValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = (values: PointsFormValues) => {
    alert(JSON.stringify(values, null, 2));
    const points: FormPoints = {
      studentId: studentId,
      providerId: values.providerId,
      number: values.points,
      subcategoryId: getSubcategoriesByCategory(values.categoryId)[0].id,
    };
    handleAdd(points);
  };

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      subcategoryId: "",
      points: 0,
      providerId: "",
    },
    validate: validate,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>category</label>
        <select
          name="categoryId"
          onChange={handleCategoryChange}
          onBlur={formik.handleBlur}
          value={formik.values.categoryId}
        >
          <option value="">-</option>
          {categories.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        </select>
        {formik.errors.categoryId && formik.touched.categoryId ? (
          <div style={{ color: "red" }}>{formik.errors.categoryId}</div>
        ) : null}
      </div>

      <div>
        <label>subcategory</label>
        <select
          name="subcategoryId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subcategoryId}
        >
          <option value="">-</option>
          {subcategories.map((subcategory, index) => (
            <option value={subcategory.id} key={index}>
              {subcategory.name}
            </option>
          ))}
        </select>
        {formik.errors.subcategoryId && formik.touched.subcategoryId ? (
          <div style={{ color: "red" }}>{formik.errors.subcategoryId}</div>
        ) : null}
      </div>

      <div>
        <label>points</label>
        <input
          name="points"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.points}
        />
        {formik.errors.points && formik.touched.points ? (
          <div style={{ color: "red" }}>{formik.errors.points}</div>
        ) : null}
      </div>

      <div>
        <label>provider</label>
        <select
          name="providerId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.providerId}
        >
          <option value="">-</option>
          {providers.map((provider, index) => (
            <option value={provider.id} key={index}>
              {provider.name}
            </option>
          ))}
        </select>
        {formik.errors.providerId && formik.touched.providerId ? (
          <div style={{ color: "red" }}>{formik.errors.providerId}</div>
        ) : null}
      </div>
      <button type="submit">add grade</button>
    </form>
  );
};
