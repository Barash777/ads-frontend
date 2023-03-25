import { useRouter } from 'next/router';

const EventPage = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <div>
      EventPage of {slug}
      <button onClick={() => router.push('/')}>PUSH</button>
    </div>
  );
};

export default EventPage;
