import { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from '../utils/api';
import dayjs from 'dayjs';

const MatchBox = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(['https://api.football-data.org/v2/matches']).then((response) => {
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
      <Link href={`/matches/${item.id}`} key={item.id}>
        <div className="shadow-md flex px-4 py-6 rounded-md my-4 md:text-base text-xs">
          {item.status == "FINISHED" ?
            (<div className="py-1 px-4 rounded-full font-bold m-auto" style={{ backgroundColor: '#D6EFEB', color: '#439287' }}>
              finished
            </div>) :
            (<div className="py-1 px-4 rounded-full font-bold m-auto" style={{ backgroundColor: '#D6EFEB', color: '#439287' }}>
              {dayjs(item.utcDate).format('HH:mm')}
            </div>)}
          <div className="flex flex-1 justify-center items-center ml-4 text-center">
            <div>
              {item.status == "FINISHED" ?
                (<div>
                  <div className="text-center font-bold text-lg flex">
                    <p>{item.score.fullTime.homeTeam}</p>
                    <p className="mx-4">:</p>
                    <p>{item.score.fullTime.awayTeam}</p>
                  </div>
                  <div className="flex">
                    <p>{item.homeTeam.name}</p>
                    <p className="mx-4">VS</p>
                    <p>{item.awayTeam.name}</p>
                  </div>
                </div>
                ) : (
                  <div className="flex">
                    <p>{item.homeTeam.name}</p>
                    <p className="mx-4">VS</p>
                    <p>{item.awayTeam.name}</p>
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