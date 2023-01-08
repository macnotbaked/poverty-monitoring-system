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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_monthly_income`
--
ALTER TABLE `pms_monthly_income`
  ADD PRIMARY KEY (`monthly_income_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_monthly_income`
--
ALTER TABLE `pms_monthly_income`
  MODIFY `monthly_income_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
