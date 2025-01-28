import Cards from './components/Cards';
import Footer from './components/Footer';
import './index.css'
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';

const App = () => {

  return (
    <>
      <div className='h-screen w-screen overflow-x-hidden'>
        <Home />
        <About />
        <Cards />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App