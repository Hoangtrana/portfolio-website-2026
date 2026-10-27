import React, { useRef, useState } from "react";
import "./terminal.css";

const prompt = "visitor@hoang-portfolio:~$";
const commandList = [
  ["about", "About me"],
  ["skills", "Technical skills"],
  ["projects", "Featured projects"],
  ["learning", "Currently learning"],
  ["contact", "Contact information"],
  ["clear", "Clear terminal"],
];

const helpLines = ["Welcome! Explore my portfolio.", "Available commands:"];

function getResponse(command) {
  switch (command) {
    case "help":
      return { lines: helpLines, showCommands: true };
    case "about":
      return {
        lines: [
          "I'm Hoang Tran, a Business Information Technology graduate from Karelia University of Applied Sciences, focused on software development.",
          "I have practical software development experience at Valamis and atFlow.",
        ],
      };
    case "skills":
      return {
        lines: [
          "Frontend: JavaScript, React, CSS, Liferay",
          "Backend & databases: PHP, Python, MySQL, SQL, PostgreSQL, Node.js",
          "Cloud & workflows: Azure, Git, DevOps",
        ],
      };
    case "projects":
      return {
        lines: [
          "Finnish IT Job Market Analysis",
          "Movie Search App",
          "Rabbit Counter",
          "Tenzies Game",
          "Basketball Scoreboard",
          "Office Reservation Application",
        ],
      };
    case "learning":
      return {
        lines: [
          "Currently developing Python and data analysis skills through practical exercises and the Finnish IT Job Market Analysis project.",
          "Project work includes pandas, data cleaning, data exploration, and analysis.",
        ],
      };
    case "contact":
      return {
        lines: [
          <span key="email">Email: <a href="mailto:hoanganh.tnvn@gmail.com">hoanganh.tnvn@gmail.com</a></span>,
          <span key="linkedin">LinkedIn: <a href="https://www.linkedin.com/in/ahoangtran/" target="_blank" rel="noreferrer">linkedin.com/in/ahoangtran</a></span>,
        ],
      };
    default:
      return {
        lines: [`Command not found: ${command}. Type "help" to see available commands.`],
      };
  }
}

const Terminal = () => {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [entries, setEntries] = useState([
    { command: "help", ...getResponse("help") },
  ]);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  const runCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setEntries([]);
    } else {
      setEntries((current) => [...current, { command, ...getResponse(command) }]);
    }

    if (command !== "clear") {
      setHistory((current) => [...current, command]);
    }
    setHistoryIndex(-1);
    setValue("");
    requestAnimationFrame(() => {
      if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
      inputRef.current?.focus();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setValue(history[next]);
    } else if (event.key === "ArrowDown" && historyIndex >= 0) {
      event.preventDefault();
      const next = historyIndex + 1;
      setHistoryIndex(next >= history.length ? -1 : next);
      setValue(next >= history.length ? "" : history[next]);
    }
  };

  return (
    <section className="hero-terminal" aria-label="Interactive portfolio terminal">
      <div className="terminal__titlebar">
        <div className="terminal__window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal__title">portfolio-terminal</span>
        <span className="terminal__title-spacer" aria-hidden="true" />
      </div>

      <div className="terminal__output" ref={outputRef} aria-live="polite" aria-relevant="additions">
        {entries.map((entry, index) => (
          <div className="terminal__entry" key={`${entry.command}-${index}`}>
            <div className="terminal__command-line">
              <span className="terminal__prompt">{prompt}</span> {entry.command}
            </div>
            {entry.lines.map((line, lineIndex) => (
              <p className="terminal__line" key={lineIndex}>{line}</p>
            ))}
            {entry.showCommands && (
              <ul className="terminal__commands" aria-label="Available terminal commands">
                {commandList.filter(([command]) => command !== "clear").map(([command, description]) => (
                  <li key={command}>
                    <button type="button" onClick={() => runCommand(command)}>
                      <code>{command}</code><span>— {description}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <form className="terminal__form" onSubmit={handleSubmit}>
        <label className="terminal__prompt" htmlFor="terminal-command">{prompt}</label>
        <input
          ref={inputRef}
          id="terminal-command"
          className="terminal__input"
          aria-label="Enter a portfolio terminal command"
          autoComplete="off"
          spellCheck="false"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="terminal__cursor" aria-hidden="true" />
      </form>
      <div className="terminal__suggestions" aria-label="Command shortcuts">
        {commandList.map(([command]) => (
          <button type="button" key={command} onClick={() => runCommand(command)} aria-label={`Run ${command} command`}>
            {command}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Terminal;
