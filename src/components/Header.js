import React from 'react'
import styled from 'styled-components'
import ReactIcon from '../images/react-icon.png'
import { MEDIA, Container } from './Framework'
// import GitHub from 'react-feather/dist/icons/github'
import Menu from 'react-feather/dist/icons/menu'

const HeaderRoot = styled.header`
  position: relative;
  background: #222;
  padding: 25px 0 5px 0;
  text-align: center;
  margin-bottom: 50px;
`

const Logo = styled.img`
  height: 60px;
  margin: 0px;
`

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 8px;
  color: #fff;
`

// const ButtonLink = styled(ExternalLink)`
//   background: rgba(255, 255, 255, 0.2);
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   padding: 12px 24px;
//   border-radius: 4px;
//   transition: all 0.15s;
//   color: #663399;
//   margin: 0 10px 10px;
//   font-weight: 500;
//   position: absolute;
//   right: 0px;
//   top: 0px;

//   &:hover {
//     color: #663399;
//     background: white;
//     border-bottom-color: white;
//     box-shadow: 0 8px 16px -2px rgba(0, 32, 128, 0.25);
//   }
// `

const MenuButton = styled.button`
  position: absolute;
  top: -10px;
  left: 15px;
  color: inherit;
  font-weight: bold;
  border: none;
  background: none;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 0;

  ${MEDIA.lg} {
    display: none;
  }
`

// const iconStyles = {
//   verticalAlign: -6,
//   marginRight: 10,
// }

// const githubStyles = {
//   ...iconStyles,
//   color: '#333',
// }

const menuStyles = {
  width: 36,
  height: 36,
}

function Header({ openNav }) {
  return (
    <HeaderRoot>
      <Container>
        <MenuButton aria-label="Menu" onClick={openNav}>
          <Menu style={menuStyles} />
        </MenuButton>
        <a href="https://react.com/">
          <Logo src={ReactIcon} draggable="false" />
        </a>
        <Title>MediaMonks BA - React Workshop</Title>
        {/* <Flex justify="center">
          <ButtonLink href="https://github.com/agustinmulet/gatsbyworkshop">
            <GitHub style={githubStyles} />
            Github
          </ButtonLink>
        </Flex> */}
      </Container>
    </HeaderRoot>
  )
}

export default Header
