import { useState } from 'react';
import './App.css';
import Navbar from './component/Shared/Navbar';
import Footer from './component/Shared/Footer';
import Hero from './component/home/Hero';
import ProblemSalutions from './component/home/Problems';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <main className='font-nunito-sans bg-[url(/hero3.png)] min-h-svh bg-no-repeat bg-top imgsize'>
      <Navbar/>
      <Hero/>
      <ProblemSalutions/>
      <Footer/>

     </main>
    </>
  );
}

export default App;
