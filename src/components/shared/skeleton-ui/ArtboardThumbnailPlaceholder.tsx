import styled from 'styled-components';
import StringPlaceholder, { pulseAnimation } from './StringPlaceholder';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
  padding-left: 12px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const Thumbnail = styled.div`
  width: 240px;
  height: 300px;
  margin-bottom: 16px;
  background-color: #ebe7ee;
  animation: ${pulseAnimation} 1.7s ease-in-out infinite;
`;

const ArtboardThumbnailPlaceholder = () => {
  return (
    <Wrapper>
      <ThumbnailWrapper>
        <Thumbnail />
        <StringPlaceholder />
      </ThumbnailWrapper>
      <ThumbnailWrapper>
        <Thumbnail />
        <StringPlaceholder />
      </ThumbnailWrapper>
      <ThumbnailWrapper>
        <Thumbnail />
        <StringPlaceholder />
      </ThumbnailWrapper>
    </Wrapper>
  );
};

export default ArtboardThumbnailPlaceholder;
