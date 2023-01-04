import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import { CardContext } from "../../Context/CardContext";
import "./Home.css";

const Home = () => {



    return(
        <div className="main-container">
            <h1>Home</h1>
            <h2>Let's play a game with all this Characters!</h2>
            <Card/>
        </div>
    )
}

export default Home;