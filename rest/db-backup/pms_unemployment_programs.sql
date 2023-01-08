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
-- Table structure for table `pms_unemployment_programs`
--

CREATE TABLE `pms_unemployment_programs` (
  `unemployment_program_aid` int(11) NOT NULL,
  `unemployment_program_is_active` tinyint(1) NOT NULL,
  `unemployment_program_name` varchar(255) NOT NULL,
  `unemployment_program_description` text NOT NULL,
  `unemployment_program_contact_person` varchar(255) NOT NULL,
  `unemployment_program_contact_number` varchar(16) NOT NULL,
  `unemployment_program_contact_email` varchar(255) NOT NULL,
  `unemployment_program_created` varchar(32) NOT NULL,
  `unemployment_program_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pms_unemployment_programs`
--

INSERT INTO `pms_unemployment_programs` (`unemployment_program_aid`, `unemployment_program_is_active`, `unemployment_program_name`, `unemployment_program_description`, `unemployment_program_contact_person`, `unemployment_program_contact_number`, `unemployment_program_contact_email`, `unemployment_program_created`, `unemployment_program_datetime`) VALUES
(1, 1, 'JobStreet by SEEK', 'One of Asia’s leading online employment marketplaces. Helping facilicate the matching and communication of job opportunities between jobseekers and employer, in Malayia, Philippines, Singapore, Indonesia and Vietnam.', 'N/A', '(https://www.job', 'dfg@gmial.com', '2022-12-01', '2023-01-02 22:18:12'),
(2, 1, 'Project KASAMA ', 'KASAMA is a project of the Department of Labor and Employment (DOLE) which aims to contribute to the prevention and elimination of child labor by providing families of child laborers access to decent livelihood opportunities for enhanced income.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:41:09'),
(3, 1, 'Nego-Kart (Negosyo sa Kariton) ', 'Nego-Kart (Negosyo sa Kariton) is a project for ambulant vendors on major cities of the country. The project will assist the ambulant vendors in making their existing livelihood undertakings grow into profitable and sustainable business; thus, making their income level at par with that of the minimum wage earners, at the least.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-01 02:41:51'),
(4, 1, 'DOLE Kabuhayan (DK) ', 'The DOLE Kabuhayan (DK) Starter KITS Project is a livelihood formation strategy that is intended to bring about improved socio-economic well-being of workers in the informal economy, in groups/sectors with special concerns, and displaced wage workers (local and overseas) and their families. The beneficiaries will be required to enroll in Social Protection Services like SSS, Philhealth and other alternative social protection schemes as soon as the business cycles allow it.', 'DOLE', 'N/A', 'dfg@gmial.com', '2022-12-01', '2022-12-29 22:29:32'),
(5, 1, 'Tulong para sa Magsasaka', 'n/a', 'Barangay Chairman', 'n/a', 'n/a@gmail.com', '2022-12-29', '2022-12-29 23:07:49'),
(6, 1, 'Cash/Food for Work', 'This service provides financial assistance or relief goods to individuals or families affected by the disaster in exchange for their participation in activities related to the improvement of their communities.', 'DSWD', 'n/a', 'n/a@gmail.com', '2022-12-29', '2022-12-29 23:11:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_unemployment_programs`
--
ALTER TABLE `pms_unemployment_programs`
  ADD PRIMARY KEY (`unemployment_program_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_unemployment_programs`
--
ALTER TABLE `pms_unemployment_programs`
  MODIFY `unemployment_program_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
