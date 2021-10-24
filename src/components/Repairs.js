import React, { useState, useEffect } from "react";
export const Repairs = () => {
  const [customers, changeCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/customers").then(res =>
      res.json().then(customerArray => {
        changeCustomers(customerArray);
      })
    );
  }, []);
  return (
    <>
      <h1>Honey Rae's Repair Shop </h1>
      {customers.map(customerObject => {
        return (
          <h2>
            {customerObject.name}
            {/* {customerObject.email}
            {customerObject.address} */}
          </h2>
        );
      })}
    </>
  );
};
