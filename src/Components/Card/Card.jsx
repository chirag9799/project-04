import React from 'react'

const Card = ({name, age, img}) => {

  return (
    <>
     <div className="card">
        <img src="/src/assets/hero.png" alt="" />
        <h1>{name} {age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, beatae!</p>
    </div>
    </>
  )
}

export default Card