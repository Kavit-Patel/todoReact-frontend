import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Tasks from "./Tasks";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [tasks, setTasks] = useState(null);
  const [del, setDel] = useState(true);
  const handleDelete = async (tid) => {
    await axios.delete(
      `https://todoreact-lbgt.onrender.com/task/delete/${tid}`,
      { withCredentials: true }
    );
    setDel((prev) => !prev);
  };
  const getTasks = async () => {
    const res = await axios.get(
      "https://todoreact-lbgt.onrender.com/task/all",
      {
        withCredentials: true,
      }
    );
    if (res.status === 200) {
      // console.log(res.data);
      setTasks(res.data.tasks);
      // console.log(tasks);
    }
  };
  useEffect(() => {
    getTasks();
  }, [del]);
  return (
    <Wrapper>
      <h1>
        <span id="title">Your Todos !!</span>
        <span id="add">
          <Link to="/addtodo">Add New Todo</Link>
        </span>
      </h1>
      <div>
        {tasks?.map((task) => (
          <Tasks key={task._id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    </Wrapper>
  );
};

export default TodoList;
const Wrapper = styled.section`
  margin: 3rem 12rem;
  height: calc(100vh - 10rem);
  text-align: center;
  background-color: #e3e3e3;
  h1 {
    padding-top: 0.5rem;
    ${"" /* position: relative; */}
    #add {
      position: absolute;
      top: 4rem;
      right: 12.3rem;
      margin-left: 3rem;
      a {
        text-decoration: none;
        font-size: 1rem;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
