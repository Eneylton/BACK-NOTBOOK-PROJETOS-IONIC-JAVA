package com.ionic.br;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ionic.br.Model.Categoria;
import com.ionic.br.Model.Cidade;
import com.ionic.br.Model.Estado;
import com.ionic.br.Model.Produto;
import com.ionic.br.Repository.CategoriaRepositories;
import com.ionic.br.Repository.CidadeRepositories;
import com.ionic.br.Repository.EstadoRepositories;
import com.ionic.br.Repository.ProdutoRepositories;

@SpringBootApplication
public class IonicCommerceApplication implements CommandLineRunner {

	@Autowired
	private EstadoRepositories estadoRepos;
	
	@Autowired
	private CidadeRepositories cidadeRepos;
	
	@Autowired
	private CategoriaRepositories categoriaRepos;
	
	@Autowired
	private ProdutoRepositories produtosRepos;
	
	public static void main(String[] args) {
		SpringApplication.run(IonicCommerceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		
		Estado est1 = new Estado(null,"Maranhão");
		Estado est2 = new Estado(null,"Piaui");
		Estado est3 = new Estado(null,"Para");
		
		estadoRepos.saveAll(Arrays.asList(est1,est2,est3));
		
		Cidade cid1 = new Cidade(null, "São Luís", est1);
		Cidade cid2 = new Cidade(null, "Raposa", est1);
		Cidade cid3 = new Cidade(null, "S.J de Ribamar", est1);
		
		Cidade cid4 = new Cidade(null, "Terezina", est2);
		Cidade cid5 = new Cidade(null, "São João das Rute",est2);
		Cidade cid6 = new Cidade(null, "São Bernado", est3);

		Cidade cid7 = new Cidade(null, "Belém", est3);
		Cidade cid8 = new Cidade(null, "São Carlos das Farinhas",est3);
		
		cidadeRepos.saveAll(Arrays.asList(cid1,cid2,cid3,cid4,cid5,cid6,cid7,cid8));
		
		
		// ---------------------------- //
		
		
		Categoria cat1 = new Categoria(null, "Informática");
		Categoria cat2 = new Categoria(null, "Escritório");
			
		Produto prod1 = new Produto(null, "NootBook", 3545.89);
		Produto prod2 = new Produto(null, "Computador", 5545.89);
		Produto prod3 = new Produto(null, "Monitor", 1545.89);
		
		categoriaRepos.saveAll(Arrays.asList(cat1,cat2));
		
		cat1.getProdutos().addAll(Arrays.asList(prod1,prod2));
		cat2.getProdutos().addAll(Arrays.asList(prod3));
		
		prod1.getCategoria().addAll(Arrays.asList(cat1));
		prod2.getCategoria().addAll(Arrays.asList(cat1));
		prod3.getCategoria().addAll(Arrays.asList(cat2));
		
		produtosRepos.saveAll(Arrays.asList(prod1,prod2,prod3));
	}

}
