export type ProductPreviewProps = {
  name: string;
  anchor: { href: string; label: string };
  images: {
    alt: string;
    sm: { path: string };
    md: { path: string };
    lg: { path: string };
  };
};
