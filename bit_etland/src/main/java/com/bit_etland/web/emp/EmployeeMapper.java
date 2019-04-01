package com.bit_etland.web.emp;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeMapper {
	public void insertEmployee(Employee emp);
	
	public List<Employee> selectEmployeeList();
	public List<Employee> selectEmployees(Object o);
	public Employee selectEmployee(Employee emp);
	public Employee findOneEmployee();
	public int countEmployees();
	public Employee existsEmployee(Employee emp);
	
	public void updateEmployee(Employee emp);
	public void deleteEmployee(Employee emp);
}
