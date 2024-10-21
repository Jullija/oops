import { SubcategoriesFormValues, SubcategoryRow } from "./SubcategoryRow";

type SubcategoryRowsProps = {
  rows: Row[];
  handleSubcategoryAdd: (s: SubcategoriesFormValues) => void;
  handleDeleteCategory: (ordinal: number) => void;
  handleUp: (ordinal: number) => void;
  handleDown: (ordinal: number) => void;
};

export type Row = {
  name: string;
  max: number;
};

export const SubcategoryRows = ({
  rows,
  handleSubcategoryAdd,
  handleDeleteCategory,
  handleUp,
  handleDown,
}: SubcategoryRowsProps) => {
  return (
    <div>
      {rows.map((row, index) => (
        <SubcategoryRow
          key={index + row.name}
          initialValues={{
            name: row.name,
            maxPoints: row.max,
            ordinal: index + 1,
          }}
          handleAdd={handleSubcategoryAdd}
          handleDelete={handleDeleteCategory}
          handleUp={handleUp}
          handleDown={handleDown}
          blockDown={index === rows.length - 1}
          blockUp={index === 0}
        />
      ))}
      <SubcategoryRow
        initialValues={{
          name: "",
          maxPoints: 0,
          ordinal: rows.length + 1,
        }}
        handleAdd={handleSubcategoryAdd}
        handleDelete={handleDeleteCategory}
        disabled={false}
        handleUp={() => {}}
        handleDown={() => {}}
      />
    </div>
  );
};
