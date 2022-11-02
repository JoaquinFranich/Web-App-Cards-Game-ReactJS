//DEPS
import { useContext } from "react";
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext";
//import Card from "./Card";
import "./Cards.css";

const Cards = () => {
    const { cards } = useContext(CardContext);
    const pairOfCard = [...cards, ...cards];
    //pairOfCard.slice(0, 6);
    console.log("Cards.jsx");
    console.log(pairOfCard);

    /* for (let i = 0; i <= 5; i++) {
        pairOfCard.slice(0, 6);
        console.log(pairOfCard);
    } */
    return(
        <div className="container">
            {
                pairOfCard.map((card) => {
                    return (
                        <div className="col-3" key={card.id}>
                            <img src={card.image} className="card-img-top" alt={card.name}/>
                        {/* <div className="card">  
                            <div className="card-body">
                            <h5 className="card-title">Name: {cards[0].name}</h5>
                            <p className="card-text"><b>Status: {cards[0].status}</b> <br /><b>Species: {cards[0].species}</b></p>
                            </div>
                        </div> */}
                    </div>
                    )
                })
            }

        </div>
    )
}
export default Cards;