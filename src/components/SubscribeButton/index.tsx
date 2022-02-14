import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { getStripeJs } from '../../services/stripe-js';
import { api } from '../../services/api';

import styles from './styles.module.scss';

export function SubscribeButton() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');

      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
