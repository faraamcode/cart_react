import React, {useEffect} from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {getTotal, cart} = useGlobalContext()
  useEffect(()=>{
    getTotal();
  },[])
  useEffect(()=>{
    getTotal();
  },[cart])
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
