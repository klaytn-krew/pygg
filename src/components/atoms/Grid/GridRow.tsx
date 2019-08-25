import React from "react"
import styled from "styled-components";
import { IComponentProps } from "../../../constants/types";
import {
  IInnerType,
  IOuterType,
  IBorderType,
  innerStyling,
  outerStyling,
  borderStyling,
  contentAlignStyling,
  IContentAlignType
} from "../../../constants/styles";

interface IGridRowProps extends IComponentProps {
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;
  _contentAlign?: IContentAlignType;
  _background_color?: string;
}

const CustomStyledGridRow =  ({ className, ...props }: IGridRowProps) => (
  <div 
    className={className}
  >
    {props.children}
  </div>
);

const StyledGridRow = styled(CustomStyledGridRow)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}
  ${props => props._contentAlign && contentAlignStyling(props._contentAlign)}
  
  background-color: ${props => props._background_color} !important;
  display: flex;
`;

export const GridRow = (props: IGridRowProps) => {
  return (
    <StyledGridRow
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
      _background_color={props._background_color}
      _contentAlign={props._contentAlign}
    >
      {props.children}
    </StyledGridRow>
  );
};

export type TGridRow = ReturnType<typeof GridRow>
