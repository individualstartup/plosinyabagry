import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';

interface ComponentProps {
    heading: string;
    description: string;
}


const Function: React.FC<ComponentProps> = ({heading, description}) => {
    return (
        <FunctionWrapper>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
        </FunctionWrapper>
    );
}

const Heading = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #484848;
`

const Paragraph = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #484848;
`

const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export default Function;
