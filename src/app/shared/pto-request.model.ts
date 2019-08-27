export class PTORequest {
  constructor(public Id: number, public EmployeeName: string, public StartDate: Date, public EndDate: Date, public Status: number) {}
}

// ALL Employees Requests
// tslint:disable-next-line:max-line-length
// SELECT CONCAT(E.Firstname, ' ', E.Lastname) AS Name, R.StartDate, R.EndDate, R.Status FROM Requests AS R LEFT JOIN Employees AS E ON R.EmployeeID = E.Id;
// LEFT JOIN allows employee name to appear as a string rather than a number
// Only want to pull and store ALL Employee Requests if HR is logged in

// Requests for Current Employee
// SELECT R.StartDate, R.EndDate, S.Status FROM Requests AS R LEFT JOIN Status AS S ON R.Status = S.Id WHERE EmployeeID = ##
// LEFT JOIN allows Status to appear as a word rather than a number
// Need to pull current employee request regardless of who is logged in (employee or HR)
