import { Image } from "./Image";

type AvatarProps = {
  id: string | undefined;
  size: AvatarSize;
};

const sizeMap: Record<AvatarSize, number> = {
  xs: 40,
  s: 60,
  m: 100,
  l: 140,
};

type AvatarSize = "xs" | "s" | "m" | "l";

export const Avatar = ({ id, size }: AvatarProps) => {
  return <Image id={id} size={sizeMap[size]} />;
};
