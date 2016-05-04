-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Creato il: Mag 04, 2016 alle 11:02
-- Versione del server: 10.1.8-MariaDB
-- Versione PHP: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ciakaron`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Commento`
--

CREATE TABLE `Commento` (
  `id` int(11) NOT NULL,
  `Testo` varchar(50) DEFAULT NULL,
  `Autore` int(11) DEFAULT NULL,
  `data` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `Post`
--

CREATE TABLE `Post` (
  `id` int(11) NOT NULL,
  `Titolo` varchar(50) DEFAULT NULL,
  `Testo` varchar(256) DEFAULT NULL,
  `Autore` int(11) DEFAULT NULL,
  `data` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `Nome` varchar(50) DEFAULT NULL,
  `Cognome` varchar(50) DEFAULT NULL,
  `Username` varchar(50) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `dataNascita` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Commento`
--
ALTER TABLE `Commento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Autore` (`Autore`);

--
-- Indici per le tabelle `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Autore` (`Autore`);

--
-- Indici per le tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `Commento`
--
ALTER TABLE `Commento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `Post`
--
ALTER TABLE `Post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `Commento`
--
ALTER TABLE `Commento`
  ADD CONSTRAINT `Commento_ibfk_1` FOREIGN KEY (`Autore`) REFERENCES `user` (`id`);

--
-- Limiti per la tabella `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`Autore`) REFERENCES `user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
