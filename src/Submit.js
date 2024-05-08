import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: flex-start; 
  padding: 20px; 
`;

const Heading = styled.h1`
  margin: 0; 
  font-size: 24px;
  color: #1c1c1c;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function Submit() {
  const [redirectCount, setRedirectCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectCount > 0) {
        setRedirectCount(redirectCount - 1);
      } else {
        navigate('/');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectCount]);

  return (
    <>
      <Container>
        <Heading>Brunel</Heading>
      </Container>
      <CenteredContent>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} size="3x" style={{color: "#63E6BE",}} />
          <p style={{ color: '#2DA950', fontSize: '15px', fontFamily: 'jokerman' }}>Success submitted</p>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>Congratulations</h1>
          <p>Your request has been successfully submitted to us. We <br /> will validate your information and reach out to you <br /> shortly with updates.</p>
        </div>
      </CenteredContent>
      <p style={{ textAlign: 'center', marginTop: '300px'  }}>Redirecting you to Homepage in <strong>{redirectCount} seconds</strong></p>
    </>
  );
}
