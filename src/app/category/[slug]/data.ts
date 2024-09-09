const XX99_ONE = {
  images: {
    alt: '',
    sm: {
      path: '/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
    },
    md: {
      path: '/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
    },
    lg: {
      path: '/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
    },
  },
  name: 'XX99 Mark I Headphones',
  description:
    'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  newProduct: true,
  anchor: { href: '#', label: 'See Product' },
};

const XX99_TWO = {
  images: {
    alt: '',
    sm: {
      path: '/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
    },
    md: {
      path: '/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
    },
    lg: {
      path: '/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
    },
  },
  name: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  newProduct: true,
  anchor: { href: '#', label: 'See Product' },
  flipped: true,
};

const XX59 = {
  images: {
    alt: '',
    sm: {
      path: '/product-xx59-headphones/mobile/image-category-page-preview.jpg',
    },
    md: {
      path: '/product-xx59-headphones/tablet/image-category-page-preview.jpg',
    },
    lg: {
      path: '/product-xx59-headphones/desktop/image-category-page-preview.jpg',
    },
  },
  name: 'XX59 Headphones',
  description:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  newProduct: true,
  anchor: { href: '#', label: 'See Product' },
};

export const HEADPHONES_DATA = [XX99_ONE, XX99_TWO, XX59];

export const CATEGORIES_DATA = [
  {
    title: 'Headphones',
    anchor: { href: '/category/headphones', label: 'Shop' },
    image: {
      path: '/shared/desktop/image-category-thumbnail-headphones.png',
      alt: '',
    },
  },

  {
    title: 'Speakers',
    anchor: { href: '/category/speakers', label: 'Shop' },
    image: {
      path: '/shared/desktop/image-category-thumbnail-speakers.png',
      alt: '',
    },
  },

  {
    title: 'Earphones',
    anchor: { href: '/category/earphones', label: 'Shop' },
    image: {
      path: '/shared/desktop/image-category-thumbnail-earphones.png',
      alt: '',
    },
  },
];
