import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const editData = async () => {
    const res = await axios.get(
      `https://todoreact-lbgt.onrender.com/task/singleTask/${id}`,
      { withCredentials: true }
    );
    if (res.status === 200) {
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
  };
  useEffect(() => {
    editData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://todoreact-lbgt.onrender.com/task/update/${id}`,
      {
        title,
        desc,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    setTitle("");
    setDesc("");
    return navigate("/todolist");
  };
  return (
    <Wrapper>
      <main>
        <h1>Update Todo !</h1>
      </main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title.."
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="description.."
        />
        <input type="submit" value="Update" />
      </form>
    </Wrapper>
  );
};

export default Edit;
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
