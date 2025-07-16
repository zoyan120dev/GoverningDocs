import { useState } from 'react';
import './App.css';
import Navbar from './component/Shared/Navbar';
import Footer from './component/Shared/Footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <main className='bg-sky-400/50'>
      <Navbar/>
      <div className='min-h-[50svh]'> </div>
         <Footer/>
     </main>
    </>
  );
}

export default App;
