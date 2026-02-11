import { Editor } from "./components/Editor";
import "./App.css";

// Mock data for the connected players
const connectedUsers = [
  { id: 1, initials: "A", color: "#FF0055" }, // Neon Red
  { id: 2, initials: "C", color: "#00FF99" }, // Neon Green
  { id: 3, initials: "M", color: "#00CCFF" }, // Neon Cyan
];

export default function App() {
  return (
    <main className="container">
      <header className="top-bar">
        {/* Left: App Name */}
        <div className="app-branding">
          <span className="terminal-prompt">&gt;</span> AppName
          <span className="cursor-blink">_</span>
        </div>

        {/* Right: Connected Players Component */}
        <div className="player-dock">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">LIVE</span>
          </div>

          <div className="avatar-stack">
            {connectedUsers.map((user) => (
              <div
                key={user.id}
                className="avatar"
                style={{ borderColor: user.color, color: user.color }}
                title={`User ${user.initials}`}
              >
                {user.initials}
              </div>
            ))}
            <div className="avatar overflow-count">+2</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Editor />
    </main>
  );
}
