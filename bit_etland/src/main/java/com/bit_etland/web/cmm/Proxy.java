package com.bit_etland.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;

import lombok.Data;
@Component @Data @Lazy
public class Proxy{
	private String searchWord;
	private int pageNum,pageSize,blockSize,
				   startRow,endRow,startpage,endpage,
				   prevBlock,nextBlock,totalCount;
	private boolean existPrev,existNext;
	
	@Autowired Image img; 
	public void carryOut(Map<?,?> paramMap) {
		//page_num,page_size,blocksize,totalCount
		searchWord = (String) paramMap.get("searchWord");
		this.pageNum =(paramMap.get("page_num")==null)?1:Integer.parseInt((String) paramMap.get("page_num"));
		this.pageSize =(paramMap.get("page_size")==null)?5:Integer.parseInt((String) paramMap.get("page_size"));
		
		
		totalCount = (int) paramMap.get("totalCount");
		int pageCount = totalCount/pageSize;
		if(totalCount%pageSize!=0) {
			pageCount++;
		}
		this.startRow = pageSize*(pageNum-1)+1;
		this.endRow = pageNum * pageSize;
		endRow = (totalCount > endRow)?endRow:totalCount;
		this.blockSize =(paramMap.get("blocksize")==null)?5:Integer.parseInt((String) paramMap.get("blocksize"));
		
		
		this.existPrev = (pageNum<=blockSize)?false:true;
		
		startpage = ((pageNum-1)/blockSize)*blockSize+1;
		this.existNext = (startpage+pageSize)>pageCount?false:true;
		endpage = startpage + 4;
		if(endpage>pageCount) {
			endpage = pageCount;
		
		}

		prevBlock = startpage - pageSize;
		nextBlock = startpage + pageSize;
		
	}
	public void fileUpload(String customerID) {
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setFileSizeMax(1024 * 1024 * 40);//40 MB
		upload.setSizeMax(1024 * 1024 * 50); // 50MB
		List<FileItem> items = null;
	
		try {
			File file = null;
			//items = upload.parseRequest(new ServletRequestContext(request));
			Iterator<FileItem> it = items.iterator();
			while(it.hasNext()) {
				FileItem item = it.next();
				if(!item.isFormField()) {
					String fileName = item.getName();
					file = new File(""+fileName);
					item.write(file);
					img = new Image();
					System.out.println("파일명:"+fileName.substring(0,fileName.indexOf(".")));
					img.setImgName(fileName.substring(0,fileName.indexOf(".")));
					
					System.out.println("확장자"+fileName.substring(fileName.indexOf(".")+1));
					img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
					img.setOwner(customerID);
					 System.out.println("이미지아이디"+img.getOwner());
					//DB에 입력하기
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
