import { useState } from 'react'
import './Projects.css'

function Projects() {
    const [projects] = useState([
        {
            title:'',
            description:'Stay tuned for future projects.',
            imageUrl: "https://placehold.co/600x400?text=Projects"
        },
        {
            title:'Weather App',
            description:'A weather app showing current forecasts using APIs',
            imageUrl:"https://placehold.co/600x400?text=Weather+App"
        }
        // add more projects here
    ]);


    return (
     <section>
        <h2> My Projects </h2>

        {projects.map((project, index ) => (
            <div key={index}>
                <h3>{project.title}</h3>
            <div  className='project-card'>
                <p>{project.description}</p>
                <img src={project.imageUrl} className='project-img' />
            </div>
            </div>
        ))}

     </section>
    );

}





export default Projects; 