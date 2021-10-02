import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react'
import axios from '../../utils/api'

const Teams = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get([`https://api.football-data.org/v2/teams/${router.query.id}`]).then((response) => {
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
      <div className="md:flex-row flex flex-col-reverse">
        <div>
          <p className="font-bold text-2xl my-4" style={{ color: '#439287' }}>{data.name}</p>
          <div style={{ backgroundColor: '#D6EFEB', color: '#439287' }} className="inline-block mb-4 px-4 py-1 rounded-full">
            <p>{data.area.name}</p>
          </div>
          <p>Address : {data.address}</p>
          <p>Phone : {data.phone}</p>
          <p>Website : {data.website}</p>
          <p>email : {data.email}</p>
          <p>Club Colors : {data.clubColors}</p>
        </div>
        <div>
          <img className="w-40 mx-auto md:w-56" src={data.crestUrl} />
        </div>
      </div>
    </Layout>
  )
}

export default Teams