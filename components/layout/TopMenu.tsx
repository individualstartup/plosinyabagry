import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';

interface ComponentProps {
}


const TopMenu: React.FC<ComponentProps> = () => {
    return (
        <MenuParent><MenuWrapper>
            <Logo src={"/icons/logo.svg"} alt={"Logo"} style={{height: "24px"}}/>
        </MenuWrapper></MenuParent>
    );
}

const Burger = styled.img`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`
const Logo = styled.img`
`

const MenuParent = styled.div`
  display: flex;
  background: linear-gradient(0deg, rgba(85, 85, 85, 0.04), rgba(85, 85, 85, 0.04)), #FFFFFF;
  position: sticky;
  width: 100%;
  top: 0;
  padding: 0rem 0.8rem;
  z-index: 100;
`
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 104px;
  z-index: 100;
`

export default TopMenu;
