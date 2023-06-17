import { useInView } from 'react-intersection-observer'

type HomeProps = {
  Image: string
}

const Home = ({Image}: HomeProps) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className="bg-green-700 relative h-screen">
      <div ref={myRef} className={myElementIsVisible ? "container p-5 mx-auto w-full h-full flex flex-col justify-center items-center opacity-100 blur-0 duration-[1s] delay-[250ms]": "container p-5 mx-auto w-full h-full flex flex-col justify-center items-center opacity-0 blur-[5px] bg-transparent"}>
        <h1 className="2xl:text-[10rem] xl:text-9xl sm:text-8xl text-7xl leading-none text-yellow-400 font-Lakki text-center">Charles Do Bronx</h1>
        <h3 className="2xl:text-6xl xl:text-5xl sm:text-4xl text-2xl text-yellow-400 text-center font-Lakki">former UFC Lightweight Champion</h3>
      </div>
      <img ref={myRef} className={myElementIsVisible ? "xl:w-80 sm:w-60 xs:w-52 w-40 xl:left left-1/2 -translate-x-1/2 absolute bottom-0 opacity-100 blur-0 duration-[1s] delay-[600ms]" : "xl:w-80 sm:w-60 xs:w-52 w-40 xl:left left-1/2 -translate-x-1/2 absolute bottom-0 opacity-0 blur-[5px] bg-transparent"} src={Image} alt="Charles Do Bronx" />
    </section>
  )
}

export default Home