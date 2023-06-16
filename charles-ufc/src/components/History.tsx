type HistoryProps = {
  Scouter: string
  FirstFight: string
  Champion: string
}

const History = ({Scouter, FirstFight, Champion}: HistoryProps) => {
  return (
    <section className="min-h-screen bg-blue-900" id="history">
      <div className="container mx-auto px-5 text-center">
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row  w-full pb-10 pt-20">
          <div className="w-full lg:w-1/2">
            <img className="w-full h-[500px] object-cover border-4 border-yellow-400" src={Scouter} alt="Charles in a scouter" />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <h2 className="text-yellow-400 font-Lakki xl:text-9xl sm:text-8xl text-6xl">From Nothing...</h2>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row justify-center items-center py-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <h2 className="text-yellow-400 font-Lakki xl:text-9xl sm:text-8xl text-6xl">To Something...</h2>
          </div>
          <div className="w-full lg:w-1/2">
            <img className="w-full h-[500px] object-cover border-4 border-yellow-400" src={FirstFight} alt="Charles in a scouter" />
          </div>
        </div>
        <div className="flex w-full flex-col-reverse lg:flex-row justify-center items-center pt-10 pb-20">
          <div className="w-full lg:w-1/2">
            <img className="w-full h-[500px] object-cove border-4 border-yellow-400 object-cover" src={Champion} alt="Charles in a scouter" />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <h2 className="text-yellow-400 font-Lakki xl:text-9xl sm:text-8xl text-6xl">To Everything</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History