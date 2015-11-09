<html>
<head>
	<title></title>
</head>
<body>
<?php 
$quesNo = !isset($quesNo) ? 0 : $quesNo;
$limit = sizeof($quesdata);
$cat = $quesdata[$quesNo]['category'];
$id = $quesdata[$quesNo]['question_id'];
echo $quesdata[$quesNo]['question'] . "<br>";
$newArray = array($ansdata[0]['crtanswer'], $ansdata[0]['ianswer1'], $ansdata[0]['ianswer2'], $ansdata[0]['ianswer3']);
shuffle($newArray);
 ?>


 <form action="<?php echo $cat ?>Next" method="POST">
 	<button class='answer1' ><?php echo $newArray[0] ?></button>
 	<button class='answer2' ><?php echo $newArray[1] ?></button>
 	<button class='answer3' ><?php echo $newArray[2] ?></button>
 	<button class='answer4' ><?php echo $newArray[3] ?></button>
 	<?php   $quesNo++; ?>
 	<input hidden name='id' value='<?php  echo $id  ?>'>
 	<input hidden name='quesNo'  value='<?php  echo $quesNo ?>'>
 	<input hidden name='limit' value='<?php echo $limit ?>'>

 </form>
</body>
</html>