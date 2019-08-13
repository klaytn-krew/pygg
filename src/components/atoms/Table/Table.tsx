import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IInnerType,
  IOuterType,
  IBorderType,
  innerStyling,
  outerStyling,
  borderStyling
} from "../../../constants/styles";

interface ITableProps extends IComponentProps {
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;

  _background_color?: string;
}

const SemanticStyledTable =  ({ className, ...props }: ITableProps) => (
  <table className={className} {...props}>
    {props.children}
  </table>
);

const StyledTable = styled(SemanticStyledTable)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}

  background-color: ${props => props._background_color} !important;
`;

export const SemanticTable = (props: ITableProps) => {
  return (
    <StyledTable
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
      _background_color={props._background_color}
    >
      {props.children}
    </StyledTable>
  );
};
