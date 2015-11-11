<html>
<head>
	<title>QUIZ PAGE</title>
	
		<link href="<?php echo base_url('/assets/css/grady.css');?>" rel="stylesheet">
		<link href="<?php echo base_url('/assets/css/bootstrap.css');?>" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-2.1.4.min.js" ></script>		
		<link href="<?php echo base_url('/assets/css/main.css');?>" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

</head>
<body class="site">
	<header class="header">
	<span class="logo-wrap">Grady's Quiz Nite</span>  
</header>
<div class="page-wrap">


<div class="welcome-message">Welcome to grady's quiz nite</div>
	<div class="row">
		<div class="c2 first-block"></div>

		<a href="<?php echo base_url('/quiz/start?cat=movie');?>">
			<div class="c2 left-block">
				<span class="block-icon"><i class="fa fa-film"></i></span>
				<a href="<?php echo base_url('/quiz/start?cat=movie');?>"><span class="block-title movie">Movie Quiz</span></a>  
			</div>
		</a>

		<a href="<?php echo base_url('/quiz/start?cat=sport');?>">
			<div class="c2 mid-block">
				<span class="block-icon"><i class="fa fa-futbol-o"></i></span>
				<a href="<?php echo base_url('/quiz/start?cat=sport');?>"><span class="block-title sport">Sports Quiz</span></a>  
			</div>
		</a>

		<a href="<?php echo base_url('/quiz/start?cat=space');?>">
			<div class="c2 right-block">
				<span class="block-icon"><i class="fa fa-rocket"></i></span>
				<a href="<?php echo base_url('/quiz/start?cat=space');?>"><span class="block-title rocket">Space Quiz</span></a>  
			</div>
		</a>
		<div class="c2"></div>
	</div>
	</div>
	<div class="footer">
	<div class="copy">
	<div class="copy-right">© QuizNite.com 2015. All rights reserved.</div>
        <div class="made-by">Made with love by <a href="https://twitter.com/?lang=en-gb">@mark_o_grady</a>
        </div></div>


	<div class="socs">

<ul class="soc-list">
	<li class="item"><a href=""><i class="fa fa-facebook-square"></i></a></li>
	<li class="item"><a href=""><i class="fa fa-twitter-square"></i></a></li>
	<li class="item"><a href=""><i class="fa fa-github-square"></i></a></li>
	<li class="item"><a href=""><i class="fa fa-google-plus-square"></i></a></li>
</ul>
</div>
</div>
 <script src="<?php echo base_url('/assets/js/main.js');?>"></script>
</body>
</html>