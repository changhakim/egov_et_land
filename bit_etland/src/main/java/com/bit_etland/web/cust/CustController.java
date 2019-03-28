package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.emp.EmployeeMapper;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/users")
public class CustController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@PostMapping("/cust/{userid}")
	public Customer login(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("=========커스토머진입======");
		
		IFunction i = (Object o) -> custMap.selectCustomer(param);
		 
		
		return (Customer) i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/{user}/list")
	public List<Users<?>> list(
			@RequestBody Map<?, ?> param){
		logger.info("========list진입======");
		IFunction i = (Object o) -> custMap.selectCustomers(param);
		return (List<Users<?>>)i.apply(param);
	}
	
	@PostMapping("/cust")
	public Map<?, ?> join(
			@RequestBody Customer param) {
		logger.info("=========커스토머조인진입======");
		
		IConsumer i = (Object o) -> custMap.insertCustomer(param);	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	@PutMapping("/cust/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Customer param){
		logger.info("=========커스토머업데이트진입======");
		System.out.println("커스토머아이디"+param.getCustomerID());
		IConsumer i = (Object o) -> custMap.updateCustomer(param);;	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	@DeleteMapping("/cust/{userid}")
	public Map<?, ?> delete(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Customer param){
		logger.info("=========삭제진입======");
		System.out.println("커스토머아이디"+param.getCustomerID());
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);;	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	
	
}
