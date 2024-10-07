-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: budget_app
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bom_preparation`
--

DROP TABLE IF EXISTS `bom_preparation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bom_preparation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rawMaterial1` decimal(10,2) DEFAULT NULL,
  `rawMaterial2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bom_preparation`
--

LOCK TABLES `bom_preparation` WRITE;
/*!40000 ALTER TABLE `bom_preparation` DISABLE KEYS */;
INSERT INTO `bom_preparation` VALUES (1,5.00,4.00,'2024-09-30 07:53:38'),(2,30.00,30.00,'2024-09-30 10:05:03'),(3,30.00,30.00,'2024-09-30 10:05:29'),(4,300.00,2.00,'2024-09-30 12:40:59'),(5,44.00,44.00,'2024-10-01 04:41:31'),(6,30.00,30.00,'2024-10-01 13:17:28'),(7,5.00,5.00,'2024-10-03 05:03:43'),(8,10.00,10.00,'2024-10-03 06:05:21'),(9,22.00,22.00,'2024-10-03 12:17:09'),(10,33.00,33.00,'2024-10-04 03:50:29'),(11,23.00,23.00,'2024-10-04 07:11:29'),(12,223.00,223.00,'2024-10-04 11:28:34');
/*!40000 ALTER TABLE `bom_preparation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commission_charges`
--

DROP TABLE IF EXISTS `commission_charges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commission_charges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commission1` decimal(10,2) DEFAULT NULL,
  `commission2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commission_charges`
--

LOCK TABLES `commission_charges` WRITE;
/*!40000 ALTER TABLE `commission_charges` DISABLE KEYS */;
INSERT INTO `commission_charges` VALUES (1,70.00,70.00,'2024-09-30 10:05:46'),(2,50.00,50.00,'2024-09-30 12:40:05'),(3,1.00,2.00,'2024-10-01 04:34:05'),(4,22.00,22.00,'2024-10-01 04:38:25'),(5,33.00,33.00,'2024-10-01 04:41:03'),(6,10.00,10.00,'2024-10-01 13:12:02'),(7,10.00,10.00,'2024-10-01 13:17:01'),(8,5.00,4.00,'2024-10-03 05:03:28'),(9,10.00,10.00,'2024-10-03 06:05:04'),(10,22.00,22.00,'2024-10-03 12:16:45'),(11,77.00,77.00,'2024-10-04 03:50:05'),(12,17.00,17.00,'2024-10-04 07:11:07'),(13,117.00,117.00,'2024-10-04 11:27:44');
/*!40000 ALTER TABLE `commission_charges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuel_power`
--

DROP TABLE IF EXISTS `fuel_power`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fuel_power` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fuelReq1` decimal(10,2) DEFAULT NULL,
  `powerReq1` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuel_power`
--

