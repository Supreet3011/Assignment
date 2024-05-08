import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Button from './components/Button';
import Inputfield from './components/Inputfield';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: flex-start; 
  padding: 40px; 
`;

const Heading = styled.h1`
  margin: 0; /* Remove default margin */
  font-size: 24px;
  color: #1c1c1c;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
`;

const ErrorMessage = styled.p`
  color: red;
`;


export default function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (value) => {
    setName(value);
    setIsNameEntered(!!value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? '' : 'Enter a valid email address');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && name && email) {
      // Submit logic here
      console.log('Form submitted:', name, email);
      navigate('/Submit');
    } else {
      setFormSubmitted(true);
    }
  };

  return (
    <>
      <Container>
        <Heading>Brunel</Heading>
        <Link to="/">
          <FontAwesomeIcon icon={faTimesCircle} size='2x' />
        </Link>
      </Container>
      <CenteredContent>
        <div>
          <p style={{ color: '#2DA950', fontSize: '30px', fontFamily: 'jokerman' }}>Success stories</p>
          <h1>Start your success <br /> journey here! </h1>
          <FormContainer>
          <Inputfield
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <Inputfield
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {(formSubmitted && emailError) && <ErrorMessage>{emailError}</ErrorMessage>}
          </FormContainer>
          <Button type='submit' backgroundcolor="grey" color="white" label="Submit" width="300px" height="50px" onClick={handleSubmit} disabled={!isNameEntered} />
        </div>
      </CenteredContent>
    </>
  );
}
