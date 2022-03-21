import styled from 'styled-components';
import { ArtboardHeader as ArtboardHeaderProps } from '../../../data/types';
import CrossSvg from '../../../assets/icons/close.svg';
import { ReactComponent as DividerSvg } from '../../../assets/icons/separator.svg';
import ArtboardNavigation from '../artboard-navigation/ArtboardNavigation';

const Wrapper = styled.header<{ height?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  height: ${({ height }) => `${height}px` || '64px'};
  padding: 18px 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  padding: 5px;
  box-sizing: content-box;
  cursor: pointer;
`;

const Divider = styled(DividerSvg)`
  margin: 0 32px 0 15px;
  color: #000000;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #000000;
  font-family: 'SFProDisplay';
  font-size: 1.6rem;
  font-weight: 500;
  transform: translate(-50%, -50%);
`;

const ArtboardHeader = ({
  currentIndex,
  height,
  next,
  onClose,
  previous,
  title,
  totalArtboards,
}: ArtboardHeaderProps) => {
  return (
    <Wrapper height={height}>
      <CloseButton onClick={onClose} aria-label="Close artboard" data-testId="close-artboard-button">
        <img src={CrossSvg} alt="Cross icon" />
      </CloseButton>
      <Divider />
      <ArtboardNavigation previous={previous} next={next} currentIndex={currentIndex} totalArtboards={totalArtboards} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ArtboardHeader;
