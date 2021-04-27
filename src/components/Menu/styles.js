import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  width: 80%;
  padding: 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    width: 90%;
    padding: 20px 5px;
  }
`

export const MenuContainer = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-around;
  transition: all 0.2s ease;
  @media (max-width: 778px) {
    position: fixed;
    flex-direction: column;
    background-color: #355070;
    top: 0;
    left: ${({ open }) => (open ? '0' : '100%')};
    align-items: center;
    height: 100vh;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }
`

export const BurguerContainer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 10;
  overflow: hidden;

  @media (min-width: 779px) {
    display: none;
  }
`

export const Burguer = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 5px;
  transform-origin: 0px;
  transition: all 0.2s ease;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`

export const Logo = styled.a`
  font-size: 22px;
  color: white;
  text-decoration: none;
  line-height: 24px;
  letter-spacing: 0.015em;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    color: #dee0e3;
  }
`

export const Link = styled.a`
  font-size: 12px;
  color: white;
  text-decoration: none;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.015em;
  transition: all 0.2s ease;
  &:hover {
    color: #c8ccd0;
  }

  @media (max-width: 778px) {
    font-size: 22px;
  }
`
