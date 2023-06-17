import { useInView } from 'react-intersection-observer'

type HistoryProps = {
  Scouter: string
  FirstFight: string
  Champion: string
}

const History = ({Scouter, FirstFight, Champion}: HistoryProps) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className="min-h-screen bg-blue-950 py-10" id="history">
      <div ref={myRef} className={myElementIsVisible ? "container mx-auto px-5 text-center opacity-100 blur-0 duration-[1s] delay-[250ms]" : "container mx-auto px-5 text-center opacity-0 blur-[5px] bg-transparent"}>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row  w-full pt-20">
          <div className="w-full lg:w-1/2">
            <img className="w-full h-[500px] object-cover border-4 border-yellow-400" src={Scouter} alt="Charles in a scouter" />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <h2 className="text-yellow-400 font-Lakki 2xl:text-9xl xl:text-8xl text-7xl">From Nothing...</h2>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row justify-center items-center py-5 lg:py-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <h2 className="text-yellow-400 font-Lakki 2xl:text-9xl xl:text-8xl text-7xl">To Something...</h2>
          </div>
          <div className="w-full lg:w-1/2">
            <img className="w-full h-[500px] object-cover border-4 border-yellow-400" src={FirstFight} alt="Charles in a scouter" />
          </div>
        </div>
        <div className="flex w-full flex-col-reverse lg:flex-row justify-center items-center pb-20">
          <div className="w-full lg:w-1/2">
            <img className="w-full h-[500px] object-cover object-left border-4 border-yellow-400" src={Champion} alt="Charles in a scouter" />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <h2 className="text-yellow-400 font-Lakki 2xl:text-9xl xl:text-8xl text-7xl">To Everything</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History