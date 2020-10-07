import React, { useState } from "react";
import MainPurpleCircle from "../res/purple-circle.svg";
import SideMiddleCircle from "../res/side-middle-ciricle.svg";
import BottomRightCircle from "../res/bottom-right-circle.svg";

import { person, logIn, lockOpen } from "ionicons/icons";
import { Link } from "react-router-dom";

import { IonImg, IonIcon } from "@ionic/react";

const PURPLE_COLOR = "#B04CEF";

export default function LoginPage(props: any) {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    if (username.length === 0) {
      setUsernameError("Username cannot be empty!");
      return;
    }
    if (password.length === 0) {
      setPasswordError("Password cannot be empty!");
      return;
    }
    await props.setLoggedInStatus(true);
    props.history.push("/");
  };

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
    if (e.target.value.length > 0) {
      setUsernameError("");
    }
  };
  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0) {
      setPasswordError("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        height: "100%",
        width: "100%",
        color: "#000000",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "50%",
          marginBottom: "-80px",
          color: "#000000",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "100px",
            color: "#FFFFFF",
            margin: "auto",
            width: "100%",
            zIndex: 100,
          }}
        >
          <IonIcon
            icon={logIn}
            style={{
              color: "#FFFFFF",
              zIndex: 100,
              height: "50px",
              width: "100%",
              margin: "auto",
            }}
          />
          <h5 style={{ margin: "auto", width: "120px", textAlign: "center" }}>
            Log in to your account
          </h5>
        </div>

        <IonImg
          src={MainPurpleCircle}
          style={{
            position: "relative",
            left: "-20%",
            top: "-25%",
            height: "100%",
            width: "115%",
          }}
        />
      </div>

      <form
        action="/login"
        method="post"
        onSubmit={onSubmitForm}
        style={{
          width: "90%",
          display: "flex",
          margin: "auto",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <br />

        <div style={{ height: "5%" }}>
          <IonIcon
            icon={person}
            style={{
              color: "#000000",
              zIndex: 100,
              height: "20px",
              width: "20px",
              left: "6px",
              position: "relative",
            }}
          />
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onUsernameChange}
            placeholder="Username or email"
            style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}
          />
          {usernameError.length > 0 && (
            <span style={styles.errorStyle}>{usernameError}</span>
          )}
        </div>
        <br />
        <div style={{ position: "relative" }}>
          <IonIcon
            icon={lockOpen}
            slot="start"
            style={{
              color: "#000000",
              zIndex: 100,
              height: "20px",
              width: "20px",
              top: "6px",
              left: "6px",
              position: "absolute",
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}
          />

          {passwordError.length > 0 && (
            <span style={styles.errorStyle}>{passwordError}</span>
          )}
        </div>

        <br />
        <input
          type="submit"
          value="Login"
          style={{
            color: "#FFFFFF",
            backgroundColor: PURPLE_COLOR,
            padding: "2%",
            borderBlockColor: PURPLE_COLOR,
            borderWidth: "1px",
            borderRadius: "20px",
            margin: "auto",
            width: "100px",
          }}
        />
        <br />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          <Link to="/forgot">Forgot Password?</Link>
          <br />
          <Link to="/register">Create an account</Link>
        </div>
      </form>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "50%",
          marginBottom: "-80px",
          color: "#000000",
          position: "relative",
        }}
      >
        <IonImg
          src={SideMiddleCircle}
          style={{
            position: "relative",
            right: "-250px",
            bottom: "50%",
            height: "55%",
            width: "100%",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "50%",
          marginBottom: "-80px",
          color: "#000000",
          position: "relative",
        }}
      >
        <IonImg
          src={BottomRightCircle}
          style={{
            position: "relative",
            right: "-165px",
            bottom: "50%",
            height: "55%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  errorStyle: {
    color: "#E91111",
  },
};
