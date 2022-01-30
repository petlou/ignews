import styles from './styles.module.scss';

interface SubscribeButtonsProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonsProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
