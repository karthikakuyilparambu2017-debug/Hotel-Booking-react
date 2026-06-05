import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componenets/Navbar";
import RoomDetails from "./pages/RoomDetails";
import Room from "./pages/Room";
import AddBooking from "./pages/AddBooking";
import { useEffect, useState } from "react";
import "./App.css";
import BookingHistory from "./pages/BookingHistory";
function App(){
    const [bookings,setBookings]=useState(()=>{
    const savedBooking=localStorage.getItem("bookings");
    return savedBooking? JSON.parse(savedBooking):[];
});
useEffect(()=>{
    localStorage.setItem("bookings",JSON.stringify(bookings)
);
}) 


    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rooms" element={<Room/>}/>
            <Route path="/room/:id" element={<RoomDetails />}/>
            <Route path="/booking" element={<AddBooking bookings={bookings} setBookings={setBookings}/>}/>
            <Route path="/history" element={<BookingHistory bookings={bookings} setBookings={setBookings}/>}/>
        </Routes>
        
        </>
    );
}
export default App;