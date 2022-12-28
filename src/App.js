import MyProfile from "./screens/MyProfile";
import Landing from "./screens/Landing";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./screens/Sidebar";
import { useLocation } from "react-router-dom";
import SignUp from "./screens/SignUp";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" ? <Sidebar /> : <></>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/Profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
