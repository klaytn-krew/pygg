import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableHeaderProps extends IComponentProps {}

const CustomStyledTableHeader =  ({ className, ...props }: ITableHeaderProps) => (
  <thead className={className} {...props}>
    {props.children}
  </thead>
);

const StyledTableHeader = styled(CustomStyledTableHeader)``;

export const TableHeader = (props: ITableHeaderProps) => {
  return (
    <StyledTableHeader>
      {props.children}
    </StyledTableHeader>
  );
};
