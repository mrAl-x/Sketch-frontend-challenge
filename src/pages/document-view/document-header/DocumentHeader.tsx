import styled from 'styled-components';
import { DocumentHeaderProps } from '../../../data/types';
import LogoSvg from '../../../assets/logo/sketch-logo.svg';
import { ReactComponent as DividerSvg } from '../../../assets/icons/separator.svg';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 64px;
  padding: 18px 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Divider = styled(DividerSvg)`
  margin: 0 16px;
  color: #000000;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 1.6rem;
  font-weight: 400;
`;

const DocumentHeader = ({ title }: DocumentHeaderProps) => {
  return (
    <Wrapper>
      <img src={LogoSvg} alt="Sketch logo" />
      <Divider />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default DocumentHeader;
