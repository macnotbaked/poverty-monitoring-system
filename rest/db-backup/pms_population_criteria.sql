-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2023 at 05:30 PM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_population_criteria`
--
ALTER TABLE `pms_population_criteria`
  ADD PRIMARY KEY (`population_criteria_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_population_criteria`
--
ALTER TABLE `pms_population_criteria`
  MODIFY `population_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
