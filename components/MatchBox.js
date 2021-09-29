import { useState, useEffect } from 'react'
import axios from '../utils/api';

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
    data.matches.map((items) => (
      <div className="shadow-md flex px-4 py-6 rounded-md my-4">
        <div className="py-1 px-4 rounded-full font-bold m-auto" style={{ backgroundColor: '#D6EFEB', color: '#439287' }}>{items.utcDate}</div>
        <div className="flex flex-1 justify-center items-center">
          <div className="">
            <p>{items.score.fulltime}</p>
            <div>
              <span>{items.homeTeam.name}</span>
              <span className="mx-4">VS</span>
              <span>{items.awayTeam.name}</span>
            </div>
          </div>
        </div>
      </div>
    ))

  )
}

export default MatchBox