import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Chatbot from './Chatbot';
import { FaStar } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: ${({ y }) => y || '18%'};
  ${({ side }) => side === 'right' ? 'right: 0;' : 'left: 0;'}
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: ${({ side }) => side === 'right' ? 'flex-end' : 'flex-start'};
  @media (max-width: 600px) {
    top: ${({ y }) => y || '8%'};
  }
`;

const Tab = styled.div`
  background: linear-gradient(135deg, #0B132B 60%, #A259FF 100%);
  color: #FFD700;
  border-radius: 16px 0 0 16px;
  padding: 8px 4px 8px 4px;
  font-size: 1.1rem;
  font-family: 'Orbitron', 'Poppins', sans-serif;
  font-weight: bold;
  box-shadow: 0 2px 12px #0003;
  cursor: pointer;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.2s;
  min-width: 28px;
  min-height: 90px;
  width: 32px;
  &:hover {
    background: linear-gradient(135deg, #A259FF 60%, #FFD700 100%);
    color: #fff;
  }
`;

const ChatbotWrapper = styled.div`
  transition: transform 0.3s, opacity 0.3s;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(110%)'};
  opacity: ${({ open }) => open ? 1 : 0};
  pointer-events: ${({ open }) => open ? 'all' : 'none'};
  box-shadow: 0 8px 32px #0005;
  border-radius: 18px 0 18px 18px;
  margin-right: 8px;
  margin-top: 0;
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    min-width: 0;
    margin-right: 2vw;
  }
`;

export default function IktaraSidebar() {
  const [open, setOpen] = useState(false);
  const [y, setY] = useState('18%');
  const [side, setSide] = useState('right');
  const dragging = useRef(false);
  const startY = useRef(0);
  const startTop = useRef(0);

  const onMouseDown = (e) => {
    dragging.current = true;
    startY.current = e.clientY;
    startTop.current = parseInt(y) || 0;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  const onMouseMove = (e) => {
    if (!dragging.current) return;
    let newTop = startTop.current + (e.clientY - startY.current);
    if (newTop < 10) newTop = 10;
    if (newTop > window.innerHeight - 120) newTop = window.innerHeight - 120;
    setY(newTop + 'px');

    // Snap to left or right if dragged past edge
    if (e.clientX < window.innerWidth / 2 && side !== 'left') {
      setSide('left');
    } else if (e.clientX >= window.innerWidth / 2 && side !== 'right') {
      setSide('right');
    }
  };
  const onMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  return (
    <SidebarContainer y={y} side={side}>
      <Tab
        onClick={() => setOpen(o => !o)}
        title="Open Iktara Chatbot"
        onMouseDown={onMouseDown}
        style={{ cursor: 'grab', userSelect: 'none', position: 'relative' }}
      >
        <FaStar style={{ marginBottom: 2, fontSize: '1.1rem', filter: 'drop-shadow(0 0 4px #FFD700)' }} />
        <span style={{
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
          letterSpacing: '2px',
          fontSize: '1.1rem',
          marginTop: 2,
          fontFamily: 'Orbitron, Poppins, sans-serif',
          transform: 'rotate(180deg)',
        }}>Iktara</span>
      </Tab>
      <ChatbotWrapper open={open}>
        <Chatbot />
      </ChatbotWrapper>
    </SidebarContainer>
  );
}
