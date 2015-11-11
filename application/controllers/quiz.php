<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Quiz extends CI_Controller {

    /**
     * This function is called for the first round of questions
     * for a given quiz
     *
     * @return void
     */
	public function start() {
		$category = isset($_GET['cat']) ? $_GET['cat'] : null;

		$this->load->model('questionModel');

		$quesData = $this->questionModel->getQuestions($category);

		$idVal = $quesData[0]['question_id'];

		$ansData = $this->questionModel->getAnswers($category, $idVal);
		
		$this->load->view('quizView', 
			array(
				'quesdata' 		  => $quesData,
				'idvalue' 		  => $idVal,
				'ansdata' 		  => $ansData,
				'quesNo' 		  => null,
				'isCorrectAnswer' => null,
				'score' 		  => null,
				'finish' 		  => false
			));
	}

    /**
     * This function is called for all questions apart from the initial one.
     * It resolves the quiz data from the model and loads it into the view.
     *
     * @return void
     */
	public function next() {
		
		$this->load->model('questionModel');

		$qNo = isset($_POST['quesNo']) ? $_POST['quesNo'] : null;
		$score = isset($_POST['score']) ? $_POST['score'] : null;
		$category = isset($_POST['cat']) ? $_POST['cat'] : null;
		$limit = isset($_POST['limit']) ? $_POST['limit'] : null;

		$quesData = $this->questionModel->getQuestions($category);
		$isCorrect = $this->checkAnswer($qNo, $quesData, $category);
		$score = $isCorrect ? $score++ : $score;
		if($limit != $qNo) {

			$id = $quesData[$qNo]['question_id'];

			$ansData = $this->questionModel->getAnswers($category, $id);

			$this->load->view('quizView', 
				array(
					'quesdata' 		  => $quesData,
					'ansdata' 		  => $ansData,
					'idvalue' 		  => $id,
					'quesNo'          => $qNo, 
					'isCorrectAnswer' => $isCorrect,
					'score' 		  => $score,
					'finish' 		  => false,
					));
		
		} else {
            $this->load->view('quizView',
                array(
                    'quesdata' 		  => $quesData,
                    'ansdata' 		  => 0,
                    'idvalue' 		  => 0,
                    'quesNo'          => --$qNo,
                    'isCorrectAnswer' => $isCorrect,
                    'score' 		  => $score,
                    'finish' 		  => true
                ));
		}
	}

    /**
     * This function checks the user input against the correct answer.
     *
     * @param int $qNo
     * @param array $data
     * @param string $cat
     * @return bool $correctAnswer
     */
	public function checkAnswer($qNo, $data, $cat) {

		$givenAnswer = isset($_POST['selected']) ? $_POST['selected'] : null;

		$id = $data[--$qNo]['question_id'];

		$ansData = $this->questionModel->getAnswers($cat, $id);

		$correctAnswer = $givenAnswer === $ansData[0]['crtanswer'] ? true : false;

		return $correctAnswer;
	}
}
