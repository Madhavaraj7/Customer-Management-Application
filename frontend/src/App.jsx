import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerTable from "./components/CustomerTable";
import SearchFilterBar from "./components/SearchFilterBar";
import Pagination from "./components/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const params = { page, limit };

        if (searchQuery) {
          params.search = searchQuery;
        }

        if (filtersApplied && filterField && filterValue) {
          params.filterField = filterField;
          params.filterValue = filterValue;
        }

        const { data } = await axios.get(`${API_URL}/customers`, { params });
        console.log({ data });

        setCustomers(data.customers);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching customers:", error.message);
        toast.error("Failed to fetch customers. Please try again later.");
      }
    };

    fetchCustomers();
  }, [page, limit, searchQuery, filterField, filterValue, filtersApplied]);

  const applyFilters = () => {
    if (search.trim()) {
      setFiltersApplied(true);
      setSearchQuery(search); 
      toast.success("Filters applied successfully!");
    } else {
      toast.warn("Search field cannot be empty.");
    }
  };

  const applyIndivFilter = () => {
    if (filterField && filterValue.trim()) {
      setFiltersApplied(true);
      toast.success("Individual filter applied successfully!");
    } else {
      toast.warn("Please select a filter field and provide a value.");
    }
  };

  return (
    <div className="app-container flex items-start justify-center min-h-screen w-full px-4">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="main-content w-full max-w-screen-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white bg-gradient-to-r from-teal-500 to-indigo-600 p-6 rounded-lg shadow-md text-center font-raleway mt-4 mb-4">
          Customer Management
        </h1>

        <SearchFilterBar
          search={search}
          setSearch={setSearch}
          filterField={filterField}
          setFilterField={setFilterField}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          applyFilters={applyFilters}
          applyIndivFilter={applyIndivFilter}
        />

        <CustomerTable customers={customers} />
        {total > 0 && (
          <Pagination
            total={total}
            page={page}
            limit={limit}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default App;
