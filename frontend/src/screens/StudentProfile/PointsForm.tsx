import { useEffect, useState } from "react";
import {
  getCategories,
  getPoints,
  getSubcategoriesByCategory,
} from "../../api";
import { Points, Subcategory } from "../../utils";

type PointFormProps = {
  handleAdd: (points: Points) => void;
};

export const PointsForm = ({ handleAdd }: PointFormProps) => {
  const categories = getCategories();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  const [categoryInput, setCategoryInput] = useState<string>();
  const [subcategoryInput, setSubcategoryInput] = useState<string>();
  const [points, setPoints] = useState<number>();

  useEffect(() => {
    const subcategories = categoryInput
      ? getSubcategoriesByCategory(categoryInput)
      : [];
    setSubcategories(subcategories);
    setSubcategoryInput(
      subcategories.length > 0 ? subcategories[0].id : undefined
    );
  }, [categoryInput]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInput(e.target.value);
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSubcategoryInput(e.target.value);
  };

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(parseFloat(e.target.value));
  };

  const handleSubmit = () => {
    const userId = "1";
    if (subcategoryInput && points) {
      const p: Points = {
        id: getPoints().length.toString(),
        subcategoryId: subcategoryInput,
        studentId: userId,
        providerId: "TODO",
        number: points,
      };
      console.log(p);
      handleAdd(p);
    }
  };

  return (
    <div>
      <div>
        <label>category</label>
        <select defaultValue={categories[0].id} onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>subcategory</label>
        <select onChange={handleSubcategoryChange}>
          {subcategories.map((subcategory, index) => (
            <option value={subcategory.id} key={index}>
              {subcategory.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>points</label>
        <input type="number" onChange={handlePointsChange} />
      </div>

      <button onClick={handleSubmit}>add grade</button>
    </div>
  );
};
