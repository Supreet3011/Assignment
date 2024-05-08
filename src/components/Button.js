import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props => props.disabled ? (props.backgroundcolor || "transparent") : (props.backgroundcolor === "white" ? "white" : "#000")};
  color: ${props => props.color || "#000"};
  border: 2px solid ${props => props.color || "#000"};
  padding: 10px 20px; /* Increase padding */
  width: ${props => props.width || "auto"}; /* Width */
  height: ${props => props.height || "auto"}; /* Height */
  font-size: 16px; /* Adjust font size */
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  border-radius: 30px;
`;

export default function OutlinedButtons({color, label, type, width, height, backgroundcolor, onClick, disabled}) {
  return (
    <StyledButton color={color} type={type} width={width} height={height} backgroundcolor={backgroundcolor} onClick={onClick} disabled={disabled}>{label}  </StyledButton>
  );
}