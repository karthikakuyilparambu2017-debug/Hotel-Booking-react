import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function RoomDetails(){
    const { id }=useParams();
    const Roomimage=[]
    return(
         <div className="details-container">
            <div className="details-card">
        <h1>Room Details</h1>
        {/* <img src={room.image} width={200}/> */}
        <h2>Room id{id}</h2>
        <p>Experience luxury and comfort in our well-furnished rooms.
                    Enjoy premium facilities including free WiFi, air conditioning,
                    television, room service, and a beautiful city view.
                </p>
                <Link to="/booking"><button className="bt">Book</button></Link> {" "}
                 
        </div>
        
        </div>
    );
}
export default RoomDetails;