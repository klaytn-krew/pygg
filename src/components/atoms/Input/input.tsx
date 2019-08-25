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

interface IInputProps extends IComponentProps {
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;

  placeholder?: string;
  _background_color?: string;
}

const CustomStyledInput =  ({ className, ...props }: IInputProps) => (
  <input 
    className={className}
    placeholder={props.placeholder}
  >
    {props.children}
  </input>
);

const StyledInput = styled(CustomStyledInput)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}

  background-color: ${props => props._background_color} !important;
`;

export const Input = (props: IInputProps) => {
  return (
    <StyledInput
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
      placeholder={props.placeholder}
      _background_color={props._background_color}
    >
      {props.children}
    </StyledInput>
  );
};
