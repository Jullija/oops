import { useEffect, useState } from "react";
import {
  getCategories,
  getPoints,
  getProviders,
  getSubcategoriesByCategory,
} from "../../api";
import { Points, Subcategory } from "../../utils";

type PointFormProps = {
  handleAdd: (points: Points) => void;
};

export const PointsForm = ({ handleAdd }: PointFormProps) => {
  const categories = getCategories();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const providers = getProviders();

  const [categoryId, setCategoryId] = useState<string>();
  const [subcategoryId, setSubcategoryId] = useState<string>();
  const [points, setPoints] = useState<number>();
  const [providerId, setId] = useState<string>();

  useEffect(() => {
    const subcategories = categoryId
      ? getSubcategoriesByCategory(categoryId)
      : [];
    setSubcategories(subcategories);
    setSubcategoryId(
      subcategories.length > 0 ? subcategories[0].id : undefined
    );
  }, [categoryId]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(e.target.value);
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSubcategoryId(e.target.value);
  };

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(parseFloat(e.target.value));
  };

  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = () => {
    const userId = "1";
    if (subcategoryId && points && providerId) {
      const p: Points = {
        id: getPoints().length.toString(),
        subcategoryId: subcategoryId,
        studentId: userId,
        providerId: providerId,
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
        <select onChange={handleCategoryChange}>
          <option value="">-</option> {/* Empty option */}
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
          <option value="">-</option> {/* Empty option */}
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

      <div>
        <label>provider</label>
        <select onChange={handleProviderChange}>
          <option value="">-</option>
          {providers.map((provider, index) => (
            <option value={provider.id} key={index}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit}>add grade</button>
    </div>
  );
};
