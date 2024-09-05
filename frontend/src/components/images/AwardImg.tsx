import { FILES_URL } from "../../utils/constants";
import { Styles } from "../../utils/Styles";

const styles: Styles = {
  img: {
    width: "100%",
    objectFit: "cover",
  },
};

type AwardProps = {
  id: string | undefined;
  size: AwardSize;
};

type AwardSize = "s";

const sizeMap: Record<AwardSize, number> = {
  s: 32,
};

export const AwardImg = ({ id, size }: AwardProps) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          flex: 1,
          width: sizeMap[size],
          height: sizeMap[size],
        }}
      >
        <img
          src={`${FILES_URL}${id}`}
          alt={`img id ${id}`}
          style={styles.img}
        />
      </div>
    </div>
  );
};
