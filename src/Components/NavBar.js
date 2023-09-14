
import React,{useState} from "react";
import '../CSSpart/style.css';
import HomeUrl from "./HomeUrl";
import Students from "./Students";
import ContactUsUrl from "./ContactUsUrl";
import { Routes, Route, NavLink } from "react-router-dom";
import Store from "../Store/Store";
import EditFile from "./EditFile";
import AddData from "./AddData";

function NavBar(){
    const [data2, setStuData] = useState([
        {name: "Jony", age: 26, course:"MERN", batch:"Octuber" },
        {name: "Deepak", age: 25, course:"MERN", batch:"November" },
        {name: "Birendra", age: 28, course:"MERN", batch:"Octuber" },
        {name: "Ram", age: 36, course:"MERN", batch:"September" },
        {name: "Shyam", age: 27, course:"MERN", batch:"September" },
        {name: "Rohit", age: 56, course:"MERN", batch:"January" },
        {name: "Virat", age: 30, course:"MERN", batch:"Octuber" },
        {name: "Shera", age: 25, course:"MERN", batch:"March" }
    ])
    console.log(data2);
    return(
        <>
            <div className="navbar">
                        <div className="navbar2">
                            <NavLink style={({isActive}) => ({color : isActive ? "blue" : "brown"})} className="Link" to="/">Home</NavLink>
                            <NavLink style={({isActive}) => ({color : isActive ? "blue" : "brown"})} className="Link" to="/Students">Students</NavLink>
                            <NavLink style={({isActive}) => ({color : isActive ? "blue" : "brown"})} className="Link" to="/ContactUsUrl">Contact Us</NavLink>
                        </div>  
            </div>
                        <Routes>
                            <Route path="/" element={<HomeUrl/>} />
                            <Route path="/Students" element={
                                <Store.Provider value={{data : data2, datafunc : setStuData}}>
                                        <Students />
                                </Store.Provider>
                             } />   
                            <Route path="/ContactUsUrl" element={<ContactUsUrl/>} />
                            <Route path="/EditFile" element={
                                <Store.Provider value={{data : data2, datafunc : setStuData}}>
                                    <EditFile />
                                </Store.Provider>
                            } />
                            <Route path="/AddData" element={
                                <Store.Provider value={{data : data2, datafunc : setStuData}}>
                                    <AddData />
                                </Store.Provider>
                            } />
                        </Routes>
        </>
    )
}

export default NavBar;