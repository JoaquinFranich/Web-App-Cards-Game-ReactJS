//DEPS
import { useContext } from "react";
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext";
import "./Card.css";


const Card = () => {
    const { cards} = useContext(CardContext);
    console.log("Card.jsx");
    console.log(cards);


    return (
        <div className="row">
            
            <div className="col-3">
                <div className="card">
                    <img src={cards[0].image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {cards[0].name}</h5>
                        <p className="card-text"><b>Status: {cards[0].status}</b> <br /><b>Species: {cards[0].species}</b></p>
                    </div>
                </div>
                <div className="card">
                    <img src={cards[1].image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {cards[1].name}</h5>
                        <p className="card-text"><b>Status: {cards[1].status}</b> <br /><b>Species: {cards[1].species}</b></p>
                    </div>
                </div>
                <div className="card">
                    <img src={cards[2].image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {cards[2].name}</h5>
                        <p className="card-text"><b>Status: {cards[2].status}</b> <br /><b>Species: {cards[2].species}</b></p>
                    </div>
                </div>
                <div className="card">
                    <img src={cards[3].image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {cards[3].name}</h5>
                        <p className="card-text"><b>Status: {cards[3].status}</b> <br /><b>Species: {cards[3].species}</b></p>
                    </div>
                </div>
                <div className="card">
                    <img src={cards[4].image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {cards[4].name}</h5>
                        <p className="card-text"><b>Status: {cards[4].status}</b> <br /><b>Species: {cards[4].species}</b></p>
                    </div>
                </div>
            </div>
        </div>       
    )



}

export default Card;