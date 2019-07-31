package com.ionic.br.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ionic.br.Model.Estado;

@Repository
public interface EstadoRepositories extends JpaRepository<Estado, Integer> {

}
