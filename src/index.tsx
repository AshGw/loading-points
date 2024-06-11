import React from 'react';
import styled from 'styled-components';

const DEFAULT = {
  CIRCLE_SIZE: '8px',
  GLOW_COLOR: 'rgb(155, 46, 199)', // Purple
} as const;

declare const __s: unique symbol;
type Brand<N, T> = T & {
  [__s]: N;
};

export type RGB = Brand<'RBG', string>;
export type Pixel = Brand<'Pixel', string>;

type DotProps = {
  glowColor?: RGB;
  circleSize?: Pixel;
  delay?: number; // in seconds
};

const Dot = styled.div<DotProps>`
  width: ${(props) => props.circleSize || DEFAULT.CIRCLE_SIZE};
  height: ${(props) => props.circleSize || DEFAULT.CIRCLE_SIZE};
  border-radius: 50%;
  display: inline-block;
  margin: 0.5rem;
  background-color: ${(props) => props.glowColor || DEFAULT.GLOW_COLOR};
  box-shadow: 0 0 20px ${(props) => props.glowColor || DEFAULT.GLOW_COLOR};
  animation: loading 1.5s ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay}s` || '0s'};

  @keyframes loading {
    0%,
    100% {
      transform: scale(0.2);
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.886);
    }
    42% {
      box-shadow: 0 0 10px rgba(204, 6, 118, 0.886);
    }
    50% {
      transform: scale(1);
      box-shadow:
        0 0 20px ${(props) => props.glowColor || DEFAULT.GLOW_COLOR},
        0 0 30px ${(props) => props.glowColor || DEFAULT.GLOW_COLOR},
        0 0 40px ${(props) => props.glowColor || DEFAULT.GLOW_COLOR};
    }
  }
`;

type DotsProps = Omit<DotProps, 'delay'>;

export interface LoaderProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    DotsProps {}

const Loading: React.FC<LoaderProps> = ({ glowColor, circleSize }) => {
  const renderDivs = () => {
    return (
      <>
        <Dot glowColor={glowColor} circleSize={circleSize} delay={0} />
        <Dot glowColor={glowColor} circleSize={circleSize} delay={0.2} />
        <Dot glowColor={glowColor} circleSize={circleSize} delay={0.3} />
      </>
    );
  };

  return renderDivs();
};

export default Loading;
