import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="home">
            <h1>HOTEL BOOKING SYSTEM</h1>
            <h2>Welcome to our Hotel</h2>
            <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Hotel"  /><br/><br/>
             <Link  to="/rooms"><button className="b">Book Now</button></Link>  {" "}
        </div>

    );
}
export default Home;