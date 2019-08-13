import React from "react"

import { Table, TableHeader, TableHeaderCell, TableBody, TableBodyCell } from "../components/atoms/Table"

const MainPage = () => (
  <Table _border="square">
    <TableHeader>
      <TableHeaderCell>
        TableHeader
      </TableHeaderCell>
    </TableHeader>
    <TableBody>
      <TableBodyCell>
        TableBody
      </TableBodyCell>
    </TableBody>
  </Table>
);

export default MainPage;