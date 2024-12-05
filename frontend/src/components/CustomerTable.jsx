import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

const CustomerTable = ({ customers }) => {
  return (
    <Box sx={{ width: "100%", padding: 2, overflowX: "auto" }}>
      <TableContainer
        component={Paper}
        elevation={5}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "100%",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="customer table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                "& th": {
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                  letterSpacing: "0.5px",
                },
              }}
            >
              <TableCell>S. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>DOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <TableRow
                  key={customer.s_no}
                  sx={{
                    "&:nth-of-type(even)": {
                      backgroundColor: "#f5f5f5",
                    },
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                    transition: "background-color 0.3s",
                  }}
                >
                  <TableCell>{customer.s_no}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                        {customer.name_of_customer}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.mobile_number}</TableCell>
                  <TableCell>{new Date(customer.dob).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ color: "gray" }}>
                  No customers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerTable;
