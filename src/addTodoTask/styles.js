import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  flex-direction: column;
`;
export const Heading = styled.h2``;
export const Form = styled.form`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 15px;
`;
export const FormFieldHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label`
  width: 40%;
`;
export const InputFiled = styled.input`
  width: 50%;
  padding: 1%;
  border-color: transparent;
  border-radius: 4px;
  background-color: #f6f6f6;
`;
export const TextAreaField = styled.textarea`
  width: 50%;
  padding: 1%;
  border-color: transparent;
  border-radius: 4px;
  background-color: #f6f6f6;
`;
export const SelectField = styled.select`
  width: 52%;
  padding: 1%;
  border-color: transparent;
  border-radius: 4px;
  background-color: #f6f6f6;
`;
export const SubmitField = styled.input`
  width: max-content;
  padding: 1% 4%;
  border-color: transparent;
  border-radius: 25px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;
