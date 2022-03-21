import styled from 'styled-components';
import { pulseAnimation } from './StringPlaceholder';

const Wrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 400px;
  left: 50%;
  top: 50%;
  margin-bottom: 16px;
  background-color: #ebe7ee;
  transform: translate(-50%, -50%);
  animation: ${pulseAnimation} 1.7s ease-in-out infinite;

  @media (max-width: 600px) {
    width: 300px;
    height: 400px;
  }
`;

const ImagePlaceholder = () => <Wrapper data-testId="skeleton-image" />;

export default ImagePlaceholder;
