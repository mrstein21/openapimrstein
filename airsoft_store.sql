-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Apr 2022 pada 21.40
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `airsoft_store`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `airsoft`
--

CREATE TABLE `airsoft` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `airsoft`
--

INSERT INTO `airsoft` (`id`, `name`, `description`, `price`, `photo`) VALUES
(33, 'M1 Garrand AEG Version', 'M1 Garrand AEG version by Evike.com', 900000, 'm1_garrand.jpg'),
(34, 'Arisaka Spring Classic Airsoft', 'Arisaka Spring Classic Airsoft by Tokyo Marui', 2000000, 'arisaka.jpg'),
(35, 'Mosin Nagant AIrsoft', 'Mosin Nagant AIrsoft Spring Powered', 1000000, 'mosin_nagant.jpg'),
(36, 'KAR98K  Spring Powered', 'KAR98K Classic Spring Powered by KWC Company', 2000000, 'kar98.jpg'),
(37, 'Cheytac Airsoft Spring Powered', 'Cheytac Airsoft Spring Powered by Tokyo MArui', 2000000, 'cheytac.jpg'),
(38, 'Beretta M9 GBB ', 'Beretta M9 GBB  using Green Gas', 700000, 'beretta_m9.jpg'),
(39, 'Glock 19  GBB', 'Glock 19 GBB  using Green Gas', 800000, 'glock_19.jpg'),
(40, 'M14 CYMA AEG', 'M14 AEG Version Made By CYMA', 900000, 'm14_cyma.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `airsoft_trans`
--

CREATE TABLE `airsoft_trans` (
  `id` int(11) NOT NULL,
  `trans_code` varchar(100) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `airsoft_trans`
--

INSERT INTO `airsoft_trans` (`id`, `trans_code`, `date`) VALUES
(1, 'TR-193949456', '2022-04-15'),
(4, 'TR-105798542', '2022-04-15'),
(5, 'TR-895427216', '2022-04-15'),
(6, 'TR-523704236', '2022-04-15'),
(7, 'TR-031214737', '2022-04-15'),
(8, 'TR-624632122', '2022-04-15'),
(9, 'TR-143584214', '2022-04-16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_airsoft_trans`
--

CREATE TABLE `detail_airsoft_trans` (
  `id` int(11) NOT NULL,
  `trans_id` int(11) NOT NULL,
  `airsoft_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detail_airsoft_trans`
--

INSERT INTO `detail_airsoft_trans` (`id`, `trans_id`, `airsoft_id`, `qty`) VALUES
(1, 1, 33, 1),
(4, 4, 33, 1),
(5, 5, 33, 1),
(6, 6, 33, 1),
(7, 7, 33, 1),
(8, 7, 34, 1),
(9, 8, 33, 1),
(10, 8, 34, 3),
(11, 9, 33, 12);

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_trans_book`
--

CREATE TABLE `detail_trans_book` (
  `trans_id` varchar(150) NOT NULL,
  `book_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `detail_trans_book`
--

INSERT INTO `detail_trans_book` (`trans_id`, `book_id`, `qty`) VALUES
('TR001', 14, 1),
('TR001', 15, 1),
('TR002', 19, 2),
('TR002', 17, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `trans_book`
--

CREATE TABLE `trans_book` (
  `trans_id` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `trans_book`
--

INSERT INTO `trans_book` (`trans_id`, `user_id`, `date`) VALUES
('TR001', 11, '2021-04-24'),
('TR002', 11, '2021-04-24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(2, 'Mohammad Rangga Jayaswara', 'mohammadrangga27@gmail.com', '$2y$10$SkPIjyEtWarfqJ9d.IO74uV8CzQEtBXooclY/H2rN67J7gSUv84Cm'),
(11, 'Ahmed Albar', 'achmed@gmail.com', '$2y$10$yx4UDoZNWryXwqRhWQcFNuHQRvtzpGXfXISsJyd3ykgyB.8w88n36'),
(17, 'jojowind@gmail.com', 'Giorno Giovana', '$2y$10$tIn5v3I8faQ/Olm/G8chxuVTGzuH23YvFXDlw7o87sodHkyPvyvO6'),
(18, 'Agus Nursikuwagus', 'agusnur@gmail.com', '$2y$10$Tt4Qo7FRIbvAz612awNID..bNOkLBmiH.RPLlgBKpFksUOhwT9Dl2'),
(20, 'Mr.Stein', 'stein@gmail.com', '$2b$08$sFIYqzOaN5s3y.eCPlhNIe/kp/1CpSeWoKQYjmvOR63TB67QCScIm'),
(21, 'Mohammad Rangga', 'mohammadrangga28@gmail.com', '$2b$08$Iv651GWsSN9h7cEhoMAI7.fpafzVkR.zKHI/Uo1uK3DYiT8nTfBfi'),
(22, 'Indra Septian', 'drowenn@gmail.com', '$2b$08$Om.Dc6zwNS7uhirv51Wg8O81T4v/yMSNXQzUEgZDkWYBXuzoZKLTi'),
(23, 'Mr.Professor Stein', 'learningwithmrstein@gmail.com', '$2b$08$In1JCba.CLC/YZykl6aaEOPD0k3bcA7BsNbYadQtYH0FGtMFCQlZS');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `airsoft`
--
ALTER TABLE `airsoft`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `airsoft_trans`
--
ALTER TABLE `airsoft_trans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_airsoft_trans`
--
ALTER TABLE `detail_airsoft_trans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `airsoft`
--
ALTER TABLE `airsoft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT untuk tabel `airsoft_trans`
--
ALTER TABLE `airsoft_trans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `detail_airsoft_trans`
--
ALTER TABLE `detail_airsoft_trans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
