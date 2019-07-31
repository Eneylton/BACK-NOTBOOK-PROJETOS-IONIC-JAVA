-- MySQL dump 10.13  Distrib 5.6.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db_hibernat_financeiro
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aluno` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `bairro` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `dataNascimento` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `enderecoCompleto` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fixo` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `rg` varchar(255) DEFAULT NULL,
  `sobreNome` varchar(255) DEFAULT NULL,
  `wathsapp` varchar(255) DEFAULT NULL,
  `empresa_id` bigint(20) NOT NULL,
  `estado_civil_id` bigint(20) NOT NULL,
  `servico_id` bigint(20) NOT NULL,
  `sexo_id` bigint(20) NOT NULL,
  `usuario_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_rjq27v4h10pkxv9jlgs51i0rx` (`estado_civil_id`),
  KEY `FK_l9yw3ve8lnredeoj4x0lrg76d` (`servico_id`),
  KEY `FK_pwhhbw16kuke3cssb5x26fjvd` (`sexo_id`),
  CONSTRAINT `FK_l9yw3ve8lnredeoj4x0lrg76d` FOREIGN KEY (`servico_id`) REFERENCES `servico` (`id`),
  CONSTRAINT `FK_pwhhbw16kuke3cssb5x26fjvd` FOREIGN KEY (`sexo_id`) REFERENCES `sexo` (`id`),
  CONSTRAINT `FK_rjq27v4h10pkxv9jlgs51i0rx` FOREIGN KEY (`estado_civil_id`) REFERENCES `estado_civil` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (1,'2019-01-02 03:00:00','Cohatrac IV','65054-410','São Luís','585.652.222-22','2000-07-23 00:00:00','rose@gmail.com','Rua Um','R. 1 - Cohatrac IV, São Luís - MA, 65054-410, Brasil','MA','(68) 59855 - 5233','photo3.jpg',-2.5357,-44.2026,'Rose','152','54421442122','Santiago','(98) 98565 - 6565',2,2,1,2,2),(2,'2019-01-03 03:00:00','Cohatrac III','65054-700','São Luís','652.314.422-21','2019-01-03 00:00:00','charel@gmail.com','Rua Treze','R. Três - Cohatrac III, São Luís - MA, 65054-700, Brasil','MA','(98) 56565 - 6555','photo1.jpg',-2.54014,-44.2008,'Charel','15','45121244444','Souza','(56) 65656 - 5655',2,1,2,1,2),(3,'2019-01-10 03:00:00','Cohatrac IV','65054-520','São Luís','656.566.565-65','1980-09-27 00:00:00','darvin@gmail.com','Rua Vinte','R. Vinte - Cohatrac IV, São Luís - MA, 65054-520, Brasil','MA','(98) 98989 - 8998','user1-128x128.jpg',-2.53502,-44.2037,'Darvin','150','6521542211','Almeida','(99) 89898 - 9898',2,1,2,1,2),(4,'2019-01-11 03:00:00','Cohatrac III','65054-540','São Luís','545.454.544-44','2019-03-08 00:00:00','john@gmail.com','Rua Quatro','R. Quatro - Cohatrac III, São Luís - MA, 65054-540, Brasil','MA','(98) 98565 - 6552','12.jpg',-2.53978,-44.2005,'Sctman','36','874511211100','John','(89) 86565 - 3232',2,2,2,1,2),(5,'2019-01-12 03:00:00','Forquilha','65054-100','São Luís','453.454.554-35','2019-02-07 00:00:00','en@gmail.com','Rua Projetada','R. Seis - Forquilha, São Luís - MA, 65054-100, Brasil','MA','(45) 45454 - 5354','',-2.54964,-44.2161,'Lilika','33','543333333554','Jansen','(43) 54354 - 5353',2,2,1,2,2),(6,'2019-02-20 03:00:00','Cohatrac IV','65054-900','São Luís','898.959.888-98','2019-02-14 00:00:00','eeeeeee@gmail.com','Rua Dezenove','São Luís - MA, Brasil','MA','(98) 98998 - 9898','user4-128x128.jpg',-2.53806,-44.2029,'Star','36','9695656565','Prpuro','(89) 89898 - 9898',3,2,7,2,1),(7,'2019-02-21 03:00:00','Forquilha','65054-100','São Luís','652.322.212-12','2019-02-20 00:00:00','rochelle','Rua Projetada','R. Seis - Forquilha, São Luís - MA, 65054-100, Brasil','MA','(98) 56565 - 6565','user5-128x128.jpg',-2.54964,-44.2161,'Rochelle','256','9898955555','Doida','(54) 45554 - 5454',3,1,6,1,1),(9,'2019-02-22 03:00:00','Cohatrac IV','65054-420','São Luís','626.565.624-66','2001-02-16 00:00:00','erewree@gamil.com','Rua Dez','R. Dez - Cohatrac IV, São Luís - MA, 65054-420, Brasil','MA','(99) 89898 - 9898','user8-128x128.jpg',-2.53455,-44.2081,'Moragan','15','434335266','elefante','(98) 98989 - 8988',3,1,6,1,1),(10,'2019-02-23 03:00:00','Cohatrac IV','65054-550','São Luís','985.443.355-55','2011-02-10 00:00:00','julia@gmail.com','Rua Cinco','R. Cinco - Cohatrac IV, São Luís - MA, 65054-550, Brasil','MA','(98) 98555 - 5546','photo3.jpg',-2.53573,-44.2097,'Julia ','45','9895500051','Amorim','(89) 85555 - 4655',3,1,4,2,1),(11,'2019-02-23 21:13:24','COHAB Anil I','65050-200','São Luís','665.054.221-12','2019-02-23 00:00:00','edson@gmail.com','Rua Agnelo Costa','São Luís - MA, Brasil','MA','(98) 98965 - 5555','user2-160x160.jpg',-2.54451,-44.2218,'Edson','14','84544221','Fontinelle','(89) 89889 - 8888',3,1,6,1,1);
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-31 10:40:36
