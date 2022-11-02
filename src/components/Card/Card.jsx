//DEPS
import { useContext } from "react";
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext";
import "./Card.css";


const Card = () => {
    const { cards } = useContext(CardContext);
    console.log("Card.jsx");
    console.log(cards);


    return (
        <div className="row">
        {
            cards.map(card => {
                return(
                    <div className="col-3" key={card.id}>
                        <div className="card">
                            <img src={card.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Name: {card.name}</h5>
                            <p className="card-text"><b>Status: {card.status}</b> <br /><b>Species: {card.species}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </div> 
    )



}

export default Card;