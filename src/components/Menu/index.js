import React, { useState } from 'react'
import {
  HeaderContainer,
  MenuContainer,
  Logo,
  Link,
  Burguer,
  BurguerContainer,
} from './styles'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer>
      <Logo href='#!'>Sebastían Villegas</Logo>
      <BurguerContainer open={open} onClick={() => setOpen(!open)}>
        <Burguer open={open} />
        <Burguer open={open} />
        <Burguer open={open} />
      </BurguerContainer>
      <MenuContainer open={open}>
        <Link href='#home' onClick={() => setOpen(!open)}>
          Hi
        </Link>
        <Link href='#about' onClick={() => setOpen(!open)}>
          About me
        </Link>
        <Link href='#portfolio' onClick={() => setOpen(!open)}>
          Featured Works
        </Link>
        <Link
          href='https://www.linkedin.com/in/sebasvil20/'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => setOpen(!open)}
        >
          Hire me
        </Link>
      </MenuContainer>
    </HeaderContainer>
  )
}
