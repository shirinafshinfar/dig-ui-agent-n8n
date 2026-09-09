import React from 'react';

type Props = { brightness?: number; size?: number };

export default function MoonPhaseAiFallback({ brightness = 50, size = 80 }: Props) {
  const b = Math.max(0, Math.min(100, brightness));
  const offset = (b / 100 - 1) * size;
  const outerStyle = { width: size, height: size, borderRadius: '50%', background: '#111', position: 'relative', overflow: 'hidden' } as const;
  const whiteStyle = { position: 'absolute', width: size, height: size, left: offset, top: 0, borderRadius: '50%', background: '#fff', transition: 'left .2s' } as const;
  return (
    <div style={outerStyle} aria-label={`Moon phase ${b}%`} title={`${b}% brightness`}>
      <div style={whiteStyle} />
    </div>
  );
}
