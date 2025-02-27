// import { useState } from "react";
import './RegistrationForm.css';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Fullname can't be empty!";
  }
  if (!values.userName) {
    errors.userName = "Username can't be empty!";
  }
  if (!values.password) {
    errors.password = "Password can't be empty!";
  }
  return errors;
};

export default function RegistrationForm({addNewUser}) {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   userName: "",
  //   password: "",
  // });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   // console.log(formData);
  //   addNewUser(formData);
  //   event.preventDefault();
  //   setFormData({
  //     fullName: "",
  //     userName: "",
  //     password: "",
  //   });
  // };

  return (
    <div>
      <h1>Register Yourself</h1>
      <form className="form" onSubmit={formik.handleSubmit}>

        <label htmlFor="fullName">Fullname: &nbsp; 
        <input
          id="fullName"
          name="fullName"
          placeholder="Enter Full Name"
          type="text"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        </label>
        {formik.errors.fullName ? <p style={{color: "red"}}>{formik.errors.fullName}</p> : null}
        <br></br>
        <label htmlFor="userName">Username: &nbsp;
        <input
          id="userName"
          name="userName"
          placeholder="Enter Username"
          type="username"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        </label>
        {formik.errors.userName ? <p style={{color: "red"}}>{formik.errors.userName}</p> : null}
        <br></br>
        <label htmlFor="password">Password: &nbsp; 
        <input
          id="password"
          name="password"
          placeholder="Enter Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        </label>
        {formik.errors.password ? <p style={{color: "red"}}>{formik.errors.password}</p> : null}
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
