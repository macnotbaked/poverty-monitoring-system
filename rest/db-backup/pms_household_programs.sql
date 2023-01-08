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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_household_programs`
--
ALTER TABLE `pms_household_programs`
  ADD PRIMARY KEY (`household_program_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_household_programs`
--
ALTER TABLE `pms_household_programs`
  MODIFY `household_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
