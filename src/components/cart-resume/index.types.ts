export type CartResumeProps = {
  /**
   * A cart item to be displayed in detail.
   * The quantity of this item (`detailedItem.quantity`) should be considered
   * to calculate `otherItemsQuantity`.
   */
  detailedItem: {
    /** The name of the detailed item. */
    name: string;
    /** The price of the detailed item as a string (e.g., "R$ 10,00"). */
    price: string;
    /** The quantity of this specific item in the cart. */
    quantity: number;
    /** The image object containing details of the item’s image. */
    image: {
      /** Alternative text for the image (optional). */
      alt?: string;
      /** The path or URL of the image. */
      path: string;
    };
  };

  /**
   * Represents the total quantity of items in the cart,
   * excluding `detailedItem.quantity`.
   */
  otherItemsQuantity: number;

  /**
   * The total cart value as string (e.g., "R$ 19,99").*/
  grandTotal: string;
};
