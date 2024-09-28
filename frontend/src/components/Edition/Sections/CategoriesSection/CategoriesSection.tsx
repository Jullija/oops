import { useAddCategoryMutation } from "../../../../graphql/addCategory.graphql.types";
import { AddCategoryForm } from "./AddCategoryForm";

export const CategoriesSection = () => {
  const [addCategory, { error }] = useAddCategoryMutation();

  return (
    <div>
      <div>categories section</div>
      <AddCategoryForm
        createError={error?.message}
        handleAddConfirmation={async (values) => {
          console.log("values: ", values);
          await addCategory({
            variables: {
              categoryName: values.categoryName,
              canAddPoints: values.canAddPoints === "yes" ? true : false,
            },
          });
        }}
      />
    </div>
  );
};
