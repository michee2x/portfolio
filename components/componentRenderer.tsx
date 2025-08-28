import { ComponentSchema } from '@/lib/types';
import React from 'react'
import { CodeBlock } from './ui/code-block';
import { Button } from './ui/button';

const ComponentRenderer = ({comp}:{comp: ComponentSchema}) => {
  return (
    <div
      key={comp.id}
      className="rounded-2xl w-full bg-zinc-200 border shadow-sm"
    >
      {/* Title + Category */}
      <h2 className="text-2xl font-framer font-bold">{comp.name}</h2>
      <p className="text-gray-700 mt-2">{comp.description}</p>
      <div className='flex gap-3 pb-6'>
        {comp.tags?.map((t, idx) => {
          return <span key={`${t}-${idx}`} className="text-gray-800 font-framer-Cursive flex ">{t}</span>;
        })}
      </div>
      {/* Image / Preview */}
      <div className="w-full min-h-[10rem] bg-slate-500"></div>
      {/* Installation */}
      <div className="mt-4">
        <h3 className="text-sm font-medium">Installation</h3>
        <pre className="bg-gray-900 text-green-400 text-sm p-2 rounded-lg mt-1">
          <CodeBlock
            variant="tabs"
            tabs={[
              {
                name: "npm",
                code: `${comp.installation.npm}`,
                language: "tsx",
              },
              {
                name: "pnpm",
                code: `${comp.installation.pnpm}`,
                language: "tsx",
              },
              {
                name: "yarn",
                code: `${comp.installation.yarn}`,
                language: "tsx",
              },
            ]}
          />
        </pre>
      </div>
      {/* Usage Example */}
      <div className="mt-4">
        <h3 className="text-sm font-medium">Usage</h3>
        <pre className="mt-1 overflow-x-auto flex flex-col gap-3">
          <CodeBlock
            variant="single"
            language="tsx"
            filename="App.tsx"
            code={comp.usage.import}
          />
          <CodeBlock
            variant="single"
            language="tsx"
            filename="App.tsx"
            code={comp.usage.example}
          />
        </pre>
      </div>
      {/* Props */}
      {comp.props && (
        <div className="mt-4">
          <h3 className="text-sm font-medium">Props</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {comp.props.map((prop) => (
              <li key={prop.name}>
                <span className="font-semibold">{prop.name}</span> ({prop.type})
                – default: <code>{prop.default}</code>
                <br />
                <span className="text-gray-600">{prop.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ComponentRenderer