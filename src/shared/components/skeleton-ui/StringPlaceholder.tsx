import styled, { keyframes } from 'styled-components';
import { StringPlaceholderProps } from '../../../data/types';

export const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }

  35% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  65% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: #ebe7ee;
  border-radius: ${({ height }) => `${height}px`};
  animation: ${pulseAnimation} 1.7s ease-in-out infinite;
`;

const StringPlaceholder = ({ width, height }: StringPlaceholderProps) => {
  return <Wrapper width={width} height={height} data-testId="skeleton-string" />;
};

StringPlaceholder.defaultProps = {
  width: 140,
  height: 16,
};

export default StringPlaceholder;
