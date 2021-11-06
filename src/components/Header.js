import { Link } from "react-router-dom"
import {Button} from "../Styles"

const Header =props => {
    const navStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "rgb(129,83,0)",
        border: "3px solid black",
        padding: "8px",
        height: "100%",
        width: "150px",
        margin: "auto",
        position: "fixed",
        top: "0px",
        overflowX: "hidden",
    }
    
    return <>
        <header>
            <nav style={navStyle}>
                <Link to="/">
                    <Button>HOME</Button>
                </Link>
                <Link to="/about">
                    <Button>ABOUT</Button>
                </Link>
                <Link to="/projects">
                    <Button>PROJECTS</Button>
                </Link>
            </nav>
        </header>
    </>
}

export default Header