$("#ajax-loading").show(),$(document).ready(function(){$.getJSON($("#stat").data("url"),function(t){var a=[];t.forEach(function(t){var e=t.js_chart_data;a.push({name:e.name,colorByPoint:!0,data:e.data}),$(t.div_id).highcharts({chart:{type:"pie"},title:{text:t.title},tooltip:{pointFormat:"<b>{point.y:.2f}</b> PLN<br><b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f}%",style:{width:100,color:Highcharts.theme&&Highcharts.theme.contrastTextColor||"black"}}}},series:a,credits:!1}),a=[]}),$("#ajax-loading").hide()})});