LOCK TABLES `fuel_power` WRITE;
/*!40000 ALTER TABLE `fuel_power` DISABLE KEYS */;
INSERT INTO `fuel_power` VALUES (1,50.00,50.00,'2024-09-30 10:05:21'),(2,50.00,50.00,'2024-09-30 10:05:33'),(3,12.00,2.00,'2024-09-30 12:42:23'),(4,55.00,55.00,'2024-10-01 04:41:52'),(5,50.00,50.00,'2024-10-01 13:17:54'),(6,5.00,5.00,'2024-10-03 05:04:17'),(7,10.00,10.00,'2024-10-03 06:05:53'),(8,33.00,33.00,'2024-10-03 12:17:45'),(9,55.00,55.00,'2024-10-04 03:51:05'),(10,35.00,35.00,'2024-10-04 07:11:57'),(11,335.00,335.00,'2024-10-04 11:29:20');
/*!40000 ALTER TABLE `fuel_power` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('manager','12345'),('manufacturing','12345'),('purchase','12345'),('sales','12345');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packaging_cost`
--

DROP TABLE IF EXISTS `packaging_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packaging_cost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `packagingCost1` decimal(10,2) DEFAULT NULL,
  `packagingCost2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packaging_cost`
--

LOCK TABLES `packaging_cost` WRITE;
/*!40000 ALTER TABLE `packaging_cost` DISABLE KEYS */;
INSERT INTO `packaging_cost` VALUES (1,60.00,60.00,'2024-09-30 10:05:40'),(2,80.00,80.00,'2024-09-30 12:38:49'),(3,29.00,29.00,'2024-10-01 04:26:50'),(4,33.00,33.00,'2024-10-01 04:40:58'),(5,10.00,10.00,'2024-10-01 13:11:54'),(6,10.00,10.00,'2024-10-01 13:16:54'),(7,10.00,10.00,'2024-10-03 04:44:30'),(8,5.00,5.00,'2024-10-03 05:03:22'),(9,10.00,10.00,'2024-10-03 06:04:57'),(10,22.00,22.00,'2024-10-03 12:16:36'),(11,66.00,77.00,'2024-10-04 03:49:57'),(12,16.00,16.00,'2024-10-04 07:11:01'),(13,116.00,116.00,'2024-10-04 11:27:31');
/*!40000 ALTER TABLE `packaging_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planned_quantity`
--

DROP TABLE IF EXISTS `planned_quantity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planned_quantity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fabricCat1` decimal(10,2) DEFAULT NULL,
  `fabricCat2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planned_quantity`
--

LOCK TABLES `planned_quantity` WRITE;
/*!40000 ALTER TABLE `planned_quantity` DISABLE KEYS */;
INSERT INTO `planned_quantity` VALUES (1,5.00,5.00,'2024-09-30 07:52:49'),(2,5.00,5.00,'2024-09-30 07:53:21'),(3,5.00,5.00,'2024-09-30 07:53:24'),(4,NULL,NULL,'2024-09-30 09:25:41'),(5,NULL,NULL,'2024-09-30 09:25:42'),(6,2.00,2.00,'2024-09-30 09:52:56'),(7,555.00,555.00,'2024-09-30 09:55:23'),(8,10.00,10.00,'2024-09-30 10:05:24'),(9,40.00,10.00,'2024-09-30 10:47:11'),(10,5.00,5.00,'2024-09-30 12:40:47'),(11,44.00,44.00,'2024-10-01 04:41:27'),(12,30.00,30.00,'2024-10-01 13:17:21'),(13,20.00,20.00,'2024-10-03 04:43:51'),(14,5.00,5.00,'2024-10-03 05:03:37'),(15,10.00,10.00,'2024-10-03 06:05:16'),(19,22.00,22.00,'2024-10-03 12:17:02'),(20,11.00,11.00,'2024-10-04 03:50:21'),(21,11.00,11.00,'2024-10-04 07:11:20'),(22,221.00,221.00,'2024-10-04 11:28:25');
/*!40000 ALTER TABLE `planned_quantity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plant_capacity`
--

DROP TABLE IF EXISTS `plant_capacity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plant_capacity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `machine1Cap` decimal(10,2) DEFAULT NULL,
  `machine1Occ` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plant_capacity`
--

LOCK TABLES `plant_capacity` WRITE;
/*!40000 ALTER TABLE `plant_capacity` DISABLE KEYS */;
INSERT INTO `plant_capacity` VALUES (1,5.00,5.00,'2024-09-30 07:53:31'),(2,400.00,400.00,'2024-09-30 09:53:18'),(3,20.00,20.00,'2024-09-30 10:05:27'),(4,10.00,10.00,'2024-09-30 12:42:19'),(5,55.00,55.00,'2024-10-01 04:41:51'),(6,50.00,50.00,'2024-10-01 13:17:47'),(7,5.00,5.00,'2024-10-03 05:04:11'),(8,10.00,10.00,'2024-10-03 06:05:44'),(9,22.00,33.00,'2024-10-03 12:17:39'),(10,22.00,22.00,'2024-10-04 03:50:57'),(11,32.00,32.00,'2024-10-04 07:11:51'),(12,332.00,332.00,'2024-10-04 11:29:11');
/*!40000 ALTER TABLE `plant_capacity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processing_charges`
--

DROP TABLE IF EXISTS `processing_charges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `processing_charges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contractual1` decimal(10,2) DEFAULT NULL,
  `contractual2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processing_charges`
--

LOCK TABLES `processing_charges` WRITE;
/*!40000 ALTER TABLE `processing_charges` DISABLE KEYS */;
INSERT INTO `processing_charges` VALUES (1,80.00,80.00,'2024-09-30 10:05:54'),(2,80.00,80.00,'2024-09-30 12:41:06'),(3,44.00,44.00,'2024-10-01 04:41:33'),(4,223.00,33.00,'2024-10-01 05:03:15'),(5,30.00,30.00,'2024-10-01 13:17:35'),(6,5.00,5.00,'2024-10-03 05:03:59'),(7,10.00,10.00,'2024-10-03 06:05:31'),(8,22.00,22.00,'2024-10-03 12:17:22'),(9,88.00,88.00,'2024-10-04 03:50:41'),(10,28.00,28.00,'2024-10-04 07:11:42'),(11,228.00,228.00,'2024-10-04 11:28:49');
/*!40000 ALTER TABLE `processing_charges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salaries_overhead`
--

DROP TABLE IF EXISTS `salaries_overhead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salaries_overhead` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employees1` decimal(10,2) DEFAULT NULL,
  `employees2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salaries_overhead`
--

LOCK TABLES `salaries_overhead` WRITE;
/*!40000 ALTER TABLE `salaries_overhead` DISABLE KEYS */;
INSERT INTO `salaries_overhead` VALUES (1,90.00,90.00,'2024-09-30 10:06:00'),(2,33.00,3.00,'2024-09-30 12:42:30'),(3,55.00,55.00,'2024-10-01 04:41:53'),(4,50.00,50.00,'2024-10-01 13:18:01'),(5,5.00,5.00,'2024-10-03 05:04:27'),(6,10.00,10.00,'2024-10-03 06:05:57'),(7,33.00,33.00,'2024-10-03 12:33:29'),(8,44.00,44.00,'2024-10-03 12:33:58'),(9,99.00,99.00,'2024-10-04 03:51:13'),(10,39.00,39.00,'2024-10-04 07:12:03'),(11,339.00,339.00,'2024-10-04 11:29:28');
/*!40000 ALTER TABLE `salaries_overhead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `substandard_fabric`
--

DROP TABLE IF EXISTS `substandard_fabric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `substandard_fabric` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subFabric1` decimal(10,2) DEFAULT NULL,
  `subFabric2` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `substandard_fabric`
--

LOCK TABLES `substandard_fabric` WRITE;
/*!40000 ALTER TABLE `substandard_fabric` DISABLE KEYS */;
INSERT INTO `substandard_fabric` VALUES (1,40.00,40.00,'2024-09-30 10:05:31'),(2,55.00,55.00,'2024-09-30 12:40:54'),(3,44.00,44.00,'2024-10-01 04:41:28'),(4,20.00,20.00,'2024-10-01 13:12:14'),(5,30.00,30.00,'2024-10-01 13:17:14'),(6,5.00,5.00,'2024-10-03 05:03:50'),(7,10.00,10.00,'2024-10-03 06:05:26'),(8,22.00,22.00,'2024-10-03 12:17:16'),(9,44.00,44.00,'2024-10-04 03:50:35'),(10,24.00,24.00,'2024-10-04 07:11:36'),(11,224.00,224.00,'2024-10-04 11:28:41');
/*!40000 ALTER TABLE `substandard_fabric` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `summary_table`
--

DROP TABLE IF EXISTS `summary_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `summary_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planned_quantity_fabricCat1` float DEFAULT NULL,
  `planned_quantity_fabricCat2` float DEFAULT NULL,
  `plant_capacity_machine1Cap` float DEFAULT NULL,
  `plant_capacity_machine1Occ` float DEFAULT NULL,
  `bom_preparation_rawMaterial1` float DEFAULT NULL,
  `bom_preparation_rawMaterial2` float DEFAULT NULL,
  `substandard_fabric_quantity1` float DEFAULT NULL,
  `substandard_fabric_quantity2` float DEFAULT NULL,
  `fuel_power_fuelReq1` float DEFAULT NULL,
  `fuel_power_powerReq1` float DEFAULT NULL,
  `packaging_cost_cost1` float DEFAULT NULL,
  `packaging_cost_cost2` float DEFAULT NULL,
  `commission_charges_commission1` float DEFAULT NULL,
  `commission_charges_commission2` float DEFAULT NULL,
  `processing_charges_contractual1` float DEFAULT NULL,
  `processing_charges_contractual2` float DEFAULT NULL,
  `salaries_overhead_employees1` float DEFAULT NULL,
  `salaries_overhead_employees2` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `summary_table`
--

LOCK TABLES `summary_table` WRITE;
/*!40000 ALTER TABLE `summary_table` DISABLE KEYS */;
INSERT INTO `summary_table` VALUES (1,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,'2024-10-03 06:45:44'),(2,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,'2024-10-03 06:46:00'),(3,22,22,22,33,22,22,22,22,33,33,22,22,22,22,22,22,44,44,'2024-10-03 07:09:20'),(4,22,22,22,33,22,22,22,22,33,33,22,22,22,22,22,22,44,44,'2024-10-03 07:10:53'),(5,22,22,22,33,22,22,22,22,33,33,22,22,22,22,22,22,44,44,'2024-10-03 07:16:26'),(6,11,11,22,22,33,33,44,44,55,55,66,77,77,77,88,88,99,99,'2024-10-03 22:21:39'),(7,11,11,22,22,33,33,44,44,55,55,66,77,77,77,88,88,99,99,'2024-10-04 00:57:09'),(8,11,11,32,32,23,23,24,24,35,35,16,16,17,17,28,28,39,39,'2024-10-04 01:42:49'),(9,221,221,332,332,223,223,224,224,335,335,116,116,117,117,228,228,339,339,'2024-10-04 05:59:56');
/*!40000 ALTER TABLE `summary_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-04 17:08:11
