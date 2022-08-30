-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-08-2022 a las 03:38:51
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
-- Base de datos: `me_cafe`
--

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
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Client');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role_id`, `image`, `phone`) VALUES
(1, 'Juan', 'Perez', 'juan.perez@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 2, 'userDefault.jpg', '56995376489'),
(2, 'Joh', 'Flores', 'joh.flores@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56937926549'),
(3, 'Yoh', 'zuluaga', 'yoh.zuluaga@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56931896539'),
(4, 'Nico', 'Pirello', 'nico.pirello@gmail.com', '$2a$10$cxygX4aEvwou6928R.1aPepu.D4GrMf4J6YaJ2XbJsAcUz6LdyUda', 1, 'userDefault.jpg', '56973193693');

--
-- Volcado de datos para la tabla `directions`
--

INSERT INTO `directions` (`id`, `street`, `city`, `region`, `country`, `address_code`, `user_id`, `default`, `name`) VALUES
(1, 'Guillermo Llona 325', 'Mirasol', 'Guillermo Llona ', 'Chile', '23248613', 1, 0, 'Guillermo Llona'),
(2, 'Javiera Carrera 670', 'Temuco', 'Araucania', 'Chile', '86135165', 1, 1, 'Javiera Carrera'),
(3, 'Guillermo Llona 325', 'Mirasol', 'Guillermo Llona ', 'Chile', '23248613', 2, 1, 'Guillermo Llona'),
(4, 'Guillermo Llona 325', 'Mirasol', 'Guillermo Llona ', 'Chile', '23248613', 3, 0, 'Guillermo Llona'),
(5, 'Europa 801', 'Villa Mercedes', 'San Luis', 'Argentina', '35153155', 4, 1, 'Europa'),
(6, 'Tibirita', 'Tibiritá', 'Cundinamarca', 'Colombia', '6935186', 3, 1, 'Tibirita');

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Cuisine & Co'),
(2, 'Club Colombia Café');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `rating`, `description`, `brand_id`) VALUES
(1, 'Café Colombiano Tostado y Molido Intenso', 3, 'Café de aroma intenso, cuerpo alto y notas achocolatadas. De tostión fuerte y molienda fina, exquisito al paladar.', 1),
(2, 'Café Colombiano Tostado y Molido Balanceado', 4, 'Agradable café de sabor suavemente dulce, acidez media y notas frutales. De tostión media y molienda fina, delicado al paladar.', 1),
(3, 'Café Club Colombia Original', 4, 'Café colombiano en grano  Tostado hace 48 horas máximo. Dulce con aroma a caramelo, frutos rojos y sabor achocolatado suave, con cuerpo redondo y buen sabor residual. Café 100% arábigo.', 2),
(4, 'Café Club Colombia Anis Pereira', 5, 'Café colombiano en grano tostado con toques de Anís. Tostado hace 48 horas máximo. Dulce con aroma a caramelo. frutos rojos y sabor achocolatado suave, con cuerpo redondo y buen sabor residual. Café 100% arábigo.', 2),
(5, 'Café Club Colombia Chocolate Manizales', 5, 'Café colombiano en grano tostado con sabor chocolate. Tostado hace 48 horas máximo. Dulce con aroma a caramelo. frutos rojos y sabor achocolatado suave', 2),
(6, 'Café Club Colombia Vainilla Ibagué', 5, 'Café colombiano en grano tostado con sabores de Vainilla. Tostado hace 48 horas máximo. Dulce con aroma a caramelo. frutos rojos y sabor achocolatado suave, con cuerpo redondo y buen sabor residual. Café 100% arábigo.', 2);

--
-- Volcado de datos para la tabla `products_grames`
--

INSERT INTO `products_grames` (`id`, `product_id`, `grames`, `price`) VALUES
(1, 1, 250, '100.00'),
(2, 1, 500, '150.00'),
(3, 2, 250, '100.00'),
(4, 2, 500, '150.00'),
(5, 3, 250, '200.00'),
(6, 3, 500, '350.00'),
(7, 3, 1000, '550.00'),
(8, 4, 250, '200.00'),
(9, 4, 500, '350.00'),
(10, 4, 1000, '550.00'),
(11, 5, 250, '200.00'),
(12, 5, 500, '350.00'),
(13, 5, 1000, '550.00'),
(14, 6, 250, '200.00'),
(15, 6, 500, '350.00'),
(16, 6, 1000, '550.00');

--
-- Volcado de datos para la tabla `products_type_grindings`
--

INSERT INTO `products_type_grindings` (`id`, `product_id`, `type_grinding_id`) VALUES
(1, 1, 4),
(2, 2, 4),
(3, 3, 1),
(4, 3, 3),
(11, 4, 1),
(12, 4, 3),
(13, 5, 1),
(14, 5, 3),
(15, 6, 1),
(16, 6, 3);

--
-- Volcado de datos para la tabla `images_products`
--

INSERT INTO `images_products` (`id`, `path`, `product_id`) VALUES
(1, 'dbproductImage_1.png', 1),
(2, 'dbproductImage_2.png', 2),
(3, 'dbproductImage_3.png', 3),
(4, 'dbproductImage_4.png', 4),
(5, 'dbproductImage_5.png', 5),
(6, 'dbproductImage_6.png', 6);

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `user_id`) VALUES
(1, 1);

--
-- Volcado de datos para la tabla `detail_cart`
--

INSERT INTO `detail_cart` (`id`, `cart_id`, `quantity`, `product_grame_id`, `product_type_grinding_id`) VALUES
(1, 1, 2, 2, 1),
(2, 1, 1, 11, 14),
(3, 1, 1, 16, 15),
(4, 1, 3, 10, 15);

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `user_id`, `date`) VALUES
(1, 1, '2022-05-21 20:57:44'),
(2, 1, '2022-06-21 20:54:57');

--
-- Volcado de datos para la tabla `detail_sales`
--

INSERT INTO `detail_sales` (`id`, `sale_id`, `quantity`, `product_grame_id`, `product_type_grinding_id`) VALUES
(1, 1, 2, 2, 1),
(2, 1, 1, 11, 14),
(3, 2, 1, 16, 15),
(4, 2, 3, 10, 15);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
