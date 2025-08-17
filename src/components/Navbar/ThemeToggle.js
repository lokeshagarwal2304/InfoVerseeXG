import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  margin-left: 5mm;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, border 0.3s;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const SunIcon = () => (
  <svg width="22" height="22" fill="none" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg width="22" height="22" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <ToggleButton onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle theme">
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
};

export default ThemeToggle;
