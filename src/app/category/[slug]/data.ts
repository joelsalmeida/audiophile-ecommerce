export type ProductPreviewCardData = {
  images: {
    alt: string;
    sm: {
      path: string;
    };
    md: {
      path: string;
    };
    lg: {
      path: string;
    };
  };
  name: string;
  description: string;
  newProduct: boolean;
  anchor: {
    href: string;
    label: string;
  };
}[];

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

const YX1 = {
  images: {
    alt: '',
    sm: {
      path: '/product-yx1-earphones/mobile/image-category-page-preview.jpg',
    },
    md: {
      path: '/product-yx1-earphones/tablet/image-category-page-preview.jpg',
    },
    lg: {
      path: '/product-yx1-earphones/desktop/image-category-page-preview.jpg',
    },
  },
  name: 'YX1 wireless earphones',
  description:
    'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
  newProduct: true,
  anchor: { href: '#', label: 'See Product' },
};

const ZX9 = {
  images: {
    alt: '',
    sm: {
      path: '/product-zx9-speaker/mobile/image-category-page-preview.jpg',
    },
    md: {
      path: '/product-zx9-speaker/tablet/image-category-page-preview.jpg',
    },
    lg: {
      path: '/product-zx9-speaker/desktop/image-category-page-preview.jpg',
    },
  },
  name: 'ZX9 speaker',
  description:
    '  Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
  newProduct: true,
  anchor: { href: '#', label: 'See Product' },
};

const ZX7 = {
  images: {
    alt: '',
    sm: {
      path: '/product-zx7-speaker/mobile/image-category-page-preview.jpg',
    },
    md: {
      path: '/product-zx7-speaker/tablet/image-category-page-preview.jpg',
    },
    lg: {
      path: '/product-zx7-speaker/desktop/image-category-page-preview.jpg',
    },
  },
  name: 'ZX7 speaker',
  description:
    '  Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
  newProduct: true,
  anchor: { href: '#', label: 'See Product' },
  flipped: true,
};

export const HEADPHONES_DATA: ProductPreviewCardData = [
  XX99_ONE,
  XX99_TWO,
  XX59,
];
export const EARPHONES_DATA: ProductPreviewCardData = [YX1];
export const SPEAKERS_DATA: ProductPreviewCardData = [ZX9, ZX7];

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
