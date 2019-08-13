import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableHeaderCellProps extends IComponentProps {}

const SemanticStyledTableHeaderCell =  ({ className, ...props }: ITableHeaderCellProps) => (
  <th className={className} {...props}>
    {props.children}
  </th>
);

const StyledTableHeaderCell = styled(SemanticStyledTableHeaderCell)``;

export const TableHeaderCell = (props: ITableHeaderCellProps) => {
  return (
    <StyledTableHeaderCell>
      {props.children}
    </StyledTableHeaderCell>
  );
};
