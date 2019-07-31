package com.crud.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.br.Model.Categoria;

@Repository
public interface categoriaRepositorie extends JpaRepository<Categoria, Integer> {

}
