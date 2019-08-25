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
import { TGridColumn } from "./GridColumn";
import { TGridRow } from "./GridRow";

interface IGridProps {
  children?: TGridRow | TGridRow[] | TGridColumn | TGridColumn[];
  className?: string;
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;
  _contentAlign?: IContentAlignType;
  _background_color?: string;
}

const CustomStyledGrid =  ({ className, ...props }: IGridProps) => (
  <div className={className} {...props}>
    {props.children}
  </div>
);

const StyledGrid = styled(CustomStyledGrid)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}
  ${props => props._contentAlign && contentAlignStyling(props._contentAlign)}

  background-color: ${props => props._background_color} !important;
`;

export const SemanticGrid = (props: IGridProps) => {
  return (
    <StyledGrid
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
      _background_color={props._background_color}
      _contentAlign={props._contentAlign}
    >
      {props.children}
    </StyledGrid>
  );
};
