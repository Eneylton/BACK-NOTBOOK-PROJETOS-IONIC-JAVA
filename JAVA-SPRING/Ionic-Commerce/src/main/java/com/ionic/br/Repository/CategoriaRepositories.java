package com.ionic.br.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ionic.br.Model.Categoria;

@Repository
public interface CategoriaRepositories extends JpaRepository<Categoria, Integer>  {

}
