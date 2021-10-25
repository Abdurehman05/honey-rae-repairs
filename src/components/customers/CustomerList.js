import React, { useState, useEffect } from "react";
export const CustomerList = () => {
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
      {customers.map(customerObject => {
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
