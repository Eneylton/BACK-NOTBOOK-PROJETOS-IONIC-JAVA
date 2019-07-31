package com.crud.br.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.br.Model.Cidade;

@Repository
public interface CidadeRepositories extends JpaRepository<Cidade, Integer> {

}
