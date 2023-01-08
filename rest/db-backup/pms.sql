-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2023 at 05:33 PM
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
-- Table structure for table `pms_barangay`
--

CREATE TABLE `pms_barangay` (
  `barangay_aid` int(11) NOT NULL,
  `barangay_name` varchar(128) NOT NULL,
  `barangay_municipality` varchar(255) NOT NULL,
  `barangay_province` varchar(255) NOT NULL,
  `barangay_contact_person_primary` varchar(255) NOT NULL,
  `barangay_contact_number_primary` varchar(16) NOT NULL,
  `barangay_contact_person_secondary` varchar(255) NOT NULL,
  `barangay_contact_number_secondary` varchar(16) NOT NULL,
  `barangay_photo` varchar(255) NOT NULL,
  `barangay_created` varchar(32) NOT NULL,
  `barangay_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_barangay`
--

INSERT INTO `pms_barangay` (`barangay_aid`, `barangay_name`, `barangay_municipality`, `barangay_province`, `barangay_contact_person_primary`, `barangay_contact_number_primary`, `barangay_contact_person_secondary`, `barangay_contact_number_secondary`, `barangay_photo`, `barangay_created`, `barangay_datetime`) VALUES
(1, 'Santa Elena', 'San Pablo City', 'Laguna', 'Mark Ryan Merin', '09491040057', 'Meirejoy Marlait', '09662993797', '318385029_6148542658490661_4946343128240778474_n.jpg', '2023-01-02', '2023-01-02 14:50:38');

-- --------------------------------------------------------

--
-- Table structure for table `pms_evaluation_list`
--

CREATE TABLE `pms_evaluation_list` (
  `evaluation_list_aid` int(11) NOT NULL,
  `evaluation_list_is_active` tinyint(1) NOT NULL,
  `evaluation_list_created` varchar(32) NOT NULL,
  `evaluation_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_evaluation_list`
--

INSERT INTO `pms_evaluation_list` (`evaluation_list_aid`, `evaluation_list_is_active`, `evaluation_list_created`, `evaluation_list_datetime`) VALUES
(2, 0, '2022-12-30', '2023-01-08 17:10:44'),
(8, 0, '2023-01-08', '2023-01-08 19:08:31');

-- --------------------------------------------------------

--
-- Table structure for table `pms_household_criteria`
--

CREATE TABLE `pms_household_criteria` (
  `household_criteria_aid` int(11) NOT NULL,
  `household_criteria_is_active` tinyint(1) NOT NULL,
  `household_criteria_program_id` int(11) NOT NULL,
  `household_criteria_range_from` varchar(16) NOT NULL,
  `household_criteria_range_to` varchar(16) NOT NULL,
  `household_criteria_category` varchar(32) NOT NULL,
  `household_criteria_created` varchar(32) NOT NULL,
  `household_criteria_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_household_criteria`
--

INSERT INTO `pms_household_criteria` (`household_criteria_aid`, `household_criteria_is_active`, `household_criteria_program_id`, `household_criteria_range_from`, `household_criteria_range_to`, `household_criteria_category`, `household_criteria_created`, `household_criteria_datetime`) VALUES
(1, 1, 3, '5', '100', 'household', '2022-12-11', '2022-12-29 23:22:00'),
(2, 1, 2, '5', '100', 'household', '2022-12-11', '2022-12-29 23:20:31'),
(3, 1, 1, '5', '100', 'household', '2022-12-11', '2022-12-29 23:19:22');

-- --------------------------------------------------------

--
-- Table structure for table `pms_household_programs`
--

CREATE TABLE `pms_household_programs` (
  `household_program_aid` int(11) NOT NULL,
  `household_program_is_active` tinyint(1) NOT NULL,
  `household_program_name` varchar(255) NOT NULL,
  `household_program_description` text NOT NULL,
  `household_program_contact_person` varchar(255) NOT NULL,
  `household_program_contact_number` varchar(16) NOT NULL,
  `household_program_contact_email` varchar(255) NOT NULL,
  `household_program_created` varchar(32) NOT NULL,
  `household_program_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_household_programs`
--

INSERT INTO `pms_household_programs` (`household_program_aid`, `household_program_is_active`, `household_program_name`, `household_program_description`, `household_program_contact_person`, `household_program_contact_number`, `household_program_contact_email`, `household_program_created`, `household_program_datetime`) VALUES
(1, 1, 'Housing Assistance for Calamity Victims', 'The program is intended to respond to the housing need of low and marginal-income and/or informal settler families for permanent shelter affected by calamities such as typhoons, landslides, earthquake, and fires for relocation to safe areas', 'N/A', 'N/A', 'sdf@gmial.com', '2022-12-01', '2022-12-29 22:29:26'),
(2, 1, 'Resettlement Program', 'For Informal Setter Families Affected by Infrastructure Project and those Living Along Danger Areas.  	The program addresses the requirements of families affected by government infrastructure projects and those living along danger areas.  It entails the provision of housing units, community facilities, socio-economic and other community support programs.', 'N/A', 'N/A', 'fsdfsdfg@mail.com', '2022-12-01', '2022-12-01 02:44:11'),
(3, 1, 'Rental Assistance Program (RAP)', 'The Rental Assistance Program (RAP) is the major state-supported program for assisting very-low-income families to afford decent, safe, and sanitary housing in the private market.  Participants find their own housing, including apartments, townhouses, and single-family homes. ', 'N/A', 'N/A', 'sdf@gmial.com', '2022-12-01', '2022-12-01 02:45:08');

-- --------------------------------------------------------

--
-- Table structure for table `pms_income_criteria`
--

CREATE TABLE `pms_income_criteria` (
  `income_criteria_aid` int(11) NOT NULL,
  `income_criteria_is_active` tinyint(1) NOT NULL,
  `income_criteria_program_id` int(11) NOT NULL,
  `income_criteria_range_from` varchar(16) NOT NULL,
  `income_criteria_range_to` varchar(16) NOT NULL,
  `income_criteria_category` varchar(32) NOT NULL,
  `income_criteria_created` varchar(32) NOT NULL,
  `income_criteria_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_income_criteria`
--

INSERT INTO `pms_income_criteria` (`income_criteria_aid`, `income_criteria_is_active`, `income_criteria_program_id`, `income_criteria_range_from`, `income_criteria_range_to`, `income_criteria_category`, `income_criteria_created`, `income_criteria_datetime`) VALUES
(1, 1, 2, '5', '100', 'income', '2022-12-12', '2022-12-29 22:52:41'),
(2, 1, 3, '10', '100', 'income', '2022-12-12', '2022-12-29 22:55:48'),
(3, 1, 4, '10', '100', 'income', '2022-12-12', '2022-12-29 22:58:20'),
(4, 1, 1, '30', '100', 'income', '2022-12-29', '2022-12-29 22:50:04'),
(5, 1, 5, '10', '100', 'income', '2022-12-29', '2022-12-29 23:01:55');

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

-- --------------------------------------------------------

--
-- Table structure for table `pms_monthly_income`
--

CREATE TABLE `pms_monthly_income` (
  `monthly_income_aid` int(11) NOT NULL,
  `monthly_income_is_active` tinyint(1) NOT NULL,
  `monthly_income_name` varchar(128) NOT NULL,
  `monthly_income_from` varchar(16) NOT NULL,
  `monthly_income_to` varchar(16) NOT NULL,
  `monthly_income_created` varchar(32) NOT NULL,
  `monthly_income_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_monthly_income`
--

INSERT INTO `pms_monthly_income` (`monthly_income_aid`, `monthly_income_is_active`, `monthly_income_name`, `monthly_income_from`, `monthly_income_to`, `monthly_income_created`, `monthly_income_datetime`) VALUES
(1, 1, 'Poor', '0', '12082', '2022-12-03', '2022-12-04 22:03:03'),
(2, 1, 'Low income (but not poor)', '12082', '24164', '2022-12-03', '2022-12-04 18:07:57'),
(3, 1, 'Lower middle class', '24164', '48328', '2022-12-03', '2022-12-04 18:08:16'),
(4, 1, 'Middle class', '48328', '84574', '2022-12-03', '2022-12-04 18:08:50'),
(5, 1, 'Upper middle class', '84574', '144984', '2022-12-03', '2022-12-04 18:09:10'),
(6, 1, 'High income (but not rich)', '144984', '241640', '2022-12-03', '2022-12-04 18:09:28'),
(7, 1, 'Rich', '241640', '999999999999', '2022-12-03', '2022-12-05 20:24:29');

-- --------------------------------------------------------

--
-- Table structure for table `pms_population_criteria`
--

CREATE TABLE `pms_population_criteria` (
  `population_criteria_aid` int(11) NOT NULL,
  `population_criteria_is_active` tinyint(1) NOT NULL,
  `population_criteria_program_id` int(11) NOT NULL,
  `population_criteria_range_from` varchar(16) NOT NULL,
  `population_criteria_range_to` varchar(16) NOT NULL,
  `population_criteria_category` varchar(32) NOT NULL,
  `population_criteria_created` varchar(32) NOT NULL,
  `population_criteria_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_population_criteria`
--

INSERT INTO `pms_population_criteria` (`population_criteria_aid`, `population_criteria_is_active`, `population_criteria_program_id`, `population_criteria_range_from`, `population_criteria_range_to`, `population_criteria_category`, `population_criteria_created`, `population_criteria_datetime`) VALUES
(2, 1, 1, '30', '100', 'Population', '2022-12-29', '2022-12-29 22:23:37'),
(3, 1, 2, '30', '100', 'Population', '2022-12-29', '2022-12-29 22:31:53'),
(4, 1, 3, '100', '100', 'Population', '2022-12-29', '2022-12-29 22:46:55');

-- --------------------------------------------------------

--
-- Table structure for table `pms_population_programs`
--

CREATE TABLE `pms_population_programs` (
  `population_program_aid` int(11) NOT NULL,
  `population_program_is_active` tinyint(1) NOT NULL,
  `population_program_name` varchar(255) NOT NULL,
  `population_program_description` text NOT NULL,
  `population_program_contact_person` varchar(255) NOT NULL,
  `population_program_contact_number` varchar(16) NOT NULL,
  `population_program_contact_email` varchar(255) NOT NULL,
  `population_program_created` varchar(32) NOT NULL,
  `population_program_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_population_programs`
--

INSERT INTO `pms_population_programs` (`population_program_aid`, `population_program_is_active`, `population_program_name`, `population_program_description`, `population_program_contact_person`, `population_program_contact_number`, `population_program_contact_email`, `population_program_created`, `population_program_datetime`) VALUES
(1, 1, 'Family Planning', 'Family Planning in particular is the ability to prevent pregnancies safely through the use of contraception. Such ability is crucial to women who wish to avoid high-risk pregnancies, to couples who wish to manage the number and spacing of their children, and to men and women who wish to share equitably the burdens of fertility and child. Based on DOH definition, family planning (FP) is part of reproductive health (RH).', 'POPCOM', 'N/A', 'na@gmail.com', '2022-12-01', '2022-12-11 23:41:49'),
(2, 1, 'Adolescent Health and Youth Development', 'The AHYD component of the PPMP support adolescent programs aimed at providing information that will help them understand their sexuality, develop the right values in them, help them make responsible decisions and prepare them for responsible adulthood and parenthood.', 'POPCOM', 'N/A', 'na@gmail.com', '2022-12-01', '2022-12-29 22:29:17'),
(3, 1, 'Population and Development Integration (POPDEV)', 'The POPDEV component of the PPMP entail initiatives to build capabilities to integrate population variables, including migration and urbanization, into development policies, plans and programs at the national, regional and local levels.', 'POPCOM', 'n/a', 'na@gmail.com', '2022-12-01', '2022-12-11 23:41:52');

-- --------------------------------------------------------

--
-- Table structure for table `pms_representative`
--

CREATE TABLE `pms_representative` (
  `representative_aid` int(11) NOT NULL,
  `representative_eval_id` int(11) NOT NULL,
  `representative_purok_id` int(11) NOT NULL,
  `representative_is_active` tinyint(1) NOT NULL,
  `representative_name` varchar(255) NOT NULL,
  `representative_contact` varchar(16) NOT NULL,
  `representative_house_number` int(11) NOT NULL,
  `representative_total_people` int(2) NOT NULL,
  `representative_total_underage` int(2) NOT NULL,
  `representative_total_midage` int(2) NOT NULL,
  `representative_total_adult` int(2) NOT NULL,
  `representative_total_seniors` int(2) NOT NULL,
  `representative_total_pwd` int(2) NOT NULL,
  `representative_total_elem` int(2) NOT NULL,
  `representative_total_highschool` int(2) NOT NULL,
  `representative_total_college` int(2) NOT NULL,
  `representative_household_living_id` int(2) NOT NULL,
  `representative_is_in_danger_area` tinyint(1) NOT NULL,
  `representative_monthly_income` varchar(8) NOT NULL,
  `representative_total_able_work` int(2) NOT NULL,
  `representative_total_employed` int(2) NOT NULL,
  `representative_created` varchar(32) NOT NULL,
  `representative_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_representative`
--

INSERT INTO `pms_representative` (`representative_aid`, `representative_eval_id`, `representative_purok_id`, `representative_is_active`, `representative_name`, `representative_contact`, `representative_house_number`, `representative_total_people`, `representative_total_underage`, `representative_total_midage`, `representative_total_adult`, `representative_total_seniors`, `representative_total_pwd`, `representative_total_elem`, `representative_total_highschool`, `representative_total_college`, `representative_household_living_id`, `representative_is_in_danger_area`, `representative_monthly_income`, `representative_total_able_work`, `representative_total_employed`, `representative_created`, `representative_datetime`) VALUES
(1, 2, 1, 1, 'Yal Neri', 'n/a', 1, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '109999', 2, 0, '2022-12-30', '0000-00-00 00:00:00'),
(4, 2, 1, 1, 'Rowena Ariola', 'n/a', 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '30000', 1, 1, '2022-12-30', '2022-12-30 00:29:15'),
(7, 2, 1, 1, 'Ricamara Dekma', 'n/a', 6, 5, 0, 2, 3, 0, 0, 0, 2, 1, 1, 0, '212309', 5, 1, '2022-12-30', '2022-12-30 00:49:07'),
(8, 2, 1, 1, 'Delio Rolando', 'n/a', 7, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '12000', 1, 1, '2022-12-30', '2022-12-30 00:51:14'),
(9, 2, 1, 1, 'Willy Alimagno', 'n/a', 8, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '32000', 5, 5, '2022-12-30', '2022-12-30 00:52:39'),
(10, 2, 1, 1, 'Noel Gomez', 'n/a', 9, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '65000', 4, 3, '2022-12-30', '2022-12-30 00:54:16'),
(11, 2, 1, 1, 'Lucila Osuna', '09989828058', 10, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '8000', 3, 1, '2022-12-30', '2022-12-30 00:57:20'),
(12, 2, 1, 1, 'Joey Osuna', 'n/a', 10, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '30000', 2, 2, '2022-12-30', '2022-12-30 00:59:02'),
(13, 2, 1, 1, 'Elena Monica', 'n/a', 10, 8, 1, 1, 6, 0, 0, 0, 1, 0, 3, 0, '24000', 7, 3, '2022-12-30', '2022-12-30 01:02:30'),
(14, 2, 1, 1, 'Janice Aningalan', '09323978275', 11, 5, 0, 3, 2, 0, 0, 0, 2, 0, 1, 0, '40000', 5, 2, '2022-12-30', '2022-12-30 01:04:23'),
(15, 2, 1, 1, 'Amelio Aningalan', '09286978095', 12, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '15000', 4, 2, '2022-12-30', '2022-12-30 01:05:39'),
(16, 2, 1, 1, 'Joven Anila', 'n/a', 13, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '30000', 2, 2, '2022-12-30', '2022-12-30 01:06:48'),
(17, 2, 1, 1, 'Dennise Alimagno', '09784048306', 14, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '15000', 1, 2, '2022-12-30', '2022-12-30 01:08:06'),
(18, 2, 1, 1, 'Rosalie Alimagno', '09469074572', 15, 6, 0, 3, 3, 0, 0, 3, 0, 0, 1, 0, '13000', 6, 2, '2022-12-30', '2022-12-30 01:09:32'),
(19, 2, 1, 1, 'Jimaray Alimagno', '09025194679', 16, 3, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '5000', 5, 2, '2022-12-30', '2022-12-30 01:11:00'),
(20, 2, 1, 1, 'Juana Candelero', 'n/a', 16, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, '1500', 0, 0, '2022-12-30', '2022-12-30 01:13:46'),
(21, 2, 1, 1, 'Ernie Aquino', '09494702730', 17, 4, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, '16000', 4, 4, '2022-12-30', '2022-12-30 01:26:21'),
(22, 2, 1, 1, 'Crisanto De Guzman ', '09199626724', 18, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '13000', 4, 1, '2022-12-30', '2022-12-30 01:27:39'),
(23, 2, 1, 1, 'Kervin Pan', 'n/a', 19, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '5000', 2, 2, '2022-12-30', '2022-12-30 01:29:07'),
(24, 2, 1, 1, 'Macaria Belda', 'n/a', 20, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, '5000', 3, 2, '2022-12-30', '2022-12-30 01:30:51'),
(25, 2, 1, 1, 'Randy Belda', 'n/a', 20, 6, 0, 4, 2, 0, 0, 3, 1, 0, 1, 0, '14000', 6, 2, '2022-12-30', '2022-12-30 01:32:02'),
(26, 2, 1, 1, 'Jenicho Reyes', '0945704979', 21, 5, 0, 3, 2, 0, 0, 3, 0, 0, 1, 0, '6000', 5, 1, '2022-12-30', '2022-12-30 01:33:41'),
(27, 2, 1, 1, 'Rosemeley Reyes', '09298813264', 22, 5, 0, 3, 1, 1, 0, 1, 2, 0, 1, 0, '2000', 5, 2, '2022-12-30', '2022-12-30 01:40:28'),
(28, 2, 1, 1, 'Reymundo Catillo ', '09304077036', 23, 5, 0, 2, 3, 0, 0, 0, 2, 0, 1, 0, '3500', 5, 1, '2022-12-30', '2022-12-30 01:41:40'),
(29, 2, 1, 1, 'Jason Ong ', '09224054259', 24, 9, 0, 4, 5, 0, 0, 3, 2, 0, 1, 0, '8000', 9, 1, '2022-12-30', '2022-12-30 01:43:11'),
(30, 2, 1, 1, 'Joeyson Ong', 'n/a', 25, 5, 1, 2, 2, 0, 0, 0, 2, 0, 1, 0, '8000', 4, 2, '2022-12-30', '2022-12-30 01:44:14'),
(31, 2, 1, 1, 'Jimmy Ong ', '09394282894', 26, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '2500', 0, 0, '2022-12-30', '2022-12-30 01:47:37'),
(32, 2, 1, 1, 'Jhonny Ong', 'n/a', 26, 7, 1, 3, 3, 0, 0, 2, 2, 0, 1, 0, '4000', 6, 1, '2022-12-30', '2022-12-30 01:48:41'),
(33, 2, 1, 1, 'Joey Habilagon', '09464291983', 27, 5, 0, 1, 4, 0, 0, 1, 0, 0, 1, 0, '20000', 5, 2, '2022-12-30', '2022-12-30 01:59:46'),
(34, 2, 1, 1, 'Charlie Angeles ', 'n/a', 28, 4, 0, 2, 2, 0, 0, 1, 0, 0, 1, 0, '20000', 4, 2, '2022-12-30', '2022-12-30 02:01:00'),
(35, 2, 1, 1, 'Ronnie Katigbak', 'n/a', 29, 6, 1, 3, 2, 0, 0, 1, 2, 0, 1, 0, '8000', 5, 1, '2022-12-30', '2022-12-30 02:04:37'),
(36, 2, 1, 1, 'Belina Alimagno', '09197349647', 30, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 1, '10000', 5, 2, '2022-12-30', '2022-12-30 02:06:24'),
(37, 2, 1, 1, 'Beverly Muela ', '09481160221', 31, 6, 0, 2, 3, 1, 0, 0, 2, 0, 1, 0, '3000', 6, 1, '2022-12-30', '2022-12-30 02:08:24'),
(38, 2, 1, 1, 'Elmer  Drilon', '09095749399', 32, 3, 0, 1, 2, 0, 1, 1, 0, 0, 1, 0, '10000', 3, 2, '2022-12-30', '2022-12-30 02:10:16'),
(39, 2, 1, 1, 'Jimmy Alimagno', 'n/a', 33, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '23000', 3, 1, '2022-12-30', '2022-12-30 02:14:39'),
(40, 2, 1, 1, 'Alejandro Aniciete', '09224110379', 34, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '15000', 4, 1, '2022-12-30', '2022-12-30 02:19:27'),
(41, 2, 1, 1, 'Bernie Aquilo ', '09291149237', 35, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '10000', 4, 2, '2022-12-30', '2022-12-30 02:20:52'),
(42, 2, 1, 1, 'Arnel Habigalon', '09496255667', 36, 6, 0, 4, 2, 0, 0, 2, 2, 0, 1, 0, '6000', 6, 1, '2022-12-30', '2022-12-30 02:22:28'),
(43, 2, 1, 1, 'Melchor Ledesma', '09494577053', 37, 5, 1, 2, 2, 0, 0, 1, 2, 0, 2, 0, '10000', 4, 1, '2022-12-30', '2022-12-30 02:23:58'),
(44, 2, 1, 1, 'Florencio Valdez', '09093790253', 38, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '6000', 3, 1, '2022-12-30', '2022-12-30 12:01:41'),
(45, 2, 1, 1, 'John Robert Untiveros', 'n/a', 38, 3, 0, 1, 2, 0, 0, 1, 0, 0, 3, 0, '25000', 3, 2, '2022-12-30', '2022-12-30 12:02:59'),
(46, 2, 1, 1, 'Robert Ilagan ', '09289091066', 39, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '5000', 4, 1, '2022-12-30', '2022-12-30 12:04:02'),
(47, 2, 1, 1, 'Aldrin Valdez', '09073368832', 40, 3, 0, 1, 2, 0, 0, 1, 0, 0, 2, 0, '20000', 3, 2, '2022-12-30', '2022-12-30 12:10:16'),
(48, 2, 1, 1, 'Paciano Dapog', '09104313340', 41, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '18000', 3, 1, '2022-12-30', '2022-12-30 12:12:44'),
(49, 2, 1, 1, 'Crisanto Danseco', 'n/a', 42, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2022-12-30', '2022-12-30 12:18:27'),
(50, 2, 1, 1, 'Lea Surigao', 'n/a', 42, 2, 1, 0, 1, 0, 0, 0, 0, 0, 3, 0, '0', 1, 0, '2022-12-30', '2022-12-30 12:20:40'),
(51, 2, 1, 1, 'Dan Sumaque', 'n/a', 43, 5, 1, 2, 2, 0, 0, 1, 1, 0, 1, 0, '12000', 4, 2, '2022-12-30', '2022-12-30 12:21:52'),
(52, 2, 1, 1, 'John Ace Landicho', '09329868241', 44, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '14000', 4, 2, '2022-12-30', '2022-12-30 12:23:05'),
(53, 2, 1, 1, 'Nicolas Chumacera', 'n/a', 45, 4, 0, 0, 1, 3, 0, 0, 0, 1, 1, 0, '2500', 1, 0, '2022-12-30', '2022-12-30 12:28:38'),
(54, 2, 1, 1, 'Melanie De Roma', 'n/a', 46, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '2500', 1, 0, '2022-12-30', '2022-12-30 12:30:45'),
(55, 2, 1, 1, 'Princess Joy De Roma', 'n/a', 46, 2, 0, 1, 1, 0, 0, 0, 1, 0, 3, 0, '12000', 2, 1, '2022-12-30', '2022-12-30 12:31:52'),
(56, 2, 1, 1, 'Arren De Roma', 'n/a', 46, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '30000', 3, 2, '2022-12-30', '2022-12-30 12:32:48'),
(57, 2, 1, 1, 'Macela Gomez', 'n/a', 47, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, '0', 0, 0, '2022-12-30', '2022-12-30 12:34:39'),
(58, 2, 1, 1, 'Althea Avanzado ', 'n/a', 47, 5, 0, 3, 2, 0, 0, 0, 2, 2, 3, 0, '20000', 5, 1, '2022-12-30', '2022-12-30 12:38:03'),
(59, 2, 1, 1, 'Sveren Avanzado ', 'n/a', 47, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '10000', 4, 1, '2022-12-30', '2022-12-30 12:39:02'),
(60, 2, 1, 1, 'Jeremy Saludadez', 'n/a', 48, 6, 0, 3, 3, 0, 0, 2, 1, 0, 1, 0, '25000', 6, 2, '2022-12-30', '2022-12-30 12:40:10'),
(61, 2, 1, 1, 'Sener Alimagno ', 'n/a', 49, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '27000', 2, 2, '2022-12-30', '2022-12-30 12:41:20'),
(62, 2, 1, 1, 'Jenen Alimagno', 'n/a', 49, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, '20000', 1, 1, '2022-12-30', '2022-12-30 12:42:13'),
(63, 2, 1, 1, 'Normerciano Aningalan', '09391147048', 50, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '20000', 1, 1, '2022-12-30', '2022-12-30 12:43:23'),
(64, 2, 1, 1, 'Jonathan Aningalan ', 'n/a', 50, 4, 1, 1, 2, 0, 0, 2, 0, 0, 3, 0, '9000', 3, 1, '2022-12-30', '0000-00-00 00:00:00'),
(65, 2, 2, 1, 'Nazaro Cega', 'n/a', 1, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '5000', 5, 1, '2022-12-30', '2022-12-30 12:57:43'),
(66, 2, 2, 1, 'Benvenido Castillo', 'n/a', 2, 6, 0, 0, 6, 0, 0, 0, 1, 0, 1, 0, '12000', 6, 2, '2022-12-30', '2022-12-30 12:58:42'),
(67, 2, 2, 1, 'Glen Madarazo', 'n/a', 3, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '9000', 3, 1, '2022-12-30', '2022-12-30 12:59:33'),
(68, 2, 2, 1, 'Bienvenido Anlacar', '09185879914', 4, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '8000', 1, 1, '2022-12-30', '2022-12-30 13:01:02'),
(69, 2, 2, 1, 'Reynante Anlacar ', 'n/a', 4, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '3000', 2, 1, '2022-12-30', '2022-12-30 13:02:05'),
(70, 2, 2, 1, 'Herry Berth Anlacar ', 'n/a', 5, 5, 0, 3, 2, 0, 0, 1, 2, 0, 1, 0, '8000', 5, 1, '2022-12-30', '2022-12-30 13:04:43'),
(71, 2, 2, 1, 'Forperio De Castro', 'n/a', 6, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2022-12-30', '2022-12-30 13:43:50'),
(72, 2, 2, 1, 'Allan De Castro', 'n/a', 6, 4, 0, 2, 2, 0, 0, 0, 2, 0, 3, 0, '8000', 4, 1, '2022-12-30', '2022-12-30 13:44:45'),
(73, 2, 2, 1, 'Aristo Marquez', '09295884563', 7, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '5000', 3, 1, '2022-12-30', '2022-12-30 13:45:39'),
(74, 2, 2, 1, 'Darwin Bundalian', 'n/a', 8, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '8000', 4, 2, '2022-12-30', '2022-12-30 13:57:09'),
(75, 2, 2, 1, 'Estela Bundalian ', 'n/a', 8, 2, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0, '10500', 1, 1, '2022-12-30', '2022-12-30 13:58:07'),
(76, 2, 2, 1, 'Orlando Bundalian', '0908473963', 9, 7, 1, 4, 2, 0, 0, 4, 0, 0, 1, 0, '6000', 6, 1, '2022-12-30', '2022-12-30 14:00:07'),
(78, 2, 2, 1, 'Florencia Bunadalian ', 'n/a', 10, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '1500', 0, 0, '2023-01-02', '2023-01-02 23:03:49'),
(79, 2, 2, 1, 'Noli Catroverde ', '09461403740', 11, 4, 0, 1, 3, 0, 0, 0, 0, 0, 2, 0, '7650', 4, 3, '2023-01-02', '2023-01-02 23:06:19'),
(80, 2, 2, 1, 'Cletos Solis', 'n/a', 11, 3, 1, 1, 1, 0, 0, 1, 0, 0, 3, 0, '0', 2, 0, '2023-01-02', '2023-01-02 23:14:53'),
(81, 2, 2, 1, 'Rebisfer Bartolay ', '09487150185', 12, 5, 1, 2, 2, 0, 0, 0, 2, 0, 1, 0, '3000', 4, 1, '2023-01-02', '2023-01-02 23:20:28'),
(82, 2, 2, 1, 'Fernando Lopez', 'n/a', 13, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '7500', 4, 2, '2023-01-02', '2023-01-02 23:22:22'),
(83, 2, 2, 1, 'Jose Losmagos', 'n/a', 14, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 3, 0, '2023-01-02', '2023-01-02 23:23:29'),
(84, 2, 2, 1, 'Janet Atillo ', 'n/a', 14, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '0', 0, 0, '2023-01-02', '2023-01-02 23:27:16'),
(85, 2, 2, 1, 'Jamaine Atillo ', 'n/a', 14, 5, 2, 2, 1, 0, 0, 2, 1, 0, 3, 0, '0', 3, 0, '2023-01-02', '2023-01-02 23:28:56'),
(86, 2, 2, 1, 'Reynaldo Cuntapay', '09993995613', 15, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '23000', 3, 2, '2023-01-02', '2023-01-02 23:30:31'),
(87, 2, 2, 1, 'Benedicto Bumagat Jr. ', '09284859592', 16, 5, 0, 0, 5, 0, 0, 0, 1, 0, 1, 0, '37000', 5, 4, '2023-01-02', '2023-01-02 23:31:41'),
(88, 2, 2, 1, 'JaI Bandoy ', 'n/a', 17, 3, 1, 0, 2, 0, 0, 0, 0, 0, 2, 0, '7000', 2, 1, '2023-01-02', '2023-01-02 23:33:35'),
(89, 2, 2, 1, 'Alex Bumagat', 'n/a', 18, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, '3000', 2, 1, '2023-01-02', '2023-01-02 23:34:35'),
(90, 2, 2, 1, 'Alvaro Bumagat ', '09109336048', 18, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '3000', 2, 1, '2023-01-02', '2023-01-02 23:35:52'),
(91, 2, 2, 1, 'Sonny Sapilan ', '09462965831', 19, 5, 0, 1, 4, 0, 0, 0, 1, 1, 1, 0, '6500', 5, 2, '2023-01-02', '2023-01-02 23:37:03'),
(92, 2, 2, 1, 'Romeo Macasinag', '09399818159', 20, 4, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, '7000', 4, 2, '2023-01-02', '2023-01-02 23:38:08'),
(93, 2, 2, 1, 'Ronaldo Bungualan', 'n/a', 21, 9, 0, 4, 5, 0, 0, 2, 2, 0, 1, 0, '8000', 9, 3, '2023-01-02', '2023-01-02 23:39:15'),
(94, 2, 2, 1, 'Jerome Flores ', 'n/a', 21, 5, 1, 2, 2, 0, 0, 2, 0, 0, 3, 0, '5000', 4, 1, '2023-01-02', '2023-01-02 23:40:11'),
(95, 2, 2, 1, 'Mary Recreo ', 'n/a', 22, 2, 0, 1, 1, 0, 0, 1, 0, 0, 2, 0, '3000', 2, 1, '2023-01-02', '2023-01-02 23:41:25'),
(96, 2, 2, 1, 'Ernesto Lisangan', 'n/a', 23, 4, 0, 1, 1, 2, 0, 0, 1, 0, 2, 0, '8000', 2, 1, '2023-01-02', '2023-01-02 23:42:34'),
(97, 2, 2, 1, 'Jefferson Lisangan ', 'n/a', 23, 3, 1, 0, 2, 0, 0, 1, 0, 0, 3, 0, '5000', 2, 1, '2023-01-02', '2023-01-02 23:44:21'),
(98, 2, 2, 1, 'Ferdinand Faustino', '09104736261', 24, 4, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0, '7260', 4, 2, '2023-01-02', '2023-01-02 23:45:36'),
(99, 2, 2, 1, 'Nomer Reyes', 'n/a', 25, 5, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '18000', 5, 2, '2023-01-02', '2023-01-02 23:46:40'),
(100, 2, 2, 1, 'Clark Jan Fernandez', 'n/a', 26, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '6000', 4, 1, '2023-01-02', '2023-01-02 23:47:37'),
(101, 2, 2, 1, 'Antonio Ramos', 'n/a', 27, 4, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, '5000', 3, 1, '2023-01-02', '2023-01-02 23:50:04'),
(102, 2, 2, 1, 'Jean Bundalian', 'n/a', 28, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '5000', 3, 1, '2023-01-02', '2023-01-02 23:51:20'),
(103, 2, 2, 1, 'Josaphine Roxas', 'n/a', 29, 2, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, '0', 2, 0, '2023-01-02', '2023-01-02 23:52:22'),
(104, 2, 2, 1, 'Romeo Marasigan ', 'n/a', 30, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '30000', 4, 3, '2023-01-02', '2023-01-02 23:59:35'),
(105, 2, 2, 1, 'Manuel Bautista ', 'n/a', 31, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '13000', 2, 1, '2023-01-03', '2023-01-03 00:00:40'),
(106, 2, 2, 1, 'Marlon Bautista ', 'n/a', 31, 5, 1, 2, 2, 0, 0, 1, 2, 0, 3, 0, '18000', 4, 2, '2023-01-03', '2023-01-03 00:01:51'),
(107, 2, 2, 1, 'Daniel Sadia ', 'n/a', 32, 4, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, '21000', 3, 2, '2023-01-03', '2023-01-03 00:02:47'),
(108, 2, 2, 1, 'Rodelo Galay ', 'n/a', 33, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '18000', 4, 2, '2023-01-03', '2023-01-03 00:04:52'),
(109, 2, 2, 1, 'Jessie Iranzo ', '09307688899', 34, 5, 0, 2, 3, 0, 0, 1, 2, 0, 1, 0, '8000', 5, 1, '2023-01-03', '2023-01-03 00:06:08'),
(110, 2, 2, 1, 'Jose Lacap', 'n/a', 35, 6, 0, 4, 2, 0, 0, 2, 2, 0, 1, 0, '5000', 6, 1, '2023-01-03', '2023-01-03 00:07:00'),
(111, 2, 2, 1, 'Guedencio Lacap', 'n/a', 36, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '1500', 2, 0, '2023-01-03', '2023-01-03 00:08:42'),
(112, 2, 2, 1, 'Edwin Nacarro ', '09095402213', 37, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '10000', 4, 1, '2023-01-03', '2023-01-03 00:09:50'),
(113, 2, 2, 1, 'Leopoldo Mijica', 'n/a', 38, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '5000', 2, 1, '2023-01-03', '2023-01-03 00:10:53'),
(114, 2, 2, 1, 'Leo Mojica ', 'n/a', 38, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '12000', 3, 1, '2023-01-03', '2023-01-03 00:11:51'),
(115, 2, 2, 1, 'Joey De Guzman', 'n/a', 39, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '10000', 4, 1, '2023-01-03', '2023-01-03 00:13:24'),
(116, 2, 2, 1, 'Ronnie Marasigan ', '09185392269', 40, 6, 0, 3, 3, 0, 0, 3, 0, 0, 1, 0, '5000', 6, 2, '2023-01-03', '2023-01-03 00:14:26'),
(117, 2, 2, 1, 'Narciso Chovas', 'n/a', 41, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '5000', 2, 1, '2023-01-03', '2023-01-03 00:15:25'),
(118, 2, 2, 1, 'Jaypee Zamora', 'n/a', 41, 5, 2, 1, 2, 0, 0, 2, 0, 0, 1, 0, '10000', 3, 2, '2023-01-03', '2023-01-03 00:20:14'),
(119, 2, 2, 1, 'Joe Chovas ', 'n/a', 42, 6, 2, 2, 2, 0, 0, 2, 0, 0, 1, 0, '5000', 4, 1, '2023-01-03', '2023-01-03 00:22:45'),
(120, 2, 2, 1, 'Abegaul Lubi', 'n/a', 43, 4, 0, 3, 1, 0, 0, 1, 2, 0, 1, 0, '18000', 4, 1, '2023-01-03', '2023-01-03 00:23:50'),
(121, 2, 2, 1, 'Lucita Anonuevo', 'n/a', 44, 4, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, '10000', 3, 2, '2023-01-03', '2023-01-03 00:24:45'),
(122, 2, 2, 1, 'Jovit Corpuz', 'n/a', 45, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '12000', 3, 2, '2023-01-03', '2023-01-03 00:25:26'),
(123, 2, 2, 1, 'Sonny Boy De Guzman ', '09481160790', 46, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '8000', 4, 1, '2023-01-03', '2023-01-03 00:26:22'),
(124, 2, 2, 1, 'Jocelyn Roja ', 'n/a', 47, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '5000', 4, 1, '2023-01-03', '2023-01-03 00:27:37'),
(125, 2, 2, 1, 'Alfonso De Mesa', '09105486795', 47, 3, 0, 1, 2, 0, 0, 1, 0, 0, 3, 0, '8000', 3, 2, '2023-01-03', '2023-01-03 00:28:37'),
(126, 2, 2, 1, 'Bernard Corcega', 'n/a', 47, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '10000', 2, 2, '2023-01-03', '2023-01-03 00:29:26'),
(127, 2, 2, 1, 'Juinita Megapi', 'n/a', 48, 4, 0, 2, 1, 1, 0, 1, 1, 0, 1, 0, '7500', 4, 1, '2023-01-03', '2023-01-03 00:30:57'),
(128, 2, 2, 1, 'Deomedes Cuntes', 'n/a', 49, 2, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, '1500', 0, 0, '2023-01-03', '2023-01-03 00:31:56'),
(129, 2, 2, 1, 'Edward Cuentas ', 'n/a', 49, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '3000', 3, 1, '2023-01-03', '2023-01-03 00:33:03'),
(130, 2, 2, 1, 'Winnie fredo Megaspi', 'n/a', 50, 5, 0, 0, 5, 0, 0, 0, 0, 2, 1, 0, '10000', 5, 2, '2023-01-03', '2023-01-03 00:34:33'),
(131, 2, 3, 1, 'Alex Gamo', 'n/a', 1, 5, 0, 0, 3, 2, 0, 0, 0, 1, 1, 0, '135000', 5, 4, '2023-01-03', '2023-01-03 00:36:30'),
(132, 2, 3, 1, 'Daryl Gamo ', 'n/a', 1, 5, 0, 3, 2, 0, 0, 3, 0, 0, 3, 0, '37000', 2, 1, '2023-01-03', '2023-01-03 00:37:35'),
(133, 2, 3, 1, 'Emerson Belda Jr.', '09065151509', 2, 6, 0, 3, 2, 1, 0, 0, 3, 0, 1, 0, '30000', 2, 1, '2023-01-03', '2023-01-03 00:41:28'),
(134, 2, 3, 1, 'Baltazar Avanzado ', '09164045411', 3, 5, 0, 1, 4, 0, 0, 0, 0, 2, 1, 0, '30000', 5, 2, '2023-01-03', '2023-01-03 00:42:27'),
(135, 2, 3, 1, 'Aira May Avanzado', 'n/a', 3, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '60000', 2, 2, '2023-01-03', '2023-01-03 00:43:47'),
(136, 2, 3, 1, 'Edgar Ricaforte ', '09154725340', 4, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '78000', 5, 3, '2023-01-03', '2023-01-03 00:44:59'),
(137, 2, 3, 1, 'Monica Evone Ricaforte ', '09496252931', 5, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 1, 0, '2023-01-03', '2023-01-03 00:47:31'),
(138, 2, 3, 1, 'Reynon Ricaforte ', '09103984887', 5, 6, 0, 2, 4, 0, 0, 0, 2, 0, 3, 0, '21000', 6, 2, '2023-01-03', '2023-01-03 00:48:44'),
(139, 2, 3, 1, 'Elsie Bacod', 'n/a', 6, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '4000', 1, 1, '2023-01-03', '2023-01-03 01:02:51'),
(140, 2, 3, 1, 'Marian Navato ', 'n/a', 6, 2, 0, 1, 1, 0, 0, 1, 0, 0, 3, 0, '2000', 2, 1, '2023-01-03', '2023-01-03 01:04:53'),
(141, 2, 3, 1, 'Arcely Alilliana ', 'n/a', 7, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 2, 0, '2023-01-03', '2023-01-03 01:06:13'),
(142, 2, 3, 1, 'Arfie Ricaforte ', 'n/a', 7, 5, 0, 2, 3, 0, 0, 2, 0, 0, 3, 0, '9000', 5, 3, '2023-01-03', '2023-01-03 01:09:41'),
(143, 2, 3, 1, 'Elsa Ricaforte', '09179503656', 8, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '10000', 1, 1, '2023-01-03', '2023-01-03 01:11:24'),
(144, 2, 3, 1, 'Liebeth Bregaza', 'n/a', 9, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-03', '2023-01-03 01:13:51'),
(145, 2, 3, 1, 'Mary Anne Angolida', 'n/a', 9, 4, 0, 3, 1, 1, 0, 1, 2, 0, 3, 0, '30000', 4, 1, '2023-01-03', '2023-01-03 01:19:36'),
(146, 2, 3, 1, 'Emelita Belda', 'n/a', 10, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-03', '2023-01-03 01:26:09'),
(147, 2, 3, 1, 'Niel Belda ', 'n/a', 10, 4, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, '35000', 4, 3, '2023-01-03', '2023-01-03 01:27:05'),
(148, 2, 3, 1, 'Jesse Katigbak ', 'n/a', 11, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '85000', 4, 3, '2023-01-03', '2023-01-03 01:28:33'),
(149, 2, 3, 1, 'Jhinell Katigbak ', '09267897644', 12, 6, 0, 3, 3, 0, 0, 1, 2, 1, 1, 0, '30000', 6, 1, '2023-01-03', '2023-01-03 01:29:57'),
(150, 2, 3, 1, 'Temoteo Corona', 'n/a', 13, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '48000', 2, 2, '2023-01-03', '2023-01-03 01:32:28'),
(151, 2, 3, 1, 'Jonathan Katigbak', 'n/a', 14, 5, 0, 3, 3, 0, 2, 1, 2, 0, 1, 0, '9000', 5, 2, '2023-01-03', '2023-01-03 01:34:05'),
(152, 2, 3, 1, 'Flor Kaatigbak ', 'n/a', 15, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 01:36:36'),
(153, 2, 3, 1, 'NA', 'n/a', 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, '2023-01-03', '2023-01-03 01:42:05'),
(154, 2, 3, 1, 'Adoring Villavecencio', 'n/a', 17, 4, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, '10000', 2, 2, '2023-01-03', '2023-01-03 01:44:49'),
(155, 2, 3, 1, 'Remulo Villavecencio ', '09087092256', 17, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '15000', 2, 1, '2023-01-03', '2023-01-03 01:46:11'),
(156, 2, 3, 1, 'Elena Chaves ', '09494123343', 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, '10000', 1, 1, '2023-01-03', '2023-01-03 01:50:13'),
(157, 2, 3, 1, 'Bhea Anne Co ', 'n/a', 18, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '10000', 3, 1, '2023-01-03', '2023-01-03 01:51:37'),
(158, 2, 3, 1, 'Roberto Aningalan ', 'n/a', 19, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '8000', 3, 2, '2023-01-03', '2023-01-03 01:53:03'),
(159, 2, 3, 1, 'Ronilon Aningalan ', 'n/a', 19, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '24000', 2, 2, '2023-01-03', '2023-01-03 01:54:37'),
(160, 2, 3, 1, 'Myrh Titular ', 'n/a', 19, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, '0', 0, 0, '2023-01-03', '2023-01-03 02:05:05'),
(161, 2, 3, 1, 'Ronaldo Angco ', 'n/a', 20, 5, 0, 1, 4, 0, 0, 0, 1, 2, 1, 0, '40000', 5, 1, '2023-01-03', '2023-01-03 02:06:14'),
(162, 2, 3, 1, 'Renato Bundalian', 'n/a', 21, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '1500', 2, 1, '2023-01-03', '2023-01-03 02:07:11'),
(163, 2, 3, 1, 'Redel Bundalian ', '09184784415', 21, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '61000', 3, 3, '2023-01-03', '2023-01-03 02:08:27'),
(164, 2, 3, 1, 'Necitas Aningalan ', 'n/a', 22, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-03', '2023-01-03 02:26:11'),
(165, 2, 3, 1, 'Mico Aningalan ', 'n/a', 22, 4, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, '150000', 4, 3, '2023-01-03', '2023-01-03 02:27:19'),
(166, 2, 3, 1, 'Cosme Castillo ', '09477073784', 23, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '35000', 1, 1, '2023-01-03', '2023-01-03 02:29:11'),
(167, 2, 3, 1, 'Rhayan Castillo', 'n/a', 23, 5, 2, 1, 2, 0, 0, 1, 0, 0, 3, 0, '24000', 3, 2, '2023-01-03', '2023-01-03 02:30:19'),
(168, 2, 3, 1, 'Jay Jabilles ', 'n/a', 24, 6, 2, 2, 2, 0, 0, 1, 2, 0, 1, 0, '38000', 5, 2, '2023-01-03', '2023-01-03 02:31:23'),
(169, 2, 3, 1, 'Janell Jabiles ', 'n/a', 24, 5, 3, 0, 2, 0, 1, 1, 0, 0, 3, 0, '10000', 2, 2, '2023-01-03', '2023-01-03 02:32:37'),
(170, 2, 3, 1, 'Luzviminda Bundalian ', '09508396143', 25, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '4700', 4, 4, '2023-01-03', '2023-01-03 02:34:49'),
(171, 2, 3, 1, 'Celia Bundalian ', 'n/a', 25, 5, 0, 4, 1, 0, 0, 4, 0, 0, 3, 0, '3200', 5, 1, '2023-01-03', '2023-01-03 20:27:26'),
(172, 2, 3, 1, 'Crizel Galvez', 'n/a', 25, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '3200', 2, 1, '2023-01-03', '2023-01-03 20:28:59'),
(173, 2, 3, 1, 'Martin Binasoy', '09157915501', 26, 8, 0, 2, 5, 1, 0, 0, 2, 0, 1, 0, '32000', 7, 4, '2023-01-03', '2023-01-03 20:30:11'),
(174, 2, 3, 1, 'Mark John Cris Binasoy', 'n/a', 26, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '28000', 2, 2, '2023-01-03', '2023-01-03 20:35:47'),
(175, 2, 3, 1, 'Rostan Jhamil Buena', '0907914357', 27, 7, 1, 2, 4, 0, 1, 1, 1, 0, 1, 0, '16000', 6, 3, '2023-01-03', '2023-01-03 20:38:44'),
(176, 2, 3, 1, 'Rhommuel Buena', '09107715188', 28, 4, 1, 1, 2, 0, 0, 0, 1, 0, 1, 0, '20000', 3, 2, '2023-01-03', '2023-01-03 20:39:47'),
(177, 2, 3, 1, 'Gregoryo Chovas ', 'n/a', 29, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0, '30000', 4, 2, '2023-01-03', '2023-01-03 20:40:50'),
(178, 2, 3, 1, 'Karen Matibag', '09488651492', 29, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '30000', 2, 1, '2023-01-03', '2023-01-03 20:42:40'),
(179, 2, 3, 1, 'Joward Chovas', 'n/a', 29, 4, 2, 0, 2, 0, 0, 0, 0, 0, 3, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 20:43:35'),
(180, 2, 3, 1, 'Belen Cura', '09305300618', 30, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '0', 1, 0, '2023-01-03', '2023-01-03 20:45:09'),
(181, 2, 3, 1, 'Emerson Cura ', 'n/a', 30, 4, 0, 1, 3, 0, 0, 1, 0, 0, 3, 0, '25000', 4, 2, '2023-01-03', '2023-01-03 20:46:22'),
(182, 2, 3, 1, 'Joel Frago', 'n/a', 31, 5, 0, 1, 4, 0, 0, 0, 1, 0, 1, 0, '20000', 5, 3, '2023-01-03', '2023-01-03 20:47:40'),
(183, 2, 3, 1, 'Hermina Katigbak', 'n/a', 32, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-03', '2023-01-03 20:48:45'),
(184, 2, 3, 1, 'Onofre Cuentas', 'n/a', 33, 4, 0, 1, 2, 1, 0, 0, 2, 0, 1, 0, '3000', 3, 2, '2023-01-03', '2023-01-03 20:50:19'),
(185, 2, 3, 1, 'Gloria Chovas', 'n/a', 34, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-03', '2023-01-03 20:51:11'),
(186, 2, 3, 1, 'Luchie Chovas ', 'n/a', 35, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '25000', 4, 4, '2023-01-03', '2023-01-03 20:52:00'),
(187, 2, 3, 1, 'Jenny Chovas', 'n/a', 35, 4, 0, 2, 2, 0, 0, 1, 1, 0, 3, 0, '7000', 4, 1, '2023-01-03', '2023-01-03 20:52:51'),
(188, 2, 3, 1, 'Edwin Chovas ', 'n/a', 36, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-03', '2023-01-03 20:53:43'),
(189, 2, 3, 1, 'Arlan Bundalian ', 'n/a', 37, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '15000', 2, 2, '2023-01-03', '2023-01-03 20:54:34'),
(190, 2, 4, 1, 'Norlita Alvarez', 'n/a', 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '2500', 1, 1, '2023-01-03', '2023-01-03 20:56:27'),
(191, 2, 4, 1, 'Primley Lara', 'n/a', 1, 5, 0, 3, 2, 0, 0, 0, 3, 0, 3, 0, '6000', 2, 1, '2023-01-03', '2023-01-03 20:57:15'),
(192, 2, 4, 1, 'Emerson Belda ', 'n/a', 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-03', '2023-01-03 20:57:56'),
(193, 2, 4, 1, 'Ronald Belda ', 'n/a', 3, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '5000', 2, 1, '2023-01-03', '2023-01-03 20:58:37'),
(194, 2, 4, 1, 'Donilo Belda', 'n/a', 4, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-03', '2023-01-03 20:59:33'),
(195, 2, 4, 1, 'Gregorio Felismino ', 'n/a', 4, 3, 0, 1, 1, 1, 0, 0, 1, 0, 3, 0, '11000', 1, 1, '2023-01-03', '2023-01-03 21:00:39'),
(196, 2, 4, 1, 'Emily Belda Arevalo', 'n/a', 5, 2, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, '10500', 1, 1, '2023-01-03', '2023-01-03 21:01:57'),
(197, 2, 4, 1, 'Felisisima Sutarez ', 'n/a', 6, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-03', '2023-01-03 21:03:09'),
(198, 2, 4, 1, 'Yessa Sutarez Regalado ', 'n/a', 6, 3, 0, 0, 3, 0, 0, 0, 0, 1, 3, 0, '5750', 3, 1, '2023-01-03', '2023-01-03 21:04:06'),
(199, 2, 4, 1, 'Rogelio Bundalian ', 'n/a', 7, 5, 2, 0, 2, 1, 0, 2, 0, 0, 1, 0, '2500', 2, 1, '2023-01-03', '2023-01-03 21:05:07'),
(200, 2, 4, 1, 'Jessie Lopez Bundalian ', 'n/a', 7, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '40000', 2, 1, '2023-01-03', '2023-01-03 21:06:06'),
(201, 2, 4, 1, 'Sandy Lopez Bunadalian ', 'n/a', 7, 5, 0, 3, 2, 0, 0, 1, 2, 0, 3, 0, '15000', 2, 1, '2023-01-03', '2023-01-03 21:07:24'),
(202, 2, 4, 1, 'Rogelio Bundalian Jr.', 'n/a', 7, 3, 2, 0, 1, 0, 0, 2, 0, 0, 3, 0, '3000', 1, 1, '2023-01-03', '2023-01-03 21:08:12'),
(203, 2, 4, 1, 'Janine Adriano', 'n/a', 8, 3, 1, 0, 2, 0, 0, 1, 0, 0, 1, 0, '4500', 1, 1, '2023-01-03', '2023-01-03 21:09:32'),
(204, 2, 4, 1, 'Johan Avanzado', 'n/a', 8, 4, 1, 0, 2, 1, 0, 1, 0, 0, 3, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:10:29'),
(205, 2, 4, 1, 'Oscar Bundalian ', 'n/a', 9, 6, 0, 0, 4, 2, 0, 0, 0, 2, 1, 0, '2500', 4, 1, '2023-01-03', '2023-01-03 21:11:18'),
(206, 2, 4, 1, 'Arjay Ricaforte Bundalian ', 'n/a', 9, 4, 1, 1, 2, 0, 0, 1, 1, 0, 3, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:12:20'),
(207, 2, 4, 1, 'Domingo Gesmundo ', 'n/a', 10, 9, 0, 1, 6, 2, 1, 1, 0, 0, 1, 0, '14000', 6, 1, '2023-01-03', '2023-01-03 21:14:26'),
(208, 2, 4, 1, 'Enrico Castillo Molidor ', 'n/a', 11, 5, 0, 3, 1, 0, 0, 1, 2, 0, 1, 0, '11500', 2, 1, '2023-01-03', '2023-01-03 21:15:19'),
(209, 2, 4, 1, 'Enrique Castillo Molidor', 'n/a', 12, 5, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:16:33'),
(210, 2, 4, 1, 'Ruel Hernandez', 'n/a', 13, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '20000', 3, 1, '2023-01-03', '2023-01-03 21:17:31'),
(211, 2, 4, 1, 'Herbie Banayo Hernandez ', 'n/a', 13, 3, 0, 1, 2, 0, 0, 1, 1, 0, 3, 0, '40000', 2, 1, '2023-01-03', '2023-01-03 21:19:01'),
(212, 2, 4, 1, 'Minda Cura Dalit', 'n/a', 14, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-03', '2023-01-03 21:21:01'),
(213, 2, 4, 1, 'Mark Lozada ', 'n/a', 14, 4, 0, 2, 2, 0, 0, 0, 2, 0, 3, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:21:49'),
(214, 2, 4, 1, 'Emmanual Cura Dalit ', 'n/a', 15, 7, 0, 2, 3, 2, 0, 0, 1, 1, 1, 0, '14000', 3, 1, '2023-01-03', '2023-01-03 21:25:19'),
(215, 2, 4, 1, 'Julia Molidor ', 'n/a', 16, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-03', '2023-01-03 21:26:10'),
(216, 2, 4, 1, 'Celso Castillo Molidor ', 'n/a', 17, 5, 0, 1, 3, 1, 0, 0, 1, 2, 1, 0, '13000', 3, 1, '2023-01-03', '2023-01-03 21:27:08'),
(217, 2, 4, 1, 'Jovito Bueno ', 'n/a', 18, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:27:51'),
(218, 2, 4, 1, 'Rolando Belda ', 'n/a', 19, 4, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, '8000', 2, 1, '2023-01-03', '2023-01-03 21:28:45'),
(219, 2, 4, 1, 'Nolito Lopez Belda ', 'n/a', 20, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '10000', 1, 1, '2023-01-03', '2023-01-03 21:29:36'),
(220, 2, 4, 1, 'Jude Lopez', 'n/a', 20, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '4000', 2, 1, '2023-01-03', '2023-01-03 21:30:13'),
(221, 2, 4, 1, 'Samboy Lopez', 'n/a', 20, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '30000', 2, 1, '2023-01-03', '2023-01-03 21:31:04'),
(222, 2, 4, 1, 'Bernie Lopez', 'n/a', 21, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '8000', 2, 1, '2023-01-03', '2023-01-03 21:31:44'),
(223, 2, 4, 1, 'Alfredo Lopez', 'n/a', 22, 6, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, '12000', 6, 3, '2023-01-03', '2023-01-03 21:32:27'),
(224, 2, 4, 1, 'Joven Lopez', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '7500', 3, 1, '2023-01-03', '2023-01-03 21:33:13'),
(225, 2, 4, 1, 'Jomar Lopez', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '12000', 3, 1, '2023-01-03', '2023-01-03 21:34:07'),
(226, 2, 4, 1, 'Charles Responso', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '8000', 3, 1, '2023-01-03', '2023-01-03 21:34:57'),
(227, 2, 4, 1, 'Arturo Manago', 'n/a', 24, 4, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, '4000', 3, 1, '2023-01-03', '2023-01-03 21:35:41'),
(228, 2, 4, 1, 'Reynado Exconde ', 'n/a', 25, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '2000', 2, 1, '2023-01-03', '2023-01-03 21:36:41'),
(229, 2, 4, 1, 'Cristina Exconde', 'n/a', 25, 2, 0, 0, 2, 0, 0, 2, 0, 0, 3, 0, '40000', 2, 1, '2023-01-03', '2023-01-03 21:37:48'),
(230, 2, 4, 1, 'Marlon Buena ', 'n/a', 26, 5, 1, 1, 3, 0, 0, 0, 1, 0, 1, 0, '7500', 3, 1, '2023-01-03', '2023-01-03 21:38:53'),
(231, 2, 4, 1, 'Norlito Valido ', 'n/a', 26, 4, 0, 2, 2, 0, 0, 0, 1, 0, 3, 0, '12000', 2, 2, '2023-01-03', '2023-01-03 21:40:06'),
(232, 2, 4, 1, 'Lester Valido', 'n/a', 27, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-03', '2023-01-03 21:41:10'),
(233, 2, 4, 1, 'Argel Lopez', 'n/a', 28, 4, 2, 0, 2, 0, 0, 1, 0, 0, 1, 0, '11000', 2, 1, '2023-01-03', '2023-01-03 21:42:01'),
(234, 2, 4, 1, 'Charlie Roxas ', 'n/a', 29, 7, 0, 1, 5, 1, 0, 1, 0, 0, 1, 0, '25000', 5, 2, '2023-01-03', '2023-01-03 21:42:55'),
(235, 2, 4, 1, 'Jeffrey Mendiola', 'n/a', 29, 3, 0, 1, 2, 0, 0, 1, 0, 0, 3, 0, '40000', 2, 2, '2023-01-03', '2023-01-03 21:45:22'),
(236, 2, 4, 1, 'Leopoldo Lopez', 'n/a', 29, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, '7500', 0, 0, '2023-01-03', '2023-01-03 21:46:55'),
(237, 2, 4, 1, 'Antono Anlacan ', 'n/a', 30, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0, '11000', 3, 1, '2023-01-03', '2023-01-03 21:48:08'),
(238, 2, 4, 1, 'Antenor Anlacan ', 'n/a', 31, 6, 1, 1, 4, 0, 0, 1, 0, 1, 1, 0, '11000', 4, 1, '2023-01-03', '2023-01-03 21:49:10'),
(239, 2, 4, 1, 'Wilfredo Avanzando', 'n/a', 32, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '5000', 2, 1, '2023-01-03', '2023-01-03 21:50:12'),
(240, 2, 4, 1, 'Rufino Avanzado ', 'n/a', 33, 4, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, '40000', 2, 1, '2023-01-03', '2023-01-03 21:51:12'),
(241, 2, 4, 1, 'Gaudencia Gamo ', 'n/a', 34, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 21:52:28'),
(242, 2, 4, 1, 'Eduardo Corcega Gamo ', 'n/a', 34, 3, 0, 0, 2, 1, 0, 0, 1, 0, 3, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:53:38'),
(243, 2, 4, 1, 'Estela Colimbino', 'n/a', 35, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 21:54:47'),
(244, 2, 4, 1, 'Rommel Colimbino', 'n/a', 35, 5, 2, 1, 2, 0, 0, 2, 0, 0, 3, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 21:55:44'),
(245, 2, 4, 1, 'Alex Arcedera Gamo ', 'n/a', 36, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '0', 3, 0, '2023-01-03', '2023-01-03 21:57:19'),
(246, 2, 4, 1, 'Jose Arcedera Roa Jr.', 'n/a', 37, 6, 0, 2, 4, 0, 0, 0, 2, 1, 1, 0, '14500', 4, 2, '2023-01-03', '2023-01-03 21:59:17'),
(247, 2, 4, 1, 'Hazel Ann Roa Sunga', 'n/a', 37, 3, 1, 1, 1, 0, 0, 0, 1, 0, 3, 0, '20000', 1, 1, '2023-01-03', '2023-01-03 22:00:36'),
(248, 2, 4, 1, 'Nora Chumacera', 'n/a', 38, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-03', '2023-01-03 22:02:01'),
(249, 2, 4, 1, 'Renante Chumacera ', 'n/a', 38, 6, 0, 3, 3, 0, 0, 0, 0, 1, 3, 0, '12750', 3, 1, '2023-01-03', '2023-01-03 22:03:04'),
(250, 2, 4, 1, 'Norman Chumacera', 'n/a', 38, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '13000', 3, 1, '2023-01-03', '2023-01-03 22:04:11'),
(251, 2, 4, 1, 'Nona Chumacera Calaminos ', 'n/a', 39, 4, 0, 2, 5, 0, 0, 0, 1, 2, 1, 0, '13000', 5, 2, '2023-01-03', '2023-01-03 22:05:08'),
(252, 2, 4, 1, 'Kevin Cas', 'n/a', 39, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '18000', 3, 1, '2023-01-03', '2023-01-03 23:29:37'),
(253, 2, 4, 1, 'Renz Cyrus Calaminos ', 'n/a', 39, 3, 0, 0, 3, 0, 0, 1, 0, 0, 3, 0, '13000', 3, 1, '2023-01-03', '2023-01-03 23:30:29'),
(254, 2, 4, 1, 'Hannah Mae Calaminos', 'n/a', 39, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '4500', 2, 1, '2023-01-03', '2023-01-03 23:31:14'),
(255, 2, 4, 1, 'Nelia Chumacera ', 'n/a', 40, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 23:32:05'),
(256, 2, 4, 1, 'Edison Chumacera ', 'n/a', 41, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '13000', 2, 1, '2023-01-03', '2023-01-03 23:32:51'),
(257, 2, 4, 1, 'John Harvey Castillo Chumacera ', 'n/a', 41, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '13500', 3, 1, '2023-01-03', '2023-01-03 23:33:41'),
(258, 2, 4, 1, 'Ariel Marquez ', 'n/a', 42, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '67500', 4, 2, '2023-01-03', '2023-01-03 23:34:25'),
(259, 2, 4, 1, 'Hernando Penaliza ', 'n/a', 42, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '13000', 2, 1, '2023-01-03', '2023-01-03 23:35:20'),
(260, 2, 4, 1, 'Ronaldo Noza Mabiling ', 'n/a', 43, 6, 1, 2, 3, 0, 0, 2, 1, 1, 1, 0, '40000', 3, 1, '2023-01-03', '2023-01-03 23:36:06'),
(261, 2, 4, 1, 'Noemi Noza Zaldo ', 'n/a', 44, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 23:36:49'),
(262, 2, 4, 1, 'Christian Glen Zaldo ', 'n/a', 44, 4, 1, 1, 2, 0, 0, 0, 1, 0, 3, 0, '40000', 2, 1, '2023-01-03', '2023-01-03 23:37:36'),
(263, 2, 4, 1, 'Dennis Bacsa', 'n/a', 45, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '60000', 2, 2, '2023-01-03', '2023-01-03 23:38:24'),
(264, 2, 4, 1, 'Christian Laurente Reyes ', 'n/a', 46, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '14500', 2, 1, '2023-01-03', '2023-01-03 23:39:40'),
(265, 2, 4, 1, 'Joselito Noza ', 'n/a', 47, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '52000', 1, 1, '2023-01-03', '2023-01-03 23:40:28'),
(266, 2, 4, 1, 'Lino Bundalian ', 'n/a', 48, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '12000', 2, 1, '2023-01-03', '2023-01-03 23:41:11'),
(267, 2, 4, 1, 'Christian Avanzado', 'n/a', 48, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '15000', 2, 1, '2023-01-03', '2023-01-03 23:42:07'),
(268, 2, 4, 1, 'Loreto Marquez', 'n/a', 49, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-03', '2023-01-03 23:42:45'),
(269, 2, 4, 1, 'Danilo Chumacera ', 'n/a', 50, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 23:43:20'),
(270, 2, 5, 1, 'Esperanza Noza', 'n/a', 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '9000', 0, 0, '2023-01-03', '2023-01-03 23:45:18'),
(271, 2, 5, 1, 'Belen Noza ', 'n/a', 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '9000', 2, 1, '2023-01-03', '2023-01-03 23:46:00'),
(272, 2, 5, 1, 'Benito Enseo ', 'n/a', 2, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '11000', 2, 1, '2023-01-03', '2023-01-03 23:46:54'),
(273, 2, 5, 1, 'Noemi Capristrano Enseo ', 'n/a', 3, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '45000', 2, 1, '2023-01-03', '2023-01-03 23:47:37'),
(274, 2, 5, 1, 'Veronica Brosas Herrera ', 'n/a', 4, 6, 0, 1, 4, 1, 0, 1, 0, 0, 1, 0, '40000', 4, 2, '2023-01-03', '2023-01-03 23:48:23'),
(275, 2, 5, 1, 'Jenny Enseo Terenal', 'n/a', 5, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '30000', 2, 1, '2023-01-03', '2023-01-03 23:49:12'),
(276, 2, 5, 1, 'Ermelyn Chumacera ', 'n/a', 6, 2, 0, 0, 2, 0, 0, 1, 0, 0, 1, 0, '5000', 2, 1, '2023-01-03', '2023-01-03 23:50:02'),
(277, 2, 5, 1, 'Ricky Miguel  Castillo ', 'n/a', 6, 4, 1, 1, 2, 0, 0, 0, 0, 0, 3, 0, '18000', 2, 1, '2023-01-03', '2023-01-03 23:50:54'),
(278, 2, 5, 1, 'Evelyn Pamposo ', 'n/a', 7, 4, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-03', '2023-01-03 23:51:42'),
(279, 2, 5, 1, 'Helen Bundalian ', 'n/a', 8, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '12000', 1, 1, '2023-01-03', '2023-01-03 23:52:23'),
(280, 2, 5, 1, 'Julieta Biglete ', 'n/a', 9, 4, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-03', '2023-01-03 23:53:22'),
(281, 2, 5, 1, 'Helen Villanueva ', 'n/a', 9, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, '3500', 1, 1, '2023-01-03', '2023-01-03 23:54:01'),
(282, 2, 5, 1, 'Saverign Avanzado ', 'n/a', 9, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '5000', 0, 0, '2023-01-03', '2023-01-03 23:54:59'),
(283, 2, 5, 1, 'Rolando Corcega ', 'n/a', 10, 4, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, '7500', 2, 1, '2023-01-03', '2023-01-03 23:55:37'),
(284, 2, 5, 1, 'Gloria Corcega ', 'n/a', 11, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '10000', 1, 0, '2023-01-03', '2023-01-03 23:56:39'),
(285, 2, 5, 1, 'Luviminda Bugtong ', 'n/a', 12, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '5000', 2, 1, '2023-01-03', '2023-01-03 23:57:25'),
(286, 2, 5, 1, 'Juanito Chovas Exconde ', 'n/a', 13, 4, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, '7500', 2, 0, '2023-01-03', '2023-01-03 23:58:15'),
(287, 2, 5, 1, 'Daisy Bacod Ramos', 'n/a', 14, 3, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, '40000', 1, 1, '2023-01-03', '2023-01-03 23:59:12'),
(288, 2, 5, 1, 'Justine Bacod', 'n/a', 15, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '13500', 2, 1, '2023-01-04', '2023-01-04 00:00:02'),
(289, 2, 5, 1, 'Mel Arvin Ricaforte Bacod', 'n/a', 16, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '35750', 3, 1, '2023-01-04', '2023-01-04 00:01:14'),
(290, 2, 5, 1, 'Fe Bundalian ', 'n/a', 17, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '7500', 1, 1, '2023-01-04', '2023-01-04 00:02:07'),
(291, 2, 5, 1, 'Ednalyn Alip ', 'n/a', 18, 4, 0, 0, 3, 1, 0, 1, 0, 0, 1, 0, '3500', 3, 1, '2023-01-04', '2023-01-04 00:02:49'),
(292, 2, 5, 1, 'Amor Chozas', 'n/a', 19, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '15000', 0, 0, '2023-01-04', '2023-01-04 00:03:47'),
(293, 2, 5, 1, 'Emeciana Chumacera', 'n/a', 20, 4, 0, 0, 3, 1, 0, 0, 1, 0, 1, 0, '7500', 3, 1, '2023-01-04', '2023-01-04 00:04:36'),
(294, 2, 5, 1, 'Emilia Fule Chumacera ', 'n/a', 21, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, '7500', 0, 0, '2023-01-04', '2023-01-04 00:05:52'),
(295, 2, 5, 1, 'Willy Magapi', 'w', 22, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '17500', 3, 3, '2023-01-04', '2023-01-04 00:08:24'),
(296, 2, 5, 1, 'Enrico Austria ', 'n/a', 23, 6, 0, 2, 4, 0, 0, 0, 3, 1, 1, 0, '35000', 4, 2, '2023-01-04', '2023-01-04 00:09:15'),
(297, 2, 5, 1, 'Manolito Magapi', 'n/a', 24, 3, 1, 2, 0, 0, 0, 1, 0, 0, 1, 0, '9800', 2, 1, '2023-01-04', '2023-01-04 00:10:04'),
(298, 2, 5, 1, 'Romulo Megapi', 'n/a', 25, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-04', '2023-01-04 00:10:56'),
(299, 2, 5, 1, 'Dennis Ressureccion ', 'n/a', 26, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '10000', 2, 1, '2023-01-04', '2023-01-04 00:15:12'),
(300, 2, 5, 1, 'Oredenita Anlacan ', 'n/a', 27, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-04', '2023-01-04 00:15:59'),
(301, 2, 5, 1, 'Erwin Pelagio ', 'n/a', 28, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 1, 0, '2023-01-04', '2023-01-04 00:17:07'),
(302, 2, 5, 1, 'Joselito Avanzado', 'n/a', 29, 5, 1, 2, 2, 0, 0, 1, 1, 0, 1, 0, '25000', 0, 1, '2023-01-04', '2023-01-04 00:21:32'),
(303, 2, 5, 1, 'Jojit Caparas Avanzado ', 'n/a', 30, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '14000', 3, 1, '2023-01-04', '2023-01-04 00:22:29'),
(304, 2, 5, 1, 'Justine Belda Avanzado ', 'n/a', 30, 4, 2, 0, 2, 0, 0, 1, 0, 0, 3, 0, '14000', 2, 1, '2023-01-04', '2023-01-04 00:23:19'),
(305, 2, 5, 1, 'Juanita Caparas', 'n/a', 31, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5500', 0, 0, '2023-01-04', '2023-01-04 00:24:01'),
(306, 2, 5, 1, 'Ernie Caparas Avanzado ', 'n/a', 31, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '15000', 2, 1, '2023-01-04', '2023-01-04 00:25:04'),
(307, 2, 5, 1, 'Renato Cuevas ', 'n/a', 32, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-04', '2023-01-04 00:25:43'),
(308, 2, 5, 1, 'Rolen Chumacera ', 'n/a', 32, 5, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, '12500', 0, 0, '2023-01-04', '2023-01-04 00:27:14'),
(309, 2, 5, 1, 'Loreta Chumacera ', 'n/a', 33, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '5000', 2, 2, '2023-01-04', '2023-01-04 00:28:03'),
(310, 2, 5, 1, 'Imelda Chumacera Sarungay ', 'n/a', 33, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '40000', 3, 2, '2023-01-04', '2023-01-04 00:28:51'),
(311, 2, 5, 1, 'Bernie Arcedera ', 'n/a', 34, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '12500', 2, 1, '2023-01-04', '2023-01-04 00:29:35'),
(312, 2, 5, 1, 'Leonardo Sese ', 'n/a', 35, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-04', '2023-01-04 00:30:23'),
(313, 2, 5, 1, 'Cesar Garcia Reyes ', 'n/a', 36, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '25000', 2, 1, '2023-01-04', '2023-01-04 00:31:09'),
(314, 2, 5, 1, 'Carmen Liwanag Reyes', 'n/a', 37, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-04', '2023-01-04 00:31:54'),
(315, 2, 5, 1, 'Aldrin Chumacera ', 'n/a', 38, 4, 0, 1, 3, 0, 0, 1, 0, 1, 1, 0, '45000', 3, 2, '2023-01-04', '2023-01-04 00:32:37'),
(316, 2, 5, 1, 'Byron Alacan Tepia ', 'n/a', 39, 8, 1, 2, 5, 0, 0, 0, 2, 2, 1, 0, '13500', 5, 1, '2023-01-04', '2023-01-04 00:33:24'),
(317, 2, 5, 1, 'Raymond Colimbino (magulo)', 'n/a', 40, 8, 0, 3, 3, 2, 0, 2, 3, 0, 1, 0, '38000', 3, 2, '2023-01-04', '2023-01-04 00:34:19'),
(318, 2, 5, 1, 'Edgard Sutarez ', 'n/a', 41, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '12500', 2, 1, '2023-01-04', '2023-01-04 00:37:47'),
(319, 2, 5, 1, 'Marlon Contillo ', 'n/a', 42, 6, 2, 0, 4, 0, 0, 0, 0, 2, 1, 0, '13500', 2, 1, '2023-01-04', '2023-01-04 00:38:42'),
(320, 2, 5, 1, 'Lina Carolina', 'n/a', 43, 9, 0, 4, 5, 0, 0, 2, 2, 3, 1, 0, '35000', 5, 3, '2023-01-04', '2023-01-04 00:39:45'),
(321, 2, 5, 1, 'Marfie Contillo (magulo)', 'n/a', 44, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '12500', 2, 0, '2023-01-04', '2023-01-04 00:40:58'),
(322, 2, 5, 1, 'Marcelino Contillo ', 'n/a', 45, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '11000', 2, 1, '2023-01-04', '2023-01-04 00:41:39'),
(323, 2, 5, 1, 'William Franco Sr', 'n/a', 46, 6, 0, 2, 2, 2, 0, 0, 2, 0, 1, 0, '18000', 2, 1, '2023-01-04', '2023-01-04 00:42:29'),
(324, 2, 5, 1, 'Felix ', 'n/a', 47, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-04', '2023-01-04 00:43:52'),
(325, 2, 5, 1, 'Peter Bumagat ', 'n/a', 48, 6, 0, 2, 3, 1, 0, 0, 2, 1, 1, 0, '12000', 3, 1, '2023-01-04', '2023-01-04 00:44:37'),
(326, 2, 5, 1, 'Raul Cuevas ', 'n/a', 49, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '13000', 2, 2, '2023-01-04', '2023-01-04 00:45:17'),
(327, 2, 5, 1, 'John Carlos ', 'n/a', 50, 5, 0, 3, 2, 0, 0, 1, 2, 0, 1, 0, '15000', 2, 1, '2023-01-04', '2023-01-04 00:45:57'),
(328, 2, 6, 1, 'Cecilia Supnet ', 'n/a', 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '7500', 1, 1, '2023-01-04', '2023-01-04 00:47:51'),
(329, 2, 6, 1, 'Gerardo Mabiling ', 'n/a', 2, 8, 1, 3, 5, 0, 0, 1, 2, 2, 1, 0, '12000', 5, 1, '2023-01-04', '2023-01-04 00:49:02'),
(330, 2, 6, 1, 'Romeo Reyes ', 'n/a', 3, 4, 0, 1, 3, 0, 0, 0, 1, 1, 1, 0, '5000', 3, 1, '2023-01-04', '2023-01-04 00:50:34'),
(331, 2, 6, 1, 'Carlito Reyes ', 'n/a', 4, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-04', '2023-01-04 00:54:37'),
(332, 2, 6, 1, 'Leony Reyes', 'n/a', 4, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '25000', 2, 1, '2023-01-04', '2023-01-04 00:55:30'),
(333, 2, 6, 1, 'Rommel Vinas', 'n/a', 5, 5, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '18000', 2, 2, '2023-01-04', '2023-01-04 00:57:13'),
(334, 2, 6, 1, 'Lolita Chozas', 'n/a', 6, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '28000', 2, 1, '2023-01-04', '2023-01-04 00:58:09'),
(335, 2, 6, 1, 'Gloria Arevalo ', 'n/a', 7, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '18000', 2, 2, '2023-01-04', '2023-01-04 00:59:24'),
(336, 2, 6, 1, 'Monet Arevalo ', 'n/a', 7, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '4500', 2, 1, '2023-01-04', '2023-01-04 01:01:11'),
(337, 2, 6, 1, 'Irish Supnet ', 'n/a', 8, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '47000', 3, 1, '2023-01-04', '2023-01-04 01:04:13'),
(338, 2, 6, 1, 'Dionisio Fernandez', 'n/a', 9, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '25000', 3, 1, '2023-01-04', '2023-01-04 01:05:10'),
(339, 2, 6, 1, 'Elsa Bacod ', 'n/a', 10, 3, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, '5000', 2, 1, '2023-01-04', '2023-01-04 01:05:57'),
(340, 2, 6, 1, 'Zeus Austria ', 'n/a', 11, 5, 0, 1, 4, 0, 0, 0, 1, 1, 1, 0, '13000', 4, 1, '2023-01-04', '2023-01-04 01:06:43'),
(341, 2, 6, 1, 'Edelmundo Mendoza', 'n/a', 12, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-04', '2023-01-04 01:07:31'),
(342, 2, 6, 1, 'Teodulfo Palencia', 'n/a', 13, 5, 0, 1, 3, 1, 0, 0, 1, 1, 1, 0, '5000', 3, 1, '2023-01-04', '2023-01-04 01:08:27'),
(343, 2, 6, 1, 'Arman Anlacan ', 'n/a', 14, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '13000', 2, 1, '2023-01-04', '2023-01-04 01:09:24'),
(344, 2, 6, 1, 'Gabriel Borres', 'n/a', 15, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '12000', 2, 1, '2023-01-04', '2023-01-04 01:11:10'),
(345, 2, 6, 1, 'Christopher Borres', 'n/a', 15, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '22000', 2, 1, '2023-01-04', '2023-01-04 01:11:58'),
(346, 2, 6, 1, 'Luningning Alcantara', 'n/a', 16, 6, 1, 0, 3, 2, 0, 0, 0, 1, 1, 0, '11000', 3, 1, '2023-01-04', '2023-01-04 01:15:17'),
(347, 2, 6, 1, 'Jhonn Macuha', 'n/a', 17, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '9000', 2, 1, '2023-01-04', '2023-01-04 01:16:25'),
(348, 2, 6, 1, 'Jovilion Capunpon ', 'n/a', 18, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '9500', 3, 1, '2023-01-04', '2023-01-04 01:17:14'),
(349, 2, 6, 1, 'Carolina Caray ', 'n/a', 19, 6, 2, 1, 3, 0, 0, 0, 1, 0, 1, 0, '13000', 3, 1, '2023-01-04', '2023-01-04 01:18:37'),
(350, 2, 6, 1, 'Anabel Mirambel ', 'n/a', 20, 2, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, '25000', 2, 2, '2023-01-04', '2023-01-04 01:19:34'),
(351, 2, 6, 1, 'Regina Supnet ', 'n/a', 21, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '42000', 2, 2, '2023-01-04', '2023-01-04 01:20:21'),
(352, 2, 6, 1, 'Rommel Reyes ', 'n/a', 22, 5, 0, 2, 2, 1, 0, 0, 0, 0, 1, 0, '12000', 2, 1, '2023-01-04', '2023-01-04 01:21:04'),
(353, 2, 6, 1, 'Dean Webster Benitez', 'n/a', 23, 3, 1, 0, 2, 0, 0, 0, 2, 1, 1, 0, '40000', 2, 2, '2023-01-04', '2023-01-04 01:22:45'),
(354, 2, 6, 1, 'Ronaldo Arago ', 'n/a', 24, 6, 1, 2, 3, 0, 0, 1, 1, 1, 1, 0, '5000', 3, 1, '2023-01-04', '2023-01-04 01:24:13'),
(355, 2, 6, 1, 'Ian Botona ', 'n/a', 25, 5, 1, 1, 2, 1, 0, 0, 1, 0, 1, 0, '12000', 2, 1, '2023-01-04', '2023-01-04 01:24:59'),
(356, 2, 6, 1, 'Marvin Evangelista', 'n/a', 26, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '6000', 1, 1, '2023-01-04', '2023-01-04 01:25:51'),
(357, 2, 6, 1, 'Manny Guttierez', 'n/a', 27, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '7000', 2, 1, '2023-01-04', '2023-01-04 01:26:37'),
(358, 2, 6, 1, 'Enrique Manuel ', 'n/a', 28, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '10000', 2, 1, '2023-01-04', '2023-01-04 01:27:23'),
(359, 2, 6, 1, 'Gloribel Marcaramdam  (magulo)', 'n/a', 28, 2, 0, 1, 1, 0, 1, 0, 0, 0, 3, 0, '0', 2, 0, '2023-01-04', '2023-01-04 01:29:08'),
(360, 2, 6, 1, 'Benjie Magapi', 'n/a', 29, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, '9000', 3, 1, '2023-01-04', '2023-01-04 01:29:52'),
(361, 2, 6, 1, 'Mark Reniel Alimagno ', 'n/a', 30, 4, 0, 1, 3, 0, 0, 0, 0, 0, 1, 0, '10000', 3, 1, '2023-01-04', '2023-01-04 01:30:37'),
(362, 2, 6, 1, 'Vicente Oliveros ', 'n/a', 31, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, '8000', 1, 1, '2023-01-04', '2023-01-04 01:31:16'),
(363, 2, 6, 1, 'Joshua Oliveros ', 'n/a', 31, 2, 0, 0, 2, 0, 0, 2, 0, 1, 3, 0, '0', 2, 0, '2023-01-04', '2023-01-04 01:32:38'),
(364, 2, 6, 1, 'Marita Liwanag ', 'n/a', 32, 5, 1, 2, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-04', '2023-01-04 01:33:58'),
(365, 2, 6, 1, 'Demetrio Rivero ', 'n/a', 33, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '28000', 3, 1, '2023-01-04', '2023-01-04 01:34:42'),
(366, 2, 6, 1, 'Frisco Hipolito ', 'n/a', 34, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '11000', 2, 1, '2023-01-04', '2023-01-04 01:35:28'),
(367, 2, 6, 1, 'Jojo Cuentas ', 'n/a', 35, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '24000', 2, 1, '2023-01-04', '2023-01-04 01:36:09'),
(368, 2, 6, 1, 'Jesus Ramon Dorado ', 'n/a', 36, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '10000', 2, 1, '2023-01-04', '2023-01-04 01:37:01'),
(369, 2, 6, 1, 'Raymond Cosico ', 'n/a', 37, 5, 1, 1, 2, 1, 0, 2, 0, 0, 1, 0, '10000', 2, 1, '2023-01-04', '2023-01-04 01:37:59'),
(370, 2, 6, 1, 'Rogidor Noza Mabiling ', 'n/a', 38, 4, 0, 0, 4, 0, 0, 0, 2, 0, 1, 0, '40000', 4, 1, '2023-01-04', '2023-01-04 01:39:33'),
(371, 2, 6, 1, 'Archie Cuentas ', 'n/a', 39, 4, 0, 1, 3, 0, 0, 1, 1, 0, 1, 0, '18000', 3, 1, '2023-01-04', '2023-01-04 01:40:20'),
(372, 2, 6, 1, 'Irvin Bungualan ', 'n/a', 40, 3, 0, 1, 2, 0, 0, 0, 0, 0, 1, 0, '12500', 2, 1, '2023-01-04', '2023-01-04 01:43:18'),
(373, 2, 6, 1, 'Angel Pantal ', 'n/a', 41, 8, 1, 1, 5, 1, 1, 1, 1, 2, 1, 0, '20000', 5, 1, '2023-01-04', '2023-01-04 01:44:35'),
(374, 2, 6, 1, 'Belen Reyes Exconde ', 'n/a', 42, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-04', '2023-01-04 01:45:55'),
(375, 2, 6, 1, 'Alvin Reyes Exconde', 'n/a', 42, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '9750', 2, 1, '2023-01-04', '2023-01-04 01:46:57'),
(376, 2, 6, 1, 'Edna Reyes Bundalian ', 'n/a', 43, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, '25000', 3, 2, '2023-01-04', '2023-01-04 01:47:42'),
(377, 2, 6, 1, 'Dexter Estrada ', 'n/a', 44, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, '12700', 3, 2, '2023-01-04', '2023-01-04 01:48:26'),
(378, 2, 6, 1, 'Fe Marquez ', 'n/a', 45, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-04', '2023-01-04 01:49:40'),
(379, 2, 6, 1, 'Avelino Bernabe ', 'n/a', 46, 5, 0, 1, 4, 0, 0, 1, 0, 1, 1, 0, '12000', 4, 1, '2023-01-04', '2023-01-04 01:50:26'),
(380, 2, 6, 1, 'Boyet Bumagat Cuentas ', 'n/a', 47, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '14000', 2, 1, '2023-01-04', '2023-01-04 01:51:19'),
(381, 2, 6, 1, 'Lloyd Reyes Aracena ', 'n/a', 48, 3, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, '12500', 1, 1, '2023-01-04', '2023-01-04 01:52:28'),
(382, 2, 6, 1, 'Melchor Valido ', 'n/a', 49, 4, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, '50000', 2, 1, '2023-01-04', '2023-01-04 01:53:07'),
(383, 2, 6, 1, 'Jame Tayobong ', 'n/a', 50, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '29000', 2, 1, '2023-01-04', '2023-01-04 01:53:57'),
(384, 2, 1, 1, 'Jovan Platon', 'n/a', 3, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '109700', 5, 3, '2023-01-05', '2023-01-05 22:20:25');
INSERT INTO `pms_representative` (`representative_aid`, `representative_eval_id`, `representative_purok_id`, `representative_is_active`, `representative_name`, `representative_contact`, `representative_house_number`, `representative_total_people`, `representative_total_underage`, `representative_total_midage`, `representative_total_adult`, `representative_total_seniors`, `representative_total_pwd`, `representative_total_elem`, `representative_total_highschool`, `representative_total_college`, `representative_household_living_id`, `representative_is_in_danger_area`, `representative_monthly_income`, `representative_total_able_work`, `representative_total_employed`, `representative_created`, `representative_datetime`) VALUES
(385, 2, 7, 1, 'Erlinda Cuentas', 'n/a', 1, 4, 0, 0, 2, 1, 0, 0, 1, 0, 1, 0, '12000', 3, 1, '2023-01-05', '2023-01-05 23:04:25'),
(386, 2, 7, 1, 'Joy Bueta Cuenta', 'n/a', 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '23000', 1, 1, '2023-01-05', '2023-01-05 23:05:32'),
(387, 2, 7, 1, 'Jonmun Cuentas', 'n/a', 2, 4, 0, 2, 2, 0, 0, 2, 0, 0, 3, 0, '10000', 3, 1, '2023-01-05', '2023-01-05 23:06:18'),
(388, 2, 7, 1, 'Amorsolo Tilan ', 'n/a', 3, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '32000', 3, 2, '2023-01-05', '2023-01-05 23:07:11'),
(389, 2, 7, 1, 'Estrella Famis', 'n/a', 4, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0, '26000', 4, 2, '2023-01-05', '2023-01-05 23:07:53'),
(390, 2, 7, 1, 'Marilou Romeno', 'n/a', 5, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '28000', 3, 2, '2023-01-05', '2023-01-05 23:08:34'),
(391, 2, 7, 1, 'Lonel Romeno ', 'n/a', 5, 4, 2, 1, 1, 0, 0, 0, 2, 0, 3, 0, '12000', 3, 1, '2023-01-05', '2023-01-05 23:09:16'),
(392, 2, 7, 1, 'Yolanda Munlacan', 'n/a', 6, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '18000', 1, 1, '2023-01-05', '2023-01-05 23:09:59'),
(393, 2, 7, 1, 'Jasmin Munlacan ', 'n/a', 6, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '9000', 2, 1, '2023-01-05', '2023-01-05 23:10:44'),
(394, 2, 7, 1, 'Victor Munlacan ', 'n/a', 7, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '3000', 1, 1, '2023-01-05', '2023-01-05 23:11:26'),
(395, 2, 7, 1, 'Arvin Munlacan ', 'n/a', 8, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-05', '2023-01-05 23:12:16'),
(396, 2, 7, 1, 'Rizza Munlacan ', 'n/a', 8, 3, 1, 0, 2, 0, 0, 1, 0, 0, 3, 0, '26000', 2, 2, '2023-01-05', '2023-01-05 23:13:02'),
(397, 2, 7, 1, 'Noel Munlacan ', 'n/a', 9, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '32000', 3, 2, '2023-01-05', '2023-01-05 23:13:44'),
(398, 2, 7, 1, 'Edgar Eduante', 'n/a', 10, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '45000', 4, 3, '2023-01-05', '2023-01-05 23:14:37'),
(399, 2, 7, 1, 'Edward Eduante', 'n/a', 11, 5, 2, 1, 2, 0, 0, 1, 0, 0, 1, 0, '16000', 3, 1, '2023-01-05', '2023-01-05 23:15:15'),
(400, 2, 7, 1, 'Florante Legaspi', 'n/a', 12, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '15000', 1, 1, '2023-01-05', '2023-01-05 23:15:58'),
(401, 2, 7, 1, 'Jayson Cura', 'n/a', 13, 5, 0, 0, 4, 1, 0, 0, 0, 0, 1, 0, '13000', 4, 1, '2023-01-05', '2023-01-05 23:16:39'),
(402, 2, 7, 1, 'Nemita Bundalian ', 'n/a', 14, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-05', '2023-01-05 23:17:22'),
(403, 2, 7, 1, 'Ronilo Cura ', 'n/a', 15, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '13000', 1, 1, '2023-01-05', '2023-01-05 23:18:26'),
(404, 2, 7, 1, 'Rymo Alcantara', 'n/a', 15, 3, 0, 2, 1, 0, 0, 0, 1, 0, 3, 0, '12000', 3, 1, '2023-01-05', '2023-01-05 23:19:08'),
(405, 2, 7, 1, 'Hero Bundalian ', 'n/a', 16, 4, 1, 1, 2, 0, 0, 2, 0, 0, 1, 0, '24000', 3, 2, '2023-01-05', '2023-01-05 23:19:44'),
(406, 2, 7, 1, 'Leonardo Custodio', 'n/a', 17, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '14000', 1, 1, '2023-01-05', '2023-01-05 23:22:13'),
(407, 2, 7, 1, 'Emma Alimagno ', 'n/a', 18, 2, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, '3000', 1, 0, '2023-01-05', '2023-01-05 23:22:54'),
(408, 2, 7, 1, 'Jerwin Alimagno ', 'n/a', 19, 4, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, '24000', 3, 2, '2023-01-05', '2023-01-05 23:23:41'),
(409, 2, 7, 1, 'Elma Alimagno', 'n/a', 20, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-05', '2023-01-05 23:24:54'),
(410, 2, 7, 1, 'Reynalyn Aguila ', 'n/a', 20, 4, 0, 1, 3, 0, 0, 1, 0, 1, 3, 0, '100000', 4, 2, '2023-01-05', '2023-01-05 23:25:50'),
(411, 2, 7, 1, 'Allan Panganiban ', 'n/a', 21, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '48000', 4, 2, '2023-01-05', '2023-01-05 23:26:34'),
(412, 2, 7, 1, 'Erlita Cosico', 'n/a', 22, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '32000', 2, 2, '2023-01-05', '2023-01-05 23:27:22'),
(413, 2, 7, 1, 'Rodelo Obal ', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '13000', 3, 2, '2023-01-05', '2023-01-05 23:28:32'),
(414, 2, 7, 1, 'Mamita Emperial ', 'n/a', 24, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-05', '2023-01-05 23:29:17'),
(415, 2, 7, 1, 'Francis Brigario', 'n/a', 24, 5, 2, 1, 2, 0, 0, 2, 1, 0, 3, 0, '12000', 4, 1, '2023-01-05', '2023-01-05 23:30:06'),
(416, 2, 7, 1, 'Lenar Belda ', 'n/a', 25, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '17000', 2, 2, '2023-01-05', '2023-01-05 23:41:28'),
(417, 2, 7, 1, 'Somov Villaviconcio', 'n/a', 25, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '17000', 2, 2, '2023-01-05', '2023-01-05 23:42:19'),
(418, 2, 7, 1, 'Jayson Belda ', 'n/a', 26, 7, 1, 4, 2, 0, 0, 2, 2, 0, 1, 0, '19000', 6, 2, '2023-01-05', '2023-01-05 23:43:01'),
(419, 2, 7, 1, 'Anthony Belda ', 'n/a', 27, 3, 0, 2, 1, 0, 0, 0, 2, 0, 1, 0, '13000', 2, 1, '2023-01-05', '2023-01-05 23:43:45'),
(420, 2, 7, 1, 'Lorania Aquilo ', 'n/a', 28, 4, 0, 3, 1, 0, 0, 0, 3, 0, 1, 0, '12000', 3, 1, '2023-01-05', '2023-01-05 23:44:21'),
(421, 2, 7, 1, 'Nelita Santos', 'n/a', 29, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '26000', 3, 2, '2023-01-05', '2023-01-05 23:45:03'),
(422, 2, 7, 1, 'Marina Carpio ', 'n/a', 30, 4, 0, 2, 1, 1, 0, 0, 2, 0, 1, 0, '25000', 4, 2, '2023-01-05', '2023-01-05 23:45:42'),
(423, 2, 7, 1, 'Elinio Escala', 'n/a', 311, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '36000', 4, 3, '2023-01-05', '2023-01-05 23:46:44'),
(424, 2, 7, 1, 'Christian Africa ', 'n/a', 32, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '33000', 3, 2, '2023-01-05', '2023-01-05 23:56:15'),
(425, 2, 7, 1, 'Glumort Bundalian ', 'n/a', 33, 10, 0, 5, 5, 0, 0, 2, 2, 1, 1, 0, '56000', 8, 4, '2023-01-05', '2023-01-05 23:57:17'),
(426, 2, 7, 1, 'Menandro Dela Cruz', 'n/a', 34, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '34000', 2, 2, '2023-01-05', '2023-01-05 23:58:04'),
(427, 2, 7, 1, 'Arvin Pumupla', 'n/a', 34, 7, 0, 6, 1, 0, 0, 3, 3, 0, 3, 0, '15000', 7, 1, '2023-01-05', '2023-01-05 23:58:56'),
(428, 2, 7, 1, 'Rodolfo Bundalian ', 'n/a', 35, 5, 0, 2, 3, 0, 0, 1, 1, 1, 1, 0, '13000', 4, 1, '2023-01-05', '2023-01-05 23:59:37'),
(429, 2, 7, 1, 'Nancy Ybasan  ', 'n/a', 36, 4, 0, 0, 4, 0, 0, 0, 0, 1, 1, 0, '29000', 4, 3, '2023-01-06', '2023-01-06 00:00:12'),
(430, 2, 7, 1, 'Aldrin Buenavista ', 'n/a', 37, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '12000', 3, 1, '2023-01-06', '2023-01-06 00:00:57'),
(431, 2, 7, 1, 'Zosimo Morales', 'n/a', 38, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '68000', 3, 3, '2023-01-06', '2023-01-06 00:01:40'),
(432, 2, 7, 1, 'John Santos ', 'n/a', 39, 3, 0, 1, 2, 0, 0, 0, 11, 1, 1, 0, '12000', 3, 1, '2023-01-06', '2023-01-06 00:02:14'),
(433, 2, 7, 1, 'Liticia Paterno ', 'n/a', 40, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '13000', 2, 1, '2023-01-06', '2023-01-06 00:02:56'),
(434, 2, 7, 1, 'Emerson Capistrano ', 'n/a', 41, 6, 0, 1, 5, 0, 0, 0, 1, 1, 1, 0, '21000', 5, 2, '2023-01-06', '2023-01-06 00:03:38'),
(435, 2, 7, 1, 'Idelo Choms', 'n/a', 42, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '30000', 2, 2, '2023-01-06', '2023-01-06 00:04:13'),
(436, 2, 7, 1, 'Eldie Choms', 'n/a', 43, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '27000', 4, 2, '2023-01-06', '2023-01-06 00:05:07'),
(437, 2, 7, 1, 'Benly Roa ', 'n/a', 44, 6, 0, 4, 2, 0, 0, 2, 2, 0, 1, 0, '21000', 5, 2, '2023-01-06', '2023-01-06 00:05:56'),
(438, 2, 7, 1, 'Yolanda Alimagno ', 'n/a', 45, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '47000', 3, 3, '2023-01-06', '2023-01-06 00:06:33'),
(439, 2, 7, 1, 'Rosita Chovas ', 'n/a', 46, 2, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, '13000', 2, 1, '2023-01-06', '2023-01-06 00:07:11'),
(440, 2, 7, 1, 'Elmerito Chovas', 'n/a', 47, 6, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, '61000', 6, 3, '2023-01-06', '2023-01-06 00:07:45'),
(441, 2, 7, 1, 'Nelson Boncayo ', 'n/a', 48, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '47000', 2, 2, '2023-01-06', '2023-01-06 00:08:23'),
(442, 2, 7, 1, 'Ivy Boncayo ', 'n/a', 48, 4, 1, 1, 2, 0, 0, 1, 2, 0, 3, 0, '17000', 3, 1, '2023-01-06', '2023-01-06 00:09:04'),
(443, 2, 7, 1, 'Tirso Aquilo ', 'n/a', 49, 7, 0, 1, 5, 1, 0, 3, 2, 0, 1, 0, '26000', 7, 2, '2023-01-06', '2023-01-06 00:09:53'),
(444, 2, 7, 1, 'Godofredo Alimagno', 'n/a', 50, 7, 2, 2, 3, 0, 0, 2, 1, 1, 1, 0, '28000', 6, 2, '2023-01-06', '2023-01-06 00:10:39'),
(446, 2, 1, 1, 'Wendell Grenas', 'n/a', 2, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '212310', 4, 1, '2022-12-30', '2022-12-30 00:12:56'),
(448, 2, 1, 1, 'Reynaldo Nogus', 'n/a', 5, 5, 0, 1, 3, 1, 0, 1, 0, 0, 1, 0, '12000', 4, 1, '2022-12-30', '2022-12-30 00:33:28'),
(1984, 8, 1, 1, 'Yal Neri', 'n/a', 1, 5, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '109999', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(1985, 8, 1, 1, 'Rowena Ariola', 'n/a', 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '30000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(1986, 8, 1, 1, 'Ricamara Dekma', 'n/a', 6, 5, 0, 2, 3, 0, 0, 0, 2, 1, 1, 0, '212309', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(1987, 8, 1, 1, 'Delio Rolando', 'n/a', 7, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '12000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(1988, 8, 1, 1, 'Willy Alimagno', 'n/a', 8, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '32000', 5, 5, '2023-01-08', '2023-01-08 17:13:10'),
(1989, 8, 1, 1, 'Noel Gomez', 'n/a', 9, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '65000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(1990, 8, 1, 1, 'Lucila Osuna', '09989828058', 10, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '8000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(1991, 8, 1, 1, 'Joey Osuna', 'n/a', 10, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '30000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1992, 8, 1, 1, 'Elena Monica', 'n/a', 10, 8, 1, 1, 6, 0, 0, 0, 1, 0, 3, 0, '24000', 7, 3, '2023-01-08', '2023-01-08 17:13:10'),
(1993, 8, 1, 1, 'Janice Aningalan', '09323978275', 11, 5, 0, 3, 2, 0, 0, 0, 2, 0, 1, 0, '40000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1994, 8, 1, 1, 'Amelio Aningalan', '09286978095', 12, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '15000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1995, 8, 1, 1, 'Joven Anila', 'n/a', 13, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '30000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1996, 8, 1, 1, 'Dennise Alimagno', '09784048306', 14, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '15000', 1, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1997, 8, 1, 1, 'Rosalie Alimagno', '09469074572', 15, 6, 0, 3, 3, 0, 0, 3, 0, 0, 1, 0, '13000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1998, 8, 1, 1, 'Jimaray Alimagno', '09025194679', 16, 3, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '5000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(1999, 8, 1, 1, 'Juana Candelero', 'n/a', 16, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, '1500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2000, 8, 1, 1, 'Ernie Aquino', '09494702730', 17, 4, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, '16000', 4, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2001, 8, 1, 1, 'Crisanto De Guzman ', '09199626724', 18, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '13000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2002, 8, 1, 1, 'Kervin Pan', 'n/a', 19, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '5000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2003, 8, 1, 1, 'Macaria Belda', 'n/a', 20, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, '5000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2004, 8, 1, 1, 'Randy Belda', 'n/a', 20, 6, 0, 4, 2, 0, 0, 3, 1, 0, 1, 0, '14000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2005, 8, 1, 1, 'Jenicho Reyes', '0945704979', 21, 5, 0, 3, 2, 0, 0, 3, 0, 0, 1, 0, '6000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2006, 8, 1, 1, 'Rosemeley Reyes', '09298813264', 22, 5, 0, 3, 1, 1, 0, 1, 2, 0, 1, 0, '2000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2007, 8, 1, 1, 'Reymundo Catillo ', '09304077036', 23, 5, 0, 2, 3, 0, 0, 0, 2, 0, 1, 0, '3500', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2008, 8, 1, 1, 'Jason Ong ', '09224054259', 24, 9, 0, 4, 5, 0, 0, 3, 2, 0, 1, 0, '8000', 9, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2009, 8, 1, 1, 'Joeyson Ong', 'n/a', 25, 5, 1, 2, 2, 0, 0, 0, 2, 0, 1, 0, '8000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2010, 8, 1, 1, 'Jimmy Ong ', '09394282894', 26, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '2500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2011, 8, 1, 1, 'Jhonny Ong', 'n/a', 26, 7, 1, 3, 3, 0, 0, 2, 2, 0, 1, 0, '4000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2012, 8, 1, 1, 'Joey Habilagon', '09464291983', 27, 5, 0, 1, 4, 0, 0, 1, 0, 0, 1, 0, '20000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2013, 8, 1, 1, 'Charlie Angeles ', 'n/a', 28, 4, 0, 2, 2, 0, 0, 1, 0, 0, 1, 0, '20000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2014, 8, 1, 1, 'Ronnie Katigbak', 'n/a', 29, 6, 1, 3, 2, 0, 0, 1, 2, 0, 1, 0, '8000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2015, 8, 1, 1, 'Belina Alimagno', '09197349647', 30, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 1, '10000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2016, 8, 1, 1, 'Beverly Muela ', '09481160221', 31, 6, 0, 2, 3, 1, 0, 0, 2, 0, 1, 0, '3000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2017, 8, 1, 1, 'Elmer  Drilon', '09095749399', 32, 3, 0, 1, 2, 0, 1, 1, 0, 0, 1, 0, '10000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2018, 8, 1, 1, 'Jimmy Alimagno', 'n/a', 33, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '23000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2019, 8, 1, 1, 'Alejandro Aniciete', '09224110379', 34, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '15000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2020, 8, 1, 1, 'Bernie Aquilo ', '09291149237', 35, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '10000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2021, 8, 1, 1, 'Arnel Habigalon', '09496255667', 36, 6, 0, 4, 2, 0, 0, 2, 2, 0, 1, 0, '6000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2022, 8, 1, 1, 'Melchor Ledesma', '09494577053', 37, 5, 1, 2, 2, 0, 0, 1, 2, 0, 2, 0, '10000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2023, 8, 1, 1, 'Florencio Valdez', '09093790253', 38, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '6000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2024, 8, 1, 1, 'John Robert Untiveros', 'n/a', 38, 3, 0, 1, 2, 0, 0, 1, 0, 0, 3, 0, '25000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2025, 8, 1, 1, 'Robert Ilagan ', '09289091066', 39, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '5000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2026, 8, 1, 1, 'Aldrin Valdez', '09073368832', 40, 3, 0, 1, 2, 0, 0, 1, 0, 0, 2, 0, '20000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2027, 8, 1, 1, 'Paciano Dapog', '09104313340', 41, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '18000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2028, 8, 1, 1, 'Crisanto Danseco', 'n/a', 42, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2029, 8, 1, 1, 'Lea Surigao', 'n/a', 42, 2, 1, 0, 1, 0, 0, 0, 0, 0, 3, 0, '0', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2030, 8, 1, 1, 'Dan Sumaque', 'n/a', 43, 5, 1, 2, 2, 0, 0, 1, 1, 0, 1, 0, '12000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2031, 8, 1, 1, 'John Ace Landicho', '09329868241', 44, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '14000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2032, 8, 1, 1, 'Nicolas Chumacera', 'n/a', 45, 4, 0, 0, 1, 3, 0, 0, 0, 1, 1, 0, '2500', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2033, 8, 1, 1, 'Melanie De Roma', 'n/a', 46, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '2500', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2034, 8, 1, 1, 'Princess Joy De Roma', 'n/a', 46, 2, 0, 1, 1, 0, 0, 0, 1, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2035, 8, 1, 1, 'Arren De Roma', 'n/a', 46, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '30000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2036, 8, 1, 1, 'Macela Gomez', 'n/a', 47, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, '0', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2037, 8, 1, 1, 'Althea Avanzado ', 'n/a', 47, 5, 0, 3, 2, 0, 0, 0, 2, 2, 3, 0, '20000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2038, 8, 1, 1, 'Sveren Avanzado ', 'n/a', 47, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '10000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2039, 8, 1, 1, 'Jeremy Saludadez', 'n/a', 48, 6, 0, 3, 3, 0, 0, 2, 1, 0, 1, 0, '25000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2040, 8, 1, 1, 'Sener Alimagno ', 'n/a', 49, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '27000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2041, 8, 1, 1, 'Jenen Alimagno', 'n/a', 49, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, '20000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2042, 8, 1, 1, 'Normerciano Aningalan', '09391147048', 50, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '20000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2043, 8, 1, 1, 'Jonathan Aningalan ', 'n/a', 50, 4, 1, 1, 2, 0, 0, 2, 0, 0, 3, 0, '9000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2044, 8, 2, 1, 'Nazaro Cega', 'n/a', 1, 10, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '5000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2045, 8, 2, 1, 'Benvenido Castillo', 'n/a', 2, 6, 0, 0, 6, 0, 0, 0, 1, 0, 1, 0, '12000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2046, 8, 2, 1, 'Glen Madarazo', 'n/a', 3, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '9000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2047, 8, 2, 1, 'Bienvenido Anlacar', '09185879914', 4, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '8000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2048, 8, 2, 1, 'Reynante Anlacar ', 'n/a', 4, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '3000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2049, 8, 2, 1, 'Herry Berth Anlacar ', 'n/a', 5, 5, 0, 3, 2, 0, 0, 1, 2, 0, 1, 0, '8000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2050, 8, 2, 1, 'Forperio De Castro', 'n/a', 6, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2051, 8, 2, 1, 'Allan De Castro', 'n/a', 6, 4, 0, 2, 2, 0, 0, 0, 2, 0, 3, 0, '8000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2052, 8, 2, 1, 'Aristo Marquez', '09295884563', 7, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '5000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2053, 8, 2, 1, 'Darwin Bundalian', 'n/a', 8, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '8000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2054, 8, 2, 1, 'Estela Bundalian ', 'n/a', 8, 2, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0, '10500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2055, 8, 2, 1, 'Orlando Bundalian', '0908473963', 9, 7, 1, 4, 2, 0, 0, 4, 0, 0, 1, 0, '6000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2056, 8, 2, 1, 'Florencia Bunadalian ', 'n/a', 10, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '1500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2057, 8, 2, 1, 'Noli Catroverde ', '09461403740', 11, 4, 0, 1, 3, 0, 0, 0, 0, 0, 2, 0, '7650', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2058, 8, 2, 1, 'Cletos Solis', 'n/a', 11, 3, 1, 1, 1, 0, 0, 1, 0, 0, 3, 0, '0', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2059, 8, 2, 1, 'Rebisfer Bartolay ', '09487150185', 12, 5, 1, 2, 2, 0, 0, 0, 2, 0, 1, 0, '3000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2060, 8, 2, 1, 'Fernando Lopez', 'n/a', 13, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '7500', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2061, 8, 2, 1, 'Jose Losmagos', 'n/a', 14, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 3, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2062, 8, 2, 1, 'Janet Atillo ', 'n/a', 14, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '0', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2063, 8, 2, 1, 'Jamaine Atillo ', 'n/a', 14, 5, 2, 2, 1, 0, 0, 2, 1, 0, 3, 0, '0', 3, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2064, 8, 2, 1, 'Reynaldo Cuntapay', '09993995613', 15, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '23000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2065, 8, 2, 1, 'Benedicto Bumagat Jr. ', '09284859592', 16, 5, 0, 0, 5, 0, 0, 0, 1, 0, 1, 0, '37000', 5, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2066, 8, 2, 1, 'JaI Bandoy ', 'n/a', 17, 3, 1, 0, 2, 0, 0, 0, 0, 0, 2, 0, '7000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2067, 8, 2, 1, 'Alex Bumagat', 'n/a', 18, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, '3000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2068, 8, 2, 1, 'Alvaro Bumagat ', '09109336048', 18, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '3000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2069, 8, 2, 1, 'Sonny Sapilan ', '09462965831', 19, 5, 0, 1, 4, 0, 0, 0, 1, 1, 1, 0, '6500', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2070, 8, 2, 1, 'Romeo Macasinag', '09399818159', 20, 4, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, '7000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2071, 8, 2, 1, 'Ronaldo Bungualan', 'n/a', 21, 9, 0, 4, 5, 0, 0, 2, 2, 0, 1, 0, '8000', 9, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2072, 8, 2, 1, 'Jerome Flores ', 'n/a', 21, 5, 1, 2, 2, 0, 0, 2, 0, 0, 3, 0, '5000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2073, 8, 2, 1, 'Mary Recreo ', 'n/a', 22, 2, 0, 1, 1, 0, 0, 1, 0, 0, 2, 0, '3000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2074, 8, 2, 1, 'Ernesto Lisangan', 'n/a', 23, 4, 0, 1, 1, 2, 0, 0, 1, 0, 2, 0, '8000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2075, 8, 2, 1, 'Jefferson Lisangan ', 'n/a', 23, 3, 1, 0, 2, 0, 0, 1, 0, 0, 3, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2076, 8, 2, 1, 'Ferdinand Faustino', '09104736261', 24, 4, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0, '7260', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2077, 8, 2, 1, 'Nomer Reyes', 'n/a', 25, 5, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '18000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2078, 8, 2, 1, 'Clark Jan Fernandez', 'n/a', 26, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '6000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2079, 8, 2, 1, 'Antonio Ramos', 'n/a', 27, 4, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, '5000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2080, 8, 2, 1, 'Jean Bundalian', 'n/a', 28, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '5000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2081, 8, 2, 1, 'Josaphine Roxas', 'n/a', 29, 2, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, '0', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2082, 8, 2, 1, 'Romeo Marasigan ', 'n/a', 30, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '30000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2083, 8, 2, 1, 'Manuel Bautista ', 'n/a', 31, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2084, 8, 2, 1, 'Marlon Bautista ', 'n/a', 31, 5, 1, 2, 2, 0, 0, 1, 2, 0, 3, 0, '18000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2085, 8, 2, 1, 'Daniel Sadia ', 'n/a', 32, 4, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, '21000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2086, 8, 2, 1, 'Rodelo Galay ', 'n/a', 33, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '18000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2087, 8, 2, 1, 'Jessie Iranzo ', '09307688899', 34, 5, 0, 2, 3, 0, 0, 1, 2, 0, 1, 0, '8000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2088, 8, 2, 1, 'Jose Lacap', 'n/a', 35, 6, 0, 4, 2, 0, 0, 2, 2, 0, 1, 0, '5000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2089, 8, 2, 1, 'Guedencio Lacap', 'n/a', 36, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '1500', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2090, 8, 2, 1, 'Edwin Nacarro ', '09095402213', 37, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '10000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2091, 8, 2, 1, 'Leopoldo Mijica', 'n/a', 38, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2092, 8, 2, 1, 'Leo Mojica ', 'n/a', 38, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2093, 8, 2, 1, 'Joey De Guzman', 'n/a', 39, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '10000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2094, 8, 2, 1, 'Ronnie Marasigan ', '09185392269', 40, 6, 0, 3, 3, 0, 0, 3, 0, 0, 1, 0, '5000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2095, 8, 2, 1, 'Narciso Chovas', 'n/a', 41, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2096, 8, 2, 1, 'Jaypee Zamora', 'n/a', 41, 5, 2, 1, 2, 0, 0, 2, 0, 0, 1, 0, '10000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2097, 8, 2, 1, 'Joe Chovas ', 'n/a', 42, 6, 2, 2, 2, 0, 0, 2, 0, 0, 1, 0, '5000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2098, 8, 2, 1, 'Abegaul Lubi', 'n/a', 43, 4, 0, 3, 1, 0, 0, 1, 2, 0, 1, 0, '18000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2099, 8, 2, 1, 'Lucita Anonuevo', 'n/a', 44, 4, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, '10000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2100, 8, 2, 1, 'Jovit Corpuz', 'n/a', 45, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '12000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2101, 8, 2, 1, 'Sonny Boy De Guzman ', '09481160790', 46, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '8000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2102, 8, 2, 1, 'Jocelyn Roja ', 'n/a', 47, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '5000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2103, 8, 2, 1, 'Alfonso De Mesa', '09105486795', 47, 3, 0, 1, 2, 0, 0, 1, 0, 0, 3, 0, '8000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2104, 8, 2, 1, 'Bernard Corcega', 'n/a', 47, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '10000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2105, 8, 2, 1, 'Juinita Megapi', 'n/a', 48, 4, 0, 2, 1, 1, 0, 1, 1, 0, 1, 0, '7500', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2106, 8, 2, 1, 'Deomedes Cuntes', 'n/a', 49, 2, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, '1500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2107, 8, 2, 1, 'Edward Cuentas ', 'n/a', 49, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '3000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2108, 8, 2, 1, 'Winnie fredo Megaspi', 'n/a', 50, 5, 0, 0, 5, 0, 0, 0, 0, 2, 1, 0, '10000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2109, 8, 3, 1, 'Alex Gamo', 'n/a', 1, 5, 0, 0, 3, 2, 0, 0, 0, 1, 1, 0, '135000', 5, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2110, 8, 3, 1, 'Daryl Gamo ', 'n/a', 1, 5, 0, 3, 2, 0, 0, 3, 0, 0, 3, 0, '37000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2111, 8, 3, 1, 'Emerson Belda Jr.', '09065151509', 2, 6, 0, 3, 2, 1, 0, 0, 3, 0, 1, 0, '30000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2112, 8, 3, 1, 'Baltazar Avanzado ', '09164045411', 3, 5, 0, 1, 4, 0, 0, 0, 0, 2, 1, 0, '30000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2113, 8, 3, 1, 'Aira May Avanzado', 'n/a', 3, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '60000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2114, 8, 3, 1, 'Edgar Ricaforte ', '09154725340', 4, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '78000', 5, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2115, 8, 3, 1, 'Monica Evone Ricaforte ', '09496252931', 5, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2116, 8, 3, 1, 'Reynon Ricaforte ', '09103984887', 5, 6, 0, 2, 4, 0, 0, 0, 2, 0, 3, 0, '21000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2117, 8, 3, 1, 'Elsie Bacod', 'n/a', 6, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '4000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2118, 8, 3, 1, 'Marian Navato ', 'n/a', 6, 2, 0, 1, 1, 0, 0, 1, 0, 0, 3, 0, '2000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2119, 8, 3, 1, 'Arcely Alilliana ', 'n/a', 7, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2120, 8, 3, 1, 'Arfie Ricaforte ', 'n/a', 7, 5, 0, 2, 3, 0, 0, 2, 0, 0, 3, 0, '9000', 5, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2121, 8, 3, 1, 'Elsa Ricaforte', '09179503656', 8, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '10000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2122, 8, 3, 1, 'Liebeth Bregaza', 'n/a', 9, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2123, 8, 3, 1, 'Mary Anne Angolida', 'n/a', 9, 4, 0, 3, 1, 1, 0, 1, 2, 0, 3, 0, '30000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2124, 8, 3, 1, 'Emelita Belda', 'n/a', 10, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2125, 8, 3, 1, 'Niel Belda ', 'n/a', 10, 4, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, '35000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2126, 8, 3, 1, 'Jesse Katigbak ', 'n/a', 11, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '85000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2127, 8, 3, 1, 'Jhinell Katigbak ', '09267897644', 12, 6, 0, 3, 3, 0, 0, 1, 2, 1, 1, 0, '30000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2128, 8, 3, 1, 'Temoteo Corona', 'n/a', 13, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '48000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2129, 8, 3, 1, 'Jonathan Katigbak', 'n/a', 14, 5, 0, 3, 3, 0, 2, 1, 2, 0, 1, 0, '9000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2130, 8, 3, 1, 'Flor Kaatigbak ', 'n/a', 15, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2131, 8, 3, 1, 'NA', 'n/a', 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2132, 8, 3, 1, 'Adoring Villavecencio', 'n/a', 17, 4, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, '10000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2133, 8, 3, 1, 'Remulo Villavecencio ', '09087092256', 17, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '15000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2134, 8, 3, 1, 'Elena Chaves ', '09494123343', 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, '10000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2135, 8, 3, 1, 'Bhea Anne Co ', 'n/a', 18, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '10000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2136, 8, 3, 1, 'Roberto Aningalan ', 'n/a', 19, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '8000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2137, 8, 3, 1, 'Ronilon Aningalan ', 'n/a', 19, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '24000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2138, 8, 3, 1, 'Myrh Titular ', 'n/a', 19, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, '0', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2139, 8, 3, 1, 'Ronaldo Angco ', 'n/a', 20, 5, 0, 1, 4, 0, 0, 0, 1, 2, 1, 0, '40000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2140, 8, 3, 1, 'Renato Bundalian', 'n/a', 21, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '1500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2141, 8, 3, 1, 'Redel Bundalian ', '09184784415', 21, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '61000', 3, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2142, 8, 3, 1, 'Necitas Aningalan ', 'n/a', 22, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2143, 8, 3, 1, 'Mico Aningalan ', 'n/a', 22, 4, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, '150000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2144, 8, 3, 1, 'Cosme Castillo ', '09477073784', 23, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '35000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2145, 8, 3, 1, 'Rhayan Castillo', 'n/a', 23, 5, 2, 1, 2, 0, 0, 1, 0, 0, 3, 0, '24000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2146, 8, 3, 1, 'Jay Jabilles ', 'n/a', 24, 6, 2, 2, 2, 0, 0, 1, 2, 0, 1, 0, '38000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2147, 8, 3, 1, 'Janell Jabiles ', 'n/a', 24, 5, 3, 0, 2, 0, 1, 1, 0, 0, 3, 0, '10000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2148, 8, 3, 1, 'Luzviminda Bundalian ', '09508396143', 25, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '4700', 4, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2149, 8, 3, 1, 'Celia Bundalian ', 'n/a', 25, 5, 0, 4, 1, 0, 0, 4, 0, 0, 3, 0, '3200', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2150, 8, 3, 1, 'Crizel Galvez', 'n/a', 25, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '3200', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2151, 8, 3, 1, 'Martin Binasoy', '09157915501', 26, 8, 0, 2, 5, 1, 0, 0, 2, 0, 1, 0, '32000', 7, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2152, 8, 3, 1, 'Mark John Cris Binasoy', 'n/a', 26, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '28000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2153, 8, 3, 1, 'Rostan Jhamil Buena', '0907914357', 27, 7, 1, 2, 4, 0, 1, 1, 1, 0, 1, 0, '16000', 6, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2154, 8, 3, 1, 'Rhommuel Buena', '09107715188', 28, 4, 1, 1, 2, 0, 0, 0, 1, 0, 1, 0, '20000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2155, 8, 3, 1, 'Gregoryo Chovas ', 'n/a', 29, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0, '30000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2156, 8, 3, 1, 'Karen Matibag', '09488651492', 29, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '30000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2157, 8, 3, 1, 'Joward Chovas', 'n/a', 29, 4, 2, 0, 2, 0, 0, 0, 0, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2158, 8, 3, 1, 'Belen Cura', '09305300618', 30, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '0', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2159, 8, 3, 1, 'Emerson Cura ', 'n/a', 30, 4, 0, 1, 3, 0, 0, 1, 0, 0, 3, 0, '25000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2160, 8, 3, 1, 'Joel Frago', 'n/a', 31, 5, 0, 1, 4, 0, 0, 0, 1, 0, 1, 0, '20000', 5, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2161, 8, 3, 1, 'Hermina Katigbak', 'n/a', 32, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2162, 8, 3, 1, 'Onofre Cuentas', 'n/a', 33, 4, 0, 1, 2, 1, 0, 0, 2, 0, 1, 0, '3000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2163, 8, 3, 1, 'Gloria Chovas', 'n/a', 34, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2164, 8, 3, 1, 'Luchie Chovas ', 'n/a', 35, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '25000', 4, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2165, 8, 3, 1, 'Jenny Chovas', 'n/a', 35, 4, 0, 2, 2, 0, 0, 1, 1, 0, 3, 0, '7000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2166, 8, 3, 1, 'Edwin Chovas ', 'n/a', 36, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2167, 8, 3, 1, 'Arlan Bundalian ', 'n/a', 37, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '15000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2168, 8, 4, 1, 'Norlita Alvarez', 'n/a', 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '2500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2169, 8, 4, 1, 'Primley Lara', 'n/a', 1, 5, 0, 3, 2, 0, 0, 0, 3, 0, 3, 0, '6000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2170, 8, 4, 1, 'Emerson Belda ', 'n/a', 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '2500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2171, 8, 4, 1, 'Ronald Belda ', 'n/a', 3, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2172, 8, 4, 1, 'Donilo Belda', 'n/a', 4, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2173, 8, 4, 1, 'Gregorio Felismino ', 'n/a', 4, 3, 0, 1, 1, 1, 0, 0, 1, 0, 3, 0, '11000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2174, 8, 4, 1, 'Emily Belda Arevalo', 'n/a', 5, 2, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, '10500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2175, 8, 4, 1, 'Felisisima Sutarez ', 'n/a', 6, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2176, 8, 4, 1, 'Yessa Sutarez Regalado ', 'n/a', 6, 3, 0, 0, 3, 0, 0, 0, 0, 1, 3, 0, '5750', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2177, 8, 4, 1, 'Rogelio Bundalian ', 'n/a', 7, 5, 2, 0, 2, 1, 0, 2, 0, 0, 1, 0, '2500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2178, 8, 4, 1, 'Jessie Lopez Bundalian ', 'n/a', 7, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2179, 8, 4, 1, 'Sandy Lopez Bunadalian ', 'n/a', 7, 5, 0, 3, 2, 0, 0, 1, 2, 0, 3, 0, '15000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2180, 8, 4, 1, 'Rogelio Bundalian Jr.', 'n/a', 7, 3, 2, 0, 1, 0, 0, 2, 0, 0, 3, 0, '3000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2181, 8, 4, 1, 'Janine Adriano', 'n/a', 8, 3, 1, 0, 2, 0, 0, 1, 0, 0, 1, 0, '4500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2182, 8, 4, 1, 'Johan Avanzado', 'n/a', 8, 4, 1, 0, 2, 1, 0, 1, 0, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2183, 8, 4, 1, 'Oscar Bundalian ', 'n/a', 9, 6, 0, 0, 4, 2, 0, 0, 0, 2, 1, 0, '2500', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2184, 8, 4, 1, 'Arjay Ricaforte Bundalian ', 'n/a', 9, 4, 1, 1, 2, 0, 0, 1, 1, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2185, 8, 4, 1, 'Domingo Gesmundo ', 'n/a', 10, 9, 0, 1, 6, 2, 1, 1, 0, 0, 1, 0, '14000', 6, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2186, 8, 4, 1, 'Enrico Castillo Molidor ', 'n/a', 11, 5, 0, 3, 1, 0, 0, 1, 2, 0, 1, 0, '11500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2187, 8, 4, 1, 'Enrique Castillo Molidor', 'n/a', 12, 5, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2188, 8, 4, 1, 'Ruel Hernandez', 'n/a', 13, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '20000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2189, 8, 4, 1, 'Herbie Banayo Hernandez ', 'n/a', 13, 3, 0, 1, 2, 0, 0, 1, 1, 0, 3, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2190, 8, 4, 1, 'Minda Cura Dalit', 'n/a', 14, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2191, 8, 4, 1, 'Mark Lozada ', 'n/a', 14, 4, 0, 2, 2, 0, 0, 0, 2, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2192, 8, 4, 1, 'Emmanual Cura Dalit ', 'n/a', 15, 7, 0, 2, 3, 2, 0, 0, 1, 1, 1, 0, '14000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2193, 8, 4, 1, 'Julia Molidor ', 'n/a', 16, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2194, 8, 4, 1, 'Celso Castillo Molidor ', 'n/a', 17, 5, 0, 1, 3, 1, 0, 0, 1, 2, 1, 0, '13000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2195, 8, 4, 1, 'Jovito Bueno ', 'n/a', 18, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2196, 8, 4, 1, 'Rolando Belda ', 'n/a', 19, 4, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, '8000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2197, 8, 4, 1, 'Nolito Lopez Belda ', 'n/a', 20, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '10000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2198, 8, 4, 1, 'Jude Lopez', 'n/a', 20, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '4000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2199, 8, 4, 1, 'Samboy Lopez', 'n/a', 20, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '30000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2200, 8, 4, 1, 'Bernie Lopez', 'n/a', 21, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '8000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2201, 8, 4, 1, 'Alfredo Lopez', 'n/a', 22, 6, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, '12000', 6, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2202, 8, 4, 1, 'Joven Lopez', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '7500', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2203, 8, 4, 1, 'Jomar Lopez', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2204, 8, 4, 1, 'Charles Responso', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, '8000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2205, 8, 4, 1, 'Arturo Manago', 'n/a', 24, 4, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, '4000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2206, 8, 4, 1, 'Reynado Exconde ', 'n/a', 25, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '2000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2207, 8, 4, 1, 'Cristina Exconde', 'n/a', 25, 2, 0, 0, 2, 0, 0, 2, 0, 0, 3, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2208, 8, 4, 1, 'Marlon Buena ', 'n/a', 26, 5, 1, 1, 3, 0, 0, 0, 1, 0, 1, 0, '7500', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2209, 8, 4, 1, 'Norlito Valido ', 'n/a', 26, 4, 0, 2, 2, 0, 0, 0, 1, 0, 3, 0, '12000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2210, 8, 4, 1, 'Lester Valido', 'n/a', 27, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2211, 8, 4, 1, 'Argel Lopez', 'n/a', 28, 4, 2, 0, 2, 0, 0, 1, 0, 0, 1, 0, '11000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2212, 8, 4, 1, 'Charlie Roxas ', 'n/a', 29, 7, 0, 1, 5, 1, 0, 1, 0, 0, 1, 0, '25000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2213, 8, 4, 1, 'Jeffrey Mendiola', 'n/a', 29, 3, 0, 1, 2, 0, 0, 1, 0, 0, 3, 0, '40000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2214, 8, 4, 1, 'Leopoldo Lopez', 'n/a', 29, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, '7500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2215, 8, 4, 1, 'Antono Anlacan ', 'n/a', 30, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0, '11000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2216, 8, 4, 1, 'Antenor Anlacan ', 'n/a', 31, 6, 1, 1, 4, 0, 0, 1, 0, 1, 1, 0, '11000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2217, 8, 4, 1, 'Wilfredo Avanzando', 'n/a', 32, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2218, 8, 4, 1, 'Rufino Avanzado ', 'n/a', 33, 4, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2219, 8, 4, 1, 'Gaudencia Gamo ', 'n/a', 34, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2220, 8, 4, 1, 'Eduardo Corcega Gamo ', 'n/a', 34, 3, 0, 0, 2, 1, 0, 0, 1, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2221, 8, 4, 1, 'Estela Colimbino', 'n/a', 35, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2222, 8, 4, 1, 'Rommel Colimbino', 'n/a', 35, 5, 2, 1, 2, 0, 0, 2, 0, 0, 3, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2223, 8, 4, 1, 'Alex Arcedera Gamo ', 'n/a', 36, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '0', 3, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2224, 8, 4, 1, 'Jose Arcedera Roa Jr.', 'n/a', 37, 6, 0, 2, 4, 0, 0, 0, 2, 1, 1, 0, '14500', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2225, 8, 4, 1, 'Hazel Ann Roa Sunga', 'n/a', 37, 3, 1, 1, 1, 0, 0, 0, 1, 0, 3, 0, '20000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2226, 8, 4, 1, 'Nora Chumacera', 'n/a', 38, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2227, 8, 4, 1, 'Renante Chumacera ', 'n/a', 38, 6, 0, 3, 3, 0, 0, 0, 0, 1, 3, 0, '12750', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2228, 8, 4, 1, 'Norman Chumacera', 'n/a', 38, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '13000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2229, 8, 4, 1, 'Nona Chumacera Calaminos ', 'n/a', 39, 4, 0, 2, 5, 0, 0, 0, 1, 2, 1, 0, '13000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2230, 8, 4, 1, 'Kevin Cas', 'n/a', 39, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '18000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2231, 8, 4, 1, 'Renz Cyrus Calaminos ', 'n/a', 39, 3, 0, 0, 3, 0, 0, 1, 0, 0, 3, 0, '13000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2232, 8, 4, 1, 'Hannah Mae Calaminos', 'n/a', 39, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '4500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2233, 8, 4, 1, 'Nelia Chumacera ', 'n/a', 40, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2234, 8, 4, 1, 'Edison Chumacera ', 'n/a', 41, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2235, 8, 4, 1, 'John Harvey Castillo Chumacera ', 'n/a', 41, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '13500', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2236, 8, 4, 1, 'Ariel Marquez ', 'n/a', 42, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '67500', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2237, 8, 4, 1, 'Hernando Penaliza ', 'n/a', 42, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2238, 8, 4, 1, 'Ronaldo Noza Mabiling ', 'n/a', 43, 6, 1, 2, 3, 0, 0, 2, 1, 1, 1, 0, '40000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2239, 8, 4, 1, 'Noemi Noza Zaldo ', 'n/a', 44, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2240, 8, 4, 1, 'Christian Glen Zaldo ', 'n/a', 44, 4, 1, 1, 2, 0, 0, 0, 1, 0, 3, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2241, 8, 4, 1, 'Dennis Bacsa', 'n/a', 45, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '60000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2242, 8, 4, 1, 'Christian Laurente Reyes ', 'n/a', 46, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '14500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2243, 8, 4, 1, 'Joselito Noza ', 'n/a', 47, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '52000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2244, 8, 4, 1, 'Lino Bundalian ', 'n/a', 48, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2245, 8, 4, 1, 'Christian Avanzado', 'n/a', 48, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '15000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2246, 8, 4, 1, 'Loreto Marquez', 'n/a', 49, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2247, 8, 4, 1, 'Danilo Chumacera ', 'n/a', 50, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2248, 8, 5, 1, 'Esperanza Noza', 'n/a', 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '9000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2249, 8, 5, 1, 'Belen Noza ', 'n/a', 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '9000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2250, 8, 5, 1, 'Benito Enseo ', 'n/a', 2, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '11000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2251, 8, 5, 1, 'Noemi Capristrano Enseo ', 'n/a', 3, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '45000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2252, 8, 5, 1, 'Veronica Brosas Herrera ', 'n/a', 4, 6, 0, 1, 4, 1, 0, 1, 0, 0, 1, 0, '40000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2253, 8, 5, 1, 'Jenny Enseo Terenal', 'n/a', 5, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '30000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2254, 8, 5, 1, 'Ermelyn Chumacera ', 'n/a', 6, 2, 0, 0, 2, 0, 0, 1, 0, 0, 1, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2255, 8, 5, 1, 'Ricky Miguel  Castillo ', 'n/a', 6, 4, 1, 1, 2, 0, 0, 0, 0, 0, 3, 0, '18000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2256, 8, 5, 1, 'Evelyn Pamposo ', 'n/a', 7, 4, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2257, 8, 5, 1, 'Helen Bundalian ', 'n/a', 8, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '12000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2258, 8, 5, 1, 'Julieta Biglete ', 'n/a', 9, 4, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '7500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2259, 8, 5, 1, 'Helen Villanueva ', 'n/a', 9, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, '3500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2260, 8, 5, 1, 'Saverign Avanzado ', 'n/a', 9, 3, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2261, 8, 5, 1, 'Rolando Corcega ', 'n/a', 10, 4, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, '7500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2262, 8, 5, 1, 'Gloria Corcega ', 'n/a', 11, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '10000', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2263, 8, 5, 1, 'Luviminda Bugtong ', 'n/a', 12, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2264, 8, 5, 1, 'Juanito Chovas Exconde ', 'n/a', 13, 4, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, '7500', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2265, 8, 5, 1, 'Daisy Bacod Ramos', 'n/a', 14, 3, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, '40000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2266, 8, 5, 1, 'Justine Bacod', 'n/a', 15, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '13500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2267, 8, 5, 1, 'Mel Arvin Ricaforte Bacod', 'n/a', 16, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '35750', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2268, 8, 5, 1, 'Fe Bundalian ', 'n/a', 17, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '7500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2269, 8, 5, 1, 'Ednalyn Alip ', 'n/a', 18, 4, 0, 0, 3, 1, 0, 1, 0, 0, 1, 0, '3500', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2270, 8, 5, 1, 'Amor Chozas', 'n/a', 19, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '15000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2271, 8, 5, 1, 'Emeciana Chumacera', 'n/a', 20, 4, 0, 0, 3, 1, 0, 0, 1, 0, 1, 0, '7500', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2272, 8, 5, 1, 'Emilia Fule Chumacera ', 'n/a', 21, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, '7500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2273, 8, 5, 1, 'Willy Magapi', 'w', 22, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '17500', 3, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2274, 8, 5, 1, 'Enrico Austria ', 'n/a', 23, 6, 0, 2, 4, 0, 0, 0, 3, 1, 1, 0, '35000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2275, 8, 5, 1, 'Manolito Magapi', 'n/a', 24, 3, 1, 2, 0, 0, 0, 1, 0, 0, 1, 0, '9800', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2276, 8, 5, 1, 'Romulo Megapi', 'n/a', 25, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2277, 8, 5, 1, 'Dennis Ressureccion ', 'n/a', 26, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '10000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2278, 8, 5, 1, 'Oredenita Anlacan ', 'n/a', 27, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2279, 8, 5, 1, 'Erwin Pelagio ', 'n/a', 28, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2280, 8, 5, 1, 'Joselito Avanzado', 'n/a', 29, 5, 1, 2, 2, 0, 0, 1, 1, 0, 1, 0, '25000', 0, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2281, 8, 5, 1, 'Jojit Caparas Avanzado ', 'n/a', 30, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '14000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2282, 8, 5, 1, 'Justine Belda Avanzado ', 'n/a', 30, 4, 2, 0, 2, 0, 0, 1, 0, 0, 3, 0, '14000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2283, 8, 5, 1, 'Juanita Caparas', 'n/a', 31, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2284, 8, 5, 1, 'Ernie Caparas Avanzado ', 'n/a', 31, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '15000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2285, 8, 5, 1, 'Renato Cuevas ', 'n/a', 32, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2286, 8, 5, 1, 'Rolen Chumacera ', 'n/a', 32, 5, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, '12500', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2287, 8, 5, 1, 'Loreta Chumacera ', 'n/a', 33, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '5000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2288, 8, 5, 1, 'Imelda Chumacera Sarungay ', 'n/a', 33, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, '40000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2289, 8, 5, 1, 'Bernie Arcedera ', 'n/a', 34, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '12500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2290, 8, 5, 1, 'Leonardo Sese ', 'n/a', 35, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2291, 8, 5, 1, 'Cesar Garcia Reyes ', 'n/a', 36, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '25000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2292, 8, 5, 1, 'Carmen Liwanag Reyes', 'n/a', 37, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2293, 8, 5, 1, 'Aldrin Chumacera ', 'n/a', 38, 4, 0, 1, 3, 0, 0, 1, 0, 1, 1, 0, '45000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2294, 8, 5, 1, 'Byron Alacan Tepia ', 'n/a', 39, 8, 1, 2, 5, 0, 0, 0, 2, 2, 1, 0, '13500', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2295, 8, 5, 1, 'Raymond Colimbino (magulo)', 'n/a', 40, 8, 0, 3, 3, 2, 0, 2, 3, 0, 1, 0, '38000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2296, 8, 5, 1, 'Edgard Sutarez ', 'n/a', 41, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '12500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2297, 8, 5, 1, 'Marlon Contillo ', 'n/a', 42, 6, 2, 0, 4, 0, 0, 0, 0, 2, 1, 0, '13500', 2, 1, '2023-01-08', '2023-01-08 17:13:10');
INSERT INTO `pms_representative` (`representative_aid`, `representative_eval_id`, `representative_purok_id`, `representative_is_active`, `representative_name`, `representative_contact`, `representative_house_number`, `representative_total_people`, `representative_total_underage`, `representative_total_midage`, `representative_total_adult`, `representative_total_seniors`, `representative_total_pwd`, `representative_total_elem`, `representative_total_highschool`, `representative_total_college`, `representative_household_living_id`, `representative_is_in_danger_area`, `representative_monthly_income`, `representative_total_able_work`, `representative_total_employed`, `representative_created`, `representative_datetime`) VALUES
(2298, 8, 5, 1, 'Lina Carolina', 'n/a', 43, 9, 0, 4, 5, 0, 0, 2, 2, 3, 1, 0, '35000', 5, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2299, 8, 5, 1, 'Marfie Contillo (magulo)', 'n/a', 44, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '12500', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2300, 8, 5, 1, 'Marcelino Contillo ', 'n/a', 45, 4, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, '11000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2301, 8, 5, 1, 'William Franco Sr', 'n/a', 46, 6, 0, 2, 2, 2, 0, 0, 2, 0, 1, 0, '18000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2302, 8, 5, 1, 'Felix ', 'n/a', 47, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2303, 8, 5, 1, 'Peter Bumagat ', 'n/a', 48, 6, 0, 2, 3, 1, 0, 0, 2, 1, 1, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2304, 8, 5, 1, 'Raul Cuevas ', 'n/a', 49, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '13000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2305, 8, 5, 1, 'John Carlos ', 'n/a', 50, 5, 0, 3, 2, 0, 0, 1, 2, 0, 1, 0, '15000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2306, 8, 6, 1, 'Cecilia Supnet ', 'n/a', 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '7500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2307, 8, 6, 1, 'Gerardo Mabiling ', 'n/a', 2, 8, 1, 3, 5, 0, 0, 1, 2, 2, 1, 0, '12000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2308, 8, 6, 1, 'Romeo Reyes ', 'n/a', 3, 4, 0, 1, 3, 0, 0, 0, 1, 1, 1, 0, '5000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2309, 8, 6, 1, 'Carlito Reyes ', 'n/a', 4, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2310, 8, 6, 1, 'Leony Reyes', 'n/a', 4, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '25000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2311, 8, 6, 1, 'Rommel Vinas', 'n/a', 5, 5, 0, 3, 2, 0, 0, 2, 1, 0, 1, 0, '18000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2312, 8, 6, 1, 'Lolita Chozas', 'n/a', 6, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '28000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2313, 8, 6, 1, 'Gloria Arevalo ', 'n/a', 7, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '18000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2314, 8, 6, 1, 'Monet Arevalo ', 'n/a', 7, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '4500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2315, 8, 6, 1, 'Irish Supnet ', 'n/a', 8, 3, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, '47000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2316, 8, 6, 1, 'Dionisio Fernandez', 'n/a', 9, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '25000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2317, 8, 6, 1, 'Elsa Bacod ', 'n/a', 10, 3, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, '5000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2318, 8, 6, 1, 'Zeus Austria ', 'n/a', 11, 5, 0, 1, 4, 0, 0, 0, 1, 1, 1, 0, '13000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2319, 8, 6, 1, 'Edelmundo Mendoza', 'n/a', 12, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2320, 8, 6, 1, 'Teodulfo Palencia', 'n/a', 13, 5, 0, 1, 3, 1, 0, 0, 1, 1, 1, 0, '5000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2321, 8, 6, 1, 'Arman Anlacan ', 'n/a', 14, 3, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2322, 8, 6, 1, 'Gabriel Borres', 'n/a', 15, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2323, 8, 6, 1, 'Christopher Borres', 'n/a', 15, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '22000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2324, 8, 6, 1, 'Luningning Alcantara', 'n/a', 16, 6, 1, 0, 3, 2, 0, 0, 0, 1, 1, 0, '11000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2325, 8, 6, 1, 'Jhonn Macuha', 'n/a', 17, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '9000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2326, 8, 6, 1, 'Jovilion Capunpon ', 'n/a', 18, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '9500', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2327, 8, 6, 1, 'Carolina Caray ', 'n/a', 19, 6, 2, 1, 3, 0, 0, 0, 1, 0, 1, 0, '13000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2328, 8, 6, 1, 'Anabel Mirambel ', 'n/a', 20, 2, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, '25000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2329, 8, 6, 1, 'Regina Supnet ', 'n/a', 21, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '42000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2330, 8, 6, 1, 'Rommel Reyes ', 'n/a', 22, 5, 0, 2, 2, 1, 0, 0, 0, 0, 1, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2331, 8, 6, 1, 'Dean Webster Benitez', 'n/a', 23, 3, 1, 0, 2, 0, 0, 0, 2, 1, 1, 0, '40000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2332, 8, 6, 1, 'Ronaldo Arago ', 'n/a', 24, 6, 1, 2, 3, 0, 0, 1, 1, 1, 1, 0, '5000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2333, 8, 6, 1, 'Ian Botona ', 'n/a', 25, 5, 1, 1, 2, 1, 0, 0, 1, 0, 1, 0, '12000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2334, 8, 6, 1, 'Marvin Evangelista', 'n/a', 26, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '6000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2335, 8, 6, 1, 'Manny Guttierez', 'n/a', 27, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '7000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2336, 8, 6, 1, 'Enrique Manuel ', 'n/a', 28, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '10000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2337, 8, 6, 1, 'Gloribel Marcaramdam  (magulo)', 'n/a', 28, 2, 0, 1, 1, 0, 1, 0, 0, 0, 3, 0, '0', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2338, 8, 6, 1, 'Benjie Magapi', 'n/a', 29, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, '9000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2339, 8, 6, 1, 'Mark Reniel Alimagno ', 'n/a', 30, 4, 0, 1, 3, 0, 0, 0, 0, 0, 1, 0, '10000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2340, 8, 6, 1, 'Vicente Oliveros ', 'n/a', 31, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, '8000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2341, 8, 6, 1, 'Joshua Oliveros ', 'n/a', 31, 2, 0, 0, 2, 0, 0, 2, 0, 1, 3, 0, '0', 2, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2342, 8, 6, 1, 'Marita Liwanag ', 'n/a', 32, 5, 1, 2, 2, 0, 0, 1, 0, 0, 1, 0, '40000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2343, 8, 6, 1, 'Demetrio Rivero ', 'n/a', 33, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '28000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2344, 8, 6, 1, 'Frisco Hipolito ', 'n/a', 34, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '11000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2345, 8, 6, 1, 'Jojo Cuentas ', 'n/a', 35, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '24000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2346, 8, 6, 1, 'Jesus Ramon Dorado ', 'n/a', 36, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '10000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2347, 8, 6, 1, 'Raymond Cosico ', 'n/a', 37, 5, 1, 1, 2, 1, 0, 2, 0, 0, 1, 0, '10000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2348, 8, 6, 1, 'Rogidor Noza Mabiling ', 'n/a', 38, 4, 0, 0, 4, 0, 0, 0, 2, 0, 1, 0, '40000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2349, 8, 6, 1, 'Archie Cuentas ', 'n/a', 39, 4, 0, 1, 3, 0, 0, 1, 1, 0, 1, 0, '18000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2350, 8, 6, 1, 'Irvin Bungualan ', 'n/a', 40, 3, 0, 1, 2, 0, 0, 0, 0, 0, 1, 0, '12500', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2351, 8, 6, 1, 'Angel Pantal ', 'n/a', 41, 8, 1, 1, 5, 1, 1, 1, 1, 2, 1, 0, '20000', 5, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2352, 8, 6, 1, 'Belen Reyes Exconde ', 'n/a', 42, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '5000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2353, 8, 6, 1, 'Alvin Reyes Exconde', 'n/a', 42, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '9750', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2354, 8, 6, 1, 'Edna Reyes Bundalian ', 'n/a', 43, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, '25000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2355, 8, 6, 1, 'Dexter Estrada ', 'n/a', 44, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, '12700', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2356, 8, 6, 1, 'Fe Marquez ', 'n/a', 45, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '5000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2357, 8, 6, 1, 'Avelino Bernabe ', 'n/a', 46, 5, 0, 1, 4, 0, 0, 1, 0, 1, 1, 0, '12000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2358, 8, 6, 1, 'Boyet Bumagat Cuentas ', 'n/a', 47, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '14000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2359, 8, 6, 1, 'Lloyd Reyes Aracena ', 'n/a', 48, 3, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, '12500', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2360, 8, 6, 1, 'Melchor Valido ', 'n/a', 49, 4, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, '50000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2361, 8, 6, 1, 'Jame Tayobong ', 'n/a', 50, 3, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, '29000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2362, 8, 1, 1, 'Jovan Platon', 'n/a', 3, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, '109700', 5, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2363, 8, 7, 1, 'Erlinda Cuentas', 'n/a', 1, 4, 0, 0, 2, 1, 0, 0, 1, 0, 1, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2364, 8, 7, 1, 'Joy Bueta Cuenta', 'n/a', 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '23000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2365, 8, 7, 1, 'Jonmun Cuentas', 'n/a', 2, 4, 0, 2, 2, 0, 0, 2, 0, 0, 3, 0, '10000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2366, 8, 7, 1, 'Amorsolo Tilan ', 'n/a', 3, 4, 1, 1, 2, 0, 0, 1, 0, 0, 1, 0, '32000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2367, 8, 7, 1, 'Estrella Famis', 'n/a', 4, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0, '26000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2368, 8, 7, 1, 'Marilou Romeno', 'n/a', 5, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '28000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2369, 8, 7, 1, 'Lonel Romeno ', 'n/a', 5, 4, 2, 1, 1, 0, 0, 0, 2, 0, 3, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2370, 8, 7, 1, 'Yolanda Munlacan', 'n/a', 6, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '18000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2371, 8, 7, 1, 'Jasmin Munlacan ', 'n/a', 6, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, '9000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2372, 8, 7, 1, 'Victor Munlacan ', 'n/a', 7, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, '3000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2373, 8, 7, 1, 'Arvin Munlacan ', 'n/a', 8, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2374, 8, 7, 1, 'Rizza Munlacan ', 'n/a', 8, 3, 1, 0, 2, 0, 0, 1, 0, 0, 3, 0, '26000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2375, 8, 7, 1, 'Noel Munlacan ', 'n/a', 9, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '32000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2376, 8, 7, 1, 'Edgar Eduante', 'n/a', 10, 4, 0, 1, 3, 0, 0, 0, 1, 0, 1, 0, '45000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2377, 8, 7, 1, 'Edward Eduante', 'n/a', 11, 5, 2, 1, 2, 0, 0, 1, 0, 0, 1, 0, '16000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2378, 8, 7, 1, 'Florante Legaspi', 'n/a', 12, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '15000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2379, 8, 7, 1, 'Jayson Cura', 'n/a', 13, 5, 0, 0, 4, 1, 0, 0, 0, 0, 1, 0, '13000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2380, 8, 7, 1, 'Nemita Bundalian ', 'n/a', 14, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2381, 8, 7, 1, 'Ronilo Cura ', 'n/a', 15, 3, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, '13000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2382, 8, 7, 1, 'Rymo Alcantara', 'n/a', 15, 3, 0, 2, 1, 0, 0, 0, 1, 0, 3, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2383, 8, 7, 1, 'Hero Bundalian ', 'n/a', 16, 4, 1, 1, 2, 0, 0, 2, 0, 0, 1, 0, '24000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2384, 8, 7, 1, 'Leonardo Custodio', 'n/a', 17, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '14000', 1, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2385, 8, 7, 1, 'Emma Alimagno ', 'n/a', 18, 2, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, '3000', 1, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2386, 8, 7, 1, 'Jerwin Alimagno ', 'n/a', 19, 4, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, '24000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2387, 8, 7, 1, 'Elma Alimagno', 'n/a', 20, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2388, 8, 7, 1, 'Reynalyn Aguila ', 'n/a', 20, 4, 0, 1, 3, 0, 0, 1, 0, 1, 3, 0, '100000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2389, 8, 7, 1, 'Allan Panganiban ', 'n/a', 21, 4, 0, 2, 2, 0, 0, 2, 0, 0, 1, 0, '48000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2390, 8, 7, 1, 'Erlita Cosico', 'n/a', 22, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '32000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2391, 8, 7, 1, 'Rodelo Obal ', 'n/a', 23, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '13000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2392, 8, 7, 1, 'Mamita Emperial ', 'n/a', 24, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, '3000', 0, 0, '2023-01-08', '2023-01-08 17:13:10'),
(2393, 8, 7, 1, 'Francis Brigario', 'n/a', 24, 5, 2, 1, 2, 0, 0, 2, 1, 0, 3, 0, '12000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2394, 8, 7, 1, 'Lenar Belda ', 'n/a', 25, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '17000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2395, 8, 7, 1, 'Somov Villaviconcio', 'n/a', 25, 3, 0, 1, 2, 0, 0, 0, 1, 0, 3, 0, '17000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2396, 8, 7, 1, 'Jayson Belda ', 'n/a', 26, 7, 1, 4, 2, 0, 0, 2, 2, 0, 1, 0, '19000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2397, 8, 7, 1, 'Anthony Belda ', 'n/a', 27, 3, 0, 2, 1, 0, 0, 0, 2, 0, 1, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2398, 8, 7, 1, 'Lorania Aquilo ', 'n/a', 28, 4, 0, 3, 1, 0, 0, 0, 3, 0, 1, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2399, 8, 7, 1, 'Nelita Santos', 'n/a', 29, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '26000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2400, 8, 7, 1, 'Marina Carpio ', 'n/a', 30, 4, 0, 2, 1, 1, 0, 0, 2, 0, 1, 0, '25000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2401, 8, 7, 1, 'Elinio Escala', 'n/a', 311, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '36000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2402, 8, 7, 1, 'Christian Africa ', 'n/a', 32, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '33000', 3, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2403, 8, 7, 1, 'Glumort Bundalian ', 'n/a', 33, 10, 0, 5, 5, 0, 0, 2, 2, 1, 1, 0, '56000', 8, 4, '2023-01-08', '2023-01-08 17:13:10'),
(2404, 8, 7, 1, 'Menandro Dela Cruz', 'n/a', 34, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '34000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2405, 8, 7, 1, 'Arvin Pumupla', 'n/a', 34, 7, 0, 6, 1, 0, 0, 3, 3, 0, 3, 0, '15000', 7, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2406, 8, 7, 1, 'Rodolfo Bundalian ', 'n/a', 35, 5, 0, 2, 3, 0, 0, 1, 1, 1, 1, 0, '13000', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2407, 8, 7, 1, 'Nancy Ybasan  ', 'n/a', 36, 4, 0, 0, 4, 0, 0, 0, 0, 1, 1, 0, '29000', 4, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2408, 8, 7, 1, 'Aldrin Buenavista ', 'n/a', 37, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2409, 8, 7, 1, 'Zosimo Morales', 'n/a', 38, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '68000', 3, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2410, 8, 7, 1, 'John Santos ', 'n/a', 39, 3, 0, 1, 2, 0, 0, 0, 11, 1, 1, 0, '12000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2411, 8, 7, 1, 'Liticia Paterno ', 'n/a', 40, 3, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2412, 8, 7, 1, 'Emerson Capistrano ', 'n/a', 41, 6, 0, 1, 5, 0, 0, 0, 1, 1, 1, 0, '21000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2413, 8, 7, 1, 'Idelo Choms', 'n/a', 42, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, '30000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2414, 8, 7, 1, 'Eldie Choms', 'n/a', 43, 4, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, '27000', 4, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2415, 8, 7, 1, 'Benly Roa ', 'n/a', 44, 6, 0, 4, 2, 0, 0, 2, 2, 0, 1, 0, '21000', 5, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2416, 8, 7, 1, 'Yolanda Alimagno ', 'n/a', 45, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, '47000', 3, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2417, 8, 7, 1, 'Rosita Chovas ', 'n/a', 46, 2, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, '13000', 2, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2418, 8, 7, 1, 'Elmerito Chovas', 'n/a', 47, 6, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, '61000', 6, 3, '2023-01-08', '2023-01-08 17:13:10'),
(2419, 8, 7, 1, 'Nelson Boncayo ', 'n/a', 48, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, '47000', 2, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2420, 8, 7, 1, 'Ivy Boncayo ', 'n/a', 48, 4, 1, 1, 2, 0, 0, 1, 2, 0, 3, 0, '17000', 3, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2421, 8, 7, 1, 'Tirso Aquilo ', 'n/a', 49, 7, 0, 1, 5, 1, 0, 3, 2, 0, 1, 0, '26000', 7, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2422, 8, 7, 1, 'Godofredo Alimagno', 'n/a', 50, 7, 2, 2, 3, 0, 0, 2, 1, 1, 1, 0, '28000', 6, 2, '2023-01-08', '2023-01-08 17:13:10'),
(2423, 8, 1, 1, 'Wendell Grenas', 'n/a', 2, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, '212310', 4, 1, '2023-01-08', '2023-01-08 17:13:10'),
(2424, 8, 1, 1, 'Reynaldo Nogus', 'n/a', 5, 5, 0, 1, 3, 1, 0, 1, 0, 0, 1, 0, '12000', 4, 1, '2023-01-08', '2023-01-08 17:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `pms_sitio`
--

CREATE TABLE `pms_sitio` (
  `sitio_aid` int(11) NOT NULL,
  `sitio_is_active` tinyint(1) NOT NULL,
  `sitio_name` varchar(200) NOT NULL,
  `sitio_created` varchar(20) NOT NULL,
  `sitio_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_sitio`
--

INSERT INTO `pms_sitio` (`sitio_aid`, `sitio_is_active`, `sitio_name`, `sitio_created`, `sitio_datetime`) VALUES
(1, 1, 'Purok 1', '2022-12-17', '0000-00-00 00:00:00'),
(2, 1, 'Purok 2', '2022-12-17', '2022-12-17 14:15:48'),
(3, 1, 'Purok 3', '2022-12-17', '2022-12-17 14:16:05'),
(4, 1, 'Purok 4', '2022-12-17', '2022-12-17 14:16:33'),
(5, 1, 'Purok 5', '2022-12-17', '0000-00-00 00:00:00'),
(6, 1, 'Purok 6', '2022-12-17', '2022-12-17 14:16:54'),
(7, 1, 'Purok 7', '2022-12-17', '2022-12-17 14:17:02');

-- --------------------------------------------------------

--
-- Table structure for table `pms_unemployment_criteria`
--

CREATE TABLE `pms_unemployment_criteria` (
  `unemployment_criteria_aid` int(11) NOT NULL,
  `unemployment_criteria_is_active` tinyint(1) NOT NULL,
  `unemployment_criteria_program_id` int(11) NOT NULL,
  `unemployment_criteria_range_from` varchar(16) NOT NULL,
  `unemployment_criteria_range_to` varchar(16) NOT NULL,
  `unemployment_criteria_category` varchar(32) NOT NULL,
  `unemployment_criteria_created` varchar(32) NOT NULL,
  `unemployment_criteria_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_unemployment_criteria`
--

INSERT INTO `pms_unemployment_criteria` (`unemployment_criteria_aid`, `unemployment_criteria_is_active`, `unemployment_criteria_program_id`, `unemployment_criteria_range_from`, `unemployment_criteria_range_to`, `unemployment_criteria_category`, `unemployment_criteria_created`, `unemployment_criteria_datetime`) VALUES
(1, 1, 6, '5', '100', 'unemployment', '2022-12-29', '2022-12-29 23:12:35'),
(2, 1, 2, '10', '100', 'unemployment', '2022-12-29', '2022-12-29 23:14:50'),
(3, 1, 3, '10', '100', 'unemployment', '2022-12-29', '2022-12-29 23:15:30'),
(4, 1, 4, '10', '100', 'unemployment', '2022-12-29', '2022-12-29 23:16:39');

-- --------------------------------------------------------

--
-- Table structure for table `pms_unemployment_programs`
--

CREATE TABLE `pms_unemployment_programs` (
  `unemployment_program_aid` int(11) NOT NULL,
  `unemployment_program_is_active` tinyint(1) NOT NULL,
  `unemployment_program_name` varchar(255) NOT NULL,
  `unemployment_program_description` text NOT NULL,
  `unemployment_program_contact_person` varchar(255) NOT NULL,
  `unemployment_program_contact_number` varchar(16) NOT NULL,
  `unemployment_program_contact_email` varchar(255) NOT NULL,
  `unemployment_program_created` varchar(32) NOT NULL,
  `unemployment_program_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_unemployment_programs`
--

INSERT INTO `pms_unemployment_programs` (`unemployment_program_aid`, `unemployment_program_is_active`, `unemployment_program_name`, `unemployment_program_description`, `unemployment_program_contact_person`, `unemployment_program_contact_number`, `unemployment_program_contact_email`, `unemployment_program_created`, `unemployment_program_datetime`) VALUES
(1, 1, 'JobStreet by SEEK', 'One of Asia’s leading online employment marketplaces. Helping facilicate the matching and communication of job opportunities between jobseekers and employer, in Malayia, Philippines, Singapore, Indonesia and Vietnam.', 'N/A', '(https://www.job', 'dfg@gmial.com', '2022-12-01', '2023-01-02 22:18:12'),
(2, 1, 'Project KASAMA ', 'KASAMA is a project of the Department of Labor and Employment (DOLE) which aims to contribute to the prevention and elimination of child labor by providing families of child laborers access to decent livelihood opportunities for enhanced income.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:41:09'),
(3, 1, 'Nego-Kart (Negosyo sa Kariton) ', 'Nego-Kart (Negosyo sa Kariton) is a project for ambulant vendors on major cities of the country. The project will assist the ambulant vendors in making their existing livelihood undertakings grow into profitable and sustainable business; thus, making their income level at par with that of the minimum wage earners, at the least.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:41:51'),
(4, 1, 'DOLE Kabuhayan (DK) ', 'The DOLE Kabuhayan (DK) Starter KITS Project is a livelihood formation strategy that is intended to bring about improved socio-economic well-being of workers in the informal economy, in groups/sectors with special concerns, and displaced wage workers (local and overseas) and their families. The beneficiaries will be required to enroll in Social Protection Services like SSS, Philhealth and other alternative social protection schemes as soon as the business cycles allow it.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-29 22:29:32'),
(5, 1, 'Tulong para sa Magsasaka', 'n/a', 'Barangay Chairman', 'n/a', 'n/a@gmail.com', '2022-12-29', '2022-12-29 23:07:49'),
(6, 1, 'Cash/Food for Work', 'This service provides financial assistance or relief goods to individuals or families affected by the disaster in exchange for their participation in activities related to the improvement of their communities.', 'DSWD', 'n/a', 'n/a@gmail.com', '2022-12-29', '2022-12-29 23:11:19');

-- --------------------------------------------------------

--
-- Table structure for table `pms_users`
--

CREATE TABLE `pms_users` (
  `users_aid` int(11) NOT NULL,
  `users_is_active` tinyint(1) NOT NULL,
  `users_key` varchar(255) NOT NULL,
  `users_password` varchar(255) NOT NULL,
  `users_fname` varchar(55) NOT NULL,
  `users_mname` varchar(55) NOT NULL,
  `users_lname` varchar(55) NOT NULL,
  `users_email` varchar(200) NOT NULL,
  `users_phone` varchar(20) NOT NULL,
  `users_role` varchar(16) NOT NULL,
  `users_photo` varchar(255) NOT NULL,
  `users_created` varchar(20) NOT NULL,
  `users_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_users`
--

INSERT INTO `pms_users` (`users_aid`, `users_is_active`, `users_key`, `users_password`, `users_fname`, `users_mname`, `users_lname`, `users_email`, `users_phone`, `users_role`, `users_photo`, `users_created`, `users_datetime`) VALUES
(27, 1, '', '$2y$10$eUnbbe4/uTzKZR2lw/15E.B5r2MEjNktcfmJS9uTIhADeqZ9phgIO', 'Mark Ryan', 'Bueno', 'Merin', 'merin.ryanmark@gmail.com', '09491040057', 'Admin', 'vhong_2020-12-30_00-12-55.jpg', '2022-09-22', '2023-01-05 22:49:08'),
(36, 1, '4bd26ae1045b057340fe92e8c3ff6cf59a7946c18a4ad9ec38e7daed24255d2c', '', 'Meirejoy', 'Alina', 'Maralit', 'ajoymaralit@gmail.com', '09092139710', 'Admin', '', '2022-12-07', '2022-12-29 22:29:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_barangay`
--
ALTER TABLE `pms_barangay`
  ADD PRIMARY KEY (`barangay_aid`);

--
-- Indexes for table `pms_evaluation_list`
--
ALTER TABLE `pms_evaluation_list`
  ADD PRIMARY KEY (`evaluation_list_aid`);

--
-- Indexes for table `pms_household_criteria`
--
ALTER TABLE `pms_household_criteria`
  ADD PRIMARY KEY (`household_criteria_aid`);

--
-- Indexes for table `pms_household_programs`
--
ALTER TABLE `pms_household_programs`
  ADD PRIMARY KEY (`household_program_aid`);

--
-- Indexes for table `pms_income_criteria`
--
ALTER TABLE `pms_income_criteria`
  ADD PRIMARY KEY (`income_criteria_aid`);

--
-- Indexes for table `pms_income_programs`
--
ALTER TABLE `pms_income_programs`
  ADD PRIMARY KEY (`income_program_aid`);

--
-- Indexes for table `pms_monthly_income`
--
ALTER TABLE `pms_monthly_income`
  ADD PRIMARY KEY (`monthly_income_aid`);

--
-- Indexes for table `pms_population_criteria`
--
ALTER TABLE `pms_population_criteria`
  ADD PRIMARY KEY (`population_criteria_aid`);

--
-- Indexes for table `pms_population_programs`
--
ALTER TABLE `pms_population_programs`
  ADD PRIMARY KEY (`population_program_aid`);

--
-- Indexes for table `pms_representative`
--
ALTER TABLE `pms_representative`
  ADD PRIMARY KEY (`representative_aid`);

--
-- Indexes for table `pms_sitio`
--
ALTER TABLE `pms_sitio`
  ADD PRIMARY KEY (`sitio_aid`);

--
-- Indexes for table `pms_unemployment_criteria`
--
ALTER TABLE `pms_unemployment_criteria`
  ADD PRIMARY KEY (`unemployment_criteria_aid`);

--
-- Indexes for table `pms_unemployment_programs`
--
ALTER TABLE `pms_unemployment_programs`
  ADD PRIMARY KEY (`unemployment_program_aid`);

--
-- Indexes for table `pms_users`
--
ALTER TABLE `pms_users`
  ADD PRIMARY KEY (`users_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_barangay`
--
ALTER TABLE `pms_barangay`
  MODIFY `barangay_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pms_evaluation_list`
--
ALTER TABLE `pms_evaluation_list`
  MODIFY `evaluation_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pms_household_criteria`
--
ALTER TABLE `pms_household_criteria`
  MODIFY `household_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pms_household_programs`
--
ALTER TABLE `pms_household_programs`
  MODIFY `household_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pms_income_criteria`
--
ALTER TABLE `pms_income_criteria`
  MODIFY `income_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pms_income_programs`
--
ALTER TABLE `pms_income_programs`
  MODIFY `income_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pms_monthly_income`
--
ALTER TABLE `pms_monthly_income`
  MODIFY `monthly_income_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_population_criteria`
--
ALTER TABLE `pms_population_criteria`
  MODIFY `population_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pms_population_programs`
--
ALTER TABLE `pms_population_programs`
  MODIFY `population_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pms_representative`
--
ALTER TABLE `pms_representative`
  MODIFY `representative_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2495;

--
-- AUTO_INCREMENT for table `pms_sitio`
--
ALTER TABLE `pms_sitio`
  MODIFY `sitio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_unemployment_criteria`
--
ALTER TABLE `pms_unemployment_criteria`
  MODIFY `unemployment_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pms_unemployment_programs`
--
ALTER TABLE `pms_unemployment_programs`
  MODIFY `unemployment_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pms_users`
--
ALTER TABLE `pms_users`
  MODIFY `users_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
