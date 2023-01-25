import React from 'react';

import "../sass/Project.scss"
import PROJECT_DATA from '../data/PROJECT_DATA';
import Aos from 'aos';
import ProjectItems from './ProjectItems';

const Project = () => {
    Aos.init();
    return (
        <div className='project' id='project' >
            <div className='project-container'>
                <div className='project-header'>
                    <h1>PROJECTS</h1>
                </div>
                {
                    PROJECT_DATA.map((items, index) => (
                        <div data-aos="fade-up" key={index}>
                            <ProjectItems items = {items}></ProjectItems>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Project;
