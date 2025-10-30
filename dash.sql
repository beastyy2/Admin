-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2025 at 03:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dash`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Electronics', '2025-10-29 16:19:40.417', '2025-10-29 16:19:40.417'),
(2, 'Clothing', '2025-10-29 16:19:40.424', '2025-10-29 16:19:40.424'),
(3, 'Food & Beverage', '2025-10-29 16:19:40.428', '2025-10-29 16:19:40.428'),
(4, 'Books', '2025-10-29 16:19:40.430', '2025-10-29 16:19:40.430'),
(5, 'Home & Garden', '2025-10-29 16:19:40.432', '2025-10-29 16:19:40.432'),
(6, 'Sports', '2025-10-29 16:19:40.436', '2025-10-29 16:19:40.436'),
(7, 'Toys', '2025-10-29 16:19:40.438', '2025-10-29 16:19:40.438'),
(8, 'Other', '2025-10-29 16:19:40.443', '2025-10-29 16:19:40.443');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `categoryId` int(11) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `stock`, `categoryId`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Minhajul Muslim', 'Ini Buku Pedoman Umat Muslim', 3.00, 5, 4, 'https://darulhaq-online.com/wp-content/uploads/2014/08/minhajul-muslim-web.png', '2025-10-29 16:21:22.997', '2025-10-29 20:32:27.021'),
(4, 'Xiaomi 17 Pro Max', 'HP Terbaik Di Bumi', 22.50, 7, 1, 'https://cdn.8mediatech.com/gambar/85774392035-xiaomi_17_pro_max_resmi_rilis,cek_spesifikasi_lengkap_dan_harga.jpg', '2025-10-29 20:23:05.302', '2025-10-29 20:23:05.302'),
(5, 'ROG ALLY X', 'Handheld Gaming Terbaik ', 16.00, 4, 1, 'https://id.store.asus.com/media/catalog/product/r/o/rog_nr2301_01_copy_2_1.jpg', '2025-10-29 20:31:41.569', '2025-10-29 20:32:12.760'),
(6, 'Chanel Classic Flap Black', 'Detailed Features 26 x16 x7 cm ( length x height x width ) ', 100.00, 3, 2, 'https://reluxshop.com/cdn/shop/products/a_4be3ebb3-dbb4-46b6-a987-6bb8d2c2495b_530x@2x.jpg?v=1722291137', '2025-10-29 20:34:16.613', '2025-10-29 20:34:16.613'),
(7, 'Distro Baju', 'Distro Cloth ', 7.49, 4, 2, 'https://img.lazcdn.com/g/p/e2025f391f131074eefeb3a54337c8a3.jpg_720x720q80.jpg', '2025-10-29 20:35:19.531', '2025-10-29 20:35:19.531'),
(8, 'XIONCO Guise - 3 Seater', 'Material : Kain, Kayu\nSpesifikasi : P:195 x L:80 x T:70\nBentuk Sandaran : Tight\nBentuk Dudukan : Tight', 301.51, 3, 5, 'https://media.dekoruma.com/catalogue/HIG-440157.png?dpr=1.1&fit=bounds&height=1000&optimize=high&quality=60&trim-color=ffffff&width=1000', '2025-10-29 20:39:32.893', '2025-10-29 20:39:32.893'),
(9, 'EORDE - Sofa Bed / Futon Sleeper Minimalis | XIONCO - Abu-abu', 'SPESIFIKASI PRODUK\nDimension\n* Overall Dimension : P 180cm x L 80cm x T 72cm\n* Area Tidur (ketika dibuka) : 180cm x 153cm x 21cm\n* Tinggi Dudukan : 42cm\n', 168.84, 15, 5, 'https://images.renos.id/assets/portal-assets/25528/product/images/9298e13a-2052-4ff0-92a3-43f85501351e_20230622071657.png', '2025-10-29 20:41:41.757', '2025-10-29 20:41:41.757'),
(10, 'Stik Golf Kidal Fullset ', 'Stik golf fullset lengkap dengan tas golf original, cocok untuk pemula', 53.10, 0, 6, 'https://img.lazcdn.com/g/p/e6651f7039f6726c0177ddf3f5a7a452.jpg_720x720q80.jpg', '2025-10-29 20:43:28.997', '2025-10-29 20:43:28.997'),
(11, 'Playstation 5', 'Gaming Console', 144.00, 3, 7, 'https://cdnpro.eraspace.com/media/catalog/product/s/o/sony_playstation_5_slim_digital_dualsense_bundle_white_1.jpg', '2025-10-29 20:44:24.669', '2025-10-29 20:44:24.669'),
(12, 'Indomie Goreng', 'Mie Instan Terbaik Di Dunia', 1.00, 96, 3, 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-21758108/indomie_indomie_goreng_85gr_pak_full01_cg9vz029.jpg', '2025-10-29 20:45:38.169', '2025-10-29 20:45:38.169');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_key` (`name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_categoryId_idx` (`categoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
