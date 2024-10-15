import { Image } from "./Image";

type AvatarProps = {
  id: string | undefined;
  size: AvatarSize;
  disabled?: boolean;
};

const sizeMap: Record<AvatarSize, number> = {
  xs: 40,
  s: 60,
  m: 100,
  l: 140,
};

export type AvatarSize = "xs" | "s" | "m" | "l";

export const Avatar = ({ id, size, disabled = false }: AvatarProps) => {
  return <Image id={id} size={sizeMap[size]} disabled={disabled} />;
};
