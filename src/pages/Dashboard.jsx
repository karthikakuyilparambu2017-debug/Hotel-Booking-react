function Dashboard({bookings}){
    const totalRooms = 13;
    const totalBookings = bookings.length;
    const bookedRooms = bookings.length;
    const available = totalRooms - bookedRooms;

    return(
        <div className="dash">
            <div className="total">
                <h2>Total Bookings</h2>
                <p>{totalBookings}</p>
            </div>
            <div>
                <h2>Booked Rooms</h2>
                <p>{bookedRooms}</p>
            </div>
            <div>
                <h2>Available Rooms</h2>
                <p>{available}</p>
            </div>
            <div>
                <h3>Total Rooms</h3>
                <p>{totalRooms}</p>
            </div>
        </div>

    );
}
export default Dashboard;