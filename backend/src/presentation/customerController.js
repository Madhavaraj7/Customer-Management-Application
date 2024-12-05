import express from "express";
import { getCustomers } from "../application/customerService.js";

const router = express.Router();

router.get("/customers", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      filterField = "",
      filterValue = "",
    } = req.query;

    const { customers, total } = await getCustomers(
      parseInt(page),
      parseInt(limit),
      search,
      filterField,
      filterValue
    );

    console.log(customers);
    

    res.json({ customers, total });
  } catch (error) {
    console.error("Error fetching customers:", error.message, error.stack);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;
