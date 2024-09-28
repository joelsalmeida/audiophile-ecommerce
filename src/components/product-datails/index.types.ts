export type ProductDetailsProps = {
  name: string;
  description: string;
  price: string;
  newProduct: boolean;
  images: {
    alt: string;
    sm: { path: string };
    md: { path: string };
    lg: { path: string };
  };
};