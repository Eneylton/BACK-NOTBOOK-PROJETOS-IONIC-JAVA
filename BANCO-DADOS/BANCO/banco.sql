-- MySQL dump 10.13  Distrib 5.6.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db_agenda
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
-- Current Database: `db_agenda`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_agenda` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_agenda`;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contato` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(225) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES (1,'Jesus','(98) 8985-896','jesus@gmail.com'),(2,'Maria','(98) 8985-878','maria@hotmail.com');
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (12,'Eneylton Barros','(98) 98158-8986','Masculino','2019-04-21'),(13,'Robert Barafuim','8909998','Masculino','2019-05-14'),(16,'Lorde Tirion','0990990','Masculino','2019-05-14');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_agenda'
--

--
-- Current Database: `db_ecommerce`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_ecommerce` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_ecommerce`;

--
-- Table structure for table `tb_addresses`
--

DROP TABLE IF EXISTS `tb_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_addresses` (
  `idaddress` int(11) NOT NULL AUTO_INCREMENT,
  `idperson` int(11) NOT NULL,
  `desaddress` varchar(128) NOT NULL,
  `descomplement` varchar(32) DEFAULT NULL,
  `descity` varchar(32) NOT NULL,
  `desstate` varchar(32) NOT NULL,
  `descountry` varchar(32) NOT NULL,
  `nrzipcode` int(11) NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idaddress`),
  KEY `fk_addresses_persons_idx` (`idperson`),
  CONSTRAINT `fk_addresses_persons` FOREIGN KEY (`idperson`) REFERENCES `tb_persons` (`idperson`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_addresses`
--

LOCK TABLES `tb_addresses` WRITE;
/*!40000 ALTER TABLE `tb_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_carts`
--

DROP TABLE IF EXISTS `tb_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_carts` (
  `idcart` int(11) NOT NULL AUTO_INCREMENT,
  `dessessionid` varchar(64) NOT NULL,
  `iduser` int(11) DEFAULT NULL,
  `deszipcode` char(8) DEFAULT NULL,
  `vlfreight` decimal(10,2) DEFAULT NULL,
  `nrdays` int(11) DEFAULT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcart`),
  KEY `FK_carts_users_idx` (`iduser`),
  CONSTRAINT `fk_carts_users` FOREIGN KEY (`iduser`) REFERENCES `tb_users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_carts`
--

