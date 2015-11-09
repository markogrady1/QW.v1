$(document).ready(function() {

	setHovers();

	
/**
 * This function needs to refactored because it is repeating an awful lot
 * one function passing in class color and event should suffice
 */
	function setHovers() {
	$block = $('.fa');
	$blockTitle = $('.block-title');
	$blockTitles = $('.sport');
	$blockTitler = $('.rocket');
	$blockTitlem = $('.movie');

	$blockIcon = $('.block-icon');
	$blockIconr = $('.fa-rocket');
	$blockIconm = $('.fa-film');
	$blockIconfut = $('.fa-futbol-o');

	$blockIconfut.on('mouseover', function() {
		$(this).css({
			color:'#b52a2f'
		})
		$('.sport').css({
			color:'#b52a2f'
		});
	});

	$blockIconfut.on('mouseleave', function() {
		$(this).css({
			color:'#fff'
		})
		$('.sport').css({
			color:'#fff'
		});
	});

	$blockTitles.on('mouseover', function() {
		$(this).css({
			color:'#b52a2f'
		})
		$('.fa-futbol-o').css({
			color:'#b52a2f'
		});
	});

	$blockTitles.on('mouseleave', function() {
		$(this).css({
			color:'#fff'
		})
		$('.fa-futbol-o').css({
			color:'#fff'
		});
	});

$blockIconm.on('mouseover', function() {
		$(this).css({
			color:'#b52a2f'
		})
		$('.movie').css({
			color:'#b52a2f'
		});
	});

	$blockIconm.on('mouseleave', function() {
		$(this).css({
			color:'#fff'
		})
		$('.movie').css({
			color:'#fff'
		});
	});

	$blockTitlem.on('mouseover', function() {
		$(this).css({
			color:'#b52a2f'
		})
		$('.fa-film').css({
			color:'#b52a2f'
		});
	});

	$blockTitlem.on('mouseleave', function() {
		$(this).css({
			color:'#fff'
		})
		$('.fa-film').css({
			color:'#fff'
		});
	});

$blockIconr.on('mouseover', function() {
		$(this).css({
			color:'#b52a2f'
		})
		$('.rocket').css({
			color:'#b52a2f'
		});
	});

	$blockIconr.on('mouseleave', function() {
		$(this).css({
			color:'#fff'
		})
		$('.rocket').css({
			color:'#fff'
		});
	});

	$blockTitler.on('mouseover', function() {
		$(this).css({
			color:'#b52a2f'
		})
		$('.fa-rocket').css({
			color:'#b52a2f'
		});
	});

	$blockTitler.on('mouseleave', function() {
		$(this).css({
			color:'#fff'
		})
		$('.fa-rocket').css({
			color:'#fff'
		});
	});

	}
});


function popUp() {
$underLay = $('.details-underlay');
$overLay = $('.details-overlay');
console.log($underLay);


	setTimeout(function(){
	
		$underLay.fadeOut('slow', function() {
			$underLay.remove();
		})

		$overLay.fadeOut('slow', function() {
			$overLay.remove();
		})
	},1500);
		
	}