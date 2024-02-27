import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { JetBrains_Mono } from "next/font/google";

export const JetBrains_MonoFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

interface CodeProps {
  code: string;
  language: string;
}

export function Code({ code, language }: CodeProps) {
  return (
    <div className={"rounded-md bg-zinc-900 my-6"}>
      <div className={"bg-zinc-800 py-3 px-6 rounded-md"}>
        <h1>{language}</h1>
      </div>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="rust"
        style={coldarkDark}
        PreTag="div"
        wrapLines={true}
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem",
        }}
        lineNumberStyle={{
          userSelect: "none",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-jetbrains-mono)",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
