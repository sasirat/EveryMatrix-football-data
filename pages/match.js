import Lineup from '../components/Lineup'
import Layout from '../components/Layout'
import Bench from '../components/bench'
import Referees from '../components/Referees'
import Goal from '../components/Goal'
import Substitutions from '../components/Substitutions'
import Bookings from '../components/Bookings'

const Match = () => {
  return (
    <div>
      <Layout>
        <div className="text-center text-4xl font-bold mb-6">
          <span>0</span>
          <span className="mx-8">:</span>
          <span>3</span>
        </div>
        <div className="flex w-full">
          <div className="flex-1">
            <p className="font-bold text-center mb-4">São Paulo FC</p>
            <Lineup />
            <Bench />
          </div>
          <div className="mx-6 font-bold my-auto">
            <p>VS</p>
          </div>
          <div className="flex-1">
            <p className="font-bold text-center mb-4">São Paulo FC</p>
            <Lineup />
            <Bench />
          </div>
        </div>
        <Referees />
        <Goal />
        <Substitutions />
        <Bookings />
      </Layout>
    </div>
  )
}

export default Match