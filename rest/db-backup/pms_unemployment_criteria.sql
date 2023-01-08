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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_unemployment_criteria`
--
ALTER TABLE `pms_unemployment_criteria`
  ADD PRIMARY KEY (`unemployment_criteria_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_unemployment_criteria`
--
ALTER TABLE `pms_unemployment_criteria`
  MODIFY `unemployment_criteria_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
