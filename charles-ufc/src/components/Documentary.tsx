import { useInView } from 'react-intersection-observer'

const Documentary = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className="bg-green-700 h-screen py-10" id="documentary">
      <div ref={myRef} className={myElementIsVisible ? "container h-full px-5 py-20 flex flex-col justify-center items-center mx-auto opacity-100 blur-0 duration-[1s] delay-[250ms]" : "container h-full px-5 py-20 flex flex-col justify-center items-center mx-auto opacity-0 blur-[5px] bg-transparent"}>
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/pSLBAQVQaYY" title="CHARLES OLIVEIRA - THE MOVIE (Documentary)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <small className="text-yellow-400 text-xl font-Lakki mt-4">Video by <a href="https://www.youtube.com/watch?v=DMUsfdibgCc&ab_channel=PatrickGavia">MMA Documentaries</a></small>
      </div>
    </section>
  )
}

export default Documentary