import React, { useState, useEffect } from "react";
export const EmployeeList = () => {
  const [employees, changeEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/employees").then(res =>
      res.json().then(employeeArray => {
        changeEmployees(employeeArray);
      })
    );
  }, []);
  return (
    <>
      {employees.map(employeeObject => {
        return (
          <h3 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h3>
        );
      })}
    </>
  );
};
