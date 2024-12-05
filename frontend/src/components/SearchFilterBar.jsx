import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchFilterBar = ({
  search,
  setSearch,
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
  applyFilters,
  applyIndivFilter,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      mb: 4,
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "space-between",
      backgroundColor: "#ffffff",
      borderRadius: 1.5,
      p: 3,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    }}
  >
    <TextField
      variant="outlined"
      placeholder="Search by name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      size="small"
      sx={{
        width: { xs: "100%", sm: "260px" },
        borderRadius: 1.5,
        backgroundColor: "#f5f5f5",
        "& .MuiOutlinedInput-root": {
          borderRadius: 1.5,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        },
      }}
      InputProps={{
        startAdornment: <SearchIcon sx={{ color: "#1976d2" }} />,
      }}
    />

    <Button
      variant="contained"
      color="primary"
      onClick={applyFilters}
      sx={{
        textTransform: "none",
        paddingX: 4,
        "&:hover": { backgroundColor: "#1565c0" },
        transition: "background-color 0.3s",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
      }}
    >
      Search
    </Button>

    <FormControl size="small" sx={{ minWidth: "200px", flexGrow: 1 }}>
      <InputLabel sx={{ fontWeight: 600 }}>Filter Field</InputLabel>
      <Select
        value={filterField}
        onChange={(e) => setFilterField(e.target.value)}
        label="Filter Field"
        sx={{
          borderRadius: 1.5,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f5f5f5",
        }}
      >
        <MenuItem value="">Select Field</MenuItem>
        <MenuItem value="mobile_number">Mobile</MenuItem>
        <MenuItem value="email">Email</MenuItem>
        <MenuItem value="name_of_customer">Customer Name</MenuItem>
      </Select>
    </FormControl>

    <TextField
      variant="outlined"
      placeholder="Filter value"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
      size="small"
      sx={{
        width: { xs: "100%", sm: "260px" },
        borderRadius: 1.5,
        backgroundColor: "#f5f5f5",
        "& .MuiOutlinedInput-root": {
          borderRadius: 1.5,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        },
      }}
    />

    <Button
      variant="contained"
      color="secondary"
      onClick={applyIndivFilter}
      sx={{
        textTransform: "none",
        paddingX: 4,
        "&:hover": { backgroundColor: "#9c27b0" },
        transition: "background-color 0.3s",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
      }}
    >
      Apply Filter
    </Button>
  </Box>
);

export default SearchFilterBar;
