import React, { useState } from "react";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const [hasAccount, setHasAccount] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirm } = user;
    if (hasAccount) {
      history.push("/login");

      return;
    } else {
      if (email === "" || password === "") {
        return setError("Please fill in all fields.");
      } else {
        if (password !== confirm) {
          return setError("password is not the same.");
        }
        history.push("/");
      }
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Title>{hasAccount ? "Login" : "Register"}</Title>
        {error && error}
        <Form onSubmit={handleSubmit}>
          {!hasAccount && (
            <Input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={handleChange}
            />
          )}
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {!hasAccount && (
            <Input
              type="password"
              name="confirm"
              placeholder="Password Confirmation"
              onChange={handleChange}
            />
          )}
          <Button type="submit">
            {hasAccount ? "Login" : " Create account"}
          </Button>
        </Form>
        <Title2>
          {hasAccount ? (
            <>
              Don't have an account?
              <Info onClick={() => setHasAccount(!hasAccount)}>
                Create account
              </Info>
            </>
          ) : (
            <>
              Already have an account?
              <Info onClick={() => setHasAccount(!hasAccount)}>Sign in</Info>
            </>
          )}
        </Title2>
      </FormWrapper>
    </Wrapper>
  );
}

export default Login;

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: 000000;
`;
export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid rgba(0, 40, 0, 0.2);
  background-color: #ffffff;
  border-radius: 1rem;
`;
export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 4px 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #16a34a;
  color: #fff;
  border: none;
  outline: none;
  padding: 5px 4px;
  border-radius: 10px;
`;

// Text

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #000000;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const Title2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: gray;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "#4d4d4d"};
`;

export const Info = styled.span`
  font-family: "Raleway", sans-serif;
  color: #16a34a;
  margin-left: 0.5rem;
  cursor: pointer;
`;
