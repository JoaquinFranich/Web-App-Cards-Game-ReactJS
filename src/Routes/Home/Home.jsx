import { useContext, useEffect } from "react";
import Cards from "../../components/Card/Cards";
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
            {/* <Cards cards={cards}></Cards> */}
        </div>
    )
}

export default Home;