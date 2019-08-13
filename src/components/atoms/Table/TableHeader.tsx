import React from "react"
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITableHeaderProps extends IComponentProps {}

const SemanticStyledTableHeader =  ({ className, ...props }: ITableHeaderProps) => (
  <thead>
    {props.children}
  </thead>
);

const StyledTableHeader = styled(SemanticStyledTableHeader)``;

export const TableHeader = (props: ITableHeaderProps) => {
  return (
    <StyledTableHeader>
      {props.children}
    </StyledTableHeader>
  );
};
