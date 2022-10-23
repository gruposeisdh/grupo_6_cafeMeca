-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-10-2022 a las 14:38:44
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test_me_cafe`
--

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Mecafé');

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `user_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

--
-- Volcado de datos para la tabla `detail_cart`
--

INSERT INTO `detail_cart` (`id`, `cart_id`, `quantity`, `product_grame_id`, `product_type_grinding_id`) VALUES
(17, 2, 1, 15, 14),
(18, 2, 1, 44, 27),
(19, 2, 1, 2, 1);

--
-- Volcado de datos para la tabla `detail_sales`
--

INSERT INTO `detail_sales` (`id`, `sale_id`, `quantity`, `product_grame_id`, `product_type_grinding_id`) VALUES
(5, 4, 3, 10, 12),
(6, 4, 1, 41, 24),
(7, 4, 1, 39, 23),
(8, 4, 1, 39, 22),
(9, 5, 1, 48, 28),
(10, 5, 1, 39, 23),
(11, 6, 1, 39, 23),
(12, 6, 2, 16, 15),
(13, 6, 1, 48, 28);

--
-- Volcado de datos para la tabla `directions`
--

INSERT INTO `directions` (`id`, `name`, `street`, `city`, `region`, `country`, `address_code`, `user_id`, `default`, `active`) VALUES
(1, 'Guillermo Llona 325', 'Guillermo Llona 325', 'Mirasol', 'Guillermo Llona ', 'Chile', '23248613', 1, 1, 1),
(2, 'Javiera Carrera 670', 'Javiera Carrera 670', 'Temuco', 'Araucania', 'Chile', '86135165', 1, 0, 1),
(3, 'Nataniel cox', 'nataniel cox 223', 'santiago centro', 'Santiago', 'Chile', '8330404', 2, 1, 1);

--
-- Volcado de datos para la tabla `images_products`
--

INSERT INTO `images_products` (`id`, `path`, `product_id`) VALUES
(1, 'default-product-image.png', 1),
(2, 'default-product-image.png', 2),
(3, 'default-product-image.png', 3),
(4, 'default-product-image.png', 4),
(5, 'default-product-image.png', 5),
(6, 'default-product-image.png', 6),
(7, 'default-product-image.png', 7),
(8, 'default-product-image.png', 8),
(9, 'default-product-image.png', 9),
(10, 'default-product-image.png', 10),
(11, 'default-product-image.png', 11),
(12, 'default-product-image.png', 12);

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `rating`, `description`, `brand_id`, `active`) VALUES
(1, 'Colombiano Tostado y Molido', 3, 'Café de aroma intenso, cuerpo alto y notas achocolatadas. De tostión fuerte y molienda fina, exquisito al paladar.', 1, 1),
(2, 'Colombiano Tostado Balanceado', 4, 'Agradable café de sabor suavemente dulce, acidez media y notas frutales. De tostión media y molienda fina, delicado al paladar.', 1, 1),
(3, 'Colombia Original', 4, 'Café colombiano en grano  Tostado hace 48 horas máximo. Dulce con aroma a caramelo, frutos rojos y sabor achocolatado suave, con cuerpo redondo y buen sabor residual. Café 100% arábigo.', 1, 1),
(4, 'Colombia Anis Pereira', 5, 'Café colombiano en grano tostado con toques de Anís. Tostado hace 48 horas máximo. Dulce con aroma a caramelo. frutos rojos y sabor achocolatado suave, con cuerpo redondo y buen sabor residual. Café 100% arábigo.', 1, 1),
(5, 'Colombia Chocolate', 5, 'Café colombiano en grano tostado con sabor chocolate. Tostado hace 48 horas máximo. Dulce con aroma a caramelo. frutos rojos y sabor achocolatado suave', 1, 1),
(6, 'Colombia Vainilla Ibagué', 5, 'Café colombiano en grano tostado con sabores de Vainilla. Tostado hace 48 horas máximo. Dulce con aroma a caramelo. frutos rojos y sabor achocolatado suave, con cuerpo redondo y buen sabor residual. Café 100% arábigo.', 1, 1),
(7, 'Guatemala Buena Vista', 5, 'Este café proveniente de Antigua, Guatemala, destaca por su alto dulzor y muy baja acidez.\nTiene un cuerpo alto y de textura cremosa. Retrogusto largo y muy jugoso.', 1, 1),
(8, 'Etiopia Hunda Oli', 4, 'Este café proveniente de la localidad de Agaro en la zona de Jimma, destaca por su limpieza en taza y acidez baja agradable.\nTiene un cuerpo alto y sedoso. Retrogusto largo y muy jugoso.', 1, 1),
(9, 'Costa Rica La Isla', 5, 'Este café es un microlote de 50 sacos cultivado a 1.450 msnm en Valle Occidental de Costa Rica.\nAl molerlo y prepararlo se sienten aromas frutales con toques cítricos, y mucha azúcar de caña.', 1, 1),
(10, 'Colombia Pink Huila', 5, 'Cultivado en Acevedo, Huila, este bourbon rosado crece a 1.500 msnm.\nEn taza es tan dulzón y amielado, que recuerda a palomitas de maíz dulces.\nSu acidez es media y agradable a frutos rojos maduros..', 1, 1),
(11, 'Perú La Palestina', 4, 'Cultivado en Jaen, San Ignacio de Cajamarca, este café es complejo y dinámico.\nMuestra toques florales y un durazno bien jugoso.', 1, 1),
(12, 'Brasil Do Anil', 5, 'Este café es producido por Fernando Cruz Neto, Rancho Boa Vista do Anil, Mantiqueira de Minas a más de 1.200 msnm\nEs un Catuai Amarillo que se siente muy dulce a caña de azúcar con toques florales.', 1, 1);

