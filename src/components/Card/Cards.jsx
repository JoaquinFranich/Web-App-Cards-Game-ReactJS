//DEPS
import { useContext } from "react";
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext";
//import Card from "./Card";
import "./Cards.css";

const Cards = () => {
    const { cards } = useContext(CardContext);
    console.log("Cards.jsx");
    return(
        <div className="grid">
            <div className="col-3" key={cards[0].id}>
                        <div className="card">
                            <img src={cards[0].image} className="card-img-top" alt="..."/>
                            {/* <div className="card-body">
                            <h5 className="card-title">Name: {cards[0].name}</h5>
                            <p className="card-text"><b>Status: {cards[0].status}</b> <br /><b>Species: {cards[0].species}</b></p>
                            </div> */}
                        </div>
                    </div>
        </div>
    )
}
export default Cards;