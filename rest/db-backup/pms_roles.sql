-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2022 at 05:23 PM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_roles`
--
ALTER TABLE `pms_roles`
  ADD PRIMARY KEY (`roles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_roles`
--
ALTER TABLE `pms_roles`
  MODIFY `roles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
