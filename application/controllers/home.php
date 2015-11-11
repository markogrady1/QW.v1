<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

    /**
     * This function simply loads the home view at the start of quiz
     *
     * @return void
     */
	public function index()
	{
		$this->load->view('homeView');
	}
}
