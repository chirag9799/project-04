import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'

const App = () => {
  return (
    <>
    <div className='parent'>
    <Card name = 'aman sharma' age={19}/>
    <Card  name ='divya' age={19}/>
    <Card name = 'dipti'/>
    <Card name ='chirag'/>
</div>
    </>

  )
}

export default App