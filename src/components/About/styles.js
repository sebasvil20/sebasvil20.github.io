import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  margin: 0 auto 10em;
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1020px) {
    width: 90%;
  }
`
export const MainText = styled.h3`
  font-size: 2.7em;
  line-height: 54px;
  font-weight: 500;
  color: white;
  text-align: center;
  @media (max-width: 440px) {
    font-size: 2em;
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
  @media (max-width: 394px) {
    font-size: 9px;
  }
`
export const IconsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
`

export const Icon = styled.img`
  margin-top: 20px;
`

export const CVButton = styled.a`
  width: 300px;
  border: 2px solid white;
  padding: 12px 32px;
  border-radius: 50px;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 2em 0 10em;
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #4c5c68;
    background-color: white;
  }
`
