import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
    label: string;
    href? : string;
}


const Button: React.FC<ComponentProps> = ({label, href}) => {
    return (
        <ButtonInner href={href}>
            <ButtonText>{label}</ButtonText>
        </ButtonInner>
    );
}

const ButtonInner = styled.a`
  display: flex;
  background: linear-gradient(93.74deg, #FA7800 0%, #E35F00 100%);
  border-radius: 4px;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
`

const ButtonText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: white;
`

export default Button;
