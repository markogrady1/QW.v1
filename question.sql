-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2015 at 10:04 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE IF NOT EXISTS `question` (
`question_id` int(10) NOT NULL,
  `question` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `question`, `category`) VALUES
(1, 'Who is the lead role in Mr Robot?', 'movie'),
(2, 'What colour kit do Arsenal football club wear?', 'sport'),
(3, 'Who holds the world record for 100m sprint?', 'sport'),
(4, 'In the Solar System, which planet is fifth furthest from the Sun?', 'space'),
(5, 'Which type of surface is the planet Saturn known to have?', 'space'),
(6, 'Who directed the movie Star Wars?', 'movie'),
(7, 'Who starred in Harry Potter?', 'movie'),
(8, 'Which sports star has the nickname "Money"?', 'sport'),
(9, 'Who starred as Jason Bourne in the Bourne movies?', 'movie'),
(10, 'How many planets are in the Solar System?', 'space'),
(11, 'Which was the last rover to land on Mars?', 'space'),
(12, 'What was the name of the probe that flew  by Pluto in 2015?', 'space'),
(13, 'Who starred in the movie Forrest Gump?', 'movie'),
(14, 'Which football team are based at Upton Park in London?', 'sport'),
(15, 'Which boxer was known as the "prince"?', 'sport'),
(16, 'Which football team are known as the Red Devils?', 'sport'),
(17, 'Who was the first man into space?', 'space'),
(18, 'Who starred in the 1983 movie Scarface?', 'movie'),
(19, 'Which actor starred as Muhammed Ali in the movie "Ali"?', 'movie'),
(21, 'Who starred as the original Batman?', 'movie'),
(22, 'What is the name of character who is Iron Man?', 'movie'),
(23, 'Game of Thrones has how many thrones?', 'movie'),
(24, 'How many times have London hosted the Olympics?', 'sport'),
(25, 'Which colour is not an Olympic ring colour?', 'sport'),
(26, 'What is the name of Leeds United home ground?', 'sport'),
(27, 'Which London side did Ruud Gullit join in 1995?', 'sport'),
(28, 'How many Earths fit would fit in the Sun?', 'space'),
(29, 'How old is the Sun', 'space'),
(30, 'How old is the Universe?', 'space'),
(31, 'In 1979 which NASA mission flew by Saturn?', 'space');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
 ADD PRIMARY KEY (`question_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
MODIFY `question_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
