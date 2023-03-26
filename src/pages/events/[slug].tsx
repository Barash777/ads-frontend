import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

const EventPage = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <Layout>
      EventPage of {slug}
      <button onClick={() => router.push('/')}>PUSH</button>
    </Layout>
  );
};

export default EventPage;
