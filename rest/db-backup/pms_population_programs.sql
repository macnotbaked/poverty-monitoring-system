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
-- Table structure for table `pms_population_programs`
--

CREATE TABLE `pms_population_programs` (
  `population_program_aid` int(11) NOT NULL,
  `population_program_is_active` tinyint(1) NOT NULL,
  `population_program_name` varchar(255) NOT NULL,
  `population_program_description` text NOT NULL,
  `population_program_contact_person` varchar(255) NOT NULL,
  `population_program_contact_number` varchar(16) NOT NULL,
  `population_program_contact_email` varchar(255) NOT NULL,
  `population_program_created` varchar(32) NOT NULL,
  `population_program_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_population_programs`
--

INSERT INTO `pms_population_programs` (`population_program_aid`, `population_program_is_active`, `population_program_name`, `population_program_description`, `population_program_contact_person`, `population_program_contact_number`, `population_program_contact_email`, `population_program_created`, `population_program_datetime`) VALUES
(1, 1, 'Family Planning', 'Family Planning in particular is the ability to prevent pregnancies safely through the use of contraception. Such ability is crucial to women who wish to avoid high-risk pregnancies, to couples who wish to manage the number and spacing of their children, and to men and women who wish to share equitably the burdens of fertility and child. Based on DOH definition, family planning (FP) is part of reproductive health (RH).', 'POPCOM', 'N/A', 'na@gmail.com', '2022-12-01', '2022-12-11 23:41:49'),
(2, 1, 'Adolescent Health and Youth Development', 'The AHYD component of the PPMP support adolescent programs aimed at providing information that will help them understand their sexuality, develop the right values in them, help them make responsible decisions and prepare them for responsible adulthood and parenthood.', 'POPCOM', 'N/A', 'na@gmail.com', '2022-12-01', '2022-12-29 22:29:17'),
(3, 1, 'Population and Development Integration (POPDEV)', 'The POPDEV component of the PPMP entail initiatives to build capabilities to integrate population variables, including migration and urbanization, into development policies, plans and programs at the national, regional and local levels.', 'POPCOM', 'n/a', 'na@gmail.com', '2022-12-01', '2022-12-11 23:41:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_population_programs`
--
ALTER TABLE `pms_population_programs`
  ADD PRIMARY KEY (`population_program_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_population_programs`
--
ALTER TABLE `pms_population_programs`
  MODIFY `population_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
