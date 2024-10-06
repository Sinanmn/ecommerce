
import './App.css'
import Navbar from './components/Navber';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';

function App() {

  return (
   <div>
    <Navbar></Navbar>
    <div className='-z-50'>
    <Hero></Hero>
    <h2 className="text-center text-3xl mt-12">Featured Products</h2>
    <FeaturedProducts></FeaturedProducts>
    </div>
   

   </div>
  )
}

export default App
