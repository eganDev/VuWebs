import React from 'react'

import "../sass/Languages.scss"

export default function Languages({value}) {   
  return (
    <div className='Languages'>
        {
            value.tech.map((item, index) => (
                <p className='Languages-style' key={index}>{item}</p>
            ))
        }
    </div>
  )
}
