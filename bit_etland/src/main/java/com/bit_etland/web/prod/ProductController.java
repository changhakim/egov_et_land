package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cate.Category;
import com.bit_etland.web.cate.CategoryMapper;
import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.cust.CustController;
import com.bit_etland.web.emp.EmployeeMapper;
import com.bit_etland.web.sup.Supplier;
import com.bit_etland.web.sup.SupplierMapper;

@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	
	@Autowired Product pro;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired EmployeeMapper empMap;
	@Autowired SupplierMapper supMap;
	@Autowired CategoryMapper cateMap;
	@Autowired Supplier sup;
	@Autowired Category cate;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@Autowired Proxy pxy;
	@PostMapping("/phones/{userid}")
	public Product login(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("=========프로덕트진입======");
		
		IFunction i = (Object o) -> prodMap.selectProduct(param);
		 
		
		return (Product) i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/phones/page/{page}")
	public Map<?, ?> list(
			@PathVariable String page){
		logger.info("========프로덕트list진입======");
		map.clear();
		map.put("page_num", page);
		map.put("page_size", "5");
		map.put("blocksize", "5");
		ISupplier j = ()-> prodMap.countProducts();
		map.put("totalCount", (int)j.get());
		pxy.carryOut(map);
		map.clear();
		IFunction i = (Object o) -> prodMap.selectProducts(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	}
	
	@Transactional
	@PostMapping("/phones")
	public Map<?, ?> regist(
			@RequestBody Product param) {
		logger.info("=========프로덕트레지스터진입======");
		System.out.println(param.toString());
		
		
		IFunction j = s-> cateMap.txCategory((String) s);
		IFunction j2 = s-> supMap.txSupplier((String) s);
		String cateID= (String) j.apply(param.getCategoryID());
		String suppID =(String) j2.apply(param.getSupplierID());
		param.setCategoryID(cateID);
		param.setSupplierID(suppID);
		IConsumer i =  o -> prodMap.insertProduct((Product) o);	
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
