<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');



class Quiz extends CI_Controller {

	public function movie() {
		$this->load->model('questionModel');

		$quesData = $this->questionModel->getQuestions('movie');

		$idVal = $quesData[0]['question_id'];

		$ansData = $this->questionModel->getAnswers('movie', $idVal);
		
		$this->load->view('quizView', array('quesdata' => $quesData, 'ansdata' => $ansData, 'idvalue' => $idVal, 'quesNo' => null));

	}
	
	public function sport() {
		$this->load->model('questionModel');

		$quesData = $this->questionModel->getQuestions('sport');

		$idVal = $quesData[0]['question_id'];

		$ansData = $this->questionModel->getAnswers('sport', $idVal);
		
		$this->load->view('quizView', array('quesdata' => $quesData, 'ansdata' => $ansData, 'idvalue' => $idVal, 'quesNo' => null));

	}

	public function space() {
		$this->load->model('questionModel');
		
		$quesData = $this->questionModel->getQuestions('space');
		
		$idVal = $quesData[0]['question_id'];
		
		$ansData = $this->questionModel->getAnswers('space', $idVal);
		
		$this->load->view('quizView', array('quesdata' => $quesData, 'ansdata' => $ansData, 'idvalue' => $idVal, 'quesNo' => null));
	}



	public function spaceNext() {
		$this->load->model('questionModel');
		$qNo = isset($_POST['quesNo']) ? $_POST['quesNo'] : null;
		$limit = isset($_POST['limit']) ? $_POST['limit'] : null;

		if($limit != $qNo) {

			$quesData = $this->questionModel->getQuestions('space');
			$id = $quesData[$qNo]['question_id'];
			$ansData = $this->questionModel->getAnswers('space', $id);
			$this->load->view('quizView', array('quesdata' => $quesData, 'ansdata' => $ansData, 'idvalue' => $id, 'quesNo' => $qNo));
		
		} else {

			redirect('home');
		}
	}




	public function movieNext() {
		$this->load->model('questionModel');
		$qNo = isset($_POST['quesNo']) ? $_POST['quesNo'] : null;
		$limit = isset($_POST['limit']) ? $_POST['limit'] : null;

		if($limit != $qNo) {

			$quesData = $this->questionModel->getQuestions('movie');
			$id = $quesData[$qNo]['question_id'];
			$ansData = $this->questionModel->getAnswers('movie', $id);
			$this->load->view('quizView', array('quesdata' => $quesData, 'ansdata' => $ansData, 'idvalue' => $id, 'quesNo' => $qNo));
		
		} else {

			redirect('home');
		}
	}


	public function sportNext() {
		$this->load->model('questionModel');
		$qNo = isset($_POST['quesNo']) ? $_POST['quesNo'] : null;
		$limit = isset($_POST['limit']) ? $_POST['limit'] : null;

		if($limit != $qNo) {

			$quesData = $this->questionModel->getQuestions('sport');
			$id = $quesData[$qNo]['question_id'];
			$ansData = $this->questionModel->getAnswers('sport', $id);
			$this->load->view('quizView', array('quesdata' => $quesData, 'ansdata' => $ansData, 'idvalue' => $id, 'quesNo' => $qNo));
		
		} else {

			redirect('home');
		}
	}
}



 ?>