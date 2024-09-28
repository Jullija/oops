import { useAddCategoryMutation } from "../../../../graphql/addCategory.graphql.types";
import {
  AllCategoriesQuery,
  useAllCategoriesQuery,
} from "../../../../graphql/allCategories.graphql.types";
import { Styles } from "../../../../utils/Styles";
import { AddCategoryForm } from "./AddCategoryForm";
import { CategoriesList } from "./CategoriesList/CategoriesList";

export type Category = AllCategoriesQuery["categories"][number];

export const CategoriesSection = () => {
  const [addCategory, { error: addError }] = useAddCategoryMutation();

  const { data, loading, error, refetch } = useAllCategoriesQuery();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.container}>
      <div>categories section</div>
      <div>categories: </div>
      <CategoriesList categories={data?.categories ?? []} />
      <AddCategoryForm
        createError={addError?.message}
        handleAddConfirmation={async (values) => {
          console.log("values: ", values);
          await addCategory({
            variables: {
              categoryName: values.categoryName,
              canAddPoints: values.canAddPoints,
            },
          });
          if (!addError) {
            refetch();
          }
        }}
      />
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};
