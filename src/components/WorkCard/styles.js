import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 33.33%;
  height: 270px;
  max-height: 270px;
  min-width: 400px;
  padding: 2px;
  position: relative;
  overflow: hidden;
  &:hover > div {
    left: 0 !important;
  }
  &:hover > img {
    filter: blur(1.5rem) !important;
  }

  @media (max-width: 440px) {
    width: 320px;
    min-width: 350px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
`

export const TextWrapper = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  color: #4c5c68;
  letter-spacing: normal;
  margin-bottom: 15px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #7d91a1;
`
export const Anchor = styled.a`
  color: #ff5851;
  text-decoration: none;
  position: absolute;
  bottom: 20px;
  transition: all 0.2s ease-in-out;
  background-color: white;
  width: 100%;

  &:after {
    content: '→';
    margin-left: -20px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    &:after {
      margin-left: 6px !important;
      opacity: 1;
    }
  }
`
