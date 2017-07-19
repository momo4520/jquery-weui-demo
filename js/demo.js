$(function(){
	$(document).on('click','#show-actions',function(){
		$.actions({
			title:'选择操作',
			onClose:function(){
				console.log('close');
			},
			actions:[
				{
					text:'发布',
					className:'color-primary',
					onClick:function(){
						$.alert('发布成功');
					}
				}
			]
		})
	});
	$(document).on('click','#show-actions-bg',function(){
		$.actions({
			title:'选择背景颜色',
			onClose:function(){
				console.log('close');
			},
			actions:[
				{
					text:'绿色',
					className:'bg-primary',
					onClick:function(){
						$(document.body).css('background','green');
					}
				},
				{
					text:'橙色',
					className:'bg-warning',
					onClick:function(){
						$(document.body).css('background','orange');
					}
				},
				{
					text:'红色',
					className:'bg-danger',
					onClick:function(){
						$(document.body).css('background','red');
					}
				}
			]
		});
	});
	$(document.body).pullToRefresh().on('pull-to-refresh',function () {
		setTimeout(function () {
			$('#time').text(new Date);
			$(document.body).pullToRefreshDone()
        },2000);
    });
	var loading = false;
	$(document.body).infinite().on('infinite',function () {
		if(loading) return;
		loading = true;
		setTimeout(function () {
			$('#list').append('<p>《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》英文版有1100多页，教学内容' +
				'非常丰富，不但涵盖了人工智能基础、问题求解、知识推理与规划等经典内容，而且还包括不确定知识与推理、机器' +
				'学习、通讯感知与行动等专门知识的介绍。目前我们为本科生开设的学科基础必修课“人工智能导论”主要介绍其中' +
				'的经典内容，而研究生必修的核心课程“人工智能原理”主要关注其中的专门知识。其实《世界著名计算机教材精选' +
				'·人工智能:一种现代的方法(第3版)》也适合希望提高自身计算系统设计水平的广大应用计算技术的社会公众，对参' +
				'加信息学奥林匹克竞赛和ACM程序设计竞赛的选手及其教练员也有一定的参考作用。</p>');
			loading = false;
        },2000);
    })
})