package com.bit_etland.web.cmm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.bit_etland.web.cust.Customer;

import lombok.Data;

@Data @Component @Lazy
public class Image {
	private String imgSeq, imgName, imgExtention, owner;

}
