import React, { useState, useEffect } from "react";
export const EmployeeList = () => {
  const [employees, changeEmployees] = useState([]);
  const [employeesSpecialties, changeSpecialties] = useState("");

  useEffect(() => {
    fetch("http://localhost:8088/employees").then(res =>
      res.json().then(employeeArray => {
        changeEmployees(employeeArray);
      })
    );
  }, []);

  useEffect(() => {
    const specialties = employees.map(
      employeeObject => employeeObject.specialty
    );
    changeSpecialties(specialties.join(","));
  }, [employees]);
  return (
    <>
      <div>Specialties: {employeesSpecialties}</div>
      {employees.map(employeeObject => {
        return (
          <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
        );
      })}
    </>
  );
};
