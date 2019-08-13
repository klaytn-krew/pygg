import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableRowProps extends IComponentProps {}

const SemanticStyledTableRow =  ({ className, ...props }: ITableRowProps) => (
  <tr className={className} {...props}>
    {props.children}
  </tr>
);

const StyledTableRow = styled(SemanticStyledTableRow)``;

export const TableRow = (props: ITableRowProps) => {
  return (
    <StyledTableRow>
      {props.children}
    </StyledTableRow>
  );
};
