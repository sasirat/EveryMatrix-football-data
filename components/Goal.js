const Goal = () => {
  return (
    <div className="mb-8">
      <p className="font-bold mb-4" style={{ color: '#439287' }}>Goal</p>
      <table className="w-full">
        <tbody>
          <tr className="font-bold" style={{ color: '#439287', backgroundColor: '#F2FFFD' }}>
            <td className="w-2/12 px-4">minute</td>
            <td className="">scorer</td>
            <td className="">assist</td>
            <td className="">Team</td>
          </tr>
          <tr>
            <td className="px-4">16</td>
            <td>Nicolás López</td>
            <td>Rodrigo Dourado</td>
            <td>SC Internacional</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Goal