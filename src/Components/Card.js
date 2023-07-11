import React from 'react'

const Card = ({cardTitle, cardDescription, imageUrl}) => {
  return (
    <div className='card'>
        <img src='{imageUrl}'/>
        <h2 className='titleCard'>{cardTitle}</h2>
        <p className='descriptionCard'>{cardDescription}</p>
    </div>
  )
}

export default Card