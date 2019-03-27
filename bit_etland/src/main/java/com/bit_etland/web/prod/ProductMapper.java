package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
@Repository
public interface ProductMapper {
	public void createProduct(Product pro);
	public List<Product> selectProductList(Map<?, ?> map);
	public List<Product> selectProducts(Product pro);
	public Product selectProduct(Product pro);
	public int countProducts(Map<?, ?> map);
	public boolean existsProduct(Product pro);
	
	public void updateProduct(Product pro);
	public void deleteProduct(Product pro);
}
