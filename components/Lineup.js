const LineUp = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <span className="flex-grow border-b-2" style={{ borderColor: '#D6EFEB' }} />
        <span className="py-1 px-4 rounded-full font-bold m-auto text-xs" style={{ backgroundColor: '#D6EFEB', color: '#439287' }} >Line up</span>
        <span className="flex-grow border-b-2" style={{ borderColor: '#D6EFEB' }} />
      </div>
      <div>
        <table className="w-full m-4">
          <tbody>
            <tr className="font-bold" style={{ color: '#439287' }}>
              <td className="w-2/12">shirt</td>
              <td className="">name</td>
              <td className="">position</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Jádson</td>
              <td>Midfielder</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LineUp