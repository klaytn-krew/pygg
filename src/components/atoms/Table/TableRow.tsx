import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableRowProps extends IComponentProps {}

const CustomStyledTableRow =  ({ className, ...props }: ITableRowProps) => (
  <tr className={className} {...props}>
    {props.children}
  </tr>
);

const StyledTableRow = styled(CustomStyledTableRow)``;

export const TableRow = (props: ITableRowProps) => {
  return (
    <StyledTableRow>
      {props.children}
    </StyledTableRow>
  );
};
