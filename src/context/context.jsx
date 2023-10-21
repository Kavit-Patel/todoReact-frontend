import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const res = await axios.get(
      "https://todoreact-lbgt.onrender.com/task/all",
      {
        withCredentials: true,
      }
    );
    setUser(res.data.user);
    return redirect("/");
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
