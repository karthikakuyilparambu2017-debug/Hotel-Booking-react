function BookingHistory({bookings,setBookings}){
    const deleteBooking=(id)=>{setBookings(bookings.filter((booking)=>booking.id !==id)
    );
};
    return(
        <div className="bookinghistory">
        <h1>Booking History</h1>
        <hr/>
        {bookings.length===0?(<p>No Book Found</p>):
            (bookings.map((booking)=>(<div key={booking.id}>
                <h2>{booking.name}</h2>
                <p>Contact No:{booking.contact}</p>
                <p>Room:{booking.room}</p>

                <button className="btn1" onClick={()=>deleteBooking(booking.id)}>Delete</button>
                </div>
            
            )))}
            <hr/>
                </div>

    );

}
export default BookingHistory;