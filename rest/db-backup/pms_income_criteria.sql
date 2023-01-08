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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_income_criteria`
--
ALTER TABLE `pms_income_criteria`
  ADD PRIMARY KEY (`income_criteria_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_income_criteria`
--
ALTER TABLE `pms_income_criteria`
  MODIFY `income_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
