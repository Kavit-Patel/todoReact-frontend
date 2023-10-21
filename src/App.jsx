import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { useContext } from "react";
import { Context } from "./context/context";
import TodoList from "./components/TodoList";
import Edit from "./components/Edit";
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <TodoList /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addtodo" element={<Home />} />
        <Route path="/todolist" element={user && <TodoList />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
