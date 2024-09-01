export type CategoryCardItemProps = {
  title: string;
  anchor: { href: string; label: string };
  image: {
    path: string;
    alt?: string;
  };
};
