-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2022 at 05:19 PM
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
(5, 'Santa Elena', 'San Pablo City', 'Laguna', 'Mark Ryan Merin', '09491040057', 'Meirejoy Marlait', '09662993797', 'download.jfif', '2022-11-23', '2022-11-23 15:14:14');

-- --------------------------------------------------------

--
-- Table structure for table `pms_evaluation_list`
--

CREATE TABLE `pms_evaluation_list` (
  `evaluation_list_aid` int(11) NOT NULL,
  `evaluation_list_is_active` tinyint(1) NOT NULL,
  `evaluation_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_evaluation_list`
--

INSERT INTO `pms_evaluation_list` (`evaluation_list_aid`, `evaluation_list_is_active`, `evaluation_list_datetime`) VALUES
(3, 1, '2022-12-01 01:44:37');

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
(1, 1, 'HOUSING ASSISTANCE FOR CALAMITY VICTIMS', 'The program is intended to respond to the housing need of low and marginal-income and/or informal settler families for permanent shelter affected by calamities such as typhoons, landslides, earthquake, and fires for relocation to safe areas', 'N/A', 'N/A', 'sdf@gmial.com', '2022-12-01', '2022-12-01 02:43:41'),
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
(1, 1, 'Assistance to individuals and Families in Crisis Situation ', 'This is the provision of immediate assistance to individuals and families who are under pressure by providing relief packs, medical assistance, education assistance, transportation or burial.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:33:31'),
(2, 1, 'Cash/Food for Work ', 'This service provides financial assistance or relief goods to individuals or families affected by the disaster in exchange for their participation in activities related to the improvement of their communities.', 'DSWD', 'DSWD', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:34:34'),
(3, 1, 'Social Pension ', 'The purpose of this program is to increase the income of poor and sick senior citizens who receive no other help from relatives or pensions from other institutions. The program provides Php 1,500 every three months for seniors to use for their needs such as medicine and food.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:35:53'),
(4, 1, 'Suplementary Feeding Program ', 'The purpose of the program is to provide additional food to children enrolled in Day Care Centers or Early Childhood Care and Development Centers. Children will receive food for 120 days. In addition to healthy food, children are also taught good manners and deeds related to food.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:37:12'),
(5, 1, 'Sustainable Livelihood Program (SLP)', 'This is the DSWD program that aims to increase the socio-economic status of its participants. It supports small businesses or microenterprises to grow their livelihoods. The SLP can also provide assistance through Employment Facilitation for program participants who have skills or knowledge that can be used for work. Apart from the investment, SLP also provides Skills Training.', 'DSWD', 'N/A', 'gxdfgsdf@gmial.com', '2022-12-01', '2022-12-01 02:37:50');

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
(1, 1, 1, '0', '5', 'Population', '2022-12-01', '2022-12-01 01:39:27');

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
(1, 1, 'Family Planning', 'Family Planning in particular is the ability to prevent pregnancies safely through the use of contraception. Such ability is crucial to women who wish to avoid high-risk pregnancies, to couples who wish to manage the number and spacing of their children, and to men and women who wish to share equitably the burdens of fertility and child. Based on DOH definition, family planning (FP) is part of reproductive health (RH).', 'POPCOM', 'N/A', 'ASD@GMAIL.COM', '2022-12-01', '2022-12-01 01:29:45'),
(2, 1, 'Adolescent Health and Youth Development', 'The AHYD component of the PPMP support adolescent programs aimed at providing information that will help them understand their sexuality, develop the right values in them, help them make responsible decisions and prepare them for responsible adulthood and parenthood.', 'POPCOM', 'N/A', 'asdsaf@fgmil.com', '2022-12-01', '2022-12-01 01:31:11'),
(3, 1, 'Population and Development Integration (POPDEV)', 'The POPDEV component of the PPMP entail initiatives to build capabilities to integrate population variables, including migration and urbanization, into development policies, plans and programs at the national, regional and local levels.', 'POPCOM', 'n/a', 'asdsaf@fgmil.com', '2022-12-01', '2022-12-01 01:33:29');

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
(2, 3, 1, 1, 'Meirejoy Maralit', '09094558412', 1, 3, 0, 0, 1, 2, 0, 0, 0, 1, 1, 0, '43000', 3, 2, '2022-12-03', '2022-12-03 22:50:12'),
(3, 3, 1, 1, 'Mark Ryan Merin', '09491040057', 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 1, '17840', 2, 2, '2022-12-03', '2022-12-03 23:00:09'),
(4, 3, 1, 1, 'Bernadette Gutierrez', '09095478125', 3, 4, 0, 0, 4, 0, 0, 0, 0, 1, 1, 1, '10998', 4, 2, '2022-12-03', '2022-12-03 23:04:41'),
(5, 3, 1, 1, 'Janren Maralit', '09548724652', 4, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, '43000', 2, 2, '2022-12-03', '2022-12-03 23:13:17'),
(6, 3, 1, 1, 'Anna Hayashi', '09584123568', 5, 3, 0, 1, 2, 0, 0, 0, 1, 1, 2, 0, '74998', 2, 1, '2022-12-03', '2022-12-03 23:16:10'),
(7, 3, 1, 1, 'Jean Rose Ermino', '09524125254', 6, 7, 0, 4, 3, 0, 0, 3, 1, 1, 2, 1, '12500', 3, 2, '2022-12-03', '2022-12-03 23:18:36'),
(8, 3, 1, 1, 'Moses Mercado', '09563547848', 7, 4, 0, 1, 3, 0, 0, 0, 1, 1, 1, 1, '13200', 3, 1, '2022-12-03', '2022-12-03 23:20:23'),
(9, 3, 1, 1, 'Daisy Gutierrez', '09651242358', 8, 5, 1, 2, 2, 0, 0, 2, 0, 0, 1, 1, '12400', 2, 1, '2022-12-03', '2022-12-03 23:21:40'),
(10, 3, 1, 1, 'Norma Maralit', '09854236124', 9, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, '6400', 0, 0, '2022-12-03', '2022-12-03 23:23:51'),
(11, 3, 1, 1, 'Joed Mendoza', '09584514256', 10, 4, 0, 0, 4, 0, 0, 0, 0, 1, 1, 0, '16400', 3, 1, '2022-12-03', '2022-12-03 23:33:17'),
(12, 3, 1, 1, 'Paolo Xandro Manarang', '09562541254', 11, 5, 1, 0, 4, 0, 0, 0, 0, 0, 1, 1, '170000', 4, 4, '2022-12-03', '2022-12-03 23:39:06'),
(13, 3, 2, 1, 'Juan Dela Cruz', '09542154852', 12, 6, 1, 2, 2, 1, 0, 0, 2, 0, 1, 0, '45000', 2, 2, '2022-12-04', '2022-12-04 23:33:46'),
(14, 3, 2, 1, 'Rose Ann Reyes', '09215452589', 13, 3, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, '15000', 3, 2, '2022-12-04', '2022-12-04 23:35:26');

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
(1, 1, 'Purok 1', '2022-11-23', '2022-12-03 23:00:30'),
(2, 1, 'Purok 2', '2022-11-23', '2022-11-23 17:45:20'),
(3, 1, 'Purok 3', '2022-11-23', '2022-11-23 17:45:29'),
(4, 1, 'Purok 4', '2022-11-23', '2022-11-23 17:45:35'),
(5, 1, 'Purok 5', '2022-11-23', '2022-11-23 17:45:43'),
(6, 1, 'Purok 6', '2022-11-23', '2022-11-23 17:45:50');

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
(1, 1, 'JobStreet by SEEK', 'One of Asia’s leading online employment marketplaces. Helping facilicate the matching and communication of job opportunities between jobseekers and employer, in Malayia, Philippines, Singapore, Indonesia and Vietnam.', 'N/A', '(https://www.job', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:40:05'),
(2, 1, 'Project KASAMA ', 'KASAMA is a project of the Department of Labor and Employment (DOLE) which aims to contribute to the prevention and elimination of child labor by providing families of child laborers access to decent livelihood opportunities for enhanced income.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:41:09'),
(3, 1, 'Nego-Kart (Negosyo sa Kariton) ', 'Nego-Kart (Negosyo sa Kariton) is a project for ambulant vendors on major cities of the country. The project will assist the ambulant vendors in making their existing livelihood undertakings grow into profitable and sustainable business; thus, making their income level at par with that of the minimum wage earners, at the least.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:41:51'),
(4, 1, 'DOLE Kabuhayan (DK) ', 'The DOLE Kabuhayan (DK) Starter KITS Project is a livelihood formation strategy that is intended to bring about improved socio-economic well-being of workers in the informal economy, in groups/sectors with special concerns, and displaced wage workers (local and overseas) and their families. The beneficiaries will be required to enroll in Social Protection Services like SSS, Philhealth and other alternative social protection schemes as soon as the business cycles allow it.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:42:34');

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
(27, 1, '736b5d27b1b9eafbc08c458d0fd7f4d2c1f1df0079a8b2a90cd7760f9fc4b20b', '$2y$10$9ZFG7TAuJYP8UT3sankUg.00BmvMOj3ljt/l0ObfxxjEh7L7QjZUC', 'Mark Ryan', 'Bueno', 'Merin', 'merin.ryanmark@gmail.com', '09491040057', 'Admin', '1186539.png', '2022-09-22', '0000-00-00 00:00:00');

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
  MODIFY `barangay_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pms_evaluation_list`
--
ALTER TABLE `pms_evaluation_list`
  MODIFY `evaluation_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pms_household_criteria`
--
ALTER TABLE `pms_household_criteria`
  MODIFY `household_criteria_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pms_household_programs`
--
ALTER TABLE `pms_household_programs`
  MODIFY `household_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pms_income_criteria`
--
ALTER TABLE `pms_income_criteria`
  MODIFY `income_criteria_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pms_income_programs`
--
ALTER TABLE `pms_income_programs`
  MODIFY `income_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pms_monthly_income`
--
ALTER TABLE `pms_monthly_income`
  MODIFY `monthly_income_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_population_criteria`
--
ALTER TABLE `pms_population_criteria`
  MODIFY `population_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pms_population_programs`
--
ALTER TABLE `pms_population_programs`
  MODIFY `population_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pms_representative`
--
ALTER TABLE `pms_representative`
  MODIFY `representative_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `pms_sitio`
--
ALTER TABLE `pms_sitio`
  MODIFY `sitio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pms_unemployment_criteria`
--
ALTER TABLE `pms_unemployment_criteria`
  MODIFY `unemployment_criteria_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pms_unemployment_programs`
--
ALTER TABLE `pms_unemployment_programs`
  MODIFY `unemployment_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pms_users`
--
ALTER TABLE `pms_users`
  MODIFY `users_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
