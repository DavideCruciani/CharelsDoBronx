/* COMPONENTS */
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import History from "./components/History"
import Documentary from "./components/Documentary"
/* IMAGES */
import Logo from "./assets/ufc-yellow-logo.png"
import Charles from "./assets/CharlesOilPaint.png"
import Scouter from "./assets/charles-scouter-op.jpg"
import FirstFight from "./assets/charles-first-op.jpg"
import Champion from "./assets/charles-champion-op.jpg"


function App() {
  return (
    <>
      <Navbar Logo={Logo} />
      <Home Image={Charles} />
      <History Scouter={Scouter} FirstFight={FirstFight} Champion={Champion} />
      <Documentary />
    </>
  )
}

export default App
