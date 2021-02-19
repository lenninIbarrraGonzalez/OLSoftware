import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import AppContext from "../context/AppContext";

const columns = [
  { id: "firstName", label: "Nombres", minWidth: 100 },
  { id: "lastName", label: "Apellidos", minWidth: 100 },
  {
    id: "identification",
    label: "Identificación (C.C)",
    minWidth: 120,
  },
  {
    id: "role",
    label: "Rol asociado",
    minWidth: 80,
  },
  {
    id: "state",
    label: "Estado",
    minWidth: 50,
  },
  {
    id: "phone",
    label: "Teléfono",
    minWidth: 100,
  },
  {
    id: "email",
    label: "Correo electrónico",
    minWidth: 170,
  },
];

function createData(
  firstName,
  lastName,
  identification,
  role,
  state,
  phone,
  email
) {
  return { firstName, lastName, identification, role, state, phone, email };
}

const rows = [
  createData(
    "Andres Felipe",
    "Garcia Castro",
    1324171354,
    "Administrador",
    "Activo",
    "3154415599",
    "ing.lenninibarra@gmail.com"
  ),
  createData(
    "Lennin Geovanny",
    "Ibarra Gonzalez",
    1403500365,
    "Conductor",
    "Activo",
    "3154415599",
    "ing.lenninibarra@gmail.com"
  ),
  createData(
    "Natali Valentina",
    "Martinez",
    60483973,
    "Recolector",
    "Activo",
    "3154415599",
    "ing.lenninibarra@gmail.com"
  ),
  createData(
    "Leidy Liliana",
    "Burbano Galeano",
    327167434,
    "Digitador CG-UNO",
    "Activo",
    "3154415599",
    "ing.lenninibarra@gmail.com"
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Users() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const {
    state: { users },
  } = useContext(AppContext);

  console.log("users", users);

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
