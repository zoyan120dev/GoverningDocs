
import './App.css';
import Navbar from './component/Shared/Navbar';
import Footer from './component/Shared/Footer';
import Hero from './component/home/Hero';
import ProblemSalutions from './component/home/Problems';
import Rivew from './component/home/Rivew';
import Portners from './component/home/Portners';
import Faq from './component/home/Faq';
import Nodearea from './component/home/Node';
function App() {
  return (
    <>
     <main className='font-nunito-sans bg-[url(/hero3.png)] min-h-svh bg-no-repeat bg-top imgsize'>
      <Navbar/>
      <Hero/>
      <ProblemSalutions/>
      <Rivew/>
      <Portners/>
      <Faq/>
      <Nodearea/>
      <Footer/>

     </main>
    </>
  );
}

export default App;
