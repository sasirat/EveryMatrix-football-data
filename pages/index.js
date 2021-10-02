import MatchBox from "../components/MatchBox";
import Layout from '../components/Layout'
import dayjs from 'dayjs'

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="mb-4">
          <div className="flex">
            <p className="text-3xl font-bold mb-8">Matchs</p>
            <div className="flex-1 flex" style={{ justifyContent: 'flex-end', color: '#439287' }}>
              <p className="text-2xl font-bold">{dayjs().format('DD/MM/YYYY')}</p>
            </div>
          </div>
          <p className="text-2xl font-bold">Today</p>
        </div>
        <MatchBox />
      </Layout>
    </div>
  )
}

export default Home