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
  IContentAlignType,
  contentAlignStyling
} from "../../../constants/styles";

interface IGridColumnProps extends IComponentProps {
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;
  _contentAlign?: IContentAlignType;
  _background_color?: string;
  _width?: number;
}

const CustomStyledGridColumn =  ({ className, ...props }: IGridColumnProps) => (
  <div className={className} {...props}>
    {props.children}
  </div>
);

const StyledGridColumn = styled(CustomStyledGridColumn)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}
  ${props => props._contentAlign && contentAlignStyling(props._contentAlign)}

  background-color: ${props => props._background_color} !important;
  width: ${props => props._width / 16 * 100}%;
`;

export const GridColumn = (props: IGridColumnProps) => {
  return (
    <StyledGridColumn
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
      _background_color={props._background_color}
      _width={props._width}
      _contentAlign={props._contentAlign}
    >
      {props.children}
    </StyledGridColumn>
  );
};

export type TGridColumn = ReturnType<typeof GridColumn>
