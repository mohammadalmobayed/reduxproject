    import React from "react";
    import "./Auth.css";
    import { json, NavLink, useNavigate } from "react-router-dom";
    import { UilIntercom } from "@iconscout/react-unicons";
    import UserService from "../apis/UserService";
    // import { authActions } from "../store/counterSlice";
    import { useDispatch } from "react-redux";
    import { authActions } from "../store/authSlice";

    function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelsubmit = (e) => {
        e.preventDefault();

        const user = {
        email: e.target.email.value,
        password: e.target.password.value,
        };

        UserService.finduser(JSON.stringify(user)).then(function (res) {
          if (res.data == "user not found") {
            console.log(res.data);
          } else {
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch(authActions.login())
            navigate("/books");
          }
        });
    };

    return (
        <div className="Auth">
        <div className="a-left">

            {/* <UilIntercom className="loginn" /> */}
            {/* <img width={'400px'} src={"http://localhost/library/backend/upload/booklogo.png"} alt="" />  */}
            <div className="Webname">
            <h1>The Bookshelf</h1>
            <h6>Reading a good book three times does more good for you than reading three good books</h6>
            </div>
        </div>

        <div className="a-right">
            <form onSubmit={handelsubmit} className="infoForm authForm">
            <h3>Log In</h3>

            <div>
                <input
                type="text"
                placeholder="email"
                className="infoInput"
                name="email"
                />
            </div>

            <div>
                <input
                type="password"
                className="infoInput"
                placeholder="Password"
                name="password"
                />
            </div>

            <div>
                <span style={{ fontSize: "12px" }}>
                Don't have an account <NavLink to="/signUp">Sign up</NavLink>
                </span>
                <button type="submit" className="button infoButton">
                Login
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    }

    export default LogIn;
