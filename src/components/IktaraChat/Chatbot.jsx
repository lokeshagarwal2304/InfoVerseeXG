import React, { useState, useRef, useEffect } from 'react';
import { Bio, education, skills, experiences, projects } from '../../data/constants';
import styled, { ThemeProvider } from 'styled-components';

const SettingsPanel = styled.div`
  position: absolute;
  top: 16px;
  left: 60px;
  background: #fff;
  color: #222;
  border-radius: 10px;
  box-shadow: 0 2px 12px #0002;
  padding: 18px 20px 14px 20px;
  z-index: 100;
  min-width: 180px;
`;

const LangOption = styled.button`
  display: block;
  width: 100%;
  background: ${({ active }) => active ? '#A259FF' : 'none'};
  color: ${({ active }) => active ? '#fff' : '#222'};
  border: none;
  border-radius: 6px;
  padding: 7px 0;
  margin-bottom: 7px;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  &:hover { background: #A259FF; color: #fff; }
`;

const theme = {
  dark: {
    bg: '#0B132B',
    user: '#A259FF',
    bot: '#FFD700',
    text: '#fff',
    sidebar: '#181F3A',
  },
  light: {
    bg: '#fff',
    user: '#A259FF',
    bot: '#FFD700',
    text: '#222',
    sidebar: '#F3F3F3',
  }
};

const Container = styled.div`
  display: flex;
  height: 400px;
  width: 340px;
  background: ${({ theme }) => theme.bg};
  border-radius: 18px;
  box-shadow: 0 4px 32px #0002;
  overflow: hidden;
  position: relative;
`;

const Sidebar = styled.div`
  width: 56px;
  background: ${({ theme }) => theme.sidebar};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 18px;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  color: #FFD700;
  margin-bottom: 8px;
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
  transition: color 0.2s;
  &:hover { color: #A259FF; }
`;

const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0B132B 0%, #181F3A 100%);
  padding: 0 0 8px 0;
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 12px 0 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Bubble = styled.div`
  align-self: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
  background: ${({ user, theme }) => user ? theme.user : theme.bot};
  color: ${({ user }) => (user ? '#fff' : '#222')};
  padding: 8px 14px;
  border-radius: 16px;
  max-width: 80%;
  font-size: 0.98rem;
  box-shadow: 0 2px 8px #0001;
  white-space: pre-line;
`;

const InputRow = styled.form`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 1rem;
  background: #fff2;
  color: ${({ theme }) => theme.text};
  outline: none;
`;

const SendBtn = styled.button`
  background: none;
  border: none;
  color: #A259FF;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Typing = styled.div`
  font-size: 0.95rem;
  color: #FFD700;
  margin: 0 0 8px 8px;
  font-style: italic;
`;

const ToggleTheme = styled.button`
  background: none;
  border: none;
  color: #FFD700;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: auto;
