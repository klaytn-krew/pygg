import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableBodyProps extends IComponentProps {}

const CustomStyledTableBody =  ({ className, ...props }: ITableBodyProps) => (
  <tbody className={className} {...props}>
    {props.children}
  </tbody>
);

const StyledTableBody = styled(CustomStyledTableBody)``;

export const TableBody = (props: ITableBodyProps) => {
  return (
    <StyledTableBody>
      {props.children}
    </StyledTableBody>
  );
};
