import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IInnerType,
  IBorderType,
  IOuterType,
  innerStyling,
  borderStyling,
  outerStyling
} from "../../../constants/styles";

interface ITableBodyCellProps extends IComponentProps {
  _inner?: IInnerType;
  _outer?: IOuterType;
  _border?: IBorderType;
}

const SemanticStyledTableBodyCell =  ({ className, ...props }: ITableBodyCellProps) => (
  <td>
    {props.children}
  </td>
);

const StyledTableBodyCell = styled(SemanticStyledTableBodyCell)`
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._border && borderStyling(props._border)}
`;

export const TableBodyCell = (props: ITableBodyCellProps) => {
  return (
    <StyledTableBodyCell
      _inner={props._inner}
      _outer={props._outer}
      _border={props._border}
    >
      {props.children}
    </StyledTableBodyCell>
  );
};
