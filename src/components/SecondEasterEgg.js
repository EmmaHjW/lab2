import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import  done from "../pictures/done-and-done-spongebob.gif"

const myKey = "1337";

export const SecondEasterEgg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let keyboardInput = "";
  
   document.addEventListener("keydown", (key)=>{
   keyboardInput += key.key;

   if(myKey === keyboardInput){
      return(
       setIsModalOpen(true))
    }
    else{
       setTimeout(()=>{
         keyboardInput=("");
      },2000)
     }
   });

  return (
    <div>
      <Modal show={isModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"><h4>Hej....   Hejdå!</h4><img className="DONE" src= {done} alt="En gif"/></Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

