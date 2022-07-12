import React from 'react'

function FootCards(props) {
  return (
    <div className='foot-card'>
        <p style={{color:'blue'}}> {props.title}</p>
        {props.children}
    </div>
  )
}

export default FootCards