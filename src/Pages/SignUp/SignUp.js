import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="h[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center text-primary font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text font-semibold text-accent">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered border-accent text-accent w-full max-w-xs "
            />
            {errors.name && (
              <p className="text-primary" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text font-semibold text-accent">
                Email
              </span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered border-accent text-accent w-full max-w-xs "
            />
            {errors.email && (
              <p className="text-primary" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-accent">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: " Password is required",
                minLength: {
                  value: 6,
                  message: "pasword must be 6 character long",
                },
              })}
              className="input input-bordered w-full text-accent border-accent "
            />
            {errors.password && (
              <p className="text-primary" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="font-semibold text-white mt-2 border rounded-lg p-2 bg-primary w-full "
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-primary">{signUpError}</p>}
        </form>
        <p className="font-semibold text-accent">
          Already have an account?
          <Link className="text-primary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider text-accent">OR</div>
        <button className="btn btn-outline w-full border-accent text-accent">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
