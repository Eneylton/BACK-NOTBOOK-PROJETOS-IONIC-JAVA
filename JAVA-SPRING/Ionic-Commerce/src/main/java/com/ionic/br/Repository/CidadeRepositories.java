package com.ionic.br.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ionic.br.Model.Cidade;

@Repository
public interface CidadeRepositories extends JpaRepository<Cidade, Integer> {

}
