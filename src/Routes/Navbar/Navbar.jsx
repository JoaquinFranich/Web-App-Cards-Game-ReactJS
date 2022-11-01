//import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
//import { UserContext } from "../../context/UserContext";
import "./Navbar.css";
//import { FcLandscape } from "react-icons/fc";
//import { FaHome } from "react-icons/fa";

const Navbar = () => {

    /* const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        if (userStored) {
            setCurrentUser(JSON.parse(userStored))
        }
        // eslint-disable-next-line
    }, [])

    const handleSignOut = () => {
        setCurrentUser(null);
        localStorage.setItem('currentUser', null)
    } */

    return (
        <>
        <div className="container">
            <div className="alert alert-succes">
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <h1>Rick & Morty</h1>
                </Link>
                <div className="navigation-links">
                    <Link className="home" to='/'>
                        Home
                    </Link>
                    <Link className="game" to="../Game">Game</Link>
                </div>
            </div>
            <Outlet></Outlet>
            </div>
        </div>
            
        </>
    )
}

export default Navbar;
