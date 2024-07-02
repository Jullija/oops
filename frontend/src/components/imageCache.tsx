import { useState, useEffect, useCallback } from "react";
import { fetchImageFromApi } from "../api/image";

type ImageCacheProps = {
  imageId: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
};

const imageCache: { [key: string]: string } = {};

export default function ImageCache({
  imageId,
  style,
  imgStyle,
}: ImageCacheProps) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchImage = useCallback(async (id: string) => {
    if (imageCache[id]) {
      setImage(imageCache[id]);
      setLoading(false);
    } else {
      try {
        const imageUrl = await fetchImageFromApi(id);
        imageCache[id] = imageUrl;
        setImage(imageUrl);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetchImage(imageId);
  }, [imageId, fetchImage]);

  if (loading) {
    return <div style={style}>Loading...</div>;
  }

  if (error) {
    return <div style={style}>Error: {error}</div>;
  }

  return (
    <div style={style}>
      <img src={image} alt={`Image with ID ${imageId}`} style={imgStyle} />
    </div>
  );
}
