//DEPS
import { useContext } from "react"
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext"
import "./Card.css";


const Card = () => {
    const { cards } = useContext(CardContext); 
    console.log("Card.jsx");
    console.log(cards);


    return (
        <div className="row" key={cards.id}>
            <div className="col-3">
            </div>
            <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {cards.name}</h5>
                        <p className="card-text"><b>Status:</b> <br /><b>Species</b></p>
                    </div>
                </div>
        </div>       
    )



}

export default Card;