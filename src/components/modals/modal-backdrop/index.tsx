import { useModalBaseState } from '@/contexts/modal-base-context';
import styles from './index.module.scss';

export function ModalBackdrop() {
  const { isModalBaseOpen, component } = useModalBaseState();

  const IS_OPEN_WITH_COMPONENT = component && isModalBaseOpen;

  return (
    <div className={styles.modalBackdrop} data-open={isModalBaseOpen}>
      {IS_OPEN_WITH_COMPONENT && component}
    </div>
  );
}
