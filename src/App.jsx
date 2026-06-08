import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componenets/Navbar";
import RoomDetails from "./pages/RoomDetails";
import Room from "./pages/Room";
import AddBooking from "./pages/AddBooking";
import { useEffect, useState } from "react";
import "./App.css";
import BookingHistory from "./pages/BookingHistory";
import Dashboard from "./pages/dashboard";
function App(){
    const [bookings,setBookings]=useState(()=>{
    const savedBooking=localStorage.getItem("bookings");
    return savedBooking? JSON.parse(savedBooking):[];
});
const [edit,setEditing]=useState(null);
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
            <Route path="/booking" element={<AddBooking bookings={bookings} setBookings={setBookings} edit={edit} setEditing={setEditing}/>}/>
            <Route path="/history" element={<BookingHistory bookings={bookings} setBookings={setBookings} onEdit={setEditing}/>}/>
            <Route path="/dashboard" element={<Dashboard bookings={bookings}/>}/>
        </Routes>
        
        </>
    );
}
export default App;