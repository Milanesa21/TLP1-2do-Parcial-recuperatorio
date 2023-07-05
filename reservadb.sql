-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-06-2023 a las 19:45:30
-- Versión del servidor: 5.7.33
-- Versión de PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) NOT NULL,
  `flightCode` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `fullname`, `flightCode`, `date`, `time`, `created_at`, `updated_at`, `deleted_at`) VALUES
  (1, 'John Doe', 'ABC123', '2023-06-21', '12:30:00', '2023-06-21 12:00:00', '2023-06-21 12:00:00', NULL),
  (2, 'Jane Smith', 'DEF456', '2023-06-22', '15:45:00', '2023-06-22 09:00:00', '2023-06-22 09:00:00', NULL),
  (3, 'Michael Johnson', 'GHI789', '2023-06-23', '09:15:00', '2023-06-23 17:30:00', '2023-06-23 17:30:00', NULL),
  (4, 'Emily Davis', 'JKL012', '2023-06-24', '14:00:00', '2023-06-24 10:45:00', '2023-06-24 10:45:00', NULL),
  (5, 'Robert Wilson', 'MNO345', '2023-06-25', '18:20:00', '2023-06-25 15:20:00', '2023-06-25 15:20:00', NULL),
  (6, 'Sophia Thompson', 'PQR678', '2023-06-26', '11:10:00', '2023-06-26 13:55:00', '2023-06-26 13:55:00', NULL),
  (7, 'Oliver Martin', 'STU901', '2023-06-27', '16:45:00', '2023-06-27 08:30:00', NULL)

  -- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;