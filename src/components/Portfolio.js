import React, { useState, useEffect } from "react"
// import {From, Card, Image, Icon} from 'semantic-ui-react';
import { Card, Container } from "react-bootstrap"
import './Portfolio.css';
import './All.css';


export const PortfolioComponent = () => {
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
    fetch(`https://api.github.com/users/EmmaHjW/repos?page=1&per_page=10&sort=updated`)
        .then(res => res.json())
        .then(
            (result)=>{
                setIsLoaded(true)
                setProjects(result)
            },
            (error) =>{
                setIsLoaded(true)
                setError(error)
            }
        )
     },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    else if(!isloaded){
        return <div>Loading ...</div>
    }
    else{
        return(
            <section className="container2">
            <div className="row row-cols-1 gy-3 m-5 row-cols-md-2  row-cols-lg-4 justify-content-center">              
            { 
            projects && projects.map(project => (
                <Card className="kort1 m-2" key={project.id}>                   
                    <div className="d-flex align-items-center">                    
                        <img className="avatar w-25 rounded-circle"  src={project.owner.avatar_url} />                    
                            <div className="m-3">                        
                                <h4 className="rub fs-3"> {project.owner.login}</h4>                        
                                    <p className="fs-5 mb-1">{project.name}</p>                        
                                        {project.public ? <p className="rounded py-1 px-2 bg-danger d-inline-block">Private</p> :
                                            <p className="public rounded fs-5 d-inline-block">Public</p>}
                            </div>                    
                    </div>                    
                        <div className="d-flex flex-wrap align-items-center justify-content-between">              
                            <a className="underline text-sm" href={project.html_url} target="_blank" rel="noopener noreferrer">View repo</a>              
                                <ul className="list-unstyled text-left">                
                                    <li>{project.stargazers_count.toLocaleString()} stars</li>                
                                        <li>{project.watchers_count.toLocaleString()} watchers</li>              
                                </ul>                
                        </div>                    
                            <div>{project.language}
                            </div>                    
                </Card>))
            }
            </div>
            </section>
        )
    }
}

