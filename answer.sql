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
-- Table structure for table `answer`
--

CREATE TABLE IF NOT EXISTS `answer` (
`answer_id` int(10) NOT NULL,
  `question_id` int(10) NOT NULL,
  `crtanswer` varchar(255) NOT NULL,
  `ianswer1` varchar(255) NOT NULL,
  `ianswer2` varchar(255) NOT NULL,
  `ianswer3` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`answer_id`, `question_id`, `crtanswer`, `ianswer1`, `ianswer2`, `ianswer3`) VALUES
(1, 1, 'Rami Malek', 'Malek Antonio', 'Simon Malek', 'Elliot Alderson'),
(2, 2, 'red', 'green', 'blue', 'pink'),
(3, 3, 'Usain Bolt', 'Tyson Gay', 'Yohan Blake', 'Asafa Powell'),
(4, 4, 'Jupiter', 'Earth', 'Saturn', 'Mars'),
(5, 5, 'Gas', 'water', 'Rock', 'star dust'),
(6, 6, 'George Lucas', 'Harrison Ford', 'Martin Scorecese', 'Antoine De Bloom'),
(7, 7, 'Daniel Radcliff', 'Orlando Bloom', 'Bartholomew Kuma', 'Monkey D Luffy'),
(8, 8, 'Floyd Mayweather', 'Manny Pacquiao', 'Prince Naseem', 'Amir Khan'),
(9, 9, 'Matt Damon', 'Mark Wallberg', 'Robert Di Nero', 'Tom Hanks'),
(10, 10, '8', '9', '7', '10'),
(11, 11, 'Curiosity', 'Opportunity', 'Sojourner', 'Spirit'),
(12, 12, 'New Horizons', 'New Dawn', 'New Haven', 'Pluto Discovery'),
(13, 13, 'Tom Hanks', 'Peter Swank', 'Bruce Lee', 'Tiger Jones'),
(14, 14, 'West ham', 'Tottenham', 'Arsenal', 'Fulhanm'),
(15, 15, 'Naseem Hamed', 'Amir Khan', 'Manny Pacquiao', 'Floyd Mayweather'),
(16, 16, 'Manchester United', 'Arsenal', 'Bayern Munich', 'AC Milan'),
(17, 17, 'Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'Buzz Lightyear'),
(18, 18, 'Al Pacino', 'Joe Pesci', 'Robert Loggia', 'Angel Salazar'),
(19, 19, 'Will Smith', 'Jamie Foxx', 'Ice Cube', 'Ice T'),
(21, 21, 'Adam West ', 'Adam North', 'Tony West', 'Tony North'),
(22, 22, 'Tony Stark', 'Robert Downey Jr', 'Clark Kent', 'Bruce Wayne'),
(23, 23, '7', '8', '6', '9'),
(24, 24, '3', '4', '2', '1'),
(25, 25, 'Orange', 'Red', 'Yellow', 'Green'),
(26, 26, 'Elland Road', 'Stamford Bridge', 'Goodison Park', 'Loftus Road'),
(27, 27, 'Chelsea', 'Tottenham', 'Arsenal', 'Wimbledon'),
(28, 28, '1 Million', '500,000', '2 Million', '100,000'),
(29, 29, '4.5 billion years', '4 billion years', '3.5 billion years', '2 billions years'),
(30, 30, '13.8 billion years', '10 billion years', '5 billion years', '20 billion years'),
(31, 31, 'Pioneer 11', 'Voyager 1', 'New Horizon', 'Apollo 3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
 ADD PRIMARY KEY (`answer_id`), ADD KEY `question_id` (`question_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
MODIFY `answer_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
