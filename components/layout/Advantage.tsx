import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';

interface ComponentProps {
    icon : string;
    description : string;
}


const Advantage: React.FC<ComponentProps> = ({icon, description}) => {
    return (
        <AdvantageInner>
            <img src={icon} style={{width: "54px"}}/>
            <Description>{description}</Description>
        </AdvantageInner>
    );
}

const Description = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #2F2F2F;
`

const AdvantageInner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  justify-content: center;
  align-items: center;
  width: 103px;
  text-align: center
`

export default Advantage;
