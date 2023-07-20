import styled from "styled-components";
import { Button } from "@mui/material";

const RegisterFormContainer = styled("div")`
  display: flex;
  flex-direction: column;

  border: solid;
  border-width: 1px;
  border-radius: 15px;
  background-color: #ffffff;
  border-color: #1976d2;

  margin: 0 auto;
  margin-top: 100px;
  width: 40%;
`;

const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 50px;

  gap: 10px;

  width: 50%;
`;

const SubmitButton = styled(Button).attrs({ variant: "contained", type: "submit" })`
  background-color: #1976d2;
  color: #ffffff;

  align-self: center;

  width: 50%;
`;

export { RegisterFormContainer, InputContainer, SubmitButton };
