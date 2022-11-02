import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import { CardContext } from "../../Context/CardContext";
import "./Home.css";
//import { UserContext } from "../../context/UserContext";

const Home = () => {

    const {cards, setCards} = useContext(CardContext);
    //const {currentUser} = useContext(UserContext);

    /* useEffect(() =>{
        if (currentUser) {
            if (JSON.parse(localStorage.getItem('listaDeTarjetas')) === null) {
                console.log('no hay tarjetas: null');
            } else {
                setCards(JSON.parse(localStorage.getItem('listaDeTarjetas')));
            }
        } else {
            setCards([]);
        }
    // eslint-disable-next-line
    },[currentUser]) */


    return(
        <div className="main-container">
            <h1>Home</h1>
            <h2>Let's play a game with all this Characters!</h2>
            <Card/>
        </div>
    )
}

export default Home;