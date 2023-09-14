import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../Store/Store";

const AddData = () => {
    const ContextData = useContext(Store);
    console.log(ContextData);

    const navi = useNavigate();
    const NewStu = {
        name:'',
        age:'',
        course:'',
        batch:''
    }

    const handleChange =(e) =>{
        NewStu[e.target.name] = e.target.value;

    }
    const handleAddNew = ()=>{
        if (
            NewStu.name === '' || NewStu.age === '' || NewStu.course === '' || NewStu.batch === ''
        ) {
            alert('Please fill in all fields');
        } else {
            ContextData.data.push(NewStu);
            navi('/students');
        }
    }
    return(
        <>
            <h2 className="heading">Add New Student Data</h2>
          <br/>
          <div className="editform">
                    <label>Name :</label>
                    <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} /><br/>

                    <label>Age :</label>
                    <input type="number" name="age" placeholder="Enter Your Age" onChange={handleChange} /><br/>

                    <label>Course :</label>
                    <input type="text" name="course" placeholder="Enter Your Course" onChange={handleChange} /><br/>

                    <label>Batch :</label>
                    <input type="text" name="batch" placeholder="Enter Your Batch" onChange={handleChange} /><br/>

                    <button className="btn2" onClick={handleAddNew}>Update form</button>
                    {/* <button onClick={() => data('./StudentsUrl')}>Go Back</button> */}
                    <button className="btn2" onClick={() => navi(-1)}>Go Back</button>
            </div>
        </>
    )
}

export default AddData;