import React from "react"

import { Table, TableHeader, TableHeaderCell, TableBody, TableBodyCell } from "../components/atoms/Table"
import { Grid, GridRow, GridColumn } from "../components/atoms/Grid";

const MainPage = () => (
  // <Table _border="square">
  //   <TableHeader>
  //     <TableHeaderCell>
  //       TableHeader
  //     </TableHeaderCell>
  //   </TableHeader>
  //   <TableBody>
  //     <TableBodyCell>
  //       TableBody
  //     </TableBodyCell>
  //   </TableBody>
  // </Table>
  <Grid>
    <GridRow _contentAlign="center">
      <GridColumn _width={10}>
        1
      </GridColumn>
      <GridColumn _width={5}>
        1
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        2
      </GridColumn>
    </GridRow>
  </Grid>
);

export default MainPage;