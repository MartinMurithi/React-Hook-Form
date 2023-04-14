import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

export const Register = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  renderCount++;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Render count ({renderCount / 2})</h1>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
              maxLength: {
                value: 10,
                message: " Max length is 10",
              },
            })}
          />
          <p className="errorMessage">{errors.username?.message}</p>
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="errorMessage">{errors.email?.message}</p>
        </label>

        <label htmlFor="continent">
          Continent
          <input
            type="text"
            id="continent"
            {...register("continent", {
              required: "Continent is required",
            })}
          />
          <p className="errorMessage">{errors.continent?.message}</p>
        </label>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
