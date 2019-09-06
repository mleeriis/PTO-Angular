export class Employee {
  constructor(
    public Id: number,
    public Firstname: string,
    public Lastname: string,
    public email: string,
    public RoleID: number,
    public balance: number) {
  }
}

// Login checking SQL Query
// SELECT Id, email, Password, RoleID FROM Employees;
// If login is successful, Employee Id and RoleID gets stored in session

// HR VIEW SQL Query
// If RoleID == 1 (User is HR), they can see hours balance of all employees
// SELECT E.Id, CONCAT(E.Firstname, ' ', E.Lastname), B.HoursBalance FROM Employees AS E LEFT JOIN CurrentBalance AS B ON B.EmployeeID = E.Id

// If RoleID == 2 (User is regular employee), they can see their own hours balance
// SELECT HoursBalance FROM CurrentBalance WHERE EmployeeID = Id


