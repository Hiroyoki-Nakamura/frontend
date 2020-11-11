import React from "react";
import { useForm } from "react-hook-form";



const LoginForm = () => {

    const { register, handleSubmit, errors } = useForm();


    function onSubmit(data) {
        console.log("Data submitted: ", data);
      }
      

  return (
    <div className="login-form">
      <form>
        <label htmlFor="inputEmail">E-mail</label>
        <input
         ref={register()}
          type="email"
          name="email"
        />

        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;