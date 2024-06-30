import { styles } from "./form.styles";

type TextInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
  name: string;
  label?: string;
};

export const TextInput = ({
  handleChange,
  handleBlur,
  value,
  error,
  touched,
  name,
  label,
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
      />
      {error && touched ? <div style={styles.error}>{error}</div> : null}
    </div>
  );
};
