import { styles } from "./inputs.styles";

type TextInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
};

export const TextInput = ({
  handleChange,
  handleBlur,
  value,
  error,
  touched,
  name,
  label,
  placeholder,
}: TextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && touched ? <div style={styles.error}>{error}</div> : null}
    </div>
  );
};
