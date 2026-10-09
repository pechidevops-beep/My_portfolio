// src/components/DynamicIcon.jsx
import React from 'react';
import {
  Atom,
  FileCode2,
  Palette,
  Layout,
  Boxes,
  Server,
  Cpu,
  Workflow,
  Bot,
  Coffee,
  Database,
  DatabaseZap,
  Sparkles,
  Container,
  GitBranch,
  Cloud,
  Terminal,
  GitCompare,
  ShieldCheck,
  Code2,
  LayoutGrid,
  Smartphone,
  Code
} from 'lucide-react';

const ICON_MAP = {
  Atom,
  FileCode2,
  Palette,
  Layout,
  Boxes,
  Server,
  Cpu,
  Workflow,
  Bot,
  Coffee,
  Database,
  DatabaseZap,
  Sparkles,
  Container,
  GitBranch,
  Cloud,
  Terminal,
  GitCompare,
  ShieldCheck,
  Code2,
  LayoutGrid,
  Smartphone,
  Code
};

export const DynamicIcon = ({ name, className = 'w-5 h-5', fallback = 'Code2' }) => {
  const IconComponent = ICON_MAP[name] || ICON_MAP[fallback] || Code;
  return <IconComponent className={className} />;
};
