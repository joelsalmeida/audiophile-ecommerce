export type OrderResumeProps = {
  detailedItem: {
    name: string;
    price: string;
    quantity: number;
    image: {
      alt?: string | undefined;
      path: string;
    };
  };
  otherItemsQuantity: number;
  grandTotal: string;
};
