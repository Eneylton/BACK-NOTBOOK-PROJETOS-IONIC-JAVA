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
-- Table structure for table `financeiro`
--

DROP TABLE IF EXISTS `financeiro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `financeiro` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `dataPagamento` datetime DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `destino` tinyint(1) NOT NULL,
  `parcelaExtenso` varchar(255) DEFAULT NULL,
  `quantidade` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `tipo` tinyint(1) NOT NULL,
  `valor` double DEFAULT NULL,
  `valorExtenso` varchar(255) DEFAULT NULL,
  `aluno_id` bigint(20) NOT NULL,
  `categoria_financeiro_id` bigint(20) NOT NULL,
  `empresa_id` bigint(20) NOT NULL,
  `forma_pagamento_id` bigint(20) NOT NULL,
  `servico_id` bigint(20) NOT NULL,
  `usuario_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_oakrlop4bnnqm7cn6g77s2t58` (`aluno_id`),
  KEY `FK_fx2wq2pts0d7vurcx4y33tkdj` (`categoria_financeiro_id`),
  KEY `FK_ina37k1iv1udmngc28ypag1sk` (`forma_pagamento_id`),
  KEY `FK_blr36yf6fhihuwyryox68ffwn` (`servico_id`),
  CONSTRAINT `FK_blr36yf6fhihuwyryox68ffwn` FOREIGN KEY (`servico_id`) REFERENCES `servico` (`id`),
  CONSTRAINT `FK_fx2wq2pts0d7vurcx4y33tkdj` FOREIGN KEY (`categoria_financeiro_id`) REFERENCES `categoria_financeiro` (`id`),
  CONSTRAINT `FK_ina37k1iv1udmngc28ypag1sk` FOREIGN KEY (`forma_pagamento_id`) REFERENCES `forma_pagamento` (`id`),
  CONSTRAINT `FK_oakrlop4bnnqm7cn6g77s2t58` FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `financeiro`
--

LOCK TABLES `financeiro` WRITE;
/*!40000 ALTER TABLE `financeiro` DISABLE KEYS */;
INSERT INTO `financeiro` VALUES (1,'2019-01-02','2019-01-02 17:19:29','Pagamento Realizado',0,'Entrada (+) ',1,1,1,500,'Quinhentos reais',1,1,2,1,1,2),(2,'2019-01-02','2019-01-02 18:27:26','Pagamento realizado',0,'Entrada (+) ',1,1,1,300,'Trezentos reais',2,1,2,1,2,2),(3,'2019-01-08','2019-01-08 22:08:20','Ja pagou',0,'Entrada (+) ',1,1,1,300,'Trezentos reais',3,1,2,1,2,2),(4,'2019-01-04','2019-02-04 00:00:00','',1,NULL,0,1,0,300,'Trezentos reais',1,3,2,2,3,2),(5,'2019-01-04','2019-02-04 00:00:00','ok',1,NULL,0,1,0,300,'Trezentos reais',1,3,2,2,3,2),(6,'2019-01-04','2019-02-04 00:00:00','',0,NULL,0,1,0,1500,'Um Mil e Quinhentos reais',1,4,2,1,3,2),(7,'2019-01-04','2019-02-04 00:00:00','',1,NULL,0,1,1,800,'Oitocentos reais',1,1,2,1,3,2),(8,'2019-01-07','2019-02-07 15:06:00','',0,'Entrada (+) ',0,1,1,200,'Duzentos reais',5,1,2,1,1,2),(9,'2019-01-07',NULL,NULL,1,'1 de 4',1,0,1,75,'Setenta e Cinco reais',5,1,2,1,1,2),(10,'2019-04-07',NULL,NULL,1,'2 de 4',2,0,1,75,'Setenta e Cinco reais',5,1,2,1,1,2),(11,'2019-05-07',NULL,NULL,1,'3 de 4',3,0,1,75,'Setenta e Cinco reais',5,1,2,1,1,2),(12,'2019-06-07',NULL,NULL,1,'4 de 4',4,0,1,75,'Setenta e Cinco reais',5,1,2,1,1,2),(13,'2019-02-09','2019-02-09 00:00:00','',0,NULL,0,0,0,500,'Quinhentos reais',1,5,2,3,3,2),(14,'2019-02-28','2019-02-28 00:00:00','',0,NULL,0,0,0,522.22,'Quinhentos e Vinte e Dois reais e Vinte e Dois Centavos',1,5,2,1,3,2),(15,'2019-02-09','2019-02-09 00:00:00','',0,NULL,0,1,0,30,'Trinta reais',1,2,2,2,3,2),(16,'2019-02-09','2019-02-09 00:00:00','',0,NULL,0,1,1,800,'Oitocentos reais',1,3,2,1,3,2),(17,'2019-02-14','2019-02-14 15:03:35','ook',0,'Entrada (+) ',0,1,1,500,'Quinhentos reais',6,1,3,2,4,1),(18,'2019-03-14','2019-03-14 00:00:00','',1,'1 de 4',1,1,1,125,'Cento e Vinte e Cinco reais',1,1,3,2,3,1),(19,'2019-04-14','2019-04-14 00:00:00','',1,'2 de 4',2,1,1,125,'Cento e Vinte e Cinco reais',1,1,3,2,3,1),(20,'2019-05-14','2019-05-14 00:00:00','',1,'3 de 4',3,1,1,125,'Cento e Vinte e Cinco reais',1,1,3,2,3,1),(21,'2019-06-14','2019-06-14 00:00:00','',1,'4 de 4',4,1,1,125,'Cento e Vinte e Cinco reais',1,1,3,2,3,1),(22,'2019-02-20','2019-02-20 00:00:00','',0,NULL,0,1,1,600,'Seiscentos reais',1,3,3,1,3,1),(23,'2019-02-20','2019-02-20 21:19:35','ook',0,'Entrada (+) ',1,1,1,300,'Trezentos reais',4,1,2,2,2,2),(24,'2019-02-21','2019-02-21 00:00:00','',0,NULL,0,1,1,20,'Vinte reais',1,1,3,1,3,1),(25,'2019-02-27','2019-02-27 00:00:00','Aguardando pagamento ',0,NULL,0,1,1,20,'Vinte reais',1,1,3,3,3,1),(26,'2019-02-21','2019-02-21 00:00:00','',0,NULL,0,1,0,50,'Cinquenta reais',1,1,3,1,3,1),(27,'2019-02-27','2019-02-27 00:00:00','A pagar',0,NULL,0,1,0,20,'Vinte reais',1,3,3,2,3,1),(28,'2019-02-21','2019-02-21 21:40:29','',0,'Entrada (+) ',0,1,1,200,'Duzentos reais',7,1,3,1,4,1),(29,'2019-03-21','2019-03-21 00:00:00','',1,'1 de 4',1,1,1,200,'Duzentos reais',1,1,3,1,3,1),(30,'2019-04-21','2019-04-21 00:00:00','',1,'2 de 4',2,1,1,200,'Duzentos reais',1,1,3,1,3,1),(31,'2019-05-21','2019-05-21 00:00:00','',1,'3 de 4',3,1,1,200,'Duzentos reais',1,1,3,1,3,1),(32,'2019-06-21','2019-06-21 00:00:00','',1,'4 de 4',4,1,1,200,'Duzentos reais',1,1,3,1,3,1),(33,'2019-02-23','2019-02-23 16:40:01','Pagamento Realizado',0,'Entrada (+) ',1,1,1,1000,'Um Mil reais',10,1,3,2,4,1),(34,'2019-02-23','2019-02-23 18:14:50','Pagamento Parcelado',0,'Entrada (+) ',0,1,1,500,'Quinhentos reais',11,1,3,3,4,1),(35,'2019-03-05','2019-03-05 00:00:00','',1,'1 de 2',1,1,1,250,'Duzentos e Cinquenta reais',1,1,3,3,3,1),(36,'2019-04-05','2019-04-05 00:00:00','',1,'2 de 2',2,1,1,250,'Duzentos e Cinquenta reais',1,1,3,3,3,1),(37,'2019-02-24','2019-02-24 13:50:53','',0,'Entrada (+) ',1,1,1,600,'Seiscentos reais',9,1,3,1,6,1);
/*!40000 ALTER TABLE `financeiro` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-31 10:40:37
