import MatchBox from "../components/MatchBox";
import Layout from '../components/Layout'

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="mb-4">
          <p className="text-3xl font-bold mb-8">Matchs</p>
          <p className="text-2xl font-bold">Today</p>
        </div>
        <MatchBox />
      </Layout>
    </div>
  )
}

export default Home