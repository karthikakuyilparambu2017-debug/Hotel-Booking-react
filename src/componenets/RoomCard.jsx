import { Link } from "react-router-dom";
function RoomCard({room}){
    return(
        <div  className="room-card">
            <img src={room.image} width={200}/>
            <h2>{room.type}</h2>
            <p>Room No:{room.no}</p>
            <p>Room Price: ₹{room.price}</p>
            <Link to={`/room/${room.id}`} className="details-btn">View Details </Link>
            <hr />
        </div>
    );
}
export default RoomCard;