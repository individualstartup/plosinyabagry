import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';
import {Icon} from "../styled";

interface ComponentProps {
    icon: string;
}


const IconPanel: React.FC<ComponentProps> = ({icon, children}) => {
    return (
        <IconPanelWrapper>
            <Icon src={icon} style={{height: "24px"}}></Icon>
            <Content>{children}</Content>
        </IconPanelWrapper>
    );
}


const Content = styled.div`
  display: flex
`
const IconPanelWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`

export default IconPanel;
