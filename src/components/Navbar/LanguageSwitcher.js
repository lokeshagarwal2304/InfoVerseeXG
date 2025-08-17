import React from 'react';
import styled from 'styled-components';

const Switcher = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  margin-left: 12px;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  min-width: 120px;
`;

const LangButton = styled.button`
  background: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.white : theme.text_primary};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
  outline: none;
  border-left: 1.5px solid ${({ theme }) => theme.primary};
  &:first-child {
    border-left: none;
  }
  &:hover {
    background: ${({ theme }) => theme.primary + '22'};
  }
`;


const LanguageSwitcher = ({ lang, setLang }) => (
  <Switcher>
    <LangButton active={lang === 'en'} onClick={() => setLang('en')}>EN</LangButton>
    <LangButton active={lang === 'hi'} onClick={() => setLang('hi')}>HI</LangButton>
    <LangButton active={lang === 'te'} onClick={() => setLang('te')}>TE</LangButton>
  </Switcher>
);

export default LanguageSwitcher;
