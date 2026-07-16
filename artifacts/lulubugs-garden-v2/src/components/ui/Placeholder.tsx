import React from 'react';

interface PlaceholderProps {
  label: string;
  className?: string;
  shape?: 'blob-1' | 'blob-2' | 'blob-3' | 'circle' | 'rounded';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
}

export function Placeholder({ label, className = '', shape = 'rounded', color = 'muted' }: PlaceholderProps) {
  const shapeClasses = {
    'blob-1': 'blob-shape',
    'blob-2': 'blob-shape-2',
    'blob-3': 'blob-shape-3',
    'circle': 'rounded-full',
    'rounded': 'rounded-3xl',
  };

  const colorClasses = {
    'primary': 'bg-primary/10 border-primary/20 text-primary',
    'secondary': 'bg-secondary/10 border-secondary/20 text-secondary',
    'accent': 'bg-accent/20 border-accent/30 text-foreground',
    'muted': 'bg-muted border-muted-foreground/10 text-muted-foreground',
  };

  return (
    <div className={`flex flex-col items-center justify-center border-2 border-dashed p-6 text-center ${shapeClasses[shape]} ${colorClasses[color]} ${className}`}>
      <span className="font-serif font-bold text-lg opacity-80">{label}</span>
      <span className="text-xs uppercase tracking-widest mt-2 opacity-50 font-bold">Image Needed</span>
    </div>
  );
}
