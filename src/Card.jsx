import React from 'react';
import "./index.css"


function Card(props) {
  console.log()
  return (
    <>
    <div className='card'>
      <img src={props.img} alt="" />
      <h3>Nature {props.title} Image</h3>
    </div>
    </>
  )
}

export default Card