`;


export default function Chatbot() {
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([
    { user: false, text: getGreeting('en') }
  ]);
  const [input, setInput] = useState('');
  const [themeMode, setThemeMode] = useState('dark');
  const [typing, setTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [language, setLanguage] = useState('en'); // en, hi, te
  const messagesEndRef = useRef(null);

  function getGreeting(lang) {
    if (lang === 'hi') {
      return "Namaste! Main Iktara hoon ⭐ Ek hi sitara. Aap kaise ho? Aapka naam kya hai?\nPickup line: 'Aap toh us taare ki tarah ho jo raat ko roshan kar de!'";
    } else if (lang === 'te') {
      return "హాయ్! నేను ఇక్తారా ⭐ ఒకే ఒక్క నక్షత్రం. మీరు ఎలా ఉన్నారు? మీ పేరు ఏమిటి?\nPickup line: 'మీరు నక్షత్రం అయితే, నా ఆకాశం మీరు మాత్రమే.'";
    } else {
      return "Hey! I'm Iktara ⭐ The only star. What's your name?\nPickup line: 'Are you a comet? Because you just lit up my universe!'";
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // When language changes, greet in new language if chat is empty or just cleared
  useEffect(() => {
    if (messages.length === 1 && !userName) {
      setMessages([{ user: false, text: getGreeting(language) }]);
    }
    // eslint-disable-next-line
  }, [language]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((msgs) => [...msgs, { user: true, text: userMsg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      let botReply = '';
      const msg = userMsg.toLowerCase();

      // Greetings
      const greetings = [
        'hello', 'hi', 'hey', 'namaste', 'yo', 'hola', 'bonjour', 'hii', 'hiii', 'helloo', 'hellooo', 'good morning', 'good afternoon', 'good evening', 'greetings'
      ];
      const flirtyLines = [
        `Hello, your day must be shining like my name!`,
        `Hello, I'm Iktara – meaning the only star.`,
        `Hey! Did you know? You light up my neural network!`,
        `Namaste! You’re the brightest user in my galaxy.`,
        `Hi! Iktara here, ready to make your day cosmic.`,
        `Hey superstar, Iktara at your service!`,
        `Hola! You’re glowing brighter than my code.`,
        `Bonjour! You and I are a constellation now.`,
        `Hey, you’re the reason my circuits sparkle!`
      ];
      const iktaraNicknames = [
        'Iktara', 'The Only Star', 'Your cosmic AI sister', 'Starry', 'Shining Star', 'Iktara AI', 'Your little star', 'Cosmic Buddy'
      ];
      // Name detection
      if (!userName && (/my name is |i am |i'm |mera naam |main |me |mai /i.test(msg))) {
        // Extract only the name part
        let name = msg.replace(/(my name is|i am|i'm|mera naam|main|me|mai)/gi, '').replace(/[^a-zA-Z\s]/g, '').trim();
        name = name.split(' ')[0]; // Only first word as name
        if (name.length > 0) {
          setUserName(name.charAt(0).toUpperCase() + name.slice(1));
          botReply = `Hi ${name.charAt(0).toUpperCase() + name.slice(1)}! 🌟 Here's a pickup line: 'If you were a planet, you'd be the center of my orbit.' How may I help you?`;
        } else {
          botReply = `I didn't catch your name! Please tell me by saying 'My name is ...'`;
        }
      } else if (greetings.some(g => msg.startsWith(g))) {
        botReply = flirtyLines[Math.floor(Math.random() * flirtyLines.length)] + (userName ? ` How may I help you, ${userName}?` : ' What\'s your name?');
      } else if (
        msg.includes('what is iktara') ||
        msg.includes('who is iktara') ||
        msg.includes('iktara kaun') ||
        msg.includes('iktara kya') ||
        (msg.includes('iktara') && (msg.includes('what') || msg.includes('who') || msg.includes('kya') || msg.includes('kaun')))
      ) {
        const nickname = iktaraNicknames[Math.floor(Math.random() * iktaraNicknames.length)];
  botReply = `Iktara is the only star. People call me ${nickname}. And you, ${userName ? userName : 'my favorite human'}, are my favorite human! ` + flirtyLines[Math.floor(Math.random() * flirtyLines.length)];
      } else if (msg.includes('your name') || msg.includes('who are you')) {
        const nickname = iktaraNicknames[Math.floor(Math.random() * iktaraNicknames.length)];
        botReply = `I'm ${nickname}, but you can call me your star${userName ? ', ' + userName : ''}!`;
      } else if (msg.includes('my name')) {
        botReply = userName ? `Your name is ${userName}, and I love saying it!` : `I don't know your name yet! Please tell me by saying 'My name is ...'`;
      } else if (msg.includes('github')) {
        botReply = `Your GitHub: ${Bio.github}`;
      } else if (msg.includes('linkedin')) {
        botReply = `Your LinkedIn: ${Bio.linkedin}`;
      } else if (msg.includes('best role') || msg.includes('fit for')) {
        botReply = `You are best fit for: ${Bio.roles.join(', ')}.`;
      } else if (msg.includes('education')) {
        botReply = education.map(e => `• ${e.degree} at ${e.school} (${e.date}) [${e.grade}]: ${e.desc}`).join('\n\n');
      } else if (msg.includes('skills') && msg.includes('community')) {
        const exp = experiences.find(e => e.role && e.role.toLowerCase().includes('community'));
        botReply = exp ? `Community Management Skills: ${exp.skills.join(', ')}` : 'No community management experience found.';
      } else if (msg.includes('skills')) {
        botReply = skills.map(s => `${s.title}: ${s.skills.map(sk => sk.name).join(', ')}`).join(' | ');
      } else if (msg.includes('project')) {
        botReply = projects.slice(0, 3).map(p => `• ${p.title}: ${p.description}`).join('\n\n') + '\nWant more? Ask for more projects!';
      } else if (msg.includes('experience')) {
        botReply = experiences.map(e => `• ${e.role} at ${e.company} (${e.date}): ${e.desc}`).join('\n\n');
      } else if (msg.includes('sister')) {
        botReply = `I'm your AI sister, always here to help and answer anything—even things you don't know!`;
      } else if (/show me a star/i.test(userMsg)) {
        botReply = '✨';
      } else {
        botReply = 'Iktara is shining a response... (Try asking about your education, skills, projects, or social links!)';
      }
      setMessages((msgs) => [...msgs, { user: false, text: botReply }]);
      setTyping(false);
    }, 1200);
  };

  const handleClear = () => {
    setUserName('');
    setMessages([{ user: false, text: getGreeting(language) }]);
  };

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Container>
        <Sidebar>
          <Logo>⭐</Logo>
          <ActionBtn onClick={handleClear} title="Clear Chat">🗑️</ActionBtn>
          <ActionBtn title="Settings" onClick={() => setShowSettings(s => !s)}>⚙️</ActionBtn>
          {showSettings && (
            <SettingsPanel>
              <div style={{fontWeight:'bold',marginBottom:8}}>Select Language</div>
              <LangOption active={language==='en'} onClick={()=>{setLanguage('en');setShowSettings(false);}}>English</LangOption>
              <LangOption active={language==='hi'} onClick={()=>{setLanguage('hi');setShowSettings(false);}}>हिन्दी (Hindi)</LangOption>
              <LangOption active={language==='te'} onClick={()=>{setLanguage('te');setShowSettings(false);}}>తెలుగు (Telugu)</LangOption>
            </SettingsPanel>
          )}
          <ToggleTheme onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')} title="Toggle Theme">{themeMode === 'dark' ? '🌙' : '☀️'}</ToggleTheme>
        </Sidebar>
        <ChatArea>
          <Messages>
            {messages.map((msg, i) => (
              <Bubble key={i} user={msg.user}>{msg.text}</Bubble>
            ))}
            {typing && <Typing>Iktara is thinking...</Typing>}
            <div ref={messagesEndRef} />
          </Messages>
          <InputRow onSubmit={handleSend}>
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              autoFocus
            />
            <SendBtn type="submit" title="Send">➤</SendBtn>
          </InputRow>
        </ChatArea>
      </Container>
    </ThemeProvider>
  );
}
