import { useContext, useEffect, useState } from "react"
import { CardContext } from "../../Context/CardContext"
import {getApi} from "../../service";
import "./Card.css";

//import windImg from '../../assets/icons/wind.svg'
//import therImg from '../../assets/icons/thermometer.svg'

const Card = ({Card}) => {
    const { cards, setCards } = useContext(CardContext);    

    const [characters, setCharacters] = useState([]);

    const getApi = `https://rickandmortyapi.com/api/character`;

    const fetchCharacters = (url) => {
        fetch(url).then((Response) => Response.json()).then((data) => setCharacters(data.results)).catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchCharacters(getApi);
    }, [])



}

/* const Card = ({ card }) => {
    const { cards, setCards } = useContext(CardContext)
    const { id, name, image} = card

    const deleteCard = () => {
        setCards(cards.filter((card) => card.id !== id))
        localStorage.setItem('listaDeTarjetas', JSON.stringify(cards.filter((card) => card.id !== id)))
    }

    return (
        <div className="card-container">
            <p className="name">{name}</p>
            <div className="img-container">
                <img src={image === '' ? ('https://i0.wp.com/brochure3d.com/wp-content/plugins/elementor/assets/images/placeholder.png?w=750&ssl=1') : (image)} alt='imagen' />
            </div>
            <div className="card-content">
                 <img className='card-icon' src={require(`../../assets/icons/${weathercode}.svg`)} alt='weathercode'></img>
                <p className='my-card-temp'>
                    <img className='ther-img' src={therImg} alt="Ther" />
                    {Math.round(temperature)} &deg;C
                </p>
                <p className='my-card-wind'>
                    <img className='wind-img' src={windImg} alt="viento" />
                    {windspeed} km/h
                </p> 
                <div className="my-card-footer">
                    <p className="my-card-name">Name:     {name}</p>
                </div>

            </div>
            <button className="btn-delete" onClick={deleteCard}>eliminar</button>
        </div>
    )
} */

export default Card;