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
(1, 'Santa Elena', 'San Pablo City', 'Laguna', 'Mark Ryan Merin', '09491040057', 'Meirejoy Marlait', '09662993797', '318385029_6148542658490661_4946343128240778474_n.jpg', '2023-01-02', '2023-01-02 14:50:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_barangay`
--
ALTER TABLE `pms_barangay`
  ADD PRIMARY KEY (`barangay_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_barangay`
--
ALTER TABLE `pms_barangay`
  MODIFY `barangay_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
