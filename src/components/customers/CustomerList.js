import React, { useState, useEffect } from "react";
export const CustomerList = () => {
  const [customers, changeCustomers] = useState([]);
  const [totalNumberOfCustomers, updateCustomersNumber] = useState("");

  useEffect(() => {
    // console.log("Initial useEffect");
    fetch("http://localhost:8088/customers").then(res =>
      res.json().then(customerArray => {
        changeCustomers(customerArray);
      })
    );
  }, []);

  useEffect(() => {
    // console.log("Customers state change", customers);
    if (customers.length === 1) {
      updateCustomersNumber("You have one customer");
    } else {
      updateCustomersNumber(`You have ${customers.length} customers`);
    }
  }, [customers]);
  return (
    <>
      <div>{totalNumberOfCustomers}</div>
      {customers.slice(0, 2).map(customerObject => {
        return (
          <p key={`customer--${customerObject.id}`}>
            {customerObject.name}
            {/* {customerObject.email}
            {customerObject.address} */}
          </p>
        );
      })}
    </>
  );
};
