CREATE DATABASE JEMSbook_db;
USE JEMSbook_db;

CREATE TABLE buckets
(
	`id` int NOT NULL AUTO_INCREMENT,
	`category` enum("Entertainment", "Career", "Travel", "Education", "Finances", "Social", "Etc...") NOT NULL,
	`body` varchar(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
	`public` BOOLEAN DEFAULT false,
	PRIMARY KEY (`id`)
); 