import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Form = () => {
  const [inpVal, setinpVal] = useState({
      name:"",
      email:"",
      age:"",
      mobile:"",
      work:"",
      address:"",
      desc:""
  });



  const setData = (e) => {
    const {name,value} = e.target;
    setinpVal((prevalue)=>{
      return{
        ...prevalue,
        [name]:value
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/submit-form", inpVal);

      if (response.status === 200) {
        console.log("Form submitted successfully");
        // Reset the form after successful submission if needed
        
        
        setinpVal({
          name: "",
          email: "",
          age: "",
          mobile: "",
          work: "",
          address: "",
          desc: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-5" action="/submit-form" method="post" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={inpVal.name}
              onChange={setData}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={inpVal.email}
              onChange={setData}
              type="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              name="age"
              value={inpVal.age}
              onChange={setData}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              name="mobile"
              value={inpVal.mobile}
              onChange={setData}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              name="work"
              value={inpVal.work}
              onChange={setData}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              name="address"
              value={inpVal.address}
              onChange={setData}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpVal.desc}
              onChange={setData}
              cols="30"
              rows="10"
              className="form-control"
              id="exampleInputPassword1"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
