
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from 'styled-components';
import ProjectCard from '../About/Cards/ProjectCards';
import { projects as allProjects } from '../../data/constants';

const SliderContainer = styled.div`
  width: 100vw;
  max-width: 1350px;
  margin: 0 auto;
  overflow: visible;
  position: relative;
  padding: 48px 0 48px 0;
  z-index: 2;
  .keen-slider {
    overflow: visible;
  }
`;

const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 460px;
  transition: transform 0.6s cubic-bezier(.4,2,.6,1), filter 0.4s;
  filter: ${({ $active }) => ($active ? 'brightness(1.1)' : 'brightness(0.7) blur(1.5px)')};
  transform: ${({ $center, $left, $right }) =>
    $center ? 'scale(1.12) translateY(-18px) rotateY(0deg)'
    : $left ? 'scale(0.92) translateY(12px) rotateY(18deg)'
    : $right ? 'scale(0.92) translateY(12px) rotateY(-18deg)'
    : 'scale(0.8) translateY(32px) rotateY(0deg)'};
  z-index: ${({ $center }) => ($center ? 2 : 1)};
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.card};
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;
const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;
const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
`;
const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ $active, theme }) => ($active ? theme.primary : '#d1d1d1')};
  transition: background 0.3s;
  cursor: pointer;
`;

const ProjectsSlider = ({ openModal, setOpenModal, category = 'all' }) => {
  const projects = category === 'all' ? allProjects : allProjects.filter(p => p.category === category);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 48,
      origin: 'center',
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    breakpoints: {
      '(max-width: 900px)': {
        slides: { perView: 1, spacing: 16, origin: 'center' },
      },
      '(max-width: 1400px)': {
        slides: { perView: 2, spacing: 32, origin: 'center' },
      },
    },
  });

  const goTo = idx => instanceRef.current?.moveToIdx(idx);
  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <SliderContainer>
      <LeftArrow onClick={prev}>&#8592;</LeftArrow>
      <div ref={sliderRef} className="keen-slider">
        {projects.map((project, idx) => {
          // 3D/coverflow effect: center, left, right
          const $center = currentSlide === idx;
          const $left = (idx === (currentSlide - 1 + projects.length) % projects.length);
          const $right = (idx === (currentSlide + 1) % projects.length);
          // Card click: bring to center if not centered, else open modal
          const handleCardClick = () => {
            if (!$center) goTo(idx);
            else setOpenModal({ state: true, project });
          };
          return (
            <StyledSlide
              className="keen-slider__slide"
              key={project.id}
              $active={$center}
              $center={$center}
              $left={$left}
              $right={$right}
            >
              <ProjectCard
                project={{ ...project, isActive: $center, onCardClick: handleCardClick }}
                setOpenModal={setOpenModal}
              />
            </StyledSlide>
          );
        })}
      </div>
      <RightArrow onClick={next}>&#8594;</RightArrow>
      <Dots>
        {projects.map((_, idx) => (
          <Dot key={idx} $active={currentSlide === idx} onClick={() => goTo(idx)} />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default ProjectsSlider;
