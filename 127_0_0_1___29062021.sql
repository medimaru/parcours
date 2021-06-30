-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2021 at 03:52 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parcours`
--
CREATE DATABASE IF NOT EXISTS `parcours` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `parcours`;

-- --------------------------------------------------------

--
-- Table structure for table `absence`
--

CREATE TABLE `absence` (
  `id` int(11) NOT NULL,
  `candidat` int(11) DEFAULT NULL,
  `formation` int(11) DEFAULT NULL,
  `dateAbsence` date DEFAULT NULL,
  `type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absence`
--

INSERT INTO `absence` (`id`, `candidat`, `formation`, `dateAbsence`, `type`) VALUES
(66, 22, 1, '2021-06-23', 1);

-- --------------------------------------------------------

--
-- Table structure for table `archiveclassement`
--

CREATE TABLE `archiveclassement` (
  `id` int(11) NOT NULL,
  `rdv` int(11) NOT NULL,
  `Appel` int(11) NOT NULL,
  `Absence` int(11) NOT NULL,
  `RDVFinale` float NOT NULL,
  `AppelFinale` float NOT NULL,
  `AbsenceFinale` float NOT NULL,
  `Point` text NOT NULL,
  `Classement` varchar(50) NOT NULL,
  `Date` date NOT NULL,
  `compagne` int(11) DEFAULT NULL,
  `idCandidat` int(11) DEFAULT NULL,
  `NbrJours` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `archiveclassement`
--

INSERT INTO `archiveclassement` (`id`, `rdv`, `Appel`, `Absence`, `RDVFinale`, `AppelFinale`, `AbsenceFinale`, `Point`, `Classement`, `Date`, `compagne`, `idCandidat`, `NbrJours`) VALUES
(57, 0, 853, 1, 0, 0, 20.4545, '0.20454545454545', 'C', '2021-06-01', NULL, 21, 10),
(58, 1, 860, 2, 13.3333, 29.9248, 15.9091, '0.59167184844339', 'C', '2021-06-01', NULL, 28, 3),
(59, 1, 624, 0, 13.3333, 41.2425, 25, '0.79575791855204', 'B', '2021-06-01', NULL, 27, 5),
(60, 2, 670, 2, 26.6667, 76.8218, 15.9091, '1.1939753106127', 'A', '2021-06-01', NULL, 24, 7),
(61, 2, 501, 0, 26.6667, 102.736, 25, '1.5440237172713', 'C', '2021-06-01', NULL, 32, 9),
(62, 1, 574, 0, 13.3333, 44.835, 25, '0.83168340506934', 'B', '2021-06-01', NULL, 26, 1),
(63, 2, 421, 0, 26.6667, 122.258, 25, '1.7392459596665', 'A', '2021-06-01', NULL, 30, 3),
(64, 4, 363, 3, 53.3333, 283.585, 11.3636, '3.4828147788041', 'A', '2021-06-01', NULL, 31, 6),
(73, 0, 853, 1, 0, 0, 20.4545, '0.65454545454545', 'B', '2021-06-06', NULL, 21, 5),
(74, 0, 853, 1, 0, 0, 20.4545, '2.20454545454545', 'A', '2021-06-05', NULL, 21, 10),
(75, 0, 853, 1, 0, 0, 20.4545, '1.65454545454545', 'A', '2021-06-07', NULL, 21, 5);

-- --------------------------------------------------------

--
-- Table structure for table `candidat`
--

CREATE TABLE `candidat` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `experience` text NOT NULL,
  `pseudo` int(11) DEFAULT NULL,
  `validation` int(11) DEFAULT NULL,
  `telephone` text NOT NULL,
  `CIN` text NOT NULL,
  `nationalite` text NOT NULL,
  `email` text NOT NULL,
  `adresse` text NOT NULL,
  `compagne` int(11) DEFAULT NULL,
  `langue` int(11) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `etatCandidat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `candidat`
