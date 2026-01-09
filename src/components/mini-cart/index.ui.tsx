import { Button } from '../inputs/button';
import { QuantitySelector } from '../inputs/quantity-selector';
import { ProductMiniCard } from '../product-mini-card';
import styles from './index.module.scss';
import { MiniCartUIProps } from './index.ui.types';

export function MiniCartUI({
  isOpen,
  items,
  total,
  onIncrement,
  onDecrement,
  onClear,
  onClose,
  containerRef,
}: MiniCartUIProps) {
  return (
    <div ref={containerRef} className={styles.miniCart} data-open={isOpen}>
      <div className={styles.miniCart__top}>
        <strong>{`CART: (${items.length})`}</strong>
        <button type="button" onClick={onClear}>
          Remove all
        </button>
      </div>

      <div className={styles.miniCart__items}>
        {items.map((item) => (
          <div className={styles.miniCart__items__item} key={item.id}>
            <ProductMiniCard
              name={item.name}
              price={item.price}
              image={{ path: item.imagePath }}
            />

            <QuantitySelector
              currentQuantity={item.quantity}
              increment={() => onIncrement(item.id)}
              decrement={() => onDecrement(item.id)}
            />
          </div>
        ))}
      </div>

      <div className={styles.miniCart__totals}>
        <span>TOTAL</span>
        <strong>{total}</strong>
      </div>

      <Button
        fullWidth
        asLink
        href="/checkout"
        variant="contained"
        onClick={onClose}
      >
        CHECKOUT
      </Button>
    </div>
  );
}
