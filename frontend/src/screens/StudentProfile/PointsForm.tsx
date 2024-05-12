import {
  getCategories,
  getPoints,
  getProviders,
  getSubcategoriesByCategory,
} from "../../api";
import { useFormik, FormikErrors } from "formik";
import { Points } from "../../utils";

type PointFormProps = {
  studentId: string;
  handleAdd: (points: Points) => void;
};

type FormValues = {
  categoryId: string;
  providerId: string;
  points: number;
};

export const PointsForm = ({ studentId, handleAdd }: PointFormProps) => {
  const categories = getCategories();
  const providers = getProviders();

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      points: 0,
      providerId: "",
    },
    validate: (values: FormValues) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.categoryId) errors.categoryId = "Required";
      if (!values.points) errors.points = "Required";
      if (!values.providerId) errors.providerId = "Required";
      return errors;
    },
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values, null, 2));
      const points: Points = {
        id: getPoints().length.toString(),
        studentId: studentId,
        providerId: values.providerId,
        number: values.points,
        subcategoryId: getSubcategoriesByCategory(values.categoryId)[0].id,
      };
      handleAdd(points);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>category</label>
        <select
          name="categoryId"
          onChange={formik.handleChange}
          value={formik.values.categoryId}
        >
          <option value="">-</option> {/* Empty option */}
          {categories.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        </select>
        {formik.errors.categoryId ? (
          <div>{formik.errors.categoryId}</div>
        ) : null}
      </div>

      <div>
        <label>points</label>
        <input
          name="points"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.points}
        />
        {formik.errors.points ? <div>{formik.errors.points}</div> : null}
      </div>

      <div>
        <label>provider</label>
        <select
          name="providerId"
          onChange={formik.handleChange}
          value={formik.values.providerId}
        >
          <option value="">-</option>
          {providers.map((provider, index) => (
            <option value={provider.id} key={index}>
              {provider.name}
            </option>
          ))}
        </select>
        {formik.errors.providerId ? (
          <div>{formik.errors.providerId}</div>
        ) : null}
      </div>
      <button type="submit">add grade</button>
    </form>
  );
};
