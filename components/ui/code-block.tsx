"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type SingleCodeBlockProps = {
  variant: "single";
  language: string;
  filename: string;
  code: string;
  highlightLines?: number[];
};

type TabsCodeBlockProps = {
  variant: "tabs";
  tabs: Array<{
    name: string;
    code: string;
    language?: string;
    highlightLines?: number[];
  }>;
};

export type CodeBlockProps = SingleCodeBlockProps | TabsCodeBlockProps;


export const CodeBlock = (props: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  if (props.variant === "single") {
    const { code, language, filename, highlightLines = [] } = props;

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
        <div className="flex justify-between items-center py-2">
          <div className="text-xs text-zinc-400">{filename}</div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
          >
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
          </button>
        </div>
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem",
          }}
          wrapLines
          showLineNumbers
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: highlightLines.includes(lineNumber)
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              display: "block",
              width: "100%",
            },
          })}
          PreTag="div"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }

  if (props.variant === "tabs") {
    const { tabs } = props;
    const activeTabData = tabs[activeTab];

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText(activeTabData.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 text-xs transition-colors font-sans ${
                activeTab === index
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <SyntaxHighlighter
          language={activeTabData.language || "tsx"}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem",
          }}
          wrapLines
          showLineNumbers
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: activeTabData.highlightLines?.includes(
                lineNumber
              )
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              display: "block",
              width: "100%",
            },
          })}
          PreTag="div"
        >
          {activeTabData.code}
        </SyntaxHighlighter>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
        </button>
      </div>
    );
  }

  return null;
};

