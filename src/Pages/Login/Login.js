import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center text-primary font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text font-semibold text-accent">
                Email
              </span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered text-accent border-accent w-full max-w-xs "
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
            <label className="label">
              <span className="label-text font-semibold text-accent">
                forget password?
              </span>
            </label>
          </div>

          <input
            className="font-semibold text-white mt-2 border rounded-lg p-2 bg-primary w-full "
            value="Login"
            type="submit"
          />
          {loginError && <p className="text-primary">{loginError}</p>}
        </form>
        <p className="font-semibold text-accent">
          New to Digitax?
          <Link className="text-primary" to="/signup">
            Create new Account
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

export default Login;
