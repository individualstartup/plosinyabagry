import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';

interface ComponentProps {
    icon : string;
    text: string;
}


const Tip: React.FC<ComponentProps> = ({text, icon}) => {
    return (
        <TipInner>
            <img src={icon} />
            <p>{text}</p>
        </TipInner>
    );
}

const TipInner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    color: #2F2F2F;
  }
`

export default Tip;
