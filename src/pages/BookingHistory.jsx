import { useState } from "react";

function BookingHistory({bookings,setBookings}){
    const [search,setSearch]=useState("");

    
    const deleteBooking=(id)=>{setBookings(bookings.filter((booking)=>booking.id !==id)
    );
};
    const filterBooking=bookings.filter((booking)=>{
        return (
            booking.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            booking.no
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            booking.address
            .toLowerCase()
            .includes(search.toLowerCase())

        );
    });

    return(
        <div className="bookinghistory">
        <h1>Booking History</h1>
        <input type="text" placeholder="search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <hr/>
        {filterBooking.length===0?(
            <p>No Book Found</p>):
            (filterBooking.map((booking)=>(<div key={booking.id}>
                <h2>{booking.name}</h2>
                <p>Contact No:{booking.contact}</p>
                <p>Room no:{booking.no}</p>
                <p>Address:{booking.address}</p>
                <p>{booking.type}</p>
                <p>Checkin:{booking.checkin}</p>
                <p>Checkout:{booking.checkout}</p>

                <button className="btn1" onClick={()=>deleteBooking(booking.id)}>Delete</button> <hr/>
                </div>
               
            )))}
           
                </div>

    );

};
export default BookingHistory;