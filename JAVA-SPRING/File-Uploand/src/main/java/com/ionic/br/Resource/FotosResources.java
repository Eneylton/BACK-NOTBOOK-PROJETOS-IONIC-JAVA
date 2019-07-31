package com.ionic.br.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ionic.br.Upload.FotoUpload;

@RestController
@RequestMapping("/fotos")
public class FotosResources {
	
	@Autowired
	private FotoUpload disco;
	
	@CrossOrigin
	@PostMapping
	public void upload(@RequestParam MultipartFile foto) {
		disco.salvarFoto(foto);
	}

}