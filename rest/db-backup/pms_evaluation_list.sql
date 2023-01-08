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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_evaluation_list`
--
ALTER TABLE `pms_evaluation_list`
  ADD PRIMARY KEY (`evaluation_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_evaluation_list`
--
ALTER TABLE `pms_evaluation_list`
  MODIFY `evaluation_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
