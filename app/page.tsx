import Markdown from "react-markdown";
import { Code } from "../components/Code";

const markdown = [
  {
    title: "Rust 'Hello, World!' Program",
    content:
      "Rust is a systems programming language that is designed to be safe, concurrent, and practical. It is often used for developing fast and highly reliable software.\n\nTo write a 'Hello, World!' program in Rust, follow these steps:\n\n1. Create a new file with a .rs extension, for example, `main.rs`.\n2. Add the following code to the file:\n\n```rust\nfn main() {\n    println!(\"Hello, World!\");\n}\n```\n\n",
  },
];

export default function Home() {
  return (
    <main className="sm:m-16 text-zinc-300">
      {markdown.map((md) => {
        const p = md.content.split("\n\n");
        return (
          <div key={md.title} className="mb-16">
            <h1 className="text-3xl font-bold my-4">{md.title}</h1>
            {p.map((para, i) => {
              const match = para.match(/^```(\w+)\n([\s\S]+?)\n```$/);
              if (match) {
                const [, language, code] = match;
                return <Code key={i} language={language} code={code} />;
              } else {
                return (
                  <Markdown key={i} className="my-4">
                    {para}
                  </Markdown>
                );
              }
            })}
          </div>
        );
      })}
    </main>
  );
}
