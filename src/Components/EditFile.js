// ///////// Method1 //////////
// import React,{useContext} from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Store from "../Store/Store";

// const EditFile = () => {
//     const data = useNavigate();
//     // console.log(data);

//     const data2 = useLocation().state.index;
//     // console.log(data2);
//     // console.log(data2.state.index);

//     const dataprint = useContext(Store);
//     // console.log(dataprint);

//     const UpdateData = {
//         name: dataprint.data[data2].name,
//         age: dataprint.data[data2].age,
//         course: dataprint.data[data2].course,
//         batch: dataprint.data[data2].batch
//     }

//     function handleChange(e){
//         UpdateData[e.target.name] = e.target.value;
//     }
//     const handleUpdate = () => {
//         console.log(dataprint.data[data2]);
//         dataprint.data[data2] = UpdateData;
//         data('/Students');
//     }

//     return(
//         <>
//             <h2 className="heading">Update Student Data</h2>
//             <div className="editform">
//                     <label>Name</label>
//                     <input type="text" name="name" placeholder={dataprint.data[data2].name} onChange={handleChange} /><br/>

//                     <label>Age</label>
//                     <input type="number" name="age" placeholder={dataprint.data[data2].age} onChange={handleChange} /><br/>

//                     <label>Course</label>
//                     <input type="text" name="course" placeholder={dataprint.data[data2].course} onChange={handleChange} /><br/>

//                     <label>Batch</label>
//                     <input type="text" name="batch" placeholder={dataprint.data[data2].batch} onChange={handleChange} /><br/>

//                     <button className="btn2" onClick={handleUpdate}>Update form</button>
//                     {/* <button onClick={() => data('./StudentsUrl')}>Go Back</button> */}
//                     <button className="btn2" onClick={() => data(-1)}>Go Back</button>
//             </div>        
//         </>
//     )
// }

// export default EditFile;





/////////////////////////// Method 2 ///////////////////////////////

import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Store from "../Store/Store";

const EditFile = () => {
  const data = useNavigate();
  const data2 = useLocation().state.index;
  const dataprint = useContext(Store);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    batch: ""
  });

  // Set the initial values when the component mounts
  useEffect(() => {
    setFormData({
      name: dataprint.data[data2].name,
      age: dataprint.data[data2].age,
      course: dataprint.data[data2].course,
      batch: dataprint.data[data2].batch
    });
  }, [data2, dataprint.data]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleUpdate = () => {
    console.log(dataprint.data[data2]);
    dataprint.data[data2] = formData;
    data("/Students");
  };

  return (
    <>
      <h2 className="heading">Update Student Data</h2>
      <div className="editform">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />

        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />
        <br />

        <label>Batch</label>
        <input
          type="text"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
        />
        <br />

        <button className="btn2" onClick={handleUpdate}>
          Update form
        </button>

        <button className="btn2" onClick={() => data(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default EditFile;
