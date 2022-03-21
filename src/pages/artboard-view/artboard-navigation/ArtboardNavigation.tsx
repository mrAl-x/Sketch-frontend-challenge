import styled from 'styled-components';
import { Navigation as NavigationProps } from '../../../data/types';
import { ReactComponent as LeftArrowSvg } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as RightArrowSvg } from '../../../assets/icons/arrow-right.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105px;
`;

const LeftArrow = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-family: 'SFProDisplay';
  font-size: 1.6rem;
`;

const RightArrow = styled(LeftArrow)``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Navigation = ({ currentIndex, next, previous, totalArtboards }: NavigationProps) => {
  const currentNumber = typeof currentIndex === 'number' ? currentIndex + 1 : '-';

  return (
    <Wrapper>
      <LeftArrow onClick={previous} data-testId="navigation-previous-button">
        <LeftArrowSvg />
      </LeftArrow>
      <CounterWrapper>
        <span data-testId="navigation-current-number">{currentNumber}</span>
        <Divider>/</Divider>
        <span data-testId="navigation-total-number">{totalArtboards}</span>
      </CounterWrapper>
      <RightArrow onClick={next} data-testId="navigation-next-button">
        <RightArrowSvg />
      </RightArrow>
    </Wrapper>
  );
};

Navigation.defaultProps = {
  totalArtboards: '-',
};

export default Navigation;
