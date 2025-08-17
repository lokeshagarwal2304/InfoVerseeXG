import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

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


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`




const translations = {
  en: {
    title: 'Contact',
    desc: 'Feel free to reach out to me for any questions or opportunities!',
    emailMe: 'Email Me 🚀',
    yourEmail: 'Your Email',
    yourName: 'Your Name',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    success: 'Email sent successfully!'
  },
  hi: {
    title: 'संपर्क करें',
  desc: 'किसी भी प्रश्न या अवसर के लिए मुझसे बेझिझक संपर्क करें! (महिला)',
    emailMe: 'मुझे ईमेल करें 🚀',
    yourEmail: 'आपका ईमेल',
    yourName: 'आपका नाम',
    subject: 'विषय',
    message: 'संदेश',
    send: 'भेजें',
    success: 'ईमेल सफलतापूर्वक भेजा गया!'
  },
  te: {
    title: 'సంప్రదించండి',
  desc: 'సహకారాల కోసం లేదా స్నేహపూర్వకంగా హాయ్ చెప్పడానికి నన్ను సంప్రదించండి! (మహిళ)',
    emailMe: 'నాకు ఇమెయిల్ చేయండి 🚀',
    yourEmail: 'మీ ఇమెయిల్',
    yourName: 'మీ పేరు',
    subject: 'విషయం',
    message: 'సందేశం',
    send: 'పంపండి',
    success: 'ఇమెయిల్ విజయవంతంగా పంపబడింది!'
  }
};

const Contact = ({ lang }) => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();
  const t = translations[lang] || translations.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ekk5p3k', 'template_qq7cn7p', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container>
      <Wrapper>
        <Title>{t.title}</Title>
        <Desc>{t.desc}</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>{t.emailMe}</ContactTitle>
          <ContactInput placeholder={t.yourEmail} name="from_email" />
          <ContactInput placeholder={t.yourName} name="from_name" />
          <ContactInput placeholder={t.subject} name="subject" />
          <ContactInputMessage placeholder={t.message} rows="4" name="message" />
          <ContactButton type="submit" value={t.send} />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={t.success}
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact