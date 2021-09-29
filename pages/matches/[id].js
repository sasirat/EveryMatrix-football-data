import { useRouter } from 'next/router';

const Match = () => {
  const router = useRouter();

  return <p>{router.query.id}</p>
}

export default Match;