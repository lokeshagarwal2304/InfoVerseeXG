import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  padding: 80px 0 80px 0;
  @media (max-width: 768px) {
    padding: 60px 0 60px 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  position: relative;
  border-radius: 22px;
  padding: 18px 36px;
  z-index: 1;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  overflow: visible;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  &::before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    border-radius: 24px;
    padding: 0;
    z-index: -1;
    background: conic-gradient(
      from 0deg,
      #00fff7, #854CE6, #ff00cc, #00fff7 100%
    );
    animation: border-rotate 3s linear infinite;
    border: 0.5mm solid transparent;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  @keyframes border-rotate {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const pastelColors = [
  '#A7C7E7', // pastel blue
  '#FFD1DC', // pastel pink
  '#B5EAD7', // pastel green
  '#FFFACD', // pastel yellow
  '#FFB347', // pastel orange
  '#E2F0CB', // pastel mint
  '#CBAACB', // pastel purple
  '#FFDAC1', // pastel peach
  '#B5EAD7', // pastel teal
  '#E0BBE4', // pastel lavender
];

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  background: ${({ theme }) => theme.card};
  z-index: 1;
  overflow: visible;
  border: 0.5mm solid ${({ $pastel }) => $pastel};
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 14px;
    z-index: -1;
    pointer-events: none;
    /* No background, only border is colored */
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`



const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const translations = {
  en: {
    title: 'Skills',
    desc: 'A collection of skills I work with to create and solve, Skills that I practice and use to bring ideas to life.'
  },
  hi: {
    title: 'कौशल',
    desc: 'कौशलों का संग्रह जिनका उपयोग मैं समस्याओं को हल करने और विचारों को साकार करने के लिए करता हूँ।'
  },
  te: {
    title: 'నైపుణ్యాలు',
    desc: 'నేను సమస్యలను పరిష్కరించడానికి మరియు ఆలోచనలను నిజం చేయడానికి ఉపయోగించే నైపుణ్యాల సమాహారం.'
  }
};

const Skills = ({ lang }) => {
  const t = translations[lang] || translations.en;
  return (
    <Container id="skills">
      <Wrapper>
        <Title>{t.title}</Title>
        <Desc>{t.desc}</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem $pastel={pastelColors[idx % pastelColors.length]}>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills