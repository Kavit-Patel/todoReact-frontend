import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://todoreact-lbgt.onrender.com/user/register",
      {
        name,
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    setName("");
    setEmail("");
    setPassword("");
    console.log(res.data);
  };
  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name.."
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email.."
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password.."
        />
        <input type="submit" value="Register" />
        <div>
          Already a User?{" "}
          <span>
            <Link to="/login">Login Here</Link>
          </span>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
const Wrapper = styled.section`
  margin: 3rem 12rem;
  height: calc(100vh - 10rem);
  text-align: center;
  background-color: #e3e3e3;
  h1 {
    padding: 2rem 0;
    text-decoration: underline;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    input {
      padding: 0.5rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 0.5rem;
      outline: none;
      width: 24rem;
      font-weight: bold;
    }
    input[type="submit"] {
      margin-top: 0.3rem;
      width: 25rem;
      transition: all 0.2s linear;
      &:hover {
        background-color: gray;
        color: white;
        cursor: pointer;
      }
    }
  }
`;
