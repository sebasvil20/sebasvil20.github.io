import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5em auto 8em;
  text-align: center;
  @media (max-width: 394px) {
    width: 90%;
  }
`

export const Span = styled.span`
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 3px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: white;
  &:after,
  &:before {
    width: 35px;
    margin: 0 15px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    content: '';
    display: inline-block;
    vertical-align: super;
  }
  @media (max-width: 394px) {
    font-size: 9px;
    &:after,
    &:before {
      width: 20px;
    }
  }
`

export const Title = styled.h2`
  font-size: 2.7em;
  line-height: 48px;
  font-weight: 600;
  color: white;
  &:nth-child(3) {
    margin-bottom: 1em;
  }
  @media (max-width: 692px) {
    font-size: 2.3em;
  }
  @media (max-width: 364px) {
    font-size: 2em;
  }
`

export const Button = styled.a`
  width: 200px;
  border: 2px solid white;
  padding: 12px 32px;
  border-radius: 50px;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #4c5c68;
    background-color: white;
  }
`
