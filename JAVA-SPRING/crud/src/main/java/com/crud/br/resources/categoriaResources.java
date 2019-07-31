package com.crud.br.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.crud.br.Model.Categoria;
import com.crud.br.service.categoriaService;

@RestController
@RequestMapping(value = "/categorias")
public class categoriaResources {
	
	@Autowired
	private categoriaService service;
	
	@RequestMapping(value = "/{id}",method = RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id){
		
	Categoria cat = service.buscarPorID(id);
	
	return ResponseEntity.ok().body(cat);
		
	}

}
