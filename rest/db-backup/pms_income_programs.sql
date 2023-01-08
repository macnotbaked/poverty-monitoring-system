-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2023 at 05:29 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms`
--

-- --------------------------------------------------------

--
-- Table structure for table `pms_income_programs`
--

CREATE TABLE `pms_income_programs` (
  `income_program_aid` int(11) NOT NULL,
  `income_program_is_active` tinyint(1) NOT NULL,
  `income_program_name` varchar(255) NOT NULL,
  `income_program_description` text NOT NULL,
  `income_program_contact_person` varchar(255) NOT NULL,
  `income_program_contact_number` varchar(16) NOT NULL,
  `income_program_contact_email` varchar(255) NOT NULL,
  `income_program_created` varchar(32) NOT NULL,
  `income_program_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_income_programs`
--

INSERT INTO `pms_income_programs` (`income_program_aid`, `income_program_is_active`, `income_program_name`, `income_program_description`, `income_program_contact_person`, `income_program_contact_number`, `income_program_contact_email`, `income_program_created`, `income_program_datetime`) VALUES
(1, 1, 'Assistance to individuals and Families in Crisis Situation ', 'This is the provision of immediate assistance to individuals and families who are under pressure by providing relief packs, medical assistance, education assistance, transportation or burial.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-29 22:29:29'),
(2, 1, 'Cash/Food for Work ', 'This service provides financial assistance or relief goods to individuals or families affected by the disaster in exchange for their participation in activities related to the improvement of their communities.', 'DSWD', 'DSWD', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:34:34'),
(3, 1, 'Social Pension ', 'The purpose of this program is to increase the income of poor and sick senior citizens who receive no other help from relatives or pensions from other institutions. The program provides Php 1,500 every three months for seniors to use for their needs such as medicine and food.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:35:53'),
(4, 1, 'Suplementary Feeding Program ', 'The purpose of the program is to provide additional food to children enrolled in Day Care Centers or Early Childhood Care and Development Centers. Children will receive food for 120 days. In addition to healthy food, children are also taught good manners and deeds related to food.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:37:12'),
(5, 1, 'Sustainable Livelihood Program (SLP)', 'This is the DSWD program that aims to increase the socio-economic status of its participants. It supports small businesses or microenterprises to grow their livelihoods. The SLP can also provide assistance through Employment Facilitation for program participants who have skills or knowledge that can be used for work. Apart from the investment, SLP also provides Skills Training.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:37:50'),
(6, 1, 'Tulong para sa Magsasaka', 'n/a', 'Barangay Chairman', 'n/a', 'n/a@gmail.com', '2022-12-29', '2022-12-29 23:05:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_income_programs`
--
ALTER TABLE `pms_income_programs`
  ADD PRIMARY KEY (`income_program_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_income_programs`
--
ALTER TABLE `pms_income_programs`
  MODIFY `income_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
