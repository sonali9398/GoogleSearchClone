import React, { useState } from 'react';
import {Navbar} from './component/Navbar';
import {Routess} from './component/Routess';
import {Footer} from './component/Footer';



const App = () => {

  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? 'dark' : ''}>
      <div className='bg-gray-500 dack:bg-gray-900 dark:text-gray-200 min-h-screen'>
          <Navbar dark={dark} setDark={setDark}/>
          <Routess/>
          <Footer/>
      </div>
    </div>
  )
}

export default App;