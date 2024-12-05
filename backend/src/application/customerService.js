import Customer from "../domain/customer.js";

export async function getCustomers(
  page,
  limit,
  search,
  filterField,
  filterValue
) {
  try {
    const query = {};

    if (search) {
      query.name_of_customer = { $regex: `^${search}`, $options: "i" }; 
    }

    if (filterField && filterValue) {
      query[filterField] = { $regex: filterValue, $options: "i" }; 
    }

    const customers = await Customer.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Customer.countDocuments(query);

    return { customers, total };
  } catch (error) {
    console.error("Error in getCustomers:", error);
    throw error;
  }
}
