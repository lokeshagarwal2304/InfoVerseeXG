import React from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% { filter: drop-shadow(0 0 6px #FFD700); }
  50% { filter: drop-shadow(0 0 18px #A259FF); }
  100% { filter: drop-shadow(0 0 6px #FFD700); }
`;

const FloatingStar = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Star = styled.div`
  font-size: 0.95rem;
  animation: ${glow} 2s infinite;
  color: #FFD700;
  background: linear-gradient(135deg, #A259FF 0%, #FFD700 100%);
  border-radius: 50%;
  padding: 2px 4px;
  box-shadow: 0 0 5px #A259FF55;
`;

const Label = styled.div`
  font-family: 'Orbitron', 'Poppins', sans-serif;
  font-size: 0.7rem;
  color: #FFD700;
  font-weight: bold;
  margin-top: 1px;
  letter-spacing: 0.5px;
  text-shadow: 0 0 2px #0B132B;
`;

export default function StarLogo() {
  return (
    <FloatingStar>
      <Star>⭐</Star>
      <Label>Iktara</Label>
    </FloatingStar>
  );
}
