import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddBooking({bookings,setBookings}){
    const [name,setName]=useState("");
    const [room,setRoom]=useState("");
    const [contact,setContact]=useState("")
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newBooking={
            id: Date.now(),
            name,
            room,
            contact,
        };
        setBookings([...bookings,newBooking]);
        navigate("/History");
    };
    return(
        <div className="booking-container">
            <div className="booking-card">

            <h1>Book Room</h1>
           <form onSubmit={handleSubmit}>
           <input type="text" placeholder="customer name" value={name}
           onChange={(e)=>setName(e.target.value)} />
           <br /><br />
           <input type="number" placeholder="Enter your number" value={contact}
            onChange={(e)=>setContact(e.target.value)}/>
            <input type="text" placeholder="Room type" value={room}
           onChange={(e)=>setRoom(e.target.value)} />

           <br /><br />

           <button>BOOK</button>
           </form>
        </div>
        </div>
    );
}
export default AddBooking;