const Documentary = () => {
  return (
    <section className="bg-green-700 h-screen" id="documentary">
      <div className="container h-full px-5 py-20 flex flex-col justify-center items-center mx-auto">
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/DMUsfdibgCc" title="He Was Paralyzed by One Punch : Charles Oliveira Documentary" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <small className="text-yellow-400 text-xl font-Lakki mt-4">Video by <a href="https://www.youtube.com/watch?v=DMUsfdibgCc&ab_channel=PatrickGavia">Patrick Gavia</a></small>
      </div>
    </section>
  )
}

export default Documentary