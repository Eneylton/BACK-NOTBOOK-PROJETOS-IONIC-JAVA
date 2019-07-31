package com.crud.br.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.br.Model.Categoria;
import com.crud.br.repositories.categoriaRepositorie;

@Service
public class categoriaService {

	@Autowired
	private categoriaRepositorie repos;
	
	
	public Categoria buscarPorID(Integer id) {
	
		Optional<Categoria> cat = repos.findById(id);
		
		return cat.orElse(null);
	}
}
