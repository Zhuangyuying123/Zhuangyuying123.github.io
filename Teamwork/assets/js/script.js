jQuery.noConflict();
jQuery(document).ready(function($){


function lightboxPhoto() {

	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});

	}

		if(jQuery().prettyPhoto) {

		lightboxPhoto();

	}


if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();

	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];

		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});
		$(this).addClass("active");
		return false;
	});

}//if quicksand

});
let myChart1 = document.getElementById('myChart1').getContext('2d');
let chart1 = new Chart(myChart1, {
	type:'doughnut',
	data:{
		labels:['西南官话','中原官话','东北官话','冀鲁官话','江淮官话','胶辽官话','兰银官话','北京官话'],
		datasets:[{
			label:'Population',
			data:[
				27000,
				20000,
				12000,
				9000,
				7000,
				3000,
				1700,
				1500
			],
			backgroundColor:[
		'rgba(255,99,132,0.2)',
		'rgba(54,162,235,0.2)',
		'rgba(255,206,86,0.2)',
		'rgba(75,192,192,0.2)',
		'rgba(153,102,255,0.2)',
		'rgba(235,206,86,0.2)',
		'rgba(72,192,192,0.2)',
		'rgba(143,102,255,0.2)',
	],
	borderColor: [
		'rgba(255,99,132)',
		'rgba(54,162,235)',
		'rgba(255,206,86)',
		'rgba(75,192,192)',
		'rgba(153,102,255)',
		'rgba(235,206,86)',
		'rgba(72,192,192)',
		'rgba(143,102,255)',

	],

			borderWidth:1,
			borderColor:'#777',
			hoverBorderWidth:3,
			hoverBorderColor:'#000'
		}],
	},
	options:{
		plugins:{
			title:{
				display:true,
				text:'国内使用官话人口数量（单位：万人）：',
				font:{
					size:25
				}
			},
			legend:{
				display:true,
				position:'right',
				labels:{
					font:{
						size:15}}

			},
			layout:{
				padding:{
					left:50,
					right:0,
					top:0,
					bottom:0
				}
			},
			tooltip:{
			 enabled:true
		 }
	 }
 }
});
