<?php
class QuestionModel extends CI_Model {

	public function __construct() {
		parent::__construct();
	}

	/**
	 * This function returns an array of questions
     * from the database
     *
	 * @param  string $category 
	 * @return array $result
	 */
	public function getQuestions($category) {
		$this->db->select('*');
		$this->db->from('question');
		$this->db->where('category', $category); 
		$query = $this->db->get();
		$result = $query->result_array();

		return $result;
	}

    /**
     * This function resolves all answers for a given question
     * from the database
     *
     * @param string $category
     * @param int $id
     * @return array $result
     */
	public function getAnswers($category, $id) {
		$query = $this->db->get_where('answer', array('question_id' => $id), 1, 0);
		$result = $query->result_array();

		return $result;
	}
}