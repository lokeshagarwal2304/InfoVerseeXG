import React from 'react';
import styled from 'styled-components';
const icons = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gayatri-g/',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#0A66C2" />
        <path d="M12.225 13.333H9.333v9.334h2.892v-9.334zM10.779 12.225a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334zM22.667 17.333c0-2.2-1.2-3.2-2.8-3.2-1.2 0-1.733.667-2.033 1.133v-1h-2.892c.04.667 0 9.334 0 9.334h2.892v-5.2c0-.28.02-.56.1-.76.2-.48.66-.98 1.43-.98 1.01 0 1.413.74 1.413 1.82v5.12h2.89v-5.44z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/gayatri192005',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#000" />
        <path d="M22.7 10h-2.1l-3.1 4.2L14.2 10h-2.1l3.2 4.7L12 22h2.1l3.2-4.4 3.2 4.4h2.1l-3.3-4.8L22.7 10zm-4.3 6.2l-1.1-1.5-1.1 1.5-2.1 2.9h6.4l-2.1-2.9z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/gayatri192005',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#FFA116" />
        <path d="M21.333 16c0 2.946-2.387 5.333-5.333 5.333S10.667 18.946 10.667 16s2.387-5.333 5.333-5.333S21.333 13.054 21.333 16zm-5.333-4.444A4.444 4.444 0 0012.222 16a4.444 4.444 0 004.444 4.444A4.444 4.444 0 0021.111 16a4.444 4.444 0 00-4.444-4.444z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/gayatri192005',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#181717" />
        <path d="M16 8c-4.418 0-8 3.582-8 8 0 3.536 2.293 6.536 5.5 7.594.4.074.546-.174.546-.386 0-.19-.007-.693-.011-1.36-2.238.486-2.71-1.079-2.71-1.079-.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.803.057 1.225.825 1.225.825.715 1.225 1.874.872 2.332.667.072-.518.28-.872.508-1.073-1.786-.203-3.664-.893-3.664-3.976 0-.878.314-1.596.824-2.159-.083-.203-.357-1.02.078-2.127 0 0 .672-.215 2.2.823a7.66 7.66 0 012.004-.27c.68.003 1.366.092 2.004.27 1.527-1.038 2.198-.823 2.198-.823.437 1.107.163 1.924.08 2.127.513.563.823 1.281.823 2.159 0 3.09-1.88 3.77-3.67 3.97.288.247.544.735.544 1.482 0 1.07-.01 1.933-.01 2.197 0 .214.144.463.55.384C21.71 22.535 24 19.535 24 16c0-4.418-3.582-8-8-8z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Devfolio',
    href: 'https://devfolio.co/@gayatri192005',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#3770FF" />
        <path d="M10 22V10h4.5c2.5 0 4 1.5 4 3.5 0 1.3-.7 2.3-1.8 2.8l2.3 5.7h-2.2l-2-5h-2.3V22H10zm2-7h2.2c1.1 0 1.8-.6 1.8-1.5S15.3 12 14.2 12H12v3z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/gayatri192005',
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="7" fill="url(#ig-gradient)" />
          <defs>
            <linearGradient id="ig-gradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f58529" />
              <stop offset="0.5" stopColor="#dd2a7b" />
              <stop offset="1" stopColor="#515bd4" />
            </linearGradient>
          </defs>
          <rect x="9" y="9" width="14" height="14" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="16" cy="16" r="4" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="21.2" cy="10.8" r="1.2" fill="#fff" />
        </svg>
      ),
  },
];

const SocialStrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: absolute;
  left: -140px;
  top: 0;
  height: 100%;
  z-index: 2;
  @media (max-width: 960px) {
    position: static;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

// Removed duplicate IconCircle definition. Only the larger 72px version remains below.
const IconCircle = styled.a`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #232b36;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  transition: transform 0.2s, border 0.2s;
  border: 3px solid #232b36;
  &:hover {
    transform: scale(1.08);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaVertical = () => (
  <SocialStrip>
    {icons.map((icon) => (
      <IconCircle
        key={icon.name}
        href={icon.href}
        target="_blank"
        rel="noopener noreferrer"
        gradient={icon.gradient}
        aria-label={icon.name}
      >
  {React.cloneElement(icon.svg, { width: 48, height: 48 })}
      </IconCircle>
    ))}
  </SocialStrip>
);

export default SocialMediaVertical;
