import React, { useState } from "react";
import styles from "../css/Login.module.css";
import Nav from "../components/Nav";
import axios from "axios";
// import { Link } from "react-router-dom";

function Login() {
  //   const [name, setName] = useState("");

  //   let username;
  //   const onChangeAccount = (e) => {
  //     setName({
  //       [e.target.name]: e.target.value,
  //     });
  //     username = e.target.value;
  //   };

  //   const sendUsername = () => {
  //     const data = {
  //       userName: username,
  //     };
  //     console.log(username);

  // axios
  //   .post("http://localhost:8000/api/v1/users", data)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };
  const [name, setName] = useState("");
  // const getname = localStorage.getItem("username");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
    };

    axios
      .post("http://localhost:8000/api/v1/users", data)
      .then((response) => {
        console.log(response.data);
        localStorage.clear();
        localStorage.setItem("username", response.data.name);
        window.location.href = "/selectpage";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#F2C9C9",
        overflow: "auto",
        height: "100vh",
      }}
    >
      <Nav />
      <div
        style={{
          //   display: "flex",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "82%",
          height: "100%",
          //   backgroundColor: "blue",
          marginLeft: "18%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // alignItems: "center",
            width: "700px",
            height: "560px",
            backgroundColor: "white",
            borderRadius: "20pt",
            // marginLeft: "33%",
          }}
        >
          <div
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "48px",
              textAlign: "center",
            }}
          >
            LOG IN
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "60px",
            }}
          >
            <div
              style={{
                width: "200px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              User Name
            </div>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{
                width: "373px",
                height: "55.96px",
                background: "#EBF4FE",
                // marginLeft: "200px",
                marginRight: "30px",
                border: "0px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                color: "#1B6ED0",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "100",
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",
              }}
              id="getUsername"
              // onChange={onChangeAccount}
              placeholder="User Name"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "60px",
            }}
          >
            <div
              style={{
                width: "200px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Email Address
            </div>
            <input
              style={{
                width: "373px",
                height: "55.96px",
                background: "#EBF4FE",
                marginReft: "50px",
                border: "0px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                color: "#1B6ED0",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "100",
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",
              }}
              placeholder="example@gmail.com"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Link to="/selectpage"> */}
            <button
              type="submit"
              style={{
                width: "177.33px",
                height: "55.96px",
                background: "#282828",
                border: "1px solid #FFFFFF",
                borderRadius: "30px",
                margin: "0 25px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                color: "white",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "25px",
                lineHeight: "30px",
                textAlign: "center",
              }}
              // onClick={sendUsername}
            >
              Log in
            </button>
            {/* </Link> */}
            {/* <Link to="/loginpage"> */}
            <button
              style={{
                width: "177.33px",
                height: "55.96px",
                background: "#EBF4FE",
                border: "1px solid #FFFFFF",
                borderRadius: "30px",
                margin: "0 25px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                color: "#1B6ED0",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "25px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              Cancel
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
}

// export default {username,Login};
export default Login;
