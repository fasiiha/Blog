import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout.tsx";
import Indexes from "./Indexes/Indexes.tsx";
import Login from "./Login/Login.tsx";
import Register from "./Register/Register.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
