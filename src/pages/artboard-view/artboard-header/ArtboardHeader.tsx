import styled from 'styled-components';
import { ArtboardHeaderProps } from '../../../data/types';
import CrossSvg from '../../../assets/icons/close.svg';
import { ReactComponent as DividerSvg } from '../../../assets/icons/separator.svg';

const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 64px;
  padding: 18px 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 400;
  transform: translate(-50%, -50%);
`;

const ArtboardHeader = ({ onClose, title }: ArtboardHeaderProps) => {
  return (
    <Wrapper>
      <CloseButton onClick={onClose} aria-label="Close artboard">
        <img src={CrossSvg} alt="Cross icon" />
      </CloseButton>
      <Divider />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ArtboardHeader;