--

INSERT INTO `candidat` (`id`, `nom`, `prenom`, `experience`, `pseudo`, `validation`, `telephone`, `CIN`, `nationalite`, `email`, `adresse`, `compagne`, `langue`, `sex`, `etatCandidat`) VALUES
(21, 'Angel', 'fdf', '2', 1, 2, '766650063', 'F427975', 'CV', 'YOUNESSDERFOUFI41@GMAIL.COM', '0regrger', 2, 2, NULL, NULL),
(22, 'Assia', 'test', '0', 38, 2, '641380904', 'F577620', '0', 'ACHOUAKBENTAHAR@GMAIL.COM', '0', 2, 2, NULL, NULL),
(23, 'MOULESHOUL', 'ICHRAK', '0', NULL, 2, '770020667', 'FB96524', '0', 'ICHRAK.MOULESHOUL@GMAIL.COM', '0', 1, 2, NULL, NULL),
(24, 'MAHDAD', 'YASSINE', '0', 38, 2, '659605042', 'F582952', '0', 'MAHDADYASSINE@OUTLOOK.FR', '0', 1, 2, NULL, NULL),
(25, 'ERRAJI', 'SOUHAYLA', '15', 38, 2, '697191374', 'F656306', 'cn', 'SOUERRAJI09@GMAIL.COM', 'abcdefghij', 1, 2, NULL, NULL),
(26, 'ABDLJALIL', 'ILHAM', '0', 1, 2, '675576471', 'F506367', '0', 'ILHABDEL@OUTLOOK.FR', '0', 1, 2, NULL, NULL),
(27, 'KHALIL', 'YOUNES', '0', 1, 2, '672832960', 'F566345', '0', 'YOUNESS.KHALIL@LIVE.FR', '0', 1, 2, NULL, NULL),
(28, 'A', '7', '0', NULL, 0, '766650063', 'F427975', '0', 'YOUNESSDERFOUFI41@GMAIL.COM', '0', 1, 2, NULL, 2),
(29, 'A', '7', '0', 38, 2, '659295061', 'JC424936', '0', 'TAREKMTR1@GMAIL.COM', '0', 1, 2, NULL, NULL),
(30, 'FIKRI', 'AMINA', '0', 38, 1, '670703736', 'SA26616', '0', 'AMINAFIKRI1997@GMAIL.COM', '0', 1, 2, NULL, NULL),
(31, 'HANAFI', 'MOHAMMED', '0', 1, 1, '607571363', 'F433360', '0', 'MEDHANAFI9@GMAIL.COM', '0', NULL, 2, NULL, NULL),
(32, 'FIKRIiiii', 'hassan', '0', 1, 1, '670703736', 'SA26616', '0', 'AMINAFIKRI1997@GMAIL.COM', '0', 1, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `causecandidat`
--

CREATE TABLE `causecandidat` (
  `id` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `idCandidat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `causecandidat`
--

INSERT INTO `causecandidat` (`id`, `message`, `idCandidat`) VALUES
(7, 'dghgh', 28),
(8, '6333', 28),
(9, 'azezae', 28),
(10, 'azd', 28);

-- --------------------------------------------------------

--
-- Table structure for table `compagne`
--

CREATE TABLE `compagne` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL,
  `langue` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `compagne`
--

INSERT INTO `compagne` (`id`, `label`, `langue`) VALUES
(1, 'A', 2),
(2, 'B', 2);

-- --------------------------------------------------------

--
-- Table structure for table `etatcandidat`
--

CREATE TABLE `etatcandidat` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `etatcandidat`
--

INSERT INTO `etatcandidat` (`id`, `label`) VALUES
(1, 'recyclé'),
(2, 'Non recyclé');

-- --------------------------------------------------------

--
-- Table structure for table `formation`
--

CREATE TABLE `formation` (
  `id` int(11) NOT NULL,
  `label` text NOT NULL,
  `type` int(11) DEFAULT NULL,
  `dateDebut` date DEFAULT NULL,
  `dateFin` date DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `formationType` int(11) NOT NULL,
  `langue` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `formation`
--

INSERT INTO `formation` (`id`, `label`, `type`, `dateDebut`, `dateFin`, `max`, `formationType`, `langue`) VALUES
(1, 'Energie', 1, '2021-06-15', '2035-05-22', 3, 1, 2),
(2, 'Energie', 1, '2021-06-04', '2025-05-22', 111, 2, 1),
(6, 'Box', 1, '2020-06-04', '2025-05-22', 10, 1, 1),
(26, 'Telecom', 3, '2020-06-04', '2025-05-22', 90, 2, 1),
(28, 'CPR', 1, '2000-06-04', '2100-05-22', 99, 1, 1),
(29, 'CPR', 1, '2021-08-18', '2021-05-18', 1, 1, 1),
(62, 'LOL', 1, '2021-06-07', '2021-10-31', 1, 1, 1),
(90, 'Hahaahha', 1, '2021-06-03', '2021-06-02', 3, 1, 1),
(94, 'azx', 1, '2021-06-02', '2021-06-01', 1, 1, 1),
(95, 'Olalalalalala', 2, '2021-06-02', '2021-06-03', 2, 1, 1),
(98, 'a', 1, '2021-06-21', '2021-06-21', 12, 1, 1),
(99, 'b', 2, '2021-06-21', '2021-06-23', 12, 2, 1),
(100, 'c', 3, '2021-06-21', '2021-06-25', 12, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `formationcandidat`
--

CREATE TABLE `formationcandidat` (
  `formation` int(11) NOT NULL,
  `candidat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `formationcandidat`
--

INSERT INTO `formationcandidat` (`formation`, `candidat`) VALUES
(1, 22),
(1, 24),
(1, 28),
(2, 25),
(29, 23);

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `label` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`id`, `label`) VALUES
(1, 'Feminin'),
(2, 'Masculin');

-- --------------------------------------------------------

--
-- Table structure for table `langue`
--

CREATE TABLE `langue` (
  `id` int(11) NOT NULL,
  `label` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `langue`
--

INSERT INTO `langue` (`id`, `label`) VALUES
(1, 'anglophone'),
(2, 'francophone'),
(3, 'spanish'),
(4, 'german'),
(5, 'italian');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL,
  `objectif` float DEFAULT NULL,
  `coef` int(11) DEFAULT NULL,
  `compagne` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `label`, `objectif`, `coef`, `compagne`) VALUES
(19, 'absence', 0.00136, 3556, 1),
(20, 'rdv', 0.00136, 35, 1),
(21, 'appel', 1000, 355, 1),
(34, 'absence', 1, 35, 2),
(35, 'rdv', 0.00136, 35, 2),
(36, 'appel', 1000, 35, 2);

-- --------------------------------------------------------

--
-- Table structure for table `pseudo`
--

CREATE TABLE `pseudo` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL,
  `langue` int(11) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pseudo`
--

INSERT INTO `pseudo` (`id`, `label`, `langue`, `sex`) VALUES
(1, 'Hyrkul', 2, NULL),
(38, 'JESSICA', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `Qte` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `candidat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `scoretype`
--

CREATE TABLE `scoretype` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scoretype`
--

INSERT INTO `scoretype` (`id`, `label`) VALUES
(1, 'rdv'),
(2, 'Appel');

-- --------------------------------------------------------

--
-- Table structure for table `typeabsence`
--

CREATE TABLE `typeabsence` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `typeabsence`
--

INSERT INTO `typeabsence` (`id`, `label`) VALUES
(1, 'matin'),
(2, 'soir');

-- --------------------------------------------------------

--
-- Table structure for table `typeformation`
--

CREATE TABLE `typeformation` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `typeformation`
--

INSERT INTO `typeformation` (`id`, `label`) VALUES
(1, 'Integration'),
(2, 'plateau de formation'),
(3, 'plateau de production');

-- --------------------------------------------------------

--
-- Table structure for table `typeuser`
--

CREATE TABLE `typeuser` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL,
  `root` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `typeuser`
--

INSERT INTO `typeuser` (`id`, `label`, `root`) VALUES
(1, 'rh', '/rh'),
(2, 'chef de plateau de formation', '/chefPlateuFormation'),
(3, 'chef de plateau de production', '/chefPlateauProduction'),
(4, 'chargee de recrutement', '/recruteur');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `langue` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `password`, `nom`, `prenom`, `type`, `langue`) VALUES
(1, 'a', 'a', 'a', 'a', 1, NULL),
(2, 'b', 'b', 'b', 'b', 2, NULL),
(3, 'c', 'c', 'c', 'c', 3, NULL),
(4, 'd', 'd', 'd', 'd', 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `validation`
--

CREATE TABLE `validation` (
  `id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `validation`
--

INSERT INTO `validation` (`id`, `label`) VALUES
(0, 'no recyclé'),
(1, 'Integration'),
(2, 'plateau de formation'),
(3, 'plateau de production');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `candidat` (`candidat`),
  ADD KEY `formation` (`formation`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `archiveclassement`
--
ALTER TABLE `archiveclassement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `compagne` (`compagne`),
  ADD KEY `idCandidat_key` (`idCandidat`) USING BTREE;

--
-- Indexes for table `candidat`
--
ALTER TABLE `candidat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pseudo` (`pseudo`),
  ADD KEY `validation` (`validation`),
  ADD KEY `compagne` (`compagne`),
  ADD KEY `langue` (`langue`),
  ADD KEY `sex` (`sex`),
  ADD KEY `etat_Candidat` (`etatCandidat`);

--
-- Indexes for table `causecandidat`
--
ALTER TABLE `causecandidat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCandidat` (`idCandidat`);

--
-- Indexes for table `compagne`
--
ALTER TABLE `compagne`
  ADD PRIMARY KEY (`id`),
  ADD KEY `langue` (`langue`);

--
-- Indexes for table `etatcandidat`
--
ALTER TABLE `etatcandidat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_formationType` (`formationType`),
  ADD KEY `langue` (`langue`);

--
-- Indexes for table `formationcandidat`
--
ALTER TABLE `formationcandidat`
  ADD PRIMARY KEY (`formation`,`candidat`),
  ADD KEY `candidat` (`candidat`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `langue`
--
ALTER TABLE `langue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_compagne` (`compagne`);

--
-- Indexes for table `pseudo`
--
ALTER TABLE `pseudo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `langue` (`langue`),
  ADD KEY `sex` (`sex`);

--
-- Indexes for table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`),
  ADD KEY `FK_candidat` (`candidat`);

--
-- Indexes for table `scoretype`
--
ALTER TABLE `scoretype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typeabsence`
--
ALTER TABLE `typeabsence`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typeformation`
--
ALTER TABLE `typeformation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typeuser`
--
ALTER TABLE `typeuser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`),
  ADD KEY `langue` (`langue`);

--
-- Indexes for table `validation`
--
ALTER TABLE `validation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absence`
--
ALTER TABLE `absence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `archiveclassement`
--
ALTER TABLE `archiveclassement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `candidat`
--
ALTER TABLE `candidat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `causecandidat`
--
ALTER TABLE `causecandidat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `compagne`
--
ALTER TABLE `compagne`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `etatcandidat`
--
ALTER TABLE `etatcandidat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `formation`
--
ALTER TABLE `formation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `langue`
--
ALTER TABLE `langue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `pseudo`
--
ALTER TABLE `pseudo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `scoretype`
--
ALTER TABLE `scoretype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `typeabsence`
--
ALTER TABLE `typeabsence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `typeformation`
--
ALTER TABLE `typeformation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `typeuser`
--
ALTER TABLE `typeuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `validation`
--
ALTER TABLE `validation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absence`
--
ALTER TABLE `absence`
  ADD CONSTRAINT `absence_ibfk_1` FOREIGN KEY (`candidat`) REFERENCES `candidat` (`id`),
  ADD CONSTRAINT `absence_ibfk_2` FOREIGN KEY (`formation`) REFERENCES `formation` (`id`),
  ADD CONSTRAINT `absence_ibfk_3` FOREIGN KEY (`type`) REFERENCES `typeabsence` (`id`);

--
-- Constraints for table `archiveclassement`
--
ALTER TABLE `archiveclassement`
  ADD CONSTRAINT `archiveclassement_ibfk_1` FOREIGN KEY (`compagne`) REFERENCES `compagne` (`id`),
  ADD CONSTRAINT `test` FOREIGN KEY (`idCandidat`) REFERENCES `candidat` (`id`);

--
-- Constraints for table `candidat`
--
ALTER TABLE `candidat`
  ADD CONSTRAINT `candidat_ibfk_1` FOREIGN KEY (`pseudo`) REFERENCES `pseudo` (`id`),
  ADD CONSTRAINT `candidat_ibfk_2` FOREIGN KEY (`validation`) REFERENCES `validation` (`id`),
  ADD CONSTRAINT `candidat_ibfk_3` FOREIGN KEY (`compagne`) REFERENCES `compagne` (`id`),
  ADD CONSTRAINT `candidat_ibfk_4` FOREIGN KEY (`langue`) REFERENCES `langue` (`id`),
  ADD CONSTRAINT `candidat_ibfk_5` FOREIGN KEY (`sex`) REFERENCES `gender` (`id`),
  ADD CONSTRAINT `etat_Candidat` FOREIGN KEY (`etatCandidat`) REFERENCES `etatcandidat` (`id`);

--
-- Constraints for table `causecandidat`
--
ALTER TABLE `causecandidat`
  ADD CONSTRAINT `causecandidat_ibfk_1` FOREIGN KEY (`idCandidat`) REFERENCES `candidat` (`id`);

--
-- Constraints for table `compagne`
--
ALTER TABLE `compagne`
  ADD CONSTRAINT `compagne_ibfk_1` FOREIGN KEY (`langue`) REFERENCES `langue` (`id`);

--
-- Constraints for table `formation`
--
ALTER TABLE `formation`
  ADD CONSTRAINT `FK_formationType` FOREIGN KEY (`formationType`) REFERENCES `typeformation` (`id`),
  ADD CONSTRAINT `formation_ibfk_1` FOREIGN KEY (`langue`) REFERENCES `langue` (`id`);

--
-- Constraints for table `formationcandidat`
--
ALTER TABLE `formationcandidat`
  ADD CONSTRAINT `formationcandidat_ibfk_1` FOREIGN KEY (`formation`) REFERENCES `formation` (`id`),
  ADD CONSTRAINT `formationcandidat_ibfk_2` FOREIGN KEY (`candidat`) REFERENCES `candidat` (`id`);

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `FK_compagne` FOREIGN KEY (`compagne`) REFERENCES `compagne` (`id`);

--
-- Constraints for table `pseudo`
--
ALTER TABLE `pseudo`
  ADD CONSTRAINT `pseudo_ibfk_1` FOREIGN KEY (`langue`) REFERENCES `langue` (`id`),
  ADD CONSTRAINT `pseudo_ibfk_2` FOREIGN KEY (`sex`) REFERENCES `gender` (`id`);

--
-- Constraints for table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `FK_candidat` FOREIGN KEY (`candidat`) REFERENCES `candidat` (`id`),
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`type`) REFERENCES `scoretype` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`type`) REFERENCES `typeuser` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`langue`) REFERENCES `langue` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
