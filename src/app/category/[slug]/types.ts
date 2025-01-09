type ImagePathsType = {
  large: string;
  medium: string;
  small: string;
};

type PreviewImageType = {
  alt: string | null;
  paths: ImagePathsType;
};

export type ProductType = {
  _id: string;
  name: string;
  description: string[];
  price: number;
  previewImage: PreviewImageType;
  slug: string;
  releaseDate: string;
};
