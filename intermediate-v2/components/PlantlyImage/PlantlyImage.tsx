import { Image, ImageProps, useWindowDimensions } from "react-native";

type PlantlyImageProps = ImageProps & {
  size?: number;
};

export function PlantlyImage({ size, ...props }: PlantlyImageProps) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      {...props}
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
