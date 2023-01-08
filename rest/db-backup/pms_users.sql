-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2023 at 05:31 PM
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
  `users_role` varchar(16) NOT NULL,
  `users_photo` varchar(255) NOT NULL,
  `users_created` varchar(20) NOT NULL,
  `users_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_users`
--

INSERT INTO `pms_users` (`users_aid`, `users_is_active`, `users_key`, `users_password`, `users_fname`, `users_mname`, `users_lname`, `users_email`, `users_phone`, `users_role`, `users_photo`, `users_created`, `users_datetime`) VALUES
(27, 1, '', '$2y$10$eUnbbe4/uTzKZR2lw/15E.B5r2MEjNktcfmJS9uTIhADeqZ9phgIO', 'Mark Ryan', 'Bueno', 'Merin', 'merin.ryanmark@gmail.com', '09491040057', 'Admin', 'vhong_2020-12-30_00-12-55.jpg', '2022-09-22', '2023-01-05 22:49:08'),
(36, 1, '4bd26ae1045b057340fe92e8c3ff6cf59a7946c18a4ad9ec38e7daed24255d2c', '', 'Meirejoy', 'Alina', 'Maralit', 'ajoymaralit@gmail.com', '09092139710', 'Admin', '', '2022-12-07', '2022-12-29 22:29:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_users`
--
ALTER TABLE `pms_users`
  ADD PRIMARY KEY (`users_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_users`
--
ALTER TABLE `pms_users`
  MODIFY `users_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
