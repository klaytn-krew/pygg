import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableHeaderCellProps extends IComponentProps {}

const CustomStyledTableHeaderCell =  ({ className, ...props }: ITableHeaderCellProps) => (
  <th 
    className={className}
  >
    {props.children}
  </th>
);

const StyledTableHeaderCell = styled(CustomStyledTableHeaderCell)``;

export const TableHeaderCell = (props: ITableHeaderCellProps) => {
  return (
    <StyledTableHeaderCell>
      {props.children}
    </StyledTableHeaderCell>
  );
};
