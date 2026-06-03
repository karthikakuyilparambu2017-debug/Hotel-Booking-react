import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link> | {" "}
             <Link to="/rooms">Room</Link> | {" "}
             <Link to="/booking">Room Booking</Link> | {" "}
             <Link to="/history">History</Link> | {" "}
        </nav>
    );
}
export default Navbar;