// import HomeBanner from "./HomeBanner";
import { useNavigate ,Link } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/Login'); 
        } 

        const clickHandlerr = (e) => {
            e.preventDefault();
            navigate('/Add'); 
            } 
    

return(
    <header className="topNav">
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
                <Link href="#" className="navbar-brand" to="/">
                    <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />

                </Link>

                <div className="navbar">
                    <form className="d-flex"role="search">
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <button className="btn btn-danger "  onClick={clickHandler}>Signin</button>
                        <button className="btn btn-danger " style={{marginLeft:"15px"}} onClick={clickHandlerr}>Add movies</button>
                    </form>
                </div>
               
            </div>
        </nav>
    </header>
)
}

export default Header;