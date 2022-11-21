-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2022 at 05:20 PM
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
(6, 1, 7, '5', '9', 'household', '2022-11-20', '2022-11-20 15:19:54'),
(7, 0, 8, '5', '9', 'household', '2022-11-20', '2022-11-20 15:20:27');

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
(1, 1, 'Sample namesasdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc  asdcxczvsvxc', 'Sample descriptions', 'Sample names', 'Sample numbers', 'sampleemail@gmail.coms', '2022-11-18', '2022-11-19 15:41:38'),
(2, 1, 'Sample nameas zxcved asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'Sample descripsdstion', 'Sample name', 'Sample number', 'sampleemail@gmail.com', '2022-11-18', '2022-11-19 16:17:57'),
(3, 0, 'weasdafsd asdcxczvsvxcasdcxczvsvxcxasdcxczvsvxc zxv ', 'fsdfasdfsd', 'fsdfcxvsdgf', 'gsdfsdcxa', 'asdsaf@fgmil.com', '2022-11-19', '2022-11-19 19:29:44'),
(4, 1, 'asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc', 'sdfzxcxvsrdfg', 'xzfsdzfczxv', 'sdgsdvfsd', 'fsdgdcvbsrfg@gmi.com', '2022-11-19', '2022-11-19 16:17:55'),
(5, 1, 'svxcvbfsgxcvsdasdcxczvsvxc asdcxczvsvxc asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'xvsdgbcvbf', 'bdfg bdfgdf', 'gfdgdfgfdhb', 'fdgdasdasdfgdfh@gmai.com', '2022-11-19', '2022-11-19 15:41:43'),
(6, 0, 'weasdafsdsdfsdfsd', 'sdvxcvdrs vsdf', 'gsd sdfg dvb', 'df gdcvdf gsdf', 'sdfs@gmail.com', '2022-11-19', '2022-11-19 18:02:28'),
(7, 1, 'ewqesdfsdfe', 'sfsdf wefsdf', ' sdfs gdfgsd', 'fsdfsdg dcgsd', 'sdf@gmial.com', '2022-11-19', '2022-11-19 18:02:41'),
(8, 1, 'ewqesdfsdfesdff', 'sdfsdf', 's gdfg dfgs', 'dfsfgfdg ', 'fsdfsdfg@mail.com', '2022-11-19', '2022-11-19 19:29:54');

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
(8, 1, 7, '4', '5', 'income', '2022-11-20', '2022-11-20 15:34:15'),
(9, 0, 2, '1', '5', 'income', '2022-11-20', '2022-11-20 15:34:51');

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
(1, 1, 'Sample namesasdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc  asdcxczvsvxc', 'Sample descriptions', 'Sample names', 'Sample numbers', 'sampleemail@gmail.coms', '2022-11-18', '2022-11-19 15:41:38'),
(2, 1, 'Sample nameas zxcved asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'Sample descripsdstion', 'Sample name', 'Sample number', 'sampleemail@gmail.com', '2022-11-18', '2022-11-19 16:17:57'),
(3, 1, 'weasdafsd asdcxczvsvxcasdcxczvsvxcxasdcxczvsvxc zxv ', 'fsdfasdfsd', 'fsdfcxvsdgf', 'gsdfsdcxa', 'asdsaf@fgmil.com', '2022-11-19', '2022-11-19 15:41:48'),
(4, 1, 'asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc', 'sdfzxcxvsrdfg', 'xzfsdzfczxv', 'sdgsdvfsd', 'fsdgdcvbsrfg@gmi.com', '2022-11-19', '2022-11-19 16:17:55'),
(5, 1, 'svxcvbfsgxcvsdasdcxczvsvxc asdcxczvsvxc asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'xvsdgbcvbf', 'bdfg bdfgdf', 'gfdgdfgfdhb', 'fdgdasdasdfgdfh@gmai.com', '2022-11-19', '2022-11-19 15:41:43'),
(6, 0, 'weasdafsdsdfsdfsd', 'sdvxcvdrs vsdf', 'gsd sdfg dvb', 'df gdcvdf gsdf', 'sdfs@gmail.com', '2022-11-19', '2022-11-19 19:30:08'),
(7, 1, 'asdasdasdfsd', 'fscvsdfs sdfd s', 'dfsd fsfsdfe', 'sdsfs sf', 'gxdfgsdf@gmial.com', '2022-11-19', '2022-11-19 19:30:34');

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
(1, 1, 7, '2', '5', 'Population', '2022-11-20', '2022-11-20 14:53:21'),
(2, 0, 7, '2', '5', 'Population', '2022-11-20', '2022-11-20 13:10:40'),
(3, 1, 7, '2', '6', 'Population', '2022-11-20', '2022-11-20 13:29:28'),
(4, 1, 7, '2', '4', 'Population', '2022-11-20', '2022-11-20 14:53:32'),
(5, 0, 4, '2', '5', 'Population', '2022-11-20', '2022-11-20 14:53:59');

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
(1, 1, 'Sample namesasdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc  asdcxczvsvxc', 'Sample descriptions', 'Sample names', 'Sample numbers', 'sampleemail@gmail.coms', '2022-11-18', '2022-11-19 15:41:38'),
(2, 1, 'Sample nameas zxcved asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'Sample descripsdstion', 'Sample name', 'Sample number', 'sampleemail@gmail.com', '2022-11-18', '2022-11-19 15:41:33'),
(3, 1, 'weasdafsd asdcxczvsvxcasdcxczvsvxcxasdcxczvsvxc zxv ', 'fsdfasdfsd', 'fsdfcxvsdgf', 'gsdfsdcxa', 'asdsaf@fgmil.com', '2022-11-19', '2022-11-19 15:41:48'),
(4, 1, 'asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc', 'sdfzxcxvsrdfg', 'xzfsdzfczxv', 'sdgsdvfsd', 'fsdgdcvbsrfg@gmi.com', '2022-11-19', '2022-11-19 15:41:21'),
(5, 1, 'svxcvbfsgxcvsdasdcxczvsvxc asdcxczvsvxc asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'xvsdgbcvbf', 'bdfg bdfgdf', 'gfdgdfgfdhb', 'fdgdasdasdfgdfh@gmai.com', '2022-11-19', '2022-11-19 15:41:43'),
(6, 0, 'weasdafsdsdfsdfsd', 'sdvxcvdrs vsdf', 'gsd sdfg dvb', 'df gdcvdf gsdf', 'sdfs@gmail.com', '2022-11-19', '2022-11-19 18:00:16'),
(7, 1, 'weasdafsdsdsadasd', 'sdfsdf', 'asdasdsa', 'dasdasdas', 'dasdasd@gmail.com', '2022-11-19', '2022-11-19 18:00:33');

-- --------------------------------------------------------

--
-- Table structure for table `pms_roles`
--

CREATE TABLE `pms_roles` (
  `roles_aid` int(11) NOT NULL,
  `roles_name` varchar(200) NOT NULL,
  `roles_created` varchar(20) NOT NULL,
  `roles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_roles`
--

INSERT INTO `pms_roles` (`roles_aid`, `roles_name`, `roles_created`, `roles_datetime`) VALUES
(1, 'Admin', '2022-09-18', '2022-09-18 22:06:43'),
(2, 'Official', '2022-09-18', '2022-09-18 22:33:29'),
(3, 'Citizen', '2022-09-18', '2022-09-18 22:33:35'),
(7, 'SK Chairman', '2022-09-28', '2022-09-28 00:31:34');

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
(2, 1, 'Sitio 1', '2022-09-26', '0000-00-00 00:00:00'),
(3, 0, 'Sitio 2', '2022-09-26', '2022-09-26 14:19:32'),
(4, 1, 'Sitio 3', '2022-09-26', '2022-09-26 14:19:40'),
(5, 1, 'Sitio 4', '2022-09-26', '2022-09-26 14:19:46'),
(6, 1, 'Sitio 5', '2022-09-26', '2022-09-26 14:19:51'),
(7, 1, 'Sitio 6', '2022-09-26', '2022-09-26 14:21:26'),
(8, 1, 'Sitio 7', '2022-09-28', '0000-00-00 00:00:00');

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
(1, 1, 7, '2', '5', 'unemployment', '2022-11-20', '2022-11-20 15:57:24');

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
(1, 1, 'Sample namesasdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc  asdcxczvsvxc', 'Sample descriptions', 'Sample names', 'Sample numbers', 'sampleemail@gmail.coms', '2022-11-18', '2022-11-19 15:41:38'),
(2, 1, 'Sample nameas zxcved asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'Sample descripsdstion', 'Sample name', 'Sample number', 'sampleemail@gmail.com', '2022-11-18', '2022-11-19 16:17:57'),
(3, 1, 'weasdafsd asdcxczvsvxcasdcxczvsvxcxasdcxczvsvxc zxv ', 'fsdfasdfsd', 'fsdfcxvsdgf', 'gsdfsdcxa', 'asdsaf@fgmil.com', '2022-11-19', '2022-11-19 15:41:48'),
(4, 1, 'asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc asdcxczvsvxc', 'sdfzxcxvsrdfg', 'xzfsdzfczxv', 'sdgsdvfsd', 'fsdgdcvbsrfg@gmi.com', '2022-11-19', '2022-11-19 19:34:20'),
(5, 1, 'svxcvbfsgxcvsdasdcxczvsvxc asdcxczvsvxc asdcxczvsvxcasdcxczvsvxc asdcxczvsvxc asdcxczvsvxc ', 'xvsdgbcvbf', 'bdfg bdfgdf', 'gfdgdfgfdhb', 'fdgdasdasdfgdfh@gmai.com', '2022-11-19', '2022-11-19 15:41:43'),
(6, 0, 'weasdafsdsdfsdfsd', 'sdvxcvdrs vsdf', 'gsd sdfg dvb', 'df gdcvdf gsdf', 'sdfs@gmail.com', '2022-11-19', '2022-11-19 19:34:04'),
(7, 1, 'fdgcbfghbcvbfd b', 'df fbfg dfgdtg', ' dgtfhfggd', 'grgdfgdrtg', 'dfg@gmial.com', '2022-11-19', '2022-11-19 19:34:18');

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
  `users_gender` varchar(20) NOT NULL,
  `users_role_id` varchar(5) NOT NULL,
  `users_photo` varchar(255) NOT NULL,
  `users_created` varchar(20) NOT NULL,
  `users_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_users`
--

INSERT INTO `pms_users` (`users_aid`, `users_is_active`, `users_key`, `users_password`, `users_fname`, `users_mname`, `users_lname`, `users_email`, `users_phone`, `users_gender`, `users_role_id`, `users_photo`, `users_created`, `users_datetime`) VALUES
(27, 1, '736b5d27b1b9eafbc08c458d0fd7f4d2c1f1df0079a8b2a90cd7760f9fc4b20b', '$2y$10$9ZFG7TAuJYP8UT3sankUg.00BmvMOj3ljt/l0ObfxxjEh7L7QjZUC', 'Mark Ryan', 'Bueno', 'Merin', 'merin.ryanmark@gmail.com', '09491040057', 'male', '1', '2689949.png', '2022-09-22', '2022-11-21 22:30:28');

--
-- Indexes for dumped tables
--

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
-- Indexes for table `pms_roles`
--
ALTER TABLE `pms_roles`
  ADD PRIMARY KEY (`roles_aid`);

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
-- AUTO_INCREMENT for table `pms_household_criteria`
--
ALTER TABLE `pms_household_criteria`
  MODIFY `household_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_household_programs`
--
ALTER TABLE `pms_household_programs`
  MODIFY `household_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pms_income_criteria`
--
ALTER TABLE `pms_income_criteria`
  MODIFY `income_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pms_income_programs`
--
ALTER TABLE `pms_income_programs`
  MODIFY `income_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_population_criteria`
--
ALTER TABLE `pms_population_criteria`
  MODIFY `population_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pms_population_programs`
--
ALTER TABLE `pms_population_programs`
  MODIFY `population_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_roles`
--
ALTER TABLE `pms_roles`
  MODIFY `roles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_sitio`
--
ALTER TABLE `pms_sitio`
  MODIFY `sitio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pms_unemployment_criteria`
--
ALTER TABLE `pms_unemployment_criteria`
  MODIFY `unemployment_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pms_unemployment_programs`
--
ALTER TABLE `pms_unemployment_programs`
  MODIFY `unemployment_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pms_users`
--
ALTER TABLE `pms_users`
  MODIFY `users_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
