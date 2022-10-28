//DEPS
import { useContext, useEffect, useState } from "react"
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext"
import {getApi} from "../../service";
import "./Card.css";

//import windImg from '../../assets/icons/wind.svg'
//import therImg from '../../assets/icons/thermometer.svg'

const Card = () => {
    const { cards, setCards } = useContext(CardContext); 
    console.log("Card.jsx");
    console.log(cards);


    return (
        <div className="row">
            <div className="col-3">
            </div>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
            </div>       
    )



}

export default Card;