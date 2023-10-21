import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import axios from "axios";
/* eslint-disable react/prop-types */
const Tasks = ({ task, handleDelete }) => {
  const handleChange = (e) => {
    const val = e.target.parentNode.parentNode.parentNode;
    if (e.target.checked) {
      val.classList.add("stThrough");
    } else {
      val.classList.remove("stThrough");
    }
    // const ele=document.querySelectorAll(".stThrough")
  };
  return (
    <>
      {task && (
        <Wrapper>
          <main className="main">
            <p>
              <span>{task.title}</span>
              <span> - </span> <span>{task.desc}</span>
            </p>
            <p className="edit">
              <span>
                <input type="checkbox" onChange={handleChange} />
              </span>
              <Link className="myedit" to={`/edit/${task._id}`}>
                <BiEdit />
              </Link>
              <Link>
                <RiDeleteBin2Fill onClick={() => handleDelete(task._id)} />
              </Link>
            </p>
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default Tasks;
const Wrapper = styled.section`
  margin: 0 2rem;
  main {
    height: 2.4rem;
    background-color: #d0d3d4;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    transition: all 0.2s linear;
    &:hover {
      font-weight: bold;
      background-color: #bdc3c7;
      cursor: pointer;
    }

    .edit {
      padding-top: 0.5rem;
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      gap: 2rem;
      .myedit {
        color: #149efa;
        &:hover {
          font-size: 2rem;
        }
      }
    }
    input {
      margin-bottom: 1.5rem;
      transform: scale(1.7);
      &:hover {
        transform: scale(1.9);
      }
    }
  }
  .stThrough {
    text-decoration: line-through;
    color: #959595;
  }
`;
