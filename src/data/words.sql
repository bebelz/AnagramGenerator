CREATE TABLE `words` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(30) DEFAULT NULL,
  `word` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;