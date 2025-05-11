import { useEffect, useState, useRef } from 'react';


const Terminal = () => {
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [
      { text: "$ ", delay: 500 },
      { text: "Hi, I’m Shubham Upadhyay, a full-stack developer from New Delhi, India,", delay: 100, finalDelay: 800 },
      { text: "\ncurrently pursuing my Bachelor of Science at IIT Patna.", delay: 50, finalDelay: 500 },
      { text: "\nMy coding journey began in class 11, diving into backend development, and by class 12, I was building full-stack apps using the MERN stack.", delay: 50, finalDelay: 500 },
      { text: "\nI’ve grown confident with technologies like React.js, React Native, Next.js, TypeScript, Zustand, Redux Toolkit, Docker, MongoDB, Express, and mor.", delay: 50, finalDelay: 700 },
      { text: "\n🎮 Beyond code, I enjoy reading books 📚, watching anime 🎌, and exploring new tech that can bring ideas to life", delay: 50, finalDelay: 0 }
    ];

    let currentText = '';
    let timeoutId: NodeJS.Timeout;
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    const typeNextChar = () => {
      if (currentLineIndex >= lines.length) {
        setAnimationComplete(true);
        return;
      }

      const currentLine = lines[currentLineIndex];
      
      if (currentCharIndex < currentLine.text.length) {
        currentText += currentLine.text[currentCharIndex];
        setTerminalText(currentText);
        currentCharIndex++;
        
        timeoutId = setTimeout(typeNextChar, currentLine.delay);
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
        timeoutId = setTimeout(typeNextChar, currentLine.finalDelay || 0);
      }

      // Ensure terminal scrolls to bottom as text is added
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    };

    timeoutId = setTimeout(typeNextChar, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    if (animationComplete) {
      const blinkInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);

      return () => clearInterval(blinkInterval);
    }
  }, [animationComplete]);

  return (
    <div className="terminal max-w-4xl mx-auto my-6 opacity-100 transition-opacity duration-500">

      <div className="terminal-header">
        <div className="terminal-button close-button"></div>
        <div className="terminal-button minimize-button"></div>
        <div className="terminal-button maximize-button"></div>
        <div className="ml-auto text-xs text-gray-400">terminal</div>
      </div>
      <div 
        ref={terminalRef}
        className="terminal-content font-poppins text-[30px] md:text-[20px] text-[#64FFDA]  mt-2 h-[55vh] overflow-hidden"
      >
        {terminalText}
        <span className={`cursor ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
      </div>
    </div>
  );
};

export default Terminal;