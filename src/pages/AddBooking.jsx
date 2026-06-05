import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddBooking({bookings,setBookings}){
    const [name,setName]=useState("");
    const [no,setRoom]=useState("");
    const [contact,setContact]=useState("");
    const [address,setAddress]=useState("");
    const [checkin,setCheckin]=useState("");
    const [checkout,setCheckout]=useState("");
    const [type,setType]=useState("");
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
          if(!name.trim()){
            alert("Please enter your name");
            return;
        }
        if(!no.trim()){
            alert("Please enter room type");
            return;
        }
        if(!contact.trim()){
            alert("Please enter your contact number");
            return;
        }
        if(!type.trim()){
            alert("Please enter Room Type");
            return;
        }
        if(!checkin){
            alert("Please enter checkin date");
            return;
        }
        if(!checkout){
            alert("Please enter checkout date");
            return;
        }

         const roomExict=bookings.some(
            (booking)=>booking.no==no.trim()
        );
        if(roomExict){
            alert("Room already Booked");
            return;
        }
        const newBooking={
            id: Date.now(),
            name:name.trim(),
            no:no.trim(),
            contact:contact.trim(),
            address:address.trim(),
            type:type.trim(),
            checkin,
            checkout,
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
           <input type="text" placeholder="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
           <input type="text" placeholder="Enter your number" value={contact}
            onChange={(e)=>setContact(e.target.value)}/>
            <input type="text" placeholder="Room no" value={no}
           onChange={(e)=>setRoom(e.target.value)} />
           <input type="text" placeholder="Room Type" value={type} onChange={(e)=>setType(e.target.value)}/>
           <input type="date" placeholder="Checkin Date" value={checkin} onChange={(e)=>setCheckin(e.target.value)}/>
           <input type="date" placeholder="Checkout Date" value={checkout} onChange={(e)=>setCheckout(e.target.value)}/>
           <br /><br />

           <button>BOOK</button>
           </form>
        </div>
        </div>
    );
}
export default AddBooking;