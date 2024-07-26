import { styles } from "./form.styles";

type SelectInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
  name: string;
  label?: string;
  optionItems?: SelectOptionItem[];
};

export type SelectOptionItem = {
  value: string;
  title: string;
};

export const SelectInput = ({
  handleChange,
  handleBlur,
  value,
  error,
  touched,
  name,
  label,
  optionItems,
}: SelectInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <select
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      >
        <option value="">-</option>
        {optionItems?.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ))}
      </select>
      {error && touched ? <div style={styles.error}>{error}</div> : null}
    </div>
  );
};
