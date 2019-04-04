package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;
@Repository
public interface ProductMapper {
	public void insertProduct(Product pro);
	public List<Product> selectProductList(Map<?, ?> map);
	public List<?> selectProducts(Proxy pxy);
	public List<?> searchProducts(Proxy pxy);
	public Product selectProduct(Product pro);
	public int countProducts();
	public int countSearchProducts(String searchword);
	public boolean existsProduct(Product pro);
	
	public void updateProduct(Product pro);
	public void deleteProduct(Product pro);
}
