/**** Login Page ****/
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { setAuthResponse, setIsAuth, setToken } from "../../redux/slices/authenticationSlice";
import { useDispatch } from 'react-redux';
import Alert from "@mui/material/Alert";
import ErrorToast from '../../components/Toasts/ErrorToast';
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openError, setOpenError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true)
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email": email, "pass": password}),
    });
    let status = response.status;
    let result = await response.json();
    console.log(status);
    console.log(result);
    if(status == 401 || status == 403){
      console.log("**** WRONG INFO ****");
      setOpenError(true);
      dispatch(setAuthResponse(true));
      dispatch(setIsAuth(false));
      dispatch(setToken(""));
      setIsLoading(false);
    }
    if (status == 200) {
      dispatch(setAuthResponse(true));
      dispatch(setIsAuth(true));
      dispatch(setToken(result.token));
      localStorage.setItem("token", result.token);
      setIsLoading(false);
      router.push("/");
    }
  }

  useEffect(() => {
    if(openError){
      setTimeout(() => {
        setOpenError(false)
      }, 1000);
    }
  }, [openError])

  return (
    <div className="container">
      <section className="login-page">
        <ErrorToast openError={openError} />
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pass">رمز عبور</label>
          <input
            type="text"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>
            {isLoading ? <CircularProgress color="inherit" size={28} /> : "ارسال"}
          </button>
        </form>
        <div className="info-box">
          <Alert severity="info">
            <span style={{ margin: "10px", fontWeight: "bold" }}>
              {" "}
              راهنمایی{" "}
            </span>
            <p>ایمیل: test@gmail.com</p>
            <p>رمز: 1234</p>
          </Alert>
        </div>
      </section>
    </div>
  );
}

export default Login;
