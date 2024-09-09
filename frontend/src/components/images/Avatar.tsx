import { FILES_URL } from "../../utils/constants";
import { Styles } from "../../utils/Styles";

const styles: Styles = {
  img: {
    width: "100%",
    objectFit: "cover",
  },
};

type AvatarProps = {
  id: string | undefined;
  size: AvatarSize;
};

type AvatarSize = "xs" | "s" | "m" | "l";

const sizeMap: Record<AvatarSize, number> = {
  xs: 40,
  s: 60,
  m: 100,
  l: 140,
};

export const Avatar = ({ id, size }: AvatarProps) => {
  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        width: sizeMap[size],
        height: sizeMap[size],
      }}
    >
      <img src={`${FILES_URL}${id}`} alt={`img id ${id}`} style={styles.img} />
    </div>
  );
};
