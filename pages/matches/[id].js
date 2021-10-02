import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import axios from '../../utils/api';
import Layout from '../../components/Layout';
import Link from 'next/link'

const Match = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get([`https://api.football-data.org/v2/matches/${router.query.id}`]).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  if (data === undefined) {
    return <p>Data is undefined</p>;
  }
  return (
    <Layout>
      {/* <p>{router.query.id}</p> */}
      <div className="text-center text-4xl font-bold mb-6">
        {data.match.score.fullTime.homeTeam == null ?
          (<span>0</span>) : (
            <span>{data.match.score.fullTime.homeTeam}</span>
          )
        }
        <span className="mx-8">:</span>
        {data.match.score.fullTime.homeTeam == null ?
          (<span>0</span>) : (
            <span>{data.match.score.fullTime.awayTeam}</span>
          )
        }
      </div>
      <div className="flex w-full my-8">
        <Link href={`/teams/${data.match.homeTeam.id}`} >
          <div className="flex-1 flex justify-center items-center w-full">
            <p className="font-bold text-center mb-4 w-full py-1 rounded-full" style={{ backgroundColor: '#D6EFEB', color: '#439287' }} >{data.match.homeTeam.name}</p>
          </div>
        </Link>
        <div className="mx-6 font-bold my-auto">
          <p>VS</p>
        </div>
        <Link href={`/teams/${data.match.awayTeam.id}`}>
          <div className="flex-1 flex justify-center items-center w-full">
            <p className="font-bold text-center mb-4 w-full py-1 rounded-full" style={{ backgroundColor: '#D6EFEB', color: '#439287' }} >{data.match.awayTeam.name}</p>
          </div>
        </Link>
      </div>
      {data.head2head == null ?
        (
          <div>
            <div className="text-center mb-8">
              <p className="font-bold">HeadtoHead</p>
              <p>Number Of Matches : - </p>
              <p>Total Goals : - </p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <p className="font-bold">HeadtoHead</p>
              <p>Number Of Matches : {data.head2head.numberOfMatches}</p>
              <p>Total Goals : {data.head2head.totalGoals}</p>
            </div>
            <div className="flex w-full">
              <div className="flex-1">
                <p className="font-bold text-center mb-4">{data.head2head.homeTeam.wins}</p>
                <p className="font-bold text-center mb-4">{data.head2head.homeTeam.draws}</p>
                <p className="font-bold text-center mb-4">{data.head2head.homeTeam.losses}</p>
              </div>
              <div className="mx-6 font-bold text-center" style={{ color: '#439287' }}>
                <p className="mb-4">wins</p>
                <p className="mb-4">draws</p>
                <p className="mb-4">losses</p>
              </div>
              <div className="flex-1">
                <p className="font-bold text-center mb-4">{data.head2head.awayTeam.wins}</p>
                <p className="font-bold text-center mb-4">{data.head2head.awayTeam.draws}</p>
                <p className="font-bold text-center mb-4">{data.head2head.awayTeam.losses}</p>
              </div>
            </div>
          </>
        )
      }
    </Layout>

  )
}

export default Match;