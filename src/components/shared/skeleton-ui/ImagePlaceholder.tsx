import styled from 'styled-components';
import { pulseAnimation } from './StringPlaceholder';

export default styled.div`
  width: 500px;
  height: 400px;
  margin-bottom: 16px;
  background-color: #ebe7ee;
  animation: ${pulseAnimation} 1.7s ease-in-out infinite;

  @media (max-width: 600px) {
    width: 300px;
    height: 400px;
  }
`;
