import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;

export const InnerContent = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  left:0;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;

/*================================*/

interface FlexProps {
    flex?: number,
    margin?: string,
    padding?: string,
    border?: string,
}

export const Row = styled.div<FlexProps>`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: row;
  flex-wrap: "initial";
  align-content: "initial";
  justify-content: "initial";
  width: "auto";
  @media screen and (max-width: 768px) {
    flex-direction: "row";
  }
`;

export const Column = styled.div<FlexProps>`
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: column;
  align-content: "initial";
  justify-content: "initial";
  margin: ${props => (props.margin ? props.margin : 0)};
  width: "auto";
  border: ${props => (props.border ? props.border : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
`;
