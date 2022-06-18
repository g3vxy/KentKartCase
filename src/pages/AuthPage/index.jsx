import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { setUser } from "../../slices/authSlice";

import login from "../../utils/auth/login";

import "./index.scss";

export default function AuthPage() {
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const user = login(data);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    user.isAuthenticated = true;
    dispatch(setUser(user));
  };

  if (user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="auth-page">
      <form
        className="auth-form-container"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <div className="auth-input-container">
          <label>Email</label>
          <input type={"email"} required {...register("email")}></input>
        </div>
        <div className="auth-input-container">
          <label>Password</label>
          <input type={"password"} required {...register("password")}></input>
        </div>
        <div className="auth-input-container">
          <input type={"submit"} value={"Sign In"}></input>
        </div>
      </form>
    </main>
  );
}
