
import './App.scss';
import Header from './component/Header';
import Main from './component/main/Main';
import{BrowserRouter}from "react-router-dom"
import Scrol from './scrol/Scrol';
import { motion } from "framer-motion"
import { useState } from 'react';


function App() {
  const [dark,setDark] = useState(false)
  return (
    <div className={dark?"App dark":"App"}>
      < BrowserRouter>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true, amount: 0.3 }}>
      
         </motion.div>

        <Header />
        <Main night = {setDark} sun ={dark}/>
        <Scrol />
      </BrowserRouter>
    </div>
  );
}

export default App;
