import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import SocialMediaVertical from './SocialMediaVertical';
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';



const translations = {
    en: {
        hi: 'Hi, I am',
        iama: 'I am a',
        roles: Bio.roles,
        desc: Bio.description,
        resume: 'Check Resume',
    },
    hi: {
        hi: 'नमस्ते, मैं हूँ',
        iama: 'मैं हूँ',
        roles: ['Full स्टैक डेवलपर', 'डिज़ाइनर', 'एआई इच्छुक', 'प्रोग्रामर'],
        desc: 'मैं एक ऊर्जावान और दूरदर्शी महिला हूँ जो विचारों को प्रभाव में बदलने में विश्वास रखती हूँ। नेतृत्व और सहयोग की भावना के साथ, मैं हर अनुभव से सीखती हूँ और नवाचार के लिए तत्पर रहती हूँ।',
        resume: 'रिज़्यूमे देखें',
    },
    te: {
        hi: 'హాయ్, నేను',
        iama: 'నేను',
        roles: ['ఫుల్ స్టాక్ డెవలపర్', 'డిజైనర్', 'AI ఆసక్తి', 'ప్రోగ్రామర్'],
        desc: 'నేను ఆలోచనలను ప్రభావంగా మార్చడంలో నమ్మకంతో కూడిన శక్తివంతమైన మరియు దూరదృష్టి గల మహిళను. నాయకత్వం మరియు సహకార భావనతో, ప్రతి అనుభవం నుండి నేర్చుకుంటూ, కొత్తదనాన్ని కోరుకుంటాను.',
        resume: 'రెజ్యూమ్ చూడండి',
    }
};


const HeroSection = ({ lang = 'en' }) => {
    const t = translations[lang] || translations.en;
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', position: 'relative', marginTop: '16px' }}>
                        <SocialMediaVertical />
                        <div style={{ marginLeft: 32 }}>
                          <Title lang={lang}>{t.hi} <br /> {Bio.name}</Title>
                          <TextLoop lang={lang}>
                              {t.iama}
                              <Span>
                                  <Typewriter
                                      options={{
                                          strings: t.roles,
                                          autoStart: true,
                                          loop: true,
                                      }}
                                  />
                              </Span>
                          </TextLoop>
                          <SubTitle lang={lang}>{t.desc}</SubTitle>
                          <ResumeButton href={Bio.resume} target='display'>{t.resume}</ResumeButton>
                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection