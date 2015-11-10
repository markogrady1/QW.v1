<html>
<head>
	<title></title>
	<link href="<?php echo base_url('/assets/css/grady.css');?>" rel="stylesheet">
		<!-- <link href="<?php echo base_url('/assets/css/bootstrap.css');?>" rel="stylesheet"> -->
		<script src="https://code.jquery.com/jquery-2.1.4.min.js" ></script>		
		<link href="<?php echo base_url('/assets/css/main.css');?>" rel="stylesheet">
		<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> -->
 <script src='<?php echo base_url('/assets/js/main.js');?>'></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body class="site">
	<header class="header-quiz">
	<span class="logo-wrap">Grady's Quiz Nite</span>  
</header>
<div class="page-wrap">
<div class="feedback"></div>	
<?php
$score = isset($score) ? $score : 0;


$correctAnswer = isset($isCorrectAnswer) ? $isCorrectAnswer : null;

if($correctAnswer) {
	$ansState = "Correct";
	$color = "#33b679";
	$image = "green-tick.png";
} else {
	$ansState = "Wrong";
	$color = "#fd164c";
	$image = "red_x1.png";
}

if(isset($correctAnswer)) {
		$score++; ?>
	
<div class="details-overlay"><div class="answer-status" style="color:<?php echo $color?>;"><?php echo $ansState ?></div><div class="prod-close"></div><img class="result-status" src="<?php echo base_url('/assets/img/' . $image);?>"></div>
<div class="details-underlay" ></div>

<script type="text/javascript">
			popUp();
</script>
<?php } 


$quesNo = !isset($quesNo) ? 0 : $quesNo;
$limit = sizeof($quesdata);
$cat = $quesdata[$quesNo]['category'];
$id = $quesdata[$quesNo]['question_id'];

$answerId = $ansdata[0]['answer_id'];
$newArray = array($ansdata[0]['crtanswer'], $ansdata[0]['ianswer1'], $ansdata[0]['ianswer2'], $ansdata[0]['ianswer3']);
shuffle($newArray);
 ?>

<div class="form-wrap">
	<div class="question-wrap">
	<?php echo $quesdata[$quesNo]['question'] . "<br>"; ?>
	</div>
 <form action="next" method="POST">
 	<div class="btn-wrap">
	 	<button class='answer-btn1' name='selected' value='<?php  echo $newArray[0] ?>'><?php echo $newArray[0] ?></button>
	 	<button class='answer-btn2' name='selected' value='<?php  echo $newArray[1] ?>'><?php echo $newArray[1] ?></button>
	 	<button class='answer-btn3' name='selected' value='<?php  echo $newArray[2] ?>'><?php echo $newArray[2] ?></button>
	 	<button class='answer-btn4' name='selected' value='<?php  echo $newArray[3] ?>'><?php echo $newArray[3] ?></button>
	</div>

 	<?php   $quesNo++; ?>
 	<input hidden name='id' value='<?php  echo $id  ?>'>
 	<input hidden name='quesNo'  value='<?php  echo $quesNo ?>'>
 	<input hidden name='limit' value='<?php echo $limit ?>'>
 	<input hidden name='cat' value='<?php echo $cat ?>'>
 	<input hidden name='ansId' value='<?php echo $answerId ?>'>
 	<input hidden name='score' value='<?php echo $score ?>'>

 </form>
</div>
</div>
    <div class="footer">
        <div class="copy">
            <div class="copy-right">© QuizNite.com 2015. All rights reserved.</div><div class="made-by">Made with love by <a href="#">@mark_o_grady</a>
            </div></div>


        <div class="socsq">

            <ul class="soc-listq">
                <li class="itemq"><a href=""><i class="fa fa-facebook-square"></i></a></li>
                <li class="itemq"><a href=""><i class="fa fa-twitter-square"></i></a></li>
                <li class="itemq"><a href=""><i class="fa fa-github-square"></i></a></li>
                <li class="itemq"><a href=""><i class="fa fa-google-plus-square"></i></a></li>
            </ul>
        </div>
    </div>
    <script src="<?php echo base_url('/assets/js/main.js');?>"></script>
</body>
</html>