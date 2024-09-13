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
};

export const Image = ({ size, id }: ImageProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <img src={`${FILES_URL}${id}`} alt={`img id ${id}`} style={styles.img} />
    </div>
  );
};
