import { Image } from "./Image";

type AwardImageProps = {
  id: string | undefined;
  size: AwardImageSize;
};

const sizeMap: Record<AwardImageSize, number> = {
  s: 32,
};

type AwardImageSize = "s";

export const AwardImage = ({ id, size }: AwardImageProps) => {
  return <Image id={id} size={sizeMap[size]} />;
};
