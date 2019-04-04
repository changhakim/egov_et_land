package com.bit_etland.web.cmm;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cate.Category;
import com.bit_etland.web.cust.Customer;
import com.bit_etland.web.cust.CustomerMapper;
import com.bit_etland.web.prod.Product;
import com.bit_etland.web.prod.ProductMapper;
import com.bit_etland.web.sup.Supplier;

@RestController
@Transactional
public class TxController {
	@Autowired Product pro;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired CustomerMapper custMap;
	@Autowired Supplier sup;
	@Autowired Customer cus;
	@Autowired Category cate;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@Autowired Proxy pxy;
	@GetMapping("/trans/{searchID}/{firstno}")
	public Map<?, ?> transaction(
			@PathVariable String searchID,
			@PathVariable String firstno
			){
		System.out.println(searchID);
		System.out.println(firstno);
		String a= "%"+searchID+"%";
		map.clear();
		map.put("page_num", firstno);
		map.put("page_size", "5");
		map.put("blocksize", "5");
		IFunction j = (o)-> prodMap.countSearchProducts((String) o);
		map.put("searchWord", a);
		map.put("totalCount", (int)j.apply(a));
		pxy.carryOut(map);
		map.clear();
		
		
		IFunction i = s->prodMap.searchProducts((Proxy) s);
		
		@SuppressWarnings("unchecked")
		List<Product> ls = (List<Product>)i.apply(pxy);
		System.out.println(ls.toString());
		map.clear();
		map.put("ls", ls);
		map.put("pxy",pxy);
		return map;
	}
}
