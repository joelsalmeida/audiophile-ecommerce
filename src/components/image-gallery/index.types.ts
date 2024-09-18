type Image = {
  sm: { path: string };
  md: { path: string };
  lg: { path: string };
  alt?: string;
};

export type ImageGalleryProps = {
  firstImage: Image;
  secondImage: Image;
  thirdImage: Image;
};
