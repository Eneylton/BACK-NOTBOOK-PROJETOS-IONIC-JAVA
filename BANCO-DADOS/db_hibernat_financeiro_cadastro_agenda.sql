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
-- Table structure for table `cadastro_agenda`
--

DROP TABLE IF EXISTS `cadastro_agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_agenda` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `aluno_id` bigint(20) NOT NULL,
  `instrutor_id` bigint(20) NOT NULL,
  `veiculo_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1qykr8jhsnxtn3oa27wn8s70f` (`aluno_id`),
  KEY `FK_aeenx0myrxlbpt8u8tl4qyswk` (`instrutor_id`),
  KEY `FK_cgo4rdh3759o4v1mr1afeug32` (`veiculo_id`),
  CONSTRAINT `FK_1qykr8jhsnxtn3oa27wn8s70f` FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`),
  CONSTRAINT `FK_aeenx0myrxlbpt8u8tl4qyswk` FOREIGN KEY (`instrutor_id`) REFERENCES `instrutor` (`id`),
  CONSTRAINT `FK_cgo4rdh3759o4v1mr1afeug32` FOREIGN KEY (`veiculo_id`) REFERENCES `veiculo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_agenda`
--

LOCK TABLES `cadastro_agenda` WRITE;
/*!40000 ALTER TABLE `cadastro_agenda` DISABLE KEYS */;
INSERT INTO `cadastro_agenda` VALUES (1,1,1,1),(5,2,2,2),(6,3,3,3),(7,4,3,3),(8,5,1,1),(9,6,4,4),(10,7,4,4),(11,9,5,5),(12,10,5,5);
/*!40000 ALTER TABLE `cadastro_agenda` ENABLE KEYS */;
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
