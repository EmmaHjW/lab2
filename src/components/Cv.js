import React from "react"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import mult from "../pictures/multitask.jpg"
import './Cv.css';
import './All.css';


export const CvComponent = () => {
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("./MyCv.json")
        .then(res => res.json())
        .then(
            (result)=>{
                setIsLoaded(true)
                setItems(result)
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
            <Container>
                <section className="container1">
                <div className="row align-items-center" id="columnLeft">    
                    <img className="multitask" src= {mult} alt="multitask pic" />
                </div>
                <div className="columnRight">
                {items.Anställningar.map(item =>(
                        <div className="col">
                        <h2 className="FirstTitle2">{item.rubrik}</h2>
                    <li className="description" key={item.id}>
                         {item.arbetsplats} {item.anställningsår} {item.titel}
                    </li>
                    </div>
                ))}
                 {items.Utbildningar.map(item =>(
                        <div className="col">
                        <h2 className="FirstTitle2">{item.rubrik}</h2>
                    <li className="description" key={item.id}>
                         {item.utbildning} {item.skola} {item.år}
                    </li>
                    </div>
                ))}
                {items.Färdigheter.map(item =>(
                        <div className="col">
                        <h2 className="FirstTitle2">{item.rubrik}</h2>
                    <li className="description" key={item.id}>
                         {item.Ob} {item.Pr} {item.Pro} {item.We} {item.Web} {item.De} {item.Ai} {item.Dev} 
                         {item.Kl} {item.Fä} {item.Fäb} {item.Kl} {item.Ku} {item.Fö}
                    </li>
                    </div>
                ))}
                </div>
                </section>
            </Container>
        );
    }
}