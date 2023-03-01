import React, {useState} from "react"
import { Container } from "react-bootstrap"
import './Kontakt.css';
import './All.css';
import facebook from '../pictures/fa.png';
import linkedin from '../pictures/li.png';
import instagram from '../pictures/in.png';
 

export const KontaktComponent = () => {

    return (
        <Container>
          
       <section className="container1">
       
        <div className="group-6">
            <div className="contact">
                <h3 className="title">Kontaktuppgifter</h3>
                <div className="contact_item">
                <h4 className="under_title1">Namn:</h4>
                <p className="description">Emma Hjalmarsson Wahlström</p>
                <h4 className="under_title1">Personnummer:</h4>
                <p className="description">1990.03.28</p>
                <h4 className="under_title1">Mobil:</h4>
                <p className="description">073-843 54 59</p>
                <h4 className="under_title1">Adress:</h4>
                <p className="description">Nybyvägen 38, Vännäs</p>
                <h4 className="under_title1">Email:</h4>
                <p className="description">ewahlstrom90@gmail.com</p>
            </div>
            
        </div>
        </div>
        <div className="group-7">
            <div className="social_media">
                <a href="https://www.facebook.com/emma.hjalmarssonwahlstrom" className="fa"> <img  className="ikon" src = {facebook} img/></a>
                <br></br>
                <a href="https://www.linkedin.com/feed/" className="li"><img className="ikon" src = {linkedin} img/></a>
                <br></br>
                <a href="https://www.instagram.com/emmakatarina.hw/" className="in"><img  className="ikon" src = {instagram} img/></a>
            </div>
        </div>
        <footer>© 2023 Emma Hjalmarsson Wahlström CV</footer>
    </section>
       </Container>
            )
}