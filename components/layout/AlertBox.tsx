import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';

interface ComponentProps {
    icon: string;
    backgroundColor: string;
}


const AlertBox: React.FC<ComponentProps> = ({backgroundColor, icon, children}) => {
    return (
        <AlertBoxInner backgroundColor={backgroundColor}>
            <img src={icon}/>
            <div>{children}</div>
        </AlertBoxInner>
    );
}

const AlertBoxInner = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  background-color: ${(props) => props.backgroundColor};
  padding: 24px;
`

export default AlertBox;
