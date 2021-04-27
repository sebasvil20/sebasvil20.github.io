import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  margin: auto;
  padding: 0.5em 2em 2em;
  text-align: center;

  @media (max-width: 440px) {
    width: 100%;
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
export const CardsContainer = styled.div`
  width: 80%;
  margin: 1em auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
