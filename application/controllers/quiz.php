<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Quiz extends CI_Controller {

    /**
     * This function is called for the first question
     * for a given quiz.
     * It is used only for the first question because the values passed
     * are different from the following questions
     *
     * @return void
     */
	public function start() {
		$category = isset($_GET['cat']) ? $_GET['cat'] : null;

		$this->load->model('questionModel');

		$quesData = $this->questionModel->getQuestions($category);

		$idVal = $quesData[0]['question_id'];

		$ansData = $this->questionModel->getAnswers($category, $idVal);
		//some values are not needed for first question, so they are null
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
     * it also loads the result of an incorrect/correct answer
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
		$isCorrect = $this->checkAnswer($qNo, $quesData, $category); //check whether user input is correct. Boolean is returned.
		$score = $isCorrect ? $score++ : $score;


		if($limit != $qNo) {  //  if this is not last question load all neccessary data into the view.

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
		
		} else {  //  else only provide the data concerning whether an answer was correct/incorrect
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
