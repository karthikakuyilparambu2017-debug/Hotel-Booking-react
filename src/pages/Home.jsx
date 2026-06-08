import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="home">
            <h1>HOTEL BOOKING SYSTEM</h1>
            <h2>Welcome to our Hotel</h2>
            <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Hotel"  /><br/><br/>
            <p className="home-description">
    Welcome to our Hotel Room Booking System, your perfect destination for comfort,
    luxury, and convenience. We offer a wide range of rooms including Luxury,
    Deluxe, and Suite accommodations designed to meet the needs of every traveler.
    Our rooms are equipped with modern amenities such as free Wi-Fi, air
    conditioning, room service, and comfortable interiors to ensure a pleasant
    stay. Whether you are traveling for business, family vacations, or special
    occasions, our hotel provides a relaxing environment with excellent customer
    service. Browse available rooms, view detailed information, and book your
    preferred room easily through our online booking platform.
</p>
             <Link  to="/rooms"><button className="b">Book Now</button></Link>  {" "}
<footer className="hotel-footer">
    <p> kongad, Palakkad, Kerala</p>
    <p> +91 98765 43210 |  WhatsApp: +91 98765 43210</p>
    <p> Instagram: @grandluxuryhotel</p>
    <p>info@grandluxuryhotel.com</p>
</footer>
        </div>

    );
}
export default Home;