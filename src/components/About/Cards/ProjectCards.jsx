import React, { useRef, useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 270px;
    height: 390px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadow || '0 0 10px 3px rgba(0,0,0,0.07)'};
    border: 1.2px solid ${({ theme }) => theme.card_light || '#f5f3ff'};
    overflow: hidden;
    padding: 14px 10px 12px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: box-shadow 0.3s, border 0.3s, filter 0.3s, transform 0.1s;
    will-change: transform;
    position: relative;
    &:hover {
        box-shadow: 0 0 12px 2px #00fff7aa, 0 0 3px 1px ${({ theme }) => theme.primary};
        border: 1.7px solid #00fff7cc;
        filter: brightness(1.10);
    }
    &:hover ${Button} {
        display: block;
    }
`
const TechIcons = styled.div`
    position: absolute;
    top: 18px;
    right: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 0;
    transform: translateY(-20px) scale(0.8);
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    z-index: 2;
    ${Card}:hover & {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
    }
`

const TechIcon = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 6px;
    box-shadow: 0 0 8px 2px #00fff7cc;
    background: #fff;
    padding: 2px;
    margin-bottom: 2px;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.15) rotate(-8deg);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`


// 3D Tilt logic
const calcTilt = (x, y, rect) => {
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    const tiltX = (py - 0.5) * 20; // up/down
    const tiltY = (px - 0.5) * 20; // left/right
    return { tiltX, tiltY };
};

const ProjectCards = ({project, setOpenModal}) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
    const [isHover, setIsHover] = useState(false);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const { tiltX, tiltY } = calcTilt(e.clientX, e.clientY, rect);
        setTilt({ tiltX, tiltY });
    };
    const handleMouseLeave = () => {
        setTilt({ tiltX: 0, tiltY: 0 });
        setIsHover(false);
    };
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    // Example: project.techIcons = [ {src: '...', alt: 'React'}, ... ]

    // Accept props for slider context: isActive, onCardClick
    // Fallback to modal open if not provided
    const { isActive, onCardClick } = project;
    // Only center card zooms on hover, side cards stay scaled down
    let scale = 0.88;
    if (isActive) scale = isHover ? 1.18 : 1.08;
    return (
        <Card
            ref={cardRef}
            onClick={onCardClick ? (e) => { e.stopPropagation(); onCardClick(); } : () => setOpenModal({state: true, project: project})}
            style={{
                transform: `perspective(1100px) rotateX(${tilt.tiltX}deg) rotateY(${-tilt.tiltY}deg) scale(${scale})`,
                boxShadow: isActive && isHover
                  ? '0 0 40px 8px #00fff7cc, 0 0 12px 2px #fff'
                  : isActive
                  ? '0 0 28px 4px #00fff799, 0 0 8px 1px #fff'
                  : '0 2px 8px rgba(0,0,0,0.08)',
                zIndex: isActive ? 3 : 1,
                transition: isHover
                  ? 'transform 0.12s cubic-bezier(.4,2,.6,1), box-shadow 0.18s'
                  : 'transform 0.5s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
            }}
            onMouseMove={isActive ? handleMouseMove : undefined}
            onMouseLeave={isActive ? handleMouseLeave : undefined}
            onMouseEnter={isActive ? handleMouseEnter : undefined}
        >
            <TechIcons>
                {project.techIcons?.map((icon, idx) => (
                    <TechIcon key={idx} src={icon.src} alt={icon.alt || ''} title={icon.alt || ''} />
                ))}
            </TechIcons>
            <Image src={project.image} style={{ transition: 'transform 0.4s', transform: isActive && isHover ? 'scale(1.08)' : 'scale(1)' }} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, idx) => (
                    <Avatar key={idx} src={member.img}/>
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
        </Card>
    );
}

export default ProjectCards