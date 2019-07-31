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
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agenda` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `fim` datetime DEFAULT NULL,
  `inicio` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `titulo` varchar(225) DEFAULT NULL,
  `cadastro_agenda_id` bigint(20) NOT NULL,
  `empresa_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_lrkl1p7e8lmax99uhsem4sc7a` (`cadastro_agenda_id`),
  CONSTRAINT `FK_lrkl1p7e8lmax99uhsem4sc7a` FOREIGN KEY (`cadastro_agenda_id`) REFERENCES `cadastro_agenda` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agenda`
--

LOCK TABLES `agenda` WRITE;
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
INSERT INTO `agenda` VALUES (110,'','2019-02-04 09:00:00','2019-02-04 08:00:00',0,'',1,2),(111,'','2019-02-05 09:00:00','2019-02-05 08:00:00',0,'',1,2),(112,'','2019-02-06 09:00:00','2019-02-06 08:00:00',0,'',1,2),(113,'','2019-02-07 09:00:00','2019-02-07 08:00:00',0,'',5,2),(114,'','2019-02-08 09:00:00','2019-02-08 08:00:00',0,'',6,2),(115,'','2019-02-14 09:00:00','2019-02-14 08:00:00',0,'',6,2),(116,'','2019-02-15 09:00:00','2019-02-15 08:00:00',0,'',6,2),(117,'','2019-02-16 09:00:00','2019-02-16 08:00:00',1,'',8,2),(118,'','2019-02-20 09:00:00','2019-02-20 08:00:00',1,'',9,3),(119,'','2019-02-21 09:00:00','2019-02-21 08:00:00',1,'',9,3),(120,'','2019-02-22 09:00:00','2019-02-22 08:00:00',0,'',9,3),(121,'','2019-02-20 10:00:00','2019-02-20 09:00:00',0,'',10,3),(122,'','2019-02-21 10:00:00','2019-02-21 09:00:00',0,'',10,3),(123,'','2019-02-22 10:00:00','2019-02-22 09:00:00',1,'',10,3),(124,'','2019-02-20 11:00:00','2019-02-20 10:00:00',1,'',11,3),(125,'','2019-02-21 11:00:00','2019-02-21 10:00:00',0,'',11,3),(126,'','2019-02-22 11:00:00','2019-02-22 10:00:00',1,'',11,3),(127,'Primeira aula','2019-02-21 12:00:00','2019-02-21 11:00:00',1,'',12,3),(128,'','2019-02-24 12:00:00','2019-02-24 11:00:00',0,'',12,3),(129,'','2019-02-24 12:00:00','2019-02-24 11:00:00',1,'',12,3);
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-31 10:40:40