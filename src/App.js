import MyProfile from "./screens/MyProfile";
import Landing from "./screens/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
