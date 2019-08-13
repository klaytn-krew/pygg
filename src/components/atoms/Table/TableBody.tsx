import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableBodyProps extends IComponentProps {}

const SemanticStyledTableBody =  ({ className, ...props }: ITableBodyProps) => (
  <tbody>
    {props.children}
  </tbody>
);

const StyledTableBody = styled(SemanticStyledTableBody)``;

export const TableBody = (props: ITableBodyProps) => {
  return (
    <StyledTableBody>
      {props.children}
    </StyledTableBody>
  );
};
