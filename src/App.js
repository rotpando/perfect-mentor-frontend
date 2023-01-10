import MyProfile from "./screens/MyProfile";
import Landing from "./screens/Landing";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./screens/Sidebar";
import { useLocation } from "react-router-dom";
import SignUp from "./screens/SignUp";
import { useState, useEffect } from "react";
import Users from "./screens/Users";

function App() {
  const { pathname } = useLocation();
  const [bodyClassName, setBodyClassName] = useState("");
  useEffect(() => {
    if (pathname !== "/" && pathname !== "/signUp" && pathname !== "/logIn") {
      setBodyClassName("bodyContainer");
    } else setBodyClassName("");
  }, [pathname]);
  return (
    <>
      {pathname !== "/" ? <Sidebar /> : <></>}
      <div className={bodyClassName}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Profile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
