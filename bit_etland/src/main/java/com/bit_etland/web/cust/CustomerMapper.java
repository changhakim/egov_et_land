package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	
	
		public void insertCustomer(Customer customer);
		
		public List<Customer> selectCustomerList(Map<?, ?> map);
		public List<Customer> selectCustomers(Map<?, ?> map);
		public Customer selectCustomer(Customer cus);
		public String countCustomers(Map<?, ?> map);
		public Customer existCustomerID(Customer cus);
		
		
		public void updateCustomer(Customer customer);
		public Map<String, Object> SelectProfile(Map<?, ?> map);
		public void deleteCustomer(Customer customer);

		public Map<String, Object> selectPhone(Map<?, ?> map);

	
}
