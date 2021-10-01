import { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from '../utils/api';
import dayjs from 'dayjs';

const MatchBox = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('https://api.football-data.org/v2/matches').then((response) => {
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
    data.matches.map((item) => (
      <Link href={`/matches/${item.id}`}>
        <div className="shadow-md flex px-4 py-6 rounded-md my-4">
          {item.status == "FINISHED" ?
            (<div className="py-1 px-4 rounded-full font-bold m-auto" style={{ backgroundColor: '#D6EFEB', color: '#439287' }}>
              finished
            </div>) :
            (<div className="py-1 px-4 rounded-full font-bold m-auto" style={{ backgroundColor: '#D6EFEB', color: '#439287' }}>
              {dayjs(item.utcDate).format('HH:mm')}
            </div>)}
          <div className="flex flex-1 justify-center items-center">
            <div>
              {item.status == "FINISHED" ?
                (<> <p className="text-center font-bold text-lg">
                  <span>{item.score.fullTime.homeTeam}</span>
                  <span className="mx-4">:</span>
                  <span>{item.score.fullTime.awayTeam}</span>
                </p>
                  <div key={item.id}>
                    <span>{item.homeTeam.name}</span>
                    <span className="mx-4">VS</span>
                    <span>{item.awayTeam.name}</span>
                  </div>
                </>
                ) : (
                  <div key={item.id}>
                    <span>{item.homeTeam.name}</span>
                    <span className="mx-4">VS</span>
                    <span>{item.awayTeam.name}</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Link>
    ))
  )

}

export default MatchBox