import React, { useState } from 'react'

const CardUsers = ({randomUsers, randomColors, getRandomAll}) => {
    

    const objectStyle ={
        color:randomColors
    }

    const objectBgStyle = {
        backgroundColor:randomColors
    }

return (
    

    <div className='card' style={objectStyle}>
        <img src={randomUsers.picture.large} alt="" />
        <h2 className='card-name'>{`${randomUsers.name.title} ${randomUsers.name.first} ${randomUsers.name.last}`}</h2>
        <p><b className='card_item'>Gender:</b>{randomUsers.gender}</p>
        <p><b className='card_item'>Email:</b>{randomUsers.email}</p>
        <button onClick={getRandomAll}className="card_btn"style={objectBgStyle}>&gt;</button>
    </div>
    
    )


}

export default CardUsers