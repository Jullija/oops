import { FILES_URL } from "../../utils/constants";
import { Styles } from "../../utils/Styles";

const styles: Styles = {
  img: {
    width: "100%",
    objectFit: "cover",
  },
};

type ImageProps = {
  id?: string;
  size: number;
  disabled: boolean;
};

export const Image = ({ size, id, disabled: disabled }: ImageProps) => {
  return (
    <div style={{ width: size, height: size, opacity: disabled ? 0.6 : 1 }}>
      <img src={`${FILES_URL}${id}`} alt={`img id ${id}`} style={styles.img} />
    </div>
  );
};
