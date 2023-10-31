/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `Comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ownerId` int NOT NULL,
  `imageId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Comment_ownerId_fkey` (`ownerId`),
  KEY `Comment_imageId_fkey` (`imageId`),
  CONSTRAINT `Comment_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Comment_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ownerId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Image_ownerId_fkey` (`ownerId`),
  CONSTRAINT `Image_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Comment` (`id`, `content`, `ownerId`, `imageId`, `createdAt`, `updatedAt`) VALUES
(3, 'hello', 3, 9, '2023-10-31 09:29:57.134', '2023-10-31 09:29:57.134');


INSERT INTO `Image` (`id`, `name`, `ownerId`, `createdAt`, `updatedAt`) VALUES
(9, 'mocha.png', 3, '2023-10-31 09:27:42.537', '2023-10-31 09:27:42.537');
INSERT INTO `Image` (`id`, `name`, `ownerId`, `createdAt`, `updatedAt`) VALUES
(10, 'vanila.png', 3, '2023-10-31 09:27:42.537', '2023-10-31 09:27:42.537');


INSERT INTO `User` (`id`, `email`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'nam@gmail.com', 'nam', '$2a$10$ztI.L/cAMv1GhGopdygb6.sRLOOkgDJx5Sgcav2MZ.HWC/qGUV86.', '2023-10-31 05:23:54.371', '2023-10-31 05:23:54.371');
INSERT INTO `User` (`id`, `email`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(3, 'nam1@gmail.com', 'nam', '$2a$10$sq.3IKUqPEWOIxLORcWEDOhFnQaPZMjsOTzihnejstgc/7BDhpd4a', '2023-10-31 05:25:15.499', '2023-10-31 05:25:15.499');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;