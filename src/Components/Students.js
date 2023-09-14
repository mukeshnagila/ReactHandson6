
import React, { useContext } from "react";
import '../CSSpart/style.css';
import Store from "../Store/Store";
import { NavLink, useNavigate } from "react-router-dom";

const Students = () => {
    const dataprint = useContext(Store);
    // console.log(dataprint);
    console.log(dataprint.data);

    const navigate = useNavigate();
    // console.log(navigate);

    return(
        <>
            <div className="Stufixcontent">
                <h1>Students Details......</h1>
                <button className="btn" onClick={() => navigate('/AddData')}>Add new student</button>
            </div>
            <div className="tablecontainer">
                {/* {dataprint.data[0].name} */}


                <table className="table" border="{{1px}}">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                   
                        {dataprint.data.map((item,index) => {
                            return(
                                <tbody key={index}>            
                                    <tr>
                                        <td> {item.name} </td>
                                        <td> {item.age} </td>
                                        <td> {item.course} </td>
                                        <td> {item.batch} </td>
                                        <td><NavLink  className="hyperlink" state={{index}} to="/EditFile">Edit</NavLink></td>
                                    </tr>
                                </tbody>
                            )
                        })}
                        
                </table>
            </div>
        </>
    )
}

export default Students;