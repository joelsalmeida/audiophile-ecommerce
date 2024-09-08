export type ProductPreviewCardProps = {
  name: string;
  description: string;
  newProduct: boolean;
  images: {
    alt: string;
    sm: { path: string };
    md: { path: string };
    lg: { path: string };
  };
  anchor: { href: string; label: string };
  flipped?: boolean;
};

// TODO: Look for code duplication
