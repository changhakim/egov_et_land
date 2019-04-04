package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface CustomerMapper {
	
	
		public void insertCustomer(Customer customer);
		
		public List<Customer> selectCustomerList();
		public List<?> selectCustomers(Proxy pxy);
		public Customer selectCustomer(Customer cus);
		public Customer searchCustomers(String searchWord);
		public int countCustomers();
		public Customer existCustomerID(Customer cus);
		
		
		public void updateCustomer(Customer customer);
		public Map<String, Object> SelectProfile(Map<?, ?> map);
		public void deleteCustomer(Customer customer);

		public Map<String, Object> selectPhone(Map<?, ?> map);

	
}
