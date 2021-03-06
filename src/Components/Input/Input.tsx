import * as React from "react";
import styled from "../../typed-components";

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  name?: string;
  onChange: any;
}

const Container = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.greyColor};
  font-size: 20px;
  width: 100%;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 300;
  }
`;

const Input: React.SFC<IProps> = ({
  placeholder = "",
  type = "text",
  required = true,
  value,
  name,
  onChange,
}) => (
  <Container
    onChange={onChange}
    name={name}
    placeholder={placeholder}
    required={required}
    value={value}
    type={type}
  />
);

export default Input;
