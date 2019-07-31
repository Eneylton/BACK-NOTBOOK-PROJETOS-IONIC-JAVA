package com.crud.br;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.crud.br.Model.Cidade;
import com.crud.br.Model.Estado;
import com.crud.br.repository.CidadeRepositories;
import com.crud.br.repository.EstadoRepositories;

@SpringBootApplication
public class Ecommerce01Application implements CommandLineRunner {

	
	@Autowired
	private EstadoRepositories estadoRepos;
	
	@Autowired
	private CidadeRepositories cidadeRepos;
	
	public static void main(String[] args) {
		SpringApplication.run(Ecommerce01Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Estado estado1 = new Estado(null,"Maranhão");
		Estado estado2 = new Estado(null,"Piaui");
		
		Cidade cidade1 = new Cidade(null,"São Luís",estado1);
		Cidade cidade2 = new Cidade(null,"Bacabal",estado1);
		Cidade cidade3 = new Cidade(null,"Terezina",estado2);
		
		estado1.getCidades().addAll(Arrays.asList(cidade1,cidade2));
		estado2.getCidades().addAll(Arrays.asList(cidade3));
		
		estadoRepos.saveAll(Arrays.asList(estado1,estado2));
		cidadeRepos.saveAll(Arrays.asList(cidade1,cidade2,cidade3));
	}

}
