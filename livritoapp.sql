-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2021 at 08:25 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `livritoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `delivery_man`
--

CREATE TABLE `delivery_man` (
  `deliv_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `delv_vehicle_type` varchar(100) NOT NULL,
  `delv_vehicle_reg` int(11) NOT NULL,
  `delv_vehicle_reg_img` text,
  `delv_contract_id` int(11) DEFAULT NULL,
  `delv_contract_img` text,
  `delv_elec_bill_img` text,
  `deliv_price_per_order` int(11) NOT NULL,
  `delv_pick_price` int(11) NOT NULL,
  `deliv_storage_price` int(11) NOT NULL,
  `deliv_return_cost` int(11) NOT NULL,
  `deliv_self_evaluation` text,
  `deliv_review` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `login_id` int(11) NOT NULL,
  `login_username` varchar(1000) NOT NULL,
  `login_password` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`login_id`, `login_username`, `login_password`, `user_id`) VALUES
(1, 'Admin', '21232f297a57a5a743894a0e4a801fc3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_title` text NOT NULL,
  `order_description` text NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_img_url_1` text NOT NULL,
  `order_img_url_2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `order_title`, `order_description`, `order_price`, `order_img_url_1`, `order_img_url_2`) VALUES
(1, 1, 'abc', 'description', 123, 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'),
(2, 1, 'Second Order', 'Second Order Description', 123, 'https://homepages.cae.wisc.edu/~ece533/images/cat.png', 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png');

-- --------------------------------------------------------

--
-- Table structure for table `sales_confirmer`
--

CREATE TABLE `sales_confirmer` (
  `sales_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sales_price_per_order` int(11) DEFAULT NULL,
  `sales_voice_recording` text,
  `sales_review` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `seller_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `seller_parentage` text NOT NULL,
  `seller_company_name` text,
  `seller_type_of_merchendise` text NOT NULL,
  `seller_target_cities` text,
  `seller_price_per_package` int(11) NOT NULL,
  `seller_merch_desc` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(1000) NOT NULL,
  `user_national_card` int(11) NOT NULL,
  `user_home_address` varchar(500) NOT NULL,
  `user_family_status` varchar(500) NOT NULL,
  `user_city` varchar(500) NOT NULL,
  `user_age` int(11) DEFAULT NULL,
  `user_phone` int(11) NOT NULL,
  `user_whatsapp_phone` int(11) NOT NULL,
  `user_facebook_address` text,
  `user_image` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_national_card`, `user_home_address`, `user_family_status`, `user_city`, `user_age`, `user_phone`, `user_whatsapp_phone`, `user_facebook_address`, `user_image`) VALUES
(1, 'Abdul Ahad', 123, 'Home Address', 'Family Status', 'City', 123, 123, 123, 'Facebook Address', 'User IMG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `delivery_man`
--
ALTER TABLE `delivery_man`
  ADD PRIMARY KEY (`deliv_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sales_confirmer`
--
ALTER TABLE `sales_confirmer`
  ADD PRIMARY KEY (`sales_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`seller_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `delivery_man`
--
ALTER TABLE `delivery_man`
  MODIFY `deliv_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sales_confirmer`
--
ALTER TABLE `sales_confirmer`
  MODIFY `sales_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `seller_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `delivery_man`
--
ALTER TABLE `delivery_man`
  ADD CONSTRAINT `delivery_man_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `logins`
--
ALTER TABLE `logins`
  ADD CONSTRAINT `logins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `sales_confirmer`
--
ALTER TABLE `sales_confirmer`
  ADD CONSTRAINT `sales_confirmer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `seller`
--
ALTER TABLE `seller`
  ADD CONSTRAINT `seller_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
