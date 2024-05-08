import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 400px;
  left: 150px;
`;

const OverlappingContent = styled.div`
  background-color: white;
  position: absolute;
  top: 450px;
  left: 40px;
  padding-left: 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const OverlappingContent1 = styled.div`
  background-color: white;
  position: absolute;
  top: 745px;
  left: 140px;
  padding-left: 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const OverlappingContent2 = styled.div`
  background-color: #002E18;
  color: white;
  position: absolute;
  top: 650px;
  left: 400px;
  padding-left: 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
  margin-right: 180px; /* Adjust as needed */
`;

const BottomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  margin-left: 130px;
`;

const ParagraphContainer = styled.div`
  margin-left: 800px;
`;

const AnswerDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  color: #617275;
`;

const ToggleIcon = styled.span`
  cursor: pointer;
`;

const TextWithToggle = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-right: 30px;
`;

export default function Homepage() {
  const [dropdownOpen, setDropdownOpen] = useState(Array(5).fill(false));

  const toggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
  };

  const navigate = useNavigate();

  const handleGetProjectsClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <Container>
        <Heading>Brunel</Heading>
        <ButtonContainer>
          <Button backgroundcolor="white" color="#1C1C1C" label="Get Projects" width="200px" height="50px" onClick={handleGetProjectsClick}/> <Link to="/signin"></Link>
          <Button backgroundcolor="#1C1C1C" color="#FFFFFF" label="Onboard Talent" width="200px" height="50px" />
        </ButtonContainer>
      </Container>
      <CenteredContent>
        <div>
          <p style={{ color: '#2DA950', fontSize: '25px', fontFamily: 'jokerman' }}>Success stories</p>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '60px' }}>Every success journey <br /> we've encountered.</h1>
        </div>
      </CenteredContent>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>
        <ContentContainer>
          <h3 style={{ fontFamily: 'sans-serif', fontSize: '40px' }}>Enhance fortune 50 <br /> company's insights  <br /> teams research <br /> capabilities</h3>
          <Button
            backgroundcolor="#1C1C1C"
            color="#FFFFFF"
            label="Explore more  →"
            width="200px"
            height="50px"
          />
        </ContentContainer>
        <ImageContainer>
          <img src='https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__'
            style={{ width: '400px', height: '400px', borderRadius: '35px' }}
          />
        </ImageContainer>
        <OverlappingContent>
      <h1 style={{ fontFamily: 'sans-serif', fontSize: '40px' }}>40 %</h1>
      <p style={{color: "#828282"}}>Archived reduction in <br /> project execution time <br /> by optimising team <br /> availability</p>
    </OverlappingContent>
    <OverlappingContent1>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faUser} style={{ color: "#63E6BE", marginRight: '10px' }} size="2x" />
    <div>
      <h1 style={{ fontFamily: 'sans-serif', fontSize: '30px', margin: '0' }}>10 Days</h1>
      <p style={{ color: "#828282", margin: '0' }}>Staff Deployment</p>
    </div>

  </div>
</OverlappingContent1>

    <OverlappingContent2>
    <div>
    <h1 style={{ fontFamily: 'sans-serif', fontSize: '40px' }}>$0.5 Million</h1>
    <p>Reduced client expenses <br /> by saving on hiring and <br /> employee costs.</p>
    </div>
    </OverlappingContent2>

      </div>

      <div style={{ height: '850px', width: '1485px', backgroundColor: '#E8EEE7', marginLeft: '20px' }}>
        <BottomContentContainer>
          <p style={{ color: '#9E9D9D', fontSize: '20px', fontFamily: 'jokerman' }}>What's on your mind</p>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '40px' }}>Ask Questions</h1>
        </BottomContentContainer>
        <ParagraphContainer>
          <TextWithToggle>
            <p style={{marginRight: '400px'}}>Do you offer freelancers?</p>
            <ToggleIcon onClick={() => toggleDropdown(0)}>
              {dropdownOpen[0] ? '-' : '+'}
            </ToggleIcon>
          </TextWithToggle>
          <AnswerDropdown isOpen={dropdownOpen[0]}>
            <p>Yes, we offer freelancers for various projects.</p>
          </AnswerDropdown>
          <br />
          <TextWithToggle>
            <p style={{marginRight: '273px'}}>What's the guarantee that I will be satisfied <br /> with the hired talent?</p>
            <ToggleIcon onClick={() => toggleDropdown(1)}>
              {dropdownOpen[1] ? '-' : '+'}
            </ToggleIcon>
          </TextWithToggle>
          <AnswerDropdown isOpen={dropdownOpen[1]}>
            <p>We ensure high-quality talent and provide replacement options if needed.</p>
          </AnswerDropdown>
          <br />
          <TextWithToggle>
            <p style={{marginRight: '334px'}}> Can I hire multiple talents at once?</p>
            <ToggleIcon onClick={() => toggleDropdown(2)}>
              {dropdownOpen[2] ? '-' : '+'}
            </ToggleIcon>
          </TextWithToggle>
          <AnswerDropdown isOpen={dropdownOpen[2]}>
            <p>
              If unhappy with the project, communicate with the freelancer, allow for revisions,
              and refer to the agreement. Escalate to platform support if needed, considering
              meditation. Review policies, seek collaborative solutions for resolutions.
            </p>
          </AnswerDropdown>
          <br />
          <TextWithToggle>
            <p style={{marginRight: '276px'}}>Why should I not go to an agency directly?</p>
            <ToggleIcon onClick={() => toggleDropdown(3)}>
              {dropdownOpen[3] ? '-' : '+'}
            </ToggleIcon>
          </TextWithToggle>
          <AnswerDropdown isOpen={dropdownOpen[3]}>
            <p>
              We provide personalized services and a diverse talent pool tailored to your needs.
            </p>
          </AnswerDropdown>
          <br />
          <TextWithToggle>
            <p style={{marginRight: '153px'}}>Who can help me pick the right skillset and duration for me?</p>
            <ToggleIcon onClick={() => toggleDropdown(4)}>
              {dropdownOpen[4] ? '-' : '+'}
            </ToggleIcon>
          </TextWithToggle>
          <AnswerDropdown isOpen={dropdownOpen[4]}>
            <p>Our dedicated team will assist you in selecting the appropriate skillset.</p>
          </AnswerDropdown>
        </ParagraphContainer>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
        <p>Talup 2023. All rights reserved</p>
        <div style={{display: 'flex'}}>
        <p style={{marginRight: '30px'}}>Terms & conditions</p>
        <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
}
