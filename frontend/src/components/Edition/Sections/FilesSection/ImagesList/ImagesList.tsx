import { EMPTY_FIELD_STRING } from "../../../../../utils/constants";
import { Styles } from "../../../../../utils/Styles";
import { Image } from "../../../../images/Image";

type ImagesListProps = {
  imageIds: string[];
  selectedImageIds: string[];
  handleSelectImageClick: (id: string) => void;
  title: string;
};

export const ImagesList = ({
  imageIds,
  selectedImageIds,
  handleSelectImageClick,
  title,
}: ImagesListProps) => {
  return (
    <div>
      <div style={styles.title}>{title}</div>
      <div style={styles.container}>
        {imageIds.length !== 0
          ? imageIds.map((id) => (
              <div
                onClick={() => handleSelectImageClick(id)}
                style={{
                  border: selectedImageIds.find(
                    (selectedId) => selectedId === id,
                  )
                    ? "1px solid red"
                    : "",
                }}
              >
                <Image id={id} size={128} disabled={false} />
              </div>
            ))
          : EMPTY_FIELD_STRING}
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  title: {
    color: "blue",
  },
};