LOCK TABLES `tb_carts` WRITE;
/*!40000 ALTER TABLE `tb_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cartsproducts`
--

DROP TABLE IF EXISTS `tb_cartsproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cartsproducts` (
  `idcartproduct` int(11) NOT NULL AUTO_INCREMENT,
  `idcart` int(11) NOT NULL,
  `idproduct` int(11) NOT NULL,
  `dtremoved` datetime NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcartproduct`),
  KEY `FK_cartsproducts_carts_idx` (`idcart`),
  KEY `fk_cartsproducts_products_idx` (`idproduct`),
  CONSTRAINT `fk_cartsproducts_carts` FOREIGN KEY (`idcart`) REFERENCES `tb_carts` (`idcart`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cartsproducts_products` FOREIGN KEY (`idproduct`) REFERENCES `tb_products` (`idproduct`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cartsproducts`
--

LOCK TABLES `tb_cartsproducts` WRITE;
/*!40000 ALTER TABLE `tb_cartsproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cartsproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_categories`
--

DROP TABLE IF EXISTS `tb_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_categories` (
  `idcategory` int(11) NOT NULL AUTO_INCREMENT,
  `descategory` varchar(32) NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcategory`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_categories`
--

LOCK TABLES `tb_categories` WRITE;
/*!40000 ALTER TABLE `tb_categories` DISABLE KEYS */;
INSERT INTO `tb_categories` VALUES (7,'Android','2019-05-07 15:25:38'),(8,'Ios','2019-05-07 16:17:39');
/*!40000 ALTER TABLE `tb_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_categoriesproducts`
--

DROP TABLE IF EXISTS `tb_categoriesproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_categoriesproducts` (
  `idcategory` int(11) NOT NULL,
  `idproduct` int(11) NOT NULL,
  PRIMARY KEY (`idcategory`,`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_categoriesproducts`
--

LOCK TABLES `tb_categoriesproducts` WRITE;
/*!40000 ALTER TABLE `tb_categoriesproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_categoriesproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_orders`
--

DROP TABLE IF EXISTS `tb_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_orders` (
  `idorder` int(11) NOT NULL AUTO_INCREMENT,
  `idcart` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idstatus` int(11) NOT NULL,
  `vltotal` decimal(10,2) NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idorder`),
  KEY `FK_orders_carts_idx` (`idcart`),
  KEY `FK_orders_users_idx` (`iduser`),
  KEY `fk_orders_ordersstatus_idx` (`idstatus`),
  CONSTRAINT `fk_orders_carts` FOREIGN KEY (`idcart`) REFERENCES `tb_carts` (`idcart`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_ordersstatus` FOREIGN KEY (`idstatus`) REFERENCES `tb_ordersstatus` (`idstatus`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_users` FOREIGN KEY (`iduser`) REFERENCES `tb_users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_orders`
--

LOCK TABLES `tb_orders` WRITE;
/*!40000 ALTER TABLE `tb_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_ordersstatus`
--

DROP TABLE IF EXISTS `tb_ordersstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_ordersstatus` (
  `idstatus` int(11) NOT NULL AUTO_INCREMENT,
  `desstatus` varchar(32) NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idstatus`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_ordersstatus`
--

LOCK TABLES `tb_ordersstatus` WRITE;
/*!40000 ALTER TABLE `tb_ordersstatus` DISABLE KEYS */;
INSERT INTO `tb_ordersstatus` VALUES (1,'Em Aberto','2017-03-13 03:00:00'),(2,'Aguardando Pagamento','2017-03-13 03:00:00'),(3,'Pago','2017-03-13 03:00:00'),(4,'Entregue','2017-03-13 03:00:00');
/*!40000 ALTER TABLE `tb_ordersstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_persons`
--

DROP TABLE IF EXISTS `tb_persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_persons` (
  `idperson` int(11) NOT NULL AUTO_INCREMENT,
  `desperson` varchar(64) NOT NULL,
  `desemail` varchar(128) DEFAULT NULL,
  `nrphone` bigint(20) DEFAULT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idperson`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_persons`
--

LOCK TABLES `tb_persons` WRITE;
/*!40000 ALTER TABLE `tb_persons` DISABLE KEYS */;
INSERT INTO `tb_persons` VALUES (12,'Elias Barros','xaye@webgmail.info',91581962,'2019-05-02 20:37:41'),(14,'Admin','eneylton@hotmail.com',32388046,'2019-05-06 15:57:56'),(15,'Eneylton','miyiz@simpleemail.info',9918581962,'2019-05-06 16:17:20');
/*!40000 ALTER TABLE `tb_persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_products`
--

DROP TABLE IF EXISTS `tb_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_products` (
  `idproduct` int(11) NOT NULL AUTO_INCREMENT,
  `desproduct` varchar(64) NOT NULL,
  `vlprice` decimal(10,2) NOT NULL,
  `vlwidth` decimal(10,2) NOT NULL,
  `vlheight` decimal(10,2) NOT NULL,
  `vllength` decimal(10,2) NOT NULL,
  `vlweight` decimal(10,2) NOT NULL,
  `desurl` varchar(128) NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idproduct`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_products`
--

LOCK TABLES `tb_products` WRITE;
/*!40000 ALTER TABLE `tb_products` DISABLE KEYS */;
INSERT INTO `tb_products` VALUES (1,'Smartphone Android 7.0',999.95,75.00,151.00,80.00,167.00,'smartphone-android-7.0','2017-03-13 03:00:00'),(2,'SmartTV LED 4K',3925.99,917.00,596.00,288.00,8600.00,'smarttv-led-4k','2017-03-13 03:00:00'),(3,'Notebook 14\" 4GB 1TBTS',1949.99,345.00,23.00,30.00,2000.00,'notebook-14-4gb-1tb','2017-03-13 03:00:00'),(5,'Smartphone Motorola Moto G5 Plus',1135.23,15.20,7.40,0.70,0.16,'smartphone-motorola-moto-g5-plus','2019-05-08 14:19:13'),(6,'Smartphone Moto Z Play',1887.78,14.10,0.90,1.16,0.13,'smartphone-moto-z-play','2019-05-08 14:19:13'),(7,'Smartphone Samsung Galaxy J5 Pro',1299.00,14.60,7.10,0.80,0.16,'smartphone-samsung-galaxy-j5','2019-05-08 14:19:13'),(8,'Smartphone Samsung Galaxy J7 Prime',1149.00,15.10,7.50,0.80,0.16,'smartphone-samsung-galaxy-j7','2019-05-08 14:19:13'),(9,'Smartphone Samsung Galaxy J3 Dual',679.90,14.20,7.10,0.70,0.14,'smartphone-samsung-galaxy-j3','2019-05-08 14:19:13');
/*!40000 ALTER TABLE `tb_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_productscategories`
--

DROP TABLE IF EXISTS `tb_productscategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_productscategories` (
  `idcategory` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) NOT NULL,
  PRIMARY KEY (`idcategory`,`idproduct`),
  KEY `fk_productscategories_products_idx` (`idproduct`),
  CONSTRAINT `fk_productscategories_categories` FOREIGN KEY (`idcategory`) REFERENCES `tb_categories` (`idcategory`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_productscategories_products` FOREIGN KEY (`idproduct`) REFERENCES `tb_products` (`idproduct`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_productscategories`
--

LOCK TABLES `tb_productscategories` WRITE;
/*!40000 ALTER TABLE `tb_productscategories` DISABLE KEYS */;
INSERT INTO `tb_productscategories` VALUES (7,1),(8,1),(8,6),(7,7),(7,8),(7,9);
/*!40000 ALTER TABLE `tb_productscategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_users`
--

DROP TABLE IF EXISTS `tb_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_users` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `idperson` int(11) NOT NULL,
  `deslogin` varchar(64) NOT NULL,
  `despassword` varchar(256) NOT NULL,
  `inadmin` tinyint(4) NOT NULL DEFAULT '0',
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iduser`),
  KEY `FK_users_persons_idx` (`idperson`),
  CONSTRAINT `fk_users_persons` FOREIGN KEY (`idperson`) REFERENCES `tb_persons` (`idperson`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;
/*!40000 ALTER TABLE `tb_users` DISABLE KEYS */;
INSERT INTO `tb_users` VALUES (14,14,'admin','$2y$12$YlooCyNvyTji8bPRcrfNfOKnVMmZA9ViM2A3IpFjmrpIbp5ovNmga',1,'2019-05-06 15:57:56');
/*!40000 ALTER TABLE `tb_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userslogs`
--

DROP TABLE IF EXISTS `tb_userslogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_userslogs` (
  `idlog` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `deslog` varchar(128) NOT NULL,
  `desip` varchar(45) NOT NULL,
  `desuseragent` varchar(128) NOT NULL,
  `dessessionid` varchar(64) NOT NULL,
  `desurl` varchar(128) NOT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idlog`),
  KEY `fk_userslogs_users_idx` (`iduser`),
  CONSTRAINT `fk_userslogs_users` FOREIGN KEY (`iduser`) REFERENCES `tb_users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userslogs`
--

LOCK TABLES `tb_userslogs` WRITE;
/*!40000 ALTER TABLE `tb_userslogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_userslogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userspasswordsrecoveries`
--

DROP TABLE IF EXISTS `tb_userspasswordsrecoveries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_userspasswordsrecoveries` (
  `idrecovery` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `desip` varchar(45) NOT NULL,
  `dtrecovery` datetime DEFAULT NULL,
  `dtregister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idrecovery`),
  KEY `fk_userspasswordsrecoveries_users_idx` (`iduser`),
  CONSTRAINT `fk_userspasswordsrecoveries_users` FOREIGN KEY (`iduser`) REFERENCES `tb_users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userspasswordsrecoveries`
--

LOCK TABLES `tb_userspasswordsrecoveries` WRITE;
/*!40000 ALTER TABLE `tb_userspasswordsrecoveries` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_userspasswordsrecoveries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_ecommerce'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_carts_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_carts_save`(
pidcart INT,
pdessessionid VARCHAR(64),
piduser INT,
pdeszipcode CHAR(8),
pvlfreight DECIMAL(10,2),
pnrdays INT
)
BEGIN

    IF pidcart > 0 THEN
        
        UPDATE tb_carts
        SET
            dessessionid = pdessessionid,
            iduser = piduser,
            deszipcode = pdeszipcode,
            vlfreight = pvlfreight,
            nrdays = pnrdays
        WHERE idcart = pidcart;
        
    ELSE
        
        INSERT INTO tb_carts (dessessionid, iduser, deszipcode, vlfreight, nrdays)
        VALUES(pdessessionid, piduser, pdeszipcode, pvlfreight, pnrdays);
        
        SET pidcart = LAST_INSERT_ID();
        
    END IF;
    
    SELECT * FROM tb_carts WHERE idcart = pidcart;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_categories_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_categories_save`(
pidcategory INT,
pdescategory VARCHAR(64)
)
BEGIN
	
	IF pidcategory > 0 THEN
		
		UPDATE tb_categories
        SET descategory = pdescategory
        WHERE idcategory = pidcategory;
        
    ELSE
		
		INSERT INTO tb_categories (descategory) VALUES(pdescategory);
        
        SET pidcategory = LAST_INSERT_ID();
        
    END IF;
    
    SELECT * FROM tb_categories WHERE idcategory = pidcategory;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_products_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_products_save`(
pidproduct int(11),
pdesproduct varchar(64),
pvlprice decimal(10,2),
pvlwidth decimal(10,2),
pvlheight decimal(10,2),
pvllength decimal(10,2),
pvlweight decimal(10,2),
pdesurl varchar(128)
)
BEGIN
	
	IF pidproduct > 0 THEN
		
		UPDATE tb_products
        SET 
			desproduct = pdesproduct,
            vlprice = pvlprice,
            vlwidth = pvlwidth,
            vlheight = pvlheight,
            vllength = pvllength,
            vlweight = pvlweight,
            desurl = pdesurl
        WHERE idproduct = pidproduct;
        
    ELSE
		
		INSERT INTO tb_products (desproduct, vlprice, vlwidth, vlheight, vllength, vlweight, desurl) 
        VALUES(pdesproduct, pvlprice, pvlwidth, pvlheight, pvllength, pvlweight, pdesurl);
        
        SET pidproduct = LAST_INSERT_ID();
        
    END IF;
    
    SELECT * FROM tb_products WHERE idproduct = pidproduct;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_userspasswordsrecoveries_create` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_userspasswordsrecoveries_create`(
piduser INT,
pdesip VARCHAR(45)
)
BEGIN
	
	INSERT INTO tb_userspasswordsrecoveries (iduser, desip)
    VALUES(piduser, pdesip);
    
    SELECT * FROM tb_userspasswordsrecoveries
    WHERE idrecovery = LAST_INSERT_ID();
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_usersupdate_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usersupdate_save`(
piduser INT,
pdesperson VARCHAR(64), 
pdeslogin VARCHAR(64), 
pdespassword VARCHAR(256), 
pdesemail VARCHAR(128), 
pnrphone BIGINT, 
pinadmin TINYINT
)
BEGIN
	
    DECLARE vidperson INT;
    
	SELECT idperson INTO vidperson
    FROM tb_users
    WHERE iduser = piduser;
    
    UPDATE tb_persons
    SET 
		desperson = pdesperson,
        desemail = pdesemail,
        nrphone = pnrphone
	WHERE idperson = vidperson;
    
    UPDATE tb_users
    SET
		deslogin = pdeslogin,
        despassword = pdespassword,
        inadmin = pinadmin
	WHERE iduser = piduser;
    
    SELECT * FROM tb_users a INNER JOIN tb_persons b USING(idperson) WHERE a.iduser = piduser;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_users_delete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_users_delete`(
piduser INT
)
BEGIN
	
    DECLARE vidperson INT;
    
	SELECT idperson INTO vidperson
    FROM tb_users
    WHERE iduser = piduser;
    
    DELETE FROM tb_users WHERE iduser = piduser;
    DELETE FROM tb_persons WHERE idperson = vidperson;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_users_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_users_save`(
pdesperson VARCHAR(64), 
pdeslogin VARCHAR(64), 
pdespassword VARCHAR(256), 
pdesemail VARCHAR(128), 
pnrphone BIGINT, 
pinadmin TINYINT
)
BEGIN
	
    DECLARE vidperson INT;
    
	INSERT INTO tb_persons (desperson, desemail, nrphone)
    VALUES(pdesperson, pdesemail, pnrphone);
    
    SET vidperson = LAST_INSERT_ID();
    
    INSERT INTO tb_users (idperson, deslogin, despassword, inadmin)
    VALUES(vidperson, pdeslogin, pdespassword, pinadmin);
    
    SELECT * FROM tb_users a INNER JOIN tb_persons b USING(idperson) WHERE a.iduser = LAST_INSERT_ID();
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Current Database: `db_login`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_login` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_login`;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (3,'2019-04-23','Jamila','981485233','milaFilha@gmail.com','d9b1d7db4cd6e70935368a1efb10e377'),(9,'2019-05-14','Eneylton','98 97896788','eneylton@hotmail.com','a566cd38a83279a49f88bd5cd191c32b');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_login'
--

--
-- Current Database: `db_galeria`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_galeria` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_galeria`;

--
-- Table structure for table `galeria`
--

DROP TABLE IF EXISTS `galeria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `galeria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeria`
--

LOCK TABLES `galeria` WRITE;
/*!40000 ALTER TABLE `galeria` DISABLE KEYS */;
INSERT INTO `galeria` VALUES (3,'YodpAA','galeria 01'),(4,'AAAAcg','galeria 2');
/*!40000 ALTER TABLE `galeria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `galeria_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe4odh8odih8h1oflfyk6jmmid` (`galeria_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagem`
--

LOCK TABLES `imagem` WRITE;
/*!40000 ALTER TABLE `imagem` DISABLE KEYS */;
INSERT INTO `imagem` VALUES (6,'wwwwwwww','wwwwww',4),(5,'xxxxxxx','xxxxxx',3),(7,'rrrrr','ggggggg',3),(8,'83x9EU','Eu eu mesmo e deus',4),(9,'AAABAA','eu mesno',3);
/*!40000 ALTER TABLE `imagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_galeria'
--

--
-- Current Database: `db_spring_ionic`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_spring_ionic` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_spring_ionic`;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (12,'Informática '),(13,'Movíes'),(14,'Eletrônicos');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkworrwk40xj58kevvh3evi500` (`estado_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (1,'São Luís',1),(2,'Imperatriz',1),(3,'Riachão',1),(4,'Belém',2),(5,'Terezina',3);
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'Maranhão'),(2,'Para'),(3,'Piaui');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `preco` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Impressora',340.9),(2,'Processador',340.9),(3,'Gabinete',340.9),(4,'Mesa para Cpu',740.9),(5,'Cadeira',540.9);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_categoria`
--

DROP TABLE IF EXISTS `produto_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto_categoria` (
  `produto_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  KEY `FKq3g33tp7xk2juh53fbw6y4y57` (`categoria_id`),
  KEY `FK1c0y58d3n6x3m6euv2j3h64vt` (`produto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_categoria`
--

LOCK TABLES `produto_categoria` WRITE;
/*!40000 ALTER TABLE `produto_categoria` DISABLE KEYS */;
INSERT INTO `produto_categoria` VALUES (1,1),(2,1),(3,1),(4,2),(5,2);
/*!40000 ALTER TABLE `produto_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_spring_ionic'
--

--
-- Current Database: `db_vendas`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_vendas` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_vendas`;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantidade` int(11) NOT NULL,
  `produto_id` bigint(20) NOT NULL,
  `venda_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoya2x5ip1q2t3s0936vgjiyx9` (`produto_id`),
  KEY `FKqv58b98fhr0opuq4yvs9sqk2x` (`venda_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `valor` decimal(19,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venda` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cadastro` datetime DEFAULT NULL,
  `frete` decimal(19,2) NOT NULL,
  `total` decimal(19,2) DEFAULT NULL,
  `cliente_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK50murhuotq9h2dnxej317jjiy` (`cliente_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_vendas'
--

--
-- Current Database: `db_pessoa`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_pessoa` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_pessoa`;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pessoa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (5,'maria@gmail.com','Maria Barrros'),(6,'elias@gmail.com','Elias Barrros');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_pessoa'
--

--
-- Current Database: `db_ionic`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_ionic` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_ionic`;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Informática'),(2,'Escritório');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkworrwk40xj58kevvh3evi500` (`estado_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (1,'Uberlândia',1),(2,'São Paulo',2),(3,'Campinas',2);
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf_ou_cnpj` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'36378912377','maria@gmail.com','Maria Silva',1);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `endereco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bairro` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `cidade_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8b1kcb3wucapb8dejshyn5fsx` (`cidade_id`),
  KEY `FK8s7ivtl4foyhrfam9xqom73n9` (`cliente_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'Jardim','38220834','Apto 303','Rua Flores','300',1,1),(2,'Centro','38777012','Sala 800','Avenida Matos','105',2,1);
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'Minas Gerais'),(2,'São Paulo');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_pedido`
--

DROP TABLE IF EXISTS `item_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_pedido` (
  `desconto` double DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `pedido_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  PRIMARY KEY (`pedido_id`,`produto_id`),
  KEY `FKtk55mn6d6bvl5h0no5uagi3sf` (`produto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_pedido`
--

LOCK TABLES `item_pedido` WRITE;
/*!40000 ALTER TABLE `item_pedido` DISABLE KEYS */;
INSERT INTO `item_pedido` VALUES (0,2000,1,1,1),(0,80,2,1,3),(100,850,1,2,2);
/*!40000 ALTER TABLE `item_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagamento` (
  `pedido_id` int(11) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`pedido_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento`
--

LOCK TABLES `pagamento` WRITE;
/*!40000 ALTER TABLE `pagamento` DISABLE KEYS */;
INSERT INTO `pagamento` VALUES (1,2),(2,1);
/*!40000 ALTER TABLE `pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento_com_boleto`
--

DROP TABLE IF EXISTS `pagamento_com_boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagamento_com_boleto` (
  `data_pagamento` datetime DEFAULT NULL,
  `data_vencimento` datetime DEFAULT NULL,
  `pedido_id` int(11) NOT NULL,
  PRIMARY KEY (`pedido_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento_com_boleto`
--

LOCK TABLES `pagamento_com_boleto` WRITE;
/*!40000 ALTER TABLE `pagamento_com_boleto` DISABLE KEYS */;
INSERT INTO `pagamento_com_boleto` VALUES (NULL,'2017-10-20 03:00:00',2);
/*!40000 ALTER TABLE `pagamento_com_boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento_com_cartao`
--

DROP TABLE IF EXISTS `pagamento_com_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagamento_com_cartao` (
  `numero_de_parcelas` int(11) DEFAULT NULL,
  `pedido_id` int(11) NOT NULL,
  PRIMARY KEY (`pedido_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento_com_cartao`
--

LOCK TABLES `pagamento_com_cartao` WRITE;
/*!40000 ALTER TABLE `pagamento_com_cartao` DISABLE KEYS */;
INSERT INTO `pagamento_com_cartao` VALUES (6,1);
/*!40000 ALTER TABLE `pagamento_com_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `instante` datetime DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `endereco_de_entrega_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK30s8j2ktpay6of18lbyqn3632` (`cliente_id`),
  KEY `FK1fihyy2fnocpuwc74674qmfkv` (`endereco_de_entrega_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,'2017-09-30 13:32:00',1,1),(2,'2017-10-10 22:35:00',1,2);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `preco` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Computador',2000),(2,'Impressora',800),(3,'Mouse',80);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_categoria`
--

DROP TABLE IF EXISTS `produto_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto_categoria` (
  `produto_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  KEY `FKq3g33tp7xk2juh53fbw6y4y57` (`categoria_id`),
  KEY `FK1c0y58d3n6x3m6euv2j3h64vt` (`produto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_categoria`
--

LOCK TABLES `produto_categoria` WRITE;
/*!40000 ALTER TABLE `produto_categoria` DISABLE KEYS */;
INSERT INTO `produto_categoria` VALUES (1,1),(2,1),(2,2),(3,1);
/*!40000 ALTER TABLE `produto_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefone`
--

DROP TABLE IF EXISTS `telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefone` (
  `cliente_id` int(11) NOT NULL,
  `telefones` varchar(255) DEFAULT NULL,
  KEY `FK8aafha0njkoyoe3kvrwsy3g8u` (`cliente_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefone`
--

LOCK TABLES `telefone` WRITE;
/*!40000 ALTER TABLE `telefone` DISABLE KEYS */;
INSERT INTO `telefone` VALUES (1,'27363323'),(1,'93838393');
/*!40000 ALTER TABLE `telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_ionic'
--

--
-- Current Database: `db_controle_estoque`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_controle_estoque` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_controle_estoque`;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'891.930.300-20','Eneylton');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estoque`
--

DROP TABLE IF EXISTS `estoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estoque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` datetime DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `filial_id` int(11) DEFAULT NULL,
  `produto_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhosd093pbsi16y6d7t1rdmff0` (`filial_id`),
  KEY `FKh201uorwvq9pjj4dsvjyo73ft` (`produto_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estoque`
--

LOCK TABLES `estoque` WRITE;
/*!40000 ALTER TABLE `estoque` DISABLE KEYS */;
INSERT INTO `estoque` VALUES (1,'2019-07-05 20:22:01',23,1,1),(2,'2019-07-05 20:22:01',63,2,2);
/*!40000 ALTER TABLE `estoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filial`
--

DROP TABLE IF EXISTS `filial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1p9i2fnp7iflp78smpvrrdwpj` (`usuario_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filial`
--

LOCK TABLES `filial` WRITE;
/*!40000 ALTER TABLE `filial` DISABLE KEYS */;
INSERT INTO `filial` VALUES (1,'223.444.444.0009','Empresa 01',1),(2,'223.444.444.0009','Empresa 02',2);
/*!40000 ALTER TABLE `filial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forma_pagamento`
--

DROP TABLE IF EXISTS `forma_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forma_pagamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forma_pagamento`
--

LOCK TABLES `forma_pagamento` WRITE;
/*!40000 ALTER TABLE `forma_pagamento` DISABLE KEYS */;
INSERT INTO `forma_pagamento` VALUES (1,'Cartão de Crédito'),(2,'Dinheiro'),(3,'Boleto');
/*!40000 ALTER TABLE `forma_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fornecedor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(255) DEFAULT NULL,
  `razao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
INSERT INTO `fornecedor` VALUES (1,'667.9088.001-90','Comercial Star'),(2,'668.9088.001-90','Comercial Luan');
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantidade` int(11) DEFAULT NULL,
  `filial_id` int(11) DEFAULT NULL,
  `produto_id` int(11) DEFAULT NULL,
  `venda_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK26v2py88b2ajou3el6t64ik4n` (`filial_id`),
  KEY `FKoya2x5ip1q2t3s0936vgjiyx9` (`produto_id`),
  KEY `FKqv58b98fhr0opuq4yvs9sqk2x` (`venda_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,2,1,1,1);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_estoque`
--

DROP TABLE IF EXISTS `pedido_estoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido_estoque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_pedido` datetime DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `fornecedor_id` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqngsffhj8m7vdwvl6ripgvr88` (`fornecedor_id`),
  KEY `FKen72fnl77ugivhehj4wv5fkii` (`item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_estoque`
--

LOCK TABLES `pedido_estoque` WRITE;
/*!40000 ALTER TABLE `pedido_estoque` DISABLE KEYS */;
INSERT INTO `pedido_estoque` VALUES (1,'2019-07-05 20:22:01',23,'Entrada',1,1);
/*!40000 ALTER TABLE `pedido_estoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` datetime DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'2019-07-05 20:22:01','Caneta ponta grossa','Caneta preta',55.67),(2,'2019-07-05 20:22:01','Caneta ponta grossa','Caneta azul',55.66);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cargo` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Atendente','Maria Ines'),(2,'Atendente','João Mesquita');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cadastro` datetime DEFAULT NULL,
  `frete` double DEFAULT NULL,
  `total` double DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `forma_pg_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK50murhuotq9h2dnxej317jjiy` (`cliente_id`),
  KEY `FK6wd1pwkx0jyrrnaipnnivlm91` (`forma_pg_id`),
  KEY `FKrxdls7rvs4vi9ytunrblva9h4` (`usuario_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
INSERT INTO `venda` VALUES (1,'2019-07-05 20:22:01',100.9,10.99,1,1,1);
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_controle_estoque'
--

--
-- Current Database: `db_imovel`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_imovel` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_imovel`;

--
-- Dumping routines for database 'db_imovel'
--

--
-- Current Database: `db_spring`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_spring` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_spring`;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkworrwk40xj58kevvh3evi500` (`estado_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (1,'São Luís',1),(2,'Bacabal',1),(3,'Terezina',2);
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'Maranhão'),(2,'Piaui');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_spring'
--

--
-- Current Database: `db_aluno_spring`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_aluno_spring` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_aluno_spring`;

--
-- Dumping routines for database 'db_aluno_spring'
--

--
-- Current Database: `db_hibernat_financeiro`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_hibernat_financeiro` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_hibernat_financeiro`;

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

--
-- Table structure for table `agenda2`
--

DROP TABLE IF EXISTS `agenda2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agenda2` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `fim` datetime DEFAULT NULL,
  `inicio` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `titulo` varchar(225) DEFAULT NULL,
  `aluno_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b5wwf9xml6gu1q33e3tfr38in` (`aluno_id`),
  CONSTRAINT `FK_b5wwf9xml6gu1q33e3tfr38in` FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agenda2`
--

LOCK TABLES `agenda2` WRITE;
/*!40000 ALTER TABLE `agenda2` DISABLE KEYS */;
INSERT INTO `agenda2` VALUES (1,'Primeira aula','2019-01-02 08:00:00','2019-01-02 07:00:00',1,'',1);
/*!40000 ALTER TABLE `agenda2` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `cadastro_agenda2`
--

DROP TABLE IF EXISTS `cadastro_agenda2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_agenda2` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `aluno_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_r68oobheikgfetvre93fa1mne` (`aluno_id`),
  CONSTRAINT `FK_r68oobheikgfetvre93fa1mne` FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_agenda2`
--

LOCK TABLES `cadastro_agenda2` WRITE;
/*!40000 ALTER TABLE `cadastro_agenda2` DISABLE KEYS */;
INSERT INTO `cadastro_agenda2` VALUES (1,'2019-01-02 08:09:00',1,1),(2,'2019-02-20 07:00:00',1,7),(3,'2019-02-23 07:00:00',1,9),(4,'2019-02-25 09:00:00',0,10),(5,'2019-02-28 11:00:00',0,11);
/*!40000 ALTER TABLE `cadastro_agenda2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_financeiro`
--

DROP TABLE IF EXISTS `categoria_financeiro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria_financeiro` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_financeiro`
--

LOCK TABLES `categoria_financeiro` WRITE;
/*!40000 ALTER TABLE `categoria_financeiro` DISABLE KEYS */;
INSERT INTO `categoria_financeiro` VALUES (1,'Matricula'),(2,'Alcool'),(3,'Disiel'),(4,'Gasolina'),(5,'Material de Escritório');
/*!40000 ALTER TABLE `categoria_financeiro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_cadastro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `cnpj` text NOT NULL,
  `logo` text NOT NULL,
  `nome` text NOT NULL,
  `razao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'2019-01-02 03:00:00','6522656555','Financeiro.png','Primavera','vera'),(2,'2019-01-02 03:00:00','65.22.132/3211-12','medical-logo-png-22.png','Pureza','95552211'),(3,'2019-01-02 03:00:00','87.56.656/5656-56','eeeee.png','Monstons S.A','Monstons S.A');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_civil`
--

DROP TABLE IF EXISTS `estado_civil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado_civil` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_civil`
--

LOCK TABLES `estado_civil` WRITE;
/*!40000 ALTER TABLE `estado_civil` DISABLE KEYS */;
INSERT INTO `estado_civil` VALUES (1,'Casado(a)'),(2,'Solteiro(a)');
/*!40000 ALTER TABLE `estado_civil` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `forma_pagamento`
--

DROP TABLE IF EXISTS `forma_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forma_pagamento` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forma_pagamento`
--

LOCK TABLES `forma_pagamento` WRITE;
/*!40000 ALTER TABLE `forma_pagamento` DISABLE KEYS */;
INSERT INTO `forma_pagamento` VALUES (1,'A vista em Dinheiro'),(2,'A vista em Débito automático'),(3,'Cartão de Crédito');
/*!40000 ALTER TABLE `forma_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrutor`
--

DROP TABLE IF EXISTS `instrutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrutor` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(225) DEFAULT NULL,
  `empresa_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrutor`
--

LOCK TABLES `instrutor` WRITE;
/*!40000 ALTER TABLE `instrutor` DISABLE KEYS */;
INSERT INTO `instrutor` VALUES (1,'Carlos',2),(2,'Samira',2),(3,'Walterson',2),(4,'Walfrade',3),(5,'Ornella Silva',3);
/*!40000 ALTER TABLE `instrutor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `professor` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(225) DEFAULT NULL,
  `empresa_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (1,'Aurelio',2),(2,'Miquel',2),(3,'Ana Furtado',3);
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servico`
--

DROP TABLE IF EXISTS `servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servico` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(225) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `empresa_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servico`
--

LOCK TABLES `servico` WRITE;
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` VALUES (1,'1º habilitação',500,2),(2,'2º Via da Habilitação',300,2),(3,'outros',0,2),(4,'1ª Habilitação Categoria A',1000,3),(5,'1ª Habilitação Cataegoria B',1500,3),(6,'2ª  Via da CNH ',600,3),(7,'Mudança de Categoria de B para D',800,3);
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sexo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES (1,'Masculino'),(2,'Feminino');
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma`
--

DROP TABLE IF EXISTS `turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turma` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data_cadastro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `dataFim` datetime DEFAULT NULL,
  `dataInicio` datetime DEFAULT NULL,
  `descricao` varchar(225) DEFAULT NULL,
  `limite` int(11) DEFAULT NULL,
  `turno` varchar(225) DEFAULT NULL,
  `empresa_id` bigint(20) NOT NULL,
  `professor_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_qokw1jkc8dj8uu9c4cw7oqd1b` (`professor_id`),
  CONSTRAINT `FK_qokw1jkc8dj8uu9c4cw7oqd1b` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma`
--

LOCK TABLES `turma` WRITE;
/*!40000 ALTER TABLE `turma` DISABLE KEYS */;
INSERT INTO `turma` VALUES (1,'2019-01-02 03:00:00','2019-02-28 00:00:00','2019-02-09 00:00:00','Primeiros socorros',11,'Matutino',2,1),(2,'2019-01-02 03:00:00','2019-02-28 00:00:00','2019-02-14 00:00:00','Primeiros Socorros',16,'Matutino',3,3);
/*!40000 ALTER TABLE `turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma_aluno`
--

DROP TABLE IF EXISTS `turma_aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turma_aluno` (
  `turma_id` bigint(20) NOT NULL,
  `aluno_id` bigint(20) NOT NULL,
  KEY `FK_ik6srjfiq3ml1wv2eo85orhsy` (`aluno_id`),
  KEY `FK_jv0h9ar28cpd78sb8d01sou6m` (`turma_id`),
  CONSTRAINT `FK_ik6srjfiq3ml1wv2eo85orhsy` FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`),
  CONSTRAINT `FK_jv0h9ar28cpd78sb8d01sou6m` FOREIGN KEY (`turma_id`) REFERENCES `turma` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma_aluno`
--

LOCK TABLES `turma_aluno` WRITE;
/*!40000 ALTER TABLE `turma_aluno` DISABLE KEYS */;
INSERT INTO `turma_aluno` VALUES (1,2),(1,3),(1,5),(1,1),(1,4),(2,11),(2,10),(2,9),(2,7),(2,6);
/*!40000 ALTER TABLE `turma_aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) DEFAULT NULL,
  `admin` text,
  `login` text,
  `nomeCompleto` text,
  `senha` text,
  `situacao` text,
  `empresa_id` int(11) DEFAULT NULL,
  KEY `FK_pxkkfbhkbchlb7g4ybf8e4aqj` (`empresa_id`),
  CONSTRAINT `FK_pxkkfbhkbchlb7g4ybf8e4aqj` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'S','eneylton','Eneylton de Jesus Campos Barros','256D08FB2B09AD0438F81495804B93BDCA6FBB05BA00D800C02A5B029F8A6788','A',3),(2,'S','Admin','Administrador','256D08FB2B09AD0438F81495804B93BDCA6FBB05BA00D800C02A5B029F8A6788','A',2);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculo`
--

DROP TABLE IF EXISTS `veiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `veiculo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `especie` varchar(225) DEFAULT NULL,
  `foto` varchar(225) DEFAULT NULL,
  `marca` varchar(225) DEFAULT NULL,
  `empresa_id` bigint(20) NOT NULL,
  `instrutor_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2cufkvo357wgy0aunfxvu7u` (`instrutor_id`),
  CONSTRAINT `FK_2cufkvo357wgy0aunfxvu7u` FOREIGN KEY (`instrutor_id`) REFERENCES `instrutor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
INSERT INTO `veiculo` VALUES (1,'Automovel','argo_vermelho.png','ARGO 1.6',2,1),(2,'Automovel','gol_branco.png','Gol 1.5',2,2),(3,'Moto','moto.png','Honda cg 215 Red',2,3),(4,'Automovel','camVemenho.jpg','Caminhão Mercedez Benz',3,4),(5,'Moto','moto_preta.png','MOTO CG 125 FAN',3,5);
/*!40000 ALTER TABLE `veiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_hibernat_financeiro'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-31 10:43:15
