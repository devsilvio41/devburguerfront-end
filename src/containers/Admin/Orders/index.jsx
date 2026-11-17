import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { api } from "../../../services/api";
import { Filter, FilterOption } from "./styles";

import { Row } from "./row";
import { useEffect, useState } from "react";
import { orderStatusOptions } from "./orderStatus";

export function Orders() {
  const [orders, setOrders] = useState([]); //BACKUP
  const [filteredOrders, setFilteredOrders] = useState([]); // VALORES QUE ESTÂO NA TELA
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("orders");

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);
  function createData(order) {
    return {
      orderId: order._id,
      name: order.user?.name,
      date: order.createdAt,
      products: order.products,
      status: order.status,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
  }

    return (
      <>
        <Filter>
          {orderStatusOptions.map((status) => (
            <FilterOption key={status.id} onClick={() => handleStatus(status)}>
              {status.label}
            </FilterOption>
          ))}
        </Filter>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Pedido</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Data do Pedido</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row
                  key={row.orderId}
                  row={row}
                  orders={orders}
                  setOrders={setOrders}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
