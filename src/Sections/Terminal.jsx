import { useCallback, useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const RealTerminal = () => {
  const terminalRef = useRef(null);
  const xterm = useRef(null);
  const fitAddon = useRef(new FitAddon());

  // Command handling logic
  const handleCommand = useCallback((cmd, term) => {
    switch (cmd.toLowerCase()) {
      case "help":
        term.writeln("\r\nAvailable commands:");
        term.writeln("  help     - Show this help menu");
        term.writeln("  about    - Learn more about me");
        term.writeln("  clear    - Clear the terminal");
        term.writeln("  contact  - Get in touch");
        term.writeln("  projects - View my latest projects");
        term.writeln("  theme    - Change terminal theme");
        break;
      case "about":
        term.writeln("\r\nFull-stack developer specializing in:");
        term.writeln("3D design | WebGL | Interactive experiences");
        break;
      case "contact":
        term.writeln("\r\n📧 Email: houcine.taki21@gmail.com");
        term.writeln("📱 LinkedIn: linkedin.com/in/houcine-taki");
        break;
      case "clear":
        term.clear();
        break;
      case "projects":
        term.writeln("\r\n🔗 GitHub: github.com/taki199");
        term.writeln("🚀 Live Demos: houcine-taki.vercel.app");
        break;
      case "theme":
        term.options.theme =
          term.options.theme.background === "#1e1e1e"
            ? { background: "#000000", foreground: "#00ff00" }
            : { background: "#1e1e1e", foreground: "#dcdcdc" };
        break;
      default:
        term.writeln(`\r\nCommand not found: ${cmd}`);
    }
  }, []);

  // Initialize terminal
  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: "#1e1e1e",
        foreground: "#dcdcdc",
        cursor: "#00ff00",
      },
      fontSize: 14,
      lineHeight: 1.2,
      scrollback: 1000,
    });

    xterm.current = term;
    term.loadAddon(fitAddon.current);

    if (terminalRef.current) {
      term.open(terminalRef.current);
      fitAddon.current.fit();

      // Initial setup
      term.writeln("Welcome to Interactive Portfolio Terminal");
      term.writeln('Type "help" for available commands\r\n');
      term.write("$ ");

      // Command buffer
      let commandBuffer = "";

      // Input handling
      term.onKey(({ key, domEvent }) => {
        if (domEvent.key === "Enter") {
          term.writeln("");
          handleCommand(commandBuffer.trim(), term);
          commandBuffer = "";
          term.write("$ ");
        } else if (domEvent.key === "Backspace") {
          if (commandBuffer.length > 0) {
            commandBuffer = commandBuffer.slice(0, -1);
            term.write("\b \b");
          }
        } else if (key.length === 1) {
          commandBuffer += key;
          term.write(key);
        }
      });

      // Responsive handling
      const resizeObserver = new ResizeObserver(() => {
        fitAddon.current.fit();
        term.scrollToBottom();
      });

      resizeObserver.observe(terminalRef.current);

      return () => {
        resizeObserver.disconnect();
        term.dispose();
      };
    }
  }, [handleCommand]);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 h-screen gap-8">
      {/* Text Content */}
      <div className="flex-1 text-white space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Developer Terminal
        </h1>
        <p className="text-lg opacity-90">
          Interact with my portfolio through this functional terminal interface.
          Explore my skills, projects, and contact information using
          command-line commands.
        </p>
        <div className="space-y-2">
          <p className="text-sm opacity-75">Try these commands:</p>
          <div className="flex flex-wrap gap-2">
            {["help", "about", "projects", "contact"].map((cmd) => (
              <span
                key={cmd}
                className="px-3 py-1 bg-gray-700 rounded-lg text-sm cursor-pointer hover:bg-gray-600"
                onClick={() => xterm.current?.simulateCommand(cmd)}
              >
                {cmd}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Container */}
      <div className="w-full lg:w-[700px] h-[500px] bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="h-8 bg-gray-700 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div ref={terminalRef} className="h-[calc(100%-2rem)] bg-[#1e1e1e]" />
      </div>
    </div>
  );
};

export default RealTerminal; // Correct default export
