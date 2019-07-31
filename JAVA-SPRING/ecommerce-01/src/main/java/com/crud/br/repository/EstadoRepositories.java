package com.crud.br.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.br.Model.Estado;

@Repository
public interface EstadoRepositories extends JpaRepository<Estado, Integer> {

}
