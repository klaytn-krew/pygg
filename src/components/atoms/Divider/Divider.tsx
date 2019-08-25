import React from "react"
import styled, { css } from "styled-components";
import { THEME } from "../../../constants/colors";

import { IComponentProps } from "../../../constants/types";
import {
  IInnerType,
  IOuterType,
  IBorderType,
  innerStyling,
  outerStyling,
  borderStyling
} from "../../../constants/styles";

////// Divider Description //////
// (1) simple -
// (2) double-line =====
// (3) dotted-line - - - - - -
/////////////////////////////////

interface IDividerProps extends IComponentProps {
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;

  _divierType?: "simple" | "double-line" | "dotted-line";
}

const CustomStyledDivider =  ({ className, ...props }: IDividerProps) => (
  <hr 
    className={className}
  >
    {props.children}
  </hr>
);

const StyledDivider = styled(CustomStyledDivider)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}

  ${props =>
    props._divierType === "simple" &&
    css`
      border-top: 1px solid ${THEME.palette.line};
  `};
  ${props =>
    props._divierType === "double-line" &&
    css`
      border-top: 3px double ${THEME.palette.line};
  `};
  ${props =>
    props._divierType === "dotted-line" &&
    css`
      border-top: 1px dashed ${THEME.palette.line};
  `};
`;

export const Divider = (props: IDividerProps) => {
  return (
    <StyledDivider
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
      _divierType={props._divierType}
    >
      {props.children}
    </StyledDivider>
  );
};
