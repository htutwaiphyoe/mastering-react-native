import { Image, ImageProps, useWindowDimensions } from "react-native";

type PlantlyImageProps = ImageProps & {
  size?: number;
  imageUri?: string;
};

export function PlantlyImage({ size, imageUri, ...props }: PlantlyImageProps) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      {...props}
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
      style={{
        borderRadius: 6,
        width: imageSize,
        height: imageSize,
      }}
    />
  );
}
