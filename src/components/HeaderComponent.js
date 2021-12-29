import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Container>
      <Left>
        <a href="/">
          <Img src="/logo.png" />
        </a>
        <Title>Water Quality Monitoring</Title>
      </Left>
      <Nav>
        <Link onClick={() => history.push("/dashboard")}>Report</Link>
        <Link onClick={() => history.push("/about")}>About</Link>
        <Link onClick={() => history.push("/team")}>Team</Link>
        <Button
          onClick={() =>
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                console.log("Signed Out!!");
                dispatch(removeUser());
              })
              .catch((error) => {
                // An error happened.
                console.log(error.message);
              })
          }
        >
          Logout
        </Button>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 20;
  background-color: ${colors.primaryAccent};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 60px;
  width: 60px;
`;
const Title = styled.h2`
  font-weight: 500;
  color: ${colors.primary};
  margin-left: 20px;
`;
const Nav = styled.div``;
const Link = styled.a`
  text-decoration: none;
  margin: 0 30px;
  color: ${colors.primary};
  font-size: 18px;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  margin: 0 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${colors.primary};
  color: ${colors.secondaryAccent};
  font-weight: 500;
`;
