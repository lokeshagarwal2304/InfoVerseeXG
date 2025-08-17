import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, ToggleButtonGroup, ToggleButton, Divider, WidgetContainer, WidgetButton } from './ProjectsStyle'
import ProjectsSlider from './ProjectsSlider'




const translations = {
  en: {
    title: 'Projects',
    desc: "I've explored a variety of projects, from Java to Web applications, IoT Models to Machine Learning DataModels, each aimed at creating meaningful experiences. Here’s a look at some of my work.",
    all: 'All',
    web: "WEB APP'S",
    android: 'REAL TIME IOT MODELS',
    ml: 'MACHINE LEARNING',
    widgetAll: 'All',
    widgetSlider: 'Slider',
    widgetBox: 'Box',
  },
  hi: {
    title: 'परियोजनाएँ',
  // desc: 'मैंने विभिन्न परियोजनाओं का अन्वेषण किया है, जावा से लेकर वेब एप्लिकेशन, IoT मॉडल से लेकर मशीन लर्निंग डेटा मॉडल तक, प्रत्येक का उद्देश्य सार्थक अनुभव बनाना है। यहाँ मेरे कुछ कार्यों की झलक है।',
    all: 'सभी',
    web: 'वेब ऐप्स',
    android: 'रीयल टाइम IoT मॉडल',
    ml: 'मशीन लर्निंग',
    widgetAll: 'सभी',
    widgetSlider: 'स्लाइडर',
    widgetBox: 'बॉक्स',
    // Feminine language is already used in this section, but if you want to further emphasize, you can change 'अन्वेषण किया है' to 'अन्वेषण की है' and 'बनाना है' to 'बनाना है' (which is already gender-neutral).
    desc: 'मैंने विभिन्न परियोजनाओं का अन्वेषण की है, जावा से लेकर वेब एप्लिकेशन, IoT मॉडल से लेकर मशीन लर्निंग डेटा मॉडल तक, प्रत्येक का उद्देश्य सार्थक अनुभव बनाना है। यहाँ मेरे कुछ कार्यों की झलक है।',
  },
  te: {
    title: 'ప్రాజెక్టులు',
    desc: 'నేను వివిధ ప్రాజెక్టులను అన్వేషించాను, జావా నుండి వెబ్ అప్లికేషన్లు, IoT మోడల్స్ నుండి మెషిన్ లెర్నింగ్ డేటా మోడల్స్ వరకు, ప్రతి ఒక్కటి అర్థవంతమైన అనుభవాలను సృష్టించడమే లక్ష్యంగా ఉంది. ఇవే నా కొంత పని. (మహిళ)',
    all: 'అన్నీ',
    web: 'వెబ్ యాప్స్',
    android: 'రియల్ టైమ్ IoT మోడల్స్',
    ml: 'మెషిన్ లెర్నింగ్',
    widgetAll: 'అన్నీ',
    widgetSlider: 'స్లైడర్',
    widgetBox: 'బాక్స్',
  }
};

const Projects = ({ openModal, setOpenModal, lang }) => {
  const [toggle, setToggle] = useState('all');
  const [widget, setWidget] = useState('all');
  const t = translations[lang] || translations.en;
  return (
  <Container id="projects">
      <Wrapper>
        <Title>{t.title}</Title>
        <Desc>
          <i>{t.desc}</i>
        </Desc>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>{t.all}</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>{t.all}</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => setToggle('web app')}>{t.web}</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>{t.web}</ToggleButton>
            }
            <Divider />
            {toggle === 'android app' ?
              <ToggleButton active value="android app" onClick={() => setToggle('android app')}>{t.android}</ToggleButton>
              :
              <ToggleButton value="android app" onClick={() => setToggle('android app')}>{t.android}</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>{t.ml}</ToggleButton>
              :
              <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>{t.ml}</ToggleButton>
            }
          </ToggleButtonGroup>
          {/* Widget next to Machine Learning */}
          {toggle === 'machine learning' && (
            <WidgetContainer>
              <WidgetButton active={widget === 'all'} onClick={() => setWidget('all')}>{t.widgetAll}</WidgetButton>
              <WidgetButton active={widget === 'slider'} onClick={() => setWidget('slider')}>{t.widgetSlider}</WidgetButton>
              <WidgetButton active={widget === 'box'} onClick={() => setWidget('box')}>{t.widgetBox}</WidgetButton>
            </WidgetContainer>
          )}
        </div>
        <ProjectsSlider openModal={openModal} setOpenModal={setOpenModal} category={toggle} />
      </Wrapper>
    </Container>
  )
}

export default Projects