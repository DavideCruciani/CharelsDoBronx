type HistoryProps = {
  Scouter: string
  FirstFight: string
  Champion: string
}

const History = ({Scouter, FirstFight, Champion}: HistoryProps) => {
  return (
    <section className="min-h-screen bg-blue-900" id="history">
      <div className="container mx-auto px-5">
        <div className="flex w-full pb-10 pt-20">
          <div className="w-1/2">
            <img className="border-4 border-yellow-400" src={Scouter} alt="Charles in a scouter" />
          </div>
          <div className="w-1/2 flex items-center text-center p-4">
            <h2 className="text-yellow-400 font-Lakki text-9xl">From Nothing to...</h2>
          </div>
        </div>
        <div className="flex w-full py-10">
        <div className="w-1/2 flex items-center text-center p-4">
            <h2 className="text-yellow-400 font-Lakki text-9xl">Something to...</h2>
          </div>
          <div className="w-1/2">
            <img className="border-4 border-yellow-400" src={FirstFight} alt="Charles in a scouter" />
          </div>
        </div>
        <div className="flex w-full pt-10 pb-20">
          <div className="w-1/2">
            <img className="border-4 border-yellow-400 object-cover" src={Champion} alt="Charles in a scouter" />
          </div>
          <div className="w-1/2 flex items-center text-center p-4">
            <h2 className="text-yellow-400 font-Lakki text-9xl">To Everything</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History