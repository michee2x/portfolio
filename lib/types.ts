export interface NavItem {
  id: number;
  label: string;
  path: string;
}


export type ComponentProp = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export type Installation = {
  npm?: string;
  yarn?: string;
  pnpm?: string;
};

export type Usage = {
  import: string;
  example: string;
};

export type ComponentSchema = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  previewUrl?: string;
  installation: Installation;
  usage: Usage;
  props?: ComponentProp[];
  dependencies?: string[];
  tags?: string[];
  version: string;
};
