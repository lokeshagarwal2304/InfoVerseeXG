import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;

  &:hover,
  &:focus {
    transform: scale(1.08);
    z-index: 2;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '56px' : '50px'};
  line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '76px' : '68px'};
  margin-bottom: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '12px' : '0'};
  letter-spacing: 0.5px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '44px' : '40px'};
    line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '56px' : '48px'};
  }
  @media (max-width: 640px) {
    font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '34px' : '30px'};
    line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '44px' : '38px'};
    margin-bottom: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '10px' : '8px'};
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  display: flex;
  gap: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '14px' : '12px'};
  color: ${({ theme }) => theme.text_primary};
  font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '38px' : '32px'};
  line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '72px' : '68px'};
  margin-bottom: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '8px' : '0'};
  @media (max-width: 960px) {
    text-align: center;
    font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '28px' : '22px'};
    line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '52px' : '48px'};
  }
  @media (max-width: 640px) {
    font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '20px' : '16px'};
    line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '36px' : '32px'};
    margin-bottom: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '12px' : '16px'};
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.text_primary + 95};
  letter-spacing: 0.1px;
  font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '26px' : '20px'};
  line-height: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '40px' : '32px'};
  margin-bottom: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '48px' : '42px'};
  @media (max-width: 960px) {
    text-align: center;
    font-size: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '20px' : '16px'};
    line-height: 32px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: ${({ lang }) => (lang === 'hi' || lang === 'te') ? '24px' : '18px'};
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
