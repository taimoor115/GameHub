import noImage from "../assets/no-image-placeholder.webp";

const getCropImage = (image: string) => {
  if (!image) return noImage;
  const target = "media/";
  const index = image.indexOf(target) + target.length;

  return image.slice(0, index) + "crop/600/400/" + image.slice(index);
};

export default getCropImage;