--
-- Volcado de datos para la tabla `products_grames`
--

INSERT INTO `products_grames` (`id`, `product_id`, `grames`, `price`) VALUES
(1, 1, 250, '6.10'),
(2, 1, 500, '9.00'),
(3, 1, 1000, '13.00'),
(4, 2, 250, '6.10'),
(5, 2, 500, '8.00'),
(6, 2, 1000, '12.00'),
(7, 3, 250, '5.00'),
(8, 3, 500, '8.00'),
(9, 3, 1000, '10.00'),
(10, 4, 250, '7.00'),
(11, 4, 500, '0.00'),
(12, 4, 1000, '10.00'),
(13, 5, 250, '0.00'),
(14, 5, 500, '0.00'),
(15, 5, 1000, '15.00'),
(16, 6, 250, '9.00'),
(29, 6, 500, '0.00'),
(30, 6, 1000, '0.00'),
(31, 7, 250, '0.00'),
(32, 7, 500, '9.00'),
(33, 7, 1000, '0.00'),
(34, 8, 250, '0.00'),
(35, 8, 500, '9.00'),
(36, 8, 1000, '13.00'),
(37, 9, 250, '0.00'),
(38, 9, 500, '0.00'),
(39, 9, 1000, '10.00'),
(40, 10, 250, '6.00'),
(41, 10, 500, '10.00'),
(42, 10, 1000, '13.00'),
(43, 11, 250, '9.00'),
(44, 11, 500, '12.00'),
(45, 11, 1000, '16.00'),
(46, 12, 250, '0.00'),
(47, 12, 500, '0.00'),
(48, 12, 1000, '20.00');

--
-- Volcado de datos para la tabla `products_type_grindings`
--

INSERT INTO `products_type_grindings` (`id`, `product_id`, `type_grinding_id`, `active`) VALUES
(1, 1, 4, 1),
(2, 2, 4, 1),
(3, 3, 1, 1),
(4, 3, 3, 1),
(11, 4, 1, 1),
(12, 4, 3, 1),
(13, 5, 1, 1),
(14, 5, 3, 1),
(15, 6, 1, 1),
(16, 6, 3, 1),
(17, 7, 4, 1),
(18, 7, 1, 1),
(19, 8, 1, 1),
(20, 8, 3, 1),
(21, 8, 4, 1),
(22, 9, 2, 1),
(23, 9, 5, 1),
(24, 10, 1, 1),
(25, 11, 1, 1),
(26, 11, 2, 1),
(27, 11, 4, 1),
(28, 12, 2, 1),
(29, 12, 3, 1),
(30, 12, 4, 1);

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Client');

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `user_id`, `date`, `direction_id`) VALUES
(4, 1, '2022-10-23 12:23:57', 1),
(5, 1, '2022-10-23 12:25:06', 1),
(6, 2, '2022-10-23 12:27:01', 3);

--
-- Volcado de datos para la tabla `type_grindings`
--

INSERT INTO `type_grindings` (`id`, `name`) VALUES
(1, 'Grano'),
(5, 'Molido Extra Fino'),
(4, 'Molido Fino'),
(2, 'Molido Grueso'),
(3, 'Molido Medio'),
(6, 'Molido Super Fino');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role_id`, `image`, `phone`) VALUES
(1, 'Juan', 'Perez', 'juan.perez@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56995376489'),
(2, 'Joh', 'Flores', 'joh.flores@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56937926549'),
(3, 'Yoh', 'zuluaga', 'yoh.zuluaga@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56931896539'),
(4, 'Nico', 'Pirello', 'nico.pirello@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56973193693'),
(5, 'Cliente', 'Cliente', 'cliente@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 2, 'userDefault.jpg', '56973193699');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
