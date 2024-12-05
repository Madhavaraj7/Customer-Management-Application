import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ total, page, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center mt-8">
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
      />
    </div>
  );
};

export default Pagination;
