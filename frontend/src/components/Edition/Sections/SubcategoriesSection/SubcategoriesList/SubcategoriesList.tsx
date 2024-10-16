import { Subcategory } from "../../../../../hooks/Edition/useSubcategoriesSection";
import { EMPTY_FIELD_STRING } from "../../../../../utils/constants";
import { Styles } from "../../../../../utils/Styles";
import { SubcategoryCard } from "./CategoryCard";

type SubcategoriesListProps = {
  subcategories: Subcategory[];
  selectedSubcategories: Subcategory[];
  handleSelectSubcategoryClick: (subcategory: Subcategory) => void;
  title: string;
};

export const SubcategoriesList = ({
  subcategories,
  selectedSubcategories,
  handleSelectSubcategoryClick,
  title,
}: SubcategoriesListProps) => {
  return (
    <div>
      <div style={styles.title}>{title}</div>
      <div style={styles.container}>
        {subcategories.length !== 0
          ? subcategories.map((subcategory) => (
              <SubcategoryCard
                subcategory={subcategory}
                isSelected={
                  !!selectedSubcategories.find(
                    (c) => c.categoryId === subcategory.categoryId,
                  )
                }
                onSelectClick={() => handleSelectSubcategoryClick(subcategory)}
              />
            ))
          : EMPTY_FIELD_STRING}
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  title: {
    color: "blue",
  },
};
