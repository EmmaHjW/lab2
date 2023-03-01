import React from "react"
import { Container } from "react-bootstrap"
import emma from "../pictures/Emma1.JPG"
import './Home.css';
import './All.css'; 


export const HomeComponent = () => {
    return (
        <Container>
            <section className="container1">
                <div className="profile">
                    <div className="profile_picture">
                        <figure className="profile_profileImg">
                             <img className="Emma" src= {emma} alt="En bild på mig"/> 
                        </figure>
                        <div>
                            <div className="profile_name">
                                <p className="FirstTitle">Emma</p>
                                <p className="SecondTitle">Hjalmarsson Wahlström</p>
                            </div>
                            <p className="profile">Student på Edugrade, utbildning Systemutvecklare .NET</p>
                            <p className="description">
                                Efter 15år i frisörbranchen klev jag av och bestämde mig för att omskola mig.
                                Vilket slutade upp i IT branchen, vilket är långt ifrån mitt tidigare liv.
                                Bästa beslut jag tagit.
                            </p>
                        </div>
                        <br></br>
                        <footer>© 2023 Emma Hjalmarsson Wahlström CV</footer>
                        
                    </div>
                    
                </div>
                
            </section>
            
        </Container>
    )
}
