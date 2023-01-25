import React from 'react'

import "../sass/ProjectItems.scss" 

function ProjectItems({items}) {
  return (
    <div className='projectItems'>
        <div className='projectItems-container'>
            <div className='projectItems-container__image'
              onClick = {() => window.open(items.link, '_blank').focus()}
            >
                <img src={require("../asset/image/" + items.image + ".png")} alt={items.image} />
            </div>
            <div className='project-info'>
              <div className='projectItems-container__title'>
                <h1>{items.title.toUpperCase()}</h1>
                <p href={items.link}
                  onClick = {() => window.open(items.link, '_blank').focus()}
                >View Website</p>
              </div>
              <div className='projectItems-container-btn'>
                {items.tech.map((value, index) => (
                  <div className='projectItems-container-btn__tech' key={index}>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              <div className='projectItems-container__script'>
                <p>{items.desc}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectItems
