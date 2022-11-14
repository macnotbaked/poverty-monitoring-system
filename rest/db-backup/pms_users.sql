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
  `users_gender` varchar(20) NOT NULL,
  `users_role_id` varchar(5) NOT NULL,
  `users_created` varchar(20) NOT NULL,
  `users_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_users`
--

INSERT INTO `pms_users` (`users_aid`, `users_is_active`, `users_key`, `users_password`, `users_fname`, `users_mname`, `users_lname`, `users_email`, `users_phone`, `users_gender`, `users_role_id`, `users_created`, `users_datetime`) VALUES
(27, 1, '45c325fbde60146e0f3886246d24ca3fb793ff59ce36fe52593e1621efdadbdd', '$2y$10$9ZFG7TAuJYP8UT3sankUg.00BmvMOj3ljt/l0ObfxxjEh7L7QjZUC', 'Mark Ryan', 'Bueno', 'Merin', 'merin.ryanmark@gmail.com', '09491040057', 'male', '1', '2022-09-22', '2022-11-08 16:07:03'),
(28, 1, '', '$2y$10$fixTPDwKzX6frEBIS02Q5uoTbBfDlmEBZrxB3sx42kMlfHEXzaz62', 'Carlo', 'C', 'Briones', 'macmerin24@gmail.com', '09092139710', 'female', '3', '2022-09-23', '0000-00-00 00:00:00'),
(29, 1, '', '$2y$10$SCzsn//7nB5YijAc1znCtujRXX151GSvA/htS97ITTzfzj4o0Y8FC', 'Meirejoy', 'Alina', 'Maralit', 'ajoymaralit@gmail.com', '09491040057', 'female', '2', '2022-09-25', '0000-00-00 00:00:00'),
(32, 1, '', '$2y$10$hKvkZpiiEtNV9lvT5bOV3.80kPVHD.D2UicdAr2xC9dIRqRIdf78.', 'Test Name', 'Bueno', 'Merin', '0319-1228@lspu.edu.ph', '09491040057', 'male', '3', '2022-09-28', '0000-00-00 00:00:00');

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
  MODIFY `users_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
