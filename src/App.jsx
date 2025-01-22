import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Brands from './pages/Brands'
import Footer from './components/Footer'
import TalkBtn from './components/TalkBtn'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Brands />
      <Footer />
      <TalkBtn />
    </>
  )
}

export default App
