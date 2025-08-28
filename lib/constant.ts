import { ComponentSchema, NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'Docs',
    path: '/docs',
  },
  {
    id: 3,
    label: 'Libraries',
    path: '/docs/libraries',
  },
  {
    id: 4,
    label: 'Components',
    path: '/docs/components',
  },
  {
    id: 4,
    label: 'Templates',
    path: '/docs/templates',
  },
];



export const ComponentsDB: ComponentSchema[] = [
  {
    "id": "button-001",
    "name": "Primary Button",
    "category": "Buttons",
    "description": "A simple primary button with hover and focus states.",
    "image": "/images/components/button-primary.png",
    "previewUrl": "/preview/button-primary", 
    "installation": {
      "npm": "npm install your-ui-lib",
      "yarn": "yarn add your-ui-lib",
      "pnpm": "pnpm add your-ui-lib"
    },
    "usage": {
      "import": "import { Button } from 'your-ui-lib';",
      "example": "export default function App() {\n  return <Button>Click Me</Button>;\n}"
    },
    "props": [
      { "name": "variant", "type": "string", "default": "primary", "description": "Defines button style (primary, secondary, outline)." },
      { "name": "disabled", "type": "boolean", "default": "false", "description": "Disables the button if true." }
    ],
    "dependencies": ["react", "tailwindcss"],
    "tags": ["button", "ui", "tailwind"],
    "version": "1.0.0"
  },
  {
    "id": "card-001",
    "name": "Info Card",
    "category": "Cards",
    "description": "A responsive card component with image, title, and description.",
    "image": "/images/components/card-info.png",
    "previewUrl": "/preview/card-info",
    "installation": {
      "npm": "npm install your-ui-lib",
      "yarn": "yarn add your-ui-lib"
    },
    "usage": {
      "import": "import { Card } from 'your-ui-lib';",
      "example": "export default function App() {\n  return (\n    <Card title='Hello' description='This is an info card.' />\n  );\n}"
    },
    "props": [
      { "name": "title", "type": "string", "default": "''", "description": "Card title text." },
      { "name": "description", "type": "string", "default": "''", "description": "Card description text." },
      { "name": "image", "type": "string", "default": "null", "description": "Optional image URL for the card." }
    ],
    "dependencies": ["react", "tailwindcss"],
    "tags": ["card", "ui", "responsive"],
    "version": "1.0.0"
  }
]
