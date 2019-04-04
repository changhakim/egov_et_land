package com.bit_etland.web.sup;

import org.springframework.stereotype.Repository;

@Repository
public interface SupplierMapper {
	public String txSupplier(String supplierName);
}
