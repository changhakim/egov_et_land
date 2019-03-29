package com.bit_etland.web.prod;

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
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.cust.CustController;
import com.bit_etland.web.emp.EmployeeMapper;

@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	
	@Autowired Product cust;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@PostMapping("/phones/{userid}")
	public Product login(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("=========프로덕트진입======");
		
		IFunction i = (Object o) -> prodMap.selectProduct(param);
		 
		
		return (Product) i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/phones/list")
	public List<Users<?>> list(
			@RequestBody Map<?, ?> param){
		logger.info("========프로덕트list진입======");
		IFunction i = (Object o) -> prodMap.selectProducts((Product) param);
		return (List<Users<?>>)i.apply(param);
	}
	
	@PostMapping("/phones")
	public Map<?, ?> join(
			@RequestBody Product param) {
		logger.info("=========프로덕트조인진입======");
		
		IConsumer i = (Object o) -> prodMap.insertProduct(param);	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	@PutMapping("/phones/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Product param){
		logger.info("=========프로덕트업데이트진입======");
		System.out.println("프로덕트아이디"+param.getProductID());
		IConsumer i = (Object o) -> prodMap.updateProduct(param);;	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
	@DeleteMapping("/phones/{userid}")
	public Map<?, ?> delete(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Product param){
		logger.info("=========삭제진입======");
		System.out.println("커스토머아이디"+param.getProductID());
		IConsumer i = (Object o) -> prodMap.deleteProduct(param);;	
		i.accept(param);
		map.clear();
		map.put("s", "s");
		return map;
	}
}
