import React, { useEffect } from "react";

export default function Logout(props: any) {
  useEffect(() => {
    props.setLoggedInStatus(false);

    setTimeout(() => {
      props.history.push("/login");
    }, 500);

    return () => {};
  }, []);
  return <h1>Loggin Out!</h1>;
}
