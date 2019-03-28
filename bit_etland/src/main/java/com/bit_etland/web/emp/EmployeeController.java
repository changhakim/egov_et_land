package com.bit_etland.web.emp;

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
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.cust.CustController;

@RestController
@RequestMapping("/users")
public class EmployeeController {

private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	
	@Autowired Employee cust;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@PostMapping("/emp/{userid}")
	public Employee login(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("=========커스토머진입======");
		
		IFunction i = (Object o) -> empMap.selectEmployee(param);
		 
		
		return (Employee) i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/emp/list")
	public List<Users<?>> list(
			@RequestBody Map<?, ?> param){
		logger.info("========list진입======");
		IFunction i = (Object o) -> empMap.selectEmployees(param);
		return (List<Users<?>>)i.apply(param);
	}
	
	@PostMapping("/emp")
	public Map<?, ?> join(
			@RequestBody Employee param) {
		logger.info("=========커스토머조인진입======");
		
		IConsumer i = (Object o) -> empMap.insertEmployee(param);	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	@PutMapping("/emp/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Employee param){
		logger.info("=========커스토머업데이트진입======");
		System.out.println("커스토머아이디"+param.getEmployeeID());
		IConsumer i = (Object o) -> empMap.updateEmployee(param);;	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	@DeleteMapping("/emp/{userid}")
	public Map<?, ?> delete(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Employee param){
		logger.info("=========삭제진입======");
		System.out.println("커스토머아이디"+param.getEmployeeID());
		IConsumer i = (Object o) -> empMap.deleteEmployee(param);;	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	
	
}
