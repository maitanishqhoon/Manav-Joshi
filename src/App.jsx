import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Brands from './pages/Brands'
import Counter from './components/Footer'
import TalkBtn from './components/TalkBtn'
import Gallery from './pages/Gallery'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Work />
      <Brands />
      <Counter value={100} />
      <TalkBtn />
    </>
  )
}

export default App
