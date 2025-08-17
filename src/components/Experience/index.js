
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../About/Cards/ExperienceCard';
import { experiences } from '../../data/constants';

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
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;




const translations = {
    en: {
        title: 'Experience',
        desc: 'My work experience as a software engineer and working on different companies and projects.'
    },
    hi: {
        title: 'अनुभव',
        desc: 'सॉफ्टवेयर इंजीनियर के रूप में विभिन्न कंपनियों और परियोजनाओं पर काम करने का मेरा अनुभव।'
    },
    te: {
        title: 'అనుభవం',
        desc: 'వివిధ కంపెనీలు మరియు ప్రాజెక్టులపై పనిచేసిన నా సాఫ్ట్‌వేర్ ఇంజినీర్ అనుభవం.'
    }
};

const Experience = ({ lang }) => {
    const t = translations[lang] || translations.en;
    return (
        <Container id="experience">
            <Wrapper>
                <Title>{t.title}</Title>
                <Desc>{t.desc}</Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience