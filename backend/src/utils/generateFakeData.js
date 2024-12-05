import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import Customer from "../domain/customer.js";

dotenv.config();

const generateFakeCustomers = async (numRecords = 2000000, batchSize = 500) => {
  try {
    const customers = [];
    const emailSet = new Set();

    for (let i = 0; i < numRecords; i++) {
      let email;
      do {
        email = faker.internet.email();
      } while (emailSet.has(email));

      emailSet.add(email);

      const customer = {
        s_no: i + 1,
        name_of_customer: faker.person.fullName(),
        email,
        mobile_number: faker.phone.number("###-###-####"),
        dob: faker.date.past(30),
        created_at: new Date(),
        modified_at: new Date(),
      };
      customers.push(customer);

      if (customers.length >= batchSize) {
        await Customer.insertMany(customers, { ordered: false });
        customers.length = 0;
      }
    }

    if (customers.length > 0) {
      await Customer.insertMany(customers, { ordered: false });
    }
  } catch (error) {
    console.error("Error generating fake data:", error.message);
  }
};

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
    await generateFakeCustomers();
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
};

run();
