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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_sitio`
--
ALTER TABLE `pms_sitio`
  ADD PRIMARY KEY (`sitio_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_sitio`
--
ALTER TABLE `pms_sitio`
  MODIFY `sitio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
