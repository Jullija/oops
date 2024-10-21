import { SubcategoryRow } from "./SubcategoryRow";

type SubcategoryRowsProps = {
  subcategories: FormSubcategory[];
};

export type FormSubcategory = {
  name: string;
  max: number;
};

export const SubcategoryRows = ({ subcategories }: SubcategoryRowsProps) => {
  return (
    <div>
      {subcategories.map((row, index) => (
        <SubcategoryRow
          key={index + row.name}
          initialValues={{
            name: row.name,
            maxPoints: row.max,
            ordinal: index + 1,
          }}
          blockDown={index === subcategories.length - 1}
          blockUp={index === 0}
        />
      ))}
      <SubcategoryRow
        initialValues={{
          name: "",
          maxPoints: 0,
          ordinal: subcategories.length + 1,
        }}
        disabled={false}
      />
    </div>
  );
};
