import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/context";
import axios from "axios";
const Navbar = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const Logout = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      "https://todoreact-lbgt.onrender.com/user/logout",
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    setUser(null);
    return navigate("/");
  };
  return (
    <div>
      <Wrapper>
        <nav>
          <div>
            <Link to="/">!Todo</Link>
          </div>
          <div>
            <ul>
              {user ? (
                <>
                  <li>
                    <Link>Profile</Link>
                  </li>
                  <li>
                    <Link onClick={Logout}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/register">SignUp</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;

const Wrapper = styled.section`
  background-color: #e3e3e3;
  height: 3rem;
  padding: 0 12rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${"" /* color: white; */}
    div > a {
      display: flex;
      color: black;
      text-decoration: none;
    }
    div > ul {
      ${"" /* width: 13rem; */}
      display: flex;

      gap: 2rem;
      li {
        list-style: none;
      }
      a {
        color: black;
        ${"" /* background-color: black; */}
        transition: all 0.2s linear;
        ${"" /* width: 3rem; */}
        text-decoration: none;
        &:hover {
          color: blue;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
`;
