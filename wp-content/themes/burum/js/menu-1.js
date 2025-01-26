//для кнопки наверх
$(document).ready(function () {
    $('body').append('<a href="#" id="go-top" title="наверх"><br></a>');
});

$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }
});

$(function () {
    $("#go-top").scrollToTop();
});
//модальные формы
$(document).ready(function(){
	$('.close-modal-form, .hover-site').click(function () {
		$('.hover-site').removeClass('display-block');
		$('.modal-form').removeClass('display-block');
	});
	$('.button-modal').click(function (){
		$('.top-modal-form-order-call-back').addClass('display-block');
		$('.hover-site').addClass('display-block');
	});	
	
	
	$('.post-answer nav').click(function(){
		if($(this).hasClass('active-answer')){
			$('.post-answer nav').parent('.post-answer').children('section').slideUp(300);
			$('.post-answer nav').removeClass('active-answer');
		} else {
			$('.post-answer nav').parent('.post-answer').children('section').slideUp(300);
			$(this).parent('.post-answer').children('section').slideDown(300);
			$('.post-answer nav').removeClass('active-answer');
			$(this).addClass('active-answer');	
		}
	});
	
	
	
if ($('.box-currencys-for-inputs_crypto').length){	
	
	//box-currencys-for-inputs crypto 
	$('.box-currencys-for-inputs_crypto').children('.post-currency-for-input').first().addClass('activer_crypto_currentcy'); 
		
		$code_currency_crypto =  $('.activer_crypto_currentcy').children('.code_currency_crypto').text();
		$('.currency_symbol_crypto').html($code_currency_crypto);	
		
		$title_crypto =  $('.activer_crypto_currentcy').children('.title_crypto').text();
		$('.title-currency-input_crypto').html($title_crypto);	
		
		$img_crypto =  $('.activer_crypto_currentcy').children('.img-currency-box').html();
		$('.img-currency-input_crypto').html($img_crypto);	
		
		$min_crypto_text =  $('.activer_crypto_currentcy').children('.min_currency_crypto').text();
			$min_crypto = Number($min_crypto_text);
		$('.min-numbers_crypto').html($min_crypto);	
	
	$('.box-currencys-for-inputs').slideUp(300);
	$('.left-currency-input_crypto').click(function(){
		$(this).parent('.inputs-currency').parent('.box-currency-inputs').children('.box-currencys-for-inputs').slideDown(300);
		$(this).addClass('active-left-currency-input');
	});
	
	function click_post_currency_crypto(){
		$('.left-currency-input').removeClass('active-left-currency-input');
		$('.box-currencys-for-inputs').slideUp(300);
		$('.post-currency-for-input_crypto').removeClass('activer_crypto_currentcy');
		$(this).addClass('activer_crypto_currentcy'); 
		
		$code_currency_crypto =  $(this).children('.code_currency_crypto').text();
		$('.currency_symbol_crypto').html($code_currency_crypto);	
		
		$title_crypto =  $(this).children('.title_crypto').text();
		$('.title-currency-input_crypto').html($title_crypto);
				
		$img_crypto =  $(this).children('.img-currency-box_crypto').html();
		$('.img-currency-input_crypto').html($img_crypto);	
		
		$min_crypto_text =  $(this).children('.min_currency_crypto').text();
		$min_crypto = Number($min_crypto_text);
		$('.min-numbers_crypto').html($min_crypto);
		
		$code_currency_crypto = $(this).children('.code_currency_crypto').text();
		
		$code_cash_carrenct = $('.activer_cash_currentcy').children('.code_fact_currency_cash').html();
		$exchange_crypto = $('.' + $code_currency_crypto + '_exchanges').children('.' + $code_cash_carrenct).html();
		$('.current_informer').html($exchange_crypto);
		$('.input_export_crypto').val('');
		$('.input_import_cash').val('');
	};
	
		//box-currencys-for-inputs cash
	$('.box-currencys-for-inputs_cash').children('.post-currency-for-input').first().addClass('activer_cash_currentcy'); 
		$code_currency_cash =  $('.activer_cash_currentcy').children('.code_currency_cash').text();
		$('.currency_symbol_cash').html($code_currency_cash);	
		$title_cash =  $('.activer_cash_currentcy').children('.title_cash').text();
		$('.title-currency-input_cash').html($title_cash);	
		$img_cash =  $('.activer_cash_currentcy').children('.img-currency-box_cash').html();
		$('.img-currency-input_cash').html($img_cash);	
		$max_cash =  $('.activer_cash_currentcy').children('.max_currency_cash').text();
		$('.max-numbers_cash').html($max_cash);	
		$placeholder_crypto_wallet = $('.activer_cash_currentcy').children('.code_currency_placeholder').text();
		$('.input_name_wallet_user').attr("placeholder", $placeholder_crypto_wallet);
		$('.img_input_wallet_user').html($img_cash);
		$code_cash_carrenct = $('.activer_cash_currentcy').children('.code_fact_currency_cash').html();
		$exchange_crypto = $('.' + $code_currency_crypto + '_exchanges').children('.' + $code_cash_carrenct).html();
		$('.current_informer').html($exchange_crypto);
	
	$('.box-currencys-for-inputs').slideUp(300);
	$('.left-currency-input_cash').click(function(){
		$(this).parent('.inputs-currency').parent('.box-currency-inputs').children('.box-currencys-for-inputs').slideDown(300);
		$(this).addClass('active-left-currency-input');
	});
	
};
	
	function click_post_currency_cash(){
		$('.left-currency-input').removeClass('active-left-currency-input');
		$('.box-currencys-for-inputs').slideUp(300);
		$('.post-currency-for-input_cash').removeClass('activer_cash_currentcy'); 
		$(this).addClass('activer_cash_currentcy'); 
		
		$code_currency_cash =  $(this).children('.code_currency_cash').text();
		$('.currency_symbol_cash').html($code_currency_cash);	
		
		$title_cash =  $(this).children('.title_cash').text();
		$('.title-currency-input_cash').html($title_cash);
				
		$img_cash =  $(this).children('.img-currency-box_cash').html();
		$('.img-currency-input_cash').html($img_cash);	
		$('.img_input_wallet_user').html($img_cash);
		
		$max_cash =  $(this).children('.max_currency_cash').text();
		$('.max-numbers_cash').html($max_cash);
		
		$placeholder_crypto_wallet = $(this).children('.code_currency_placeholder').text();
		$('.input_name_wallet_user').attr("placeholder", $placeholder_crypto_wallet);
		
		
		$code_cash_carrenct = $('.activer_cash_currentcy').children('.code_fact_currency_cash').html();
		$exchange_crypto = $('.' + $code_currency_crypto + '_exchanges').children('.' + $code_cash_carrenct).html();
		$('.current_informer').html($exchange_crypto);
		
		$('.input_export_crypto').val('');
		$('.input_import_cash').val('');
	};
	
		
	function keyup_input_cash(){
		$input_import_cash = parseInt($('.input_import_cash').val());
		$input_export_crypto = $('.input_export_crypto').val();
		
		
		$max_cash_num = Number($max_cash);
		$input_import_cash_num =  parseInt($input_import_cash, 2);
		
		$code_cash_carrenct = $('.activer_cash_currentcy').children('.code_fact_currency_cash').html();
		$exchange_crypto = $('.' + $code_currency_crypto + '_exchanges').children('.' + $code_cash_carrenct).html();
		
		$result_to_export_crypto = $input_import_cash / $exchange_crypto;
		
		$('.input_export_crypto').val($result_to_export_crypto);
		
		if($result_to_export_crypto < $min_crypto){
			$('.min-numbers').removeClass('display-none');
		} else {
			$('.min-numbers').addClass('display-none');
		};
		
		if($input_import_cash > $max_cash){
			$('.max-numbers_cash_red').removeClass('display-none');
		} else {
			$('.max-numbers_cash_red').addClass('display-none');
		};
		
		if(($input_import_cash > $max_cash) || ($result_to_export_crypto < $min_crypto)){
			$('.form-btn').attr('disabled', 'disabled');
		} else {
			$('.form-btn').removeAttr('disabled');
		};
		

	};
	
		
	function keyup_input_crypto(){
		$input_import_cash = parseInt($('.input_import_cash').val());
		$input_export_crypto = $('.input_export_crypto').val();
		
		$max_cash_num = Number($max_cash);
		$input_import_cash_num =  parseInt($input_import_cash, 2);
		
		$code_cash_carrenct = $('.activer_cash_currentcy').children('.code_fact_currency_cash').html();
		$exchange_crypto = $('.' + $code_currency_crypto + '_exchanges').children('.' + $code_cash_carrenct).html();
		
		
		
		
	//	console.log($code_cash_carrenct, $exchange_crypto);
		
		
		$result_to_export_cash = $input_export_crypto * $exchange_crypto;
		$result_to_export_cash_fixed = $result_to_export_cash.toFixed(2);
		$('.input_import_cash').val($result_to_export_cash_fixed);
		
		if($input_export_crypto < $min_crypto){
			$('.min-numbers').removeClass('display-none');
		} else {
			$('.min-numbers').addClass('display-none');
		};
		
		if($result_to_export_cash > $max_cash){
			$('.max-numbers_cash_red').removeClass('display-none');
		} else {
			$('.max-numbers_cash_red').addClass('display-none');
		};
		
		if(($result_to_export_cash > $max_cash) || ($input_export_crypto < $min_crypto)){
			$('.form-btn').attr('disabled', 'disabled');
		} else {
			$('.form-btn').removeAttr('disabled');
		};
		

	};
	
	
	function Order(){
		
		
	if($(".custom-checkbox").prop('checked')){
				
		
		testmail = $('.email_user_input').val();
    if(testmail.indexOf('@') > 0 ){
      console.log('есть');
    } else {
      $('.email_user_input').addClass('red_border');
      return false;
    }
		
		if (($('.input_export_crypto').val() == 0) || ($('.email_user_input').val() == 0) || ($('.fio_user').val() == 0) || ($('.input_name_wallet_user').val() == 0)){
			
			$('.informer-required').addClass('display-block');
			$('.input_export_crypto').addClass('red_border');
			$('.email_user_input').addClass('red_border');
			$('.fio_user').addClass('red_border');
			$('.input_name_wallet_user').addClass('red_border');
			
			return false;
		} else {
			
		}
		
		
		
		  $.ajax({
			type: "POST",
			url:  "https://coin24.exchange/generation/",
			success: function(id_number_order){
			  //var from_name = $(".from-val .one-val.active span").text();
				$('.number_order').text(id_number_order);
			}
		  });
		$summ_for_crypto_carrency = $('.input_export_crypto').val();
		
		$('.summ_for_crypto_carrency').text($summ_for_crypto_carrency);
		
		
		$network_currency_crypto =  $('.activer_crypto_currentcy').children('.network_currency_crypto').text();
		$('.wallet_network').text($network_currency_crypto);
		$number_wallet_cripto =  $('.activer_crypto_currentcy').children('.purse_currency_crypto').text();
		//$('.min-numbers_crypto').html($min_crypto);	
		//console.log($number_wallet_cripto);
		
		$('.number_wallet_cripto').text($number_wallet_cripto);
		$('.box-step1').addClass('display-none');
		$('.box-step2').removeClass('display-none');
		
		$xlm_crypto_simbol = $('.step2-input-text').children('.currency_symbol_crypto').text();
		//console.log($xlm_crypto_simbol);
		$('.step2-input-memo').addClass('display-none');
		
		if($xlm_crypto_simbol == 'XLM'){
			$('.step2-input-memo').removeClass('display-none');
			$.ajax({
				type: "POST",
				url:  "https://coin24.exchange/meno-generate/",
				success: function(id_number_memo){
				  //var from_name = $(".from-val .one-val.active span").text();
					$('.memo_number').text(id_number_memo);
				}
			});
			
			
			
		} else {
			$('.step2-input-memo').addClass('display-none');
		};
		
		
				function timer(_time, _call){
					timer.lastCall = _call
					timer.lastTime = _time
					timer.timerInterval = setInterval(function(){
								_call(_time[0],_time[1],_time[2]);
								_time[2]--
								if(_time[0]==0 && _time[1]==0 && _time[2]==0){
											timer.pause()
											_call(0,0,0);
								}
								if(_time[2]==0){
											_time[2] = 59
											_time[1]--
											if(_time[1]==0){
														_time[1] = 59
														_time[0]--
											}
								}
								timer.lastTime = _time
					}, 1000)
				}
					timer.pause = function(){
								clearInterval(timer.timerInterval)
					}
					timer.start = function(){
								timer(timer.lastTime, timer.lastCall)
					}

					//сверху мое, а тут уже ваше)
					//тут мы начинаем таймер. передаем массив с временем и функцию которая будет вызываться каждую секунду
					timer([0,59,59], function(h,m,s){
								
								$('.timer_pays').html( +m + ':' +s); // алертнуть часы минуты и секунды
					})

					timer.pause()
					timer.start()

	} else {
		$('.informer-required').addClass('display-block');
		
		$('.left-chek-for-button').addClass('red_border');
			return false;
	}	
		
	};
	
	//copy wallet
	$(function() {
	  // copy content to clipboard
	  function copyToClipboard(element) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).text()).select();
		document.execCommand("copy");
		$temp.remove();
	  }

	  // copy coupone code to clipboard
	  $("#copy_summ_for_crypto_carrency").on("click", function() {
		copyToClipboard("#summ_crypto_carrency");
			$(".coupon-alert-crypto").addClass('display-block');
		});
	  // copy coupone code to clipboard
	  $("#copy_wallet_crypto_carrency").on("click", function() {
		copyToClipboard("#wallet_crypto_carrency");
			$(".coupon-alert-number").addClass('display-block');
		});
		// copy coupone code to clipboard
	  $("#copy_summ_memo_number").on("click", function() {
		copyToClipboard("#memo_number");
			$(".coupon-alert-memo_number").addClass('display-block');
		});	
		// copy coupone code to clipboard
	  $("#copy_network").on("click", function() {
		copyToClipboard("#wallet_network");
			$(".coupon-alert_network_number").addClass('display-block');
		});
	});
	
	function toExchange(){
		$number_order_single = $('.number_order2').text();  //id_заявки
		$('#input_1_1').val($number_order_single); //id_заявки
		$('#input_1_10').val($number_order_single); //id_заявки
		
		$symbol_crypto_single = $('.title-currency-input_crypto').text(); //валюта_которую_продает
		$('#input_1_11').val($symbol_crypto_single); //валюта_которую_продает
		
		$input_crypto_single = $('.input_export_crypto').val(); //количество_продаваемой_валюты
		$('#input_1_12').val($input_crypto_single); //количество_продаваемой_валюты
		
		$code_cash_carrenct = $('.activer_cash_currentcy').children('.code_fact_currency_cash').html();
		$exchange_crypto = $('.' + $code_currency_crypto + '_exchanges').children('.' + $code_cash_carrenct).html();  //текущий_курс
		$('#input_1_18').val($exchange_crypto); //количество_продаваемой_валюты
		
		$title_cash_single = $('.title-currency-input_cash').text(); //валюта_которую_покупает
		$('#input_1_13').val($title_cash_single); //валюта_которую_покупает
		
		$import_cash_single = $('.input_import_cash').val(); //количество_покупаемой_валюты
		$('#input_1_14').val($import_cash_single); //количество_покупаемой_валюты
		
		$name_wallet_user_single = $('.input_name_wallet_user').val(); //номер_счета_на_который_хочет_получить_перевод
		$('#input_1_15').val($name_wallet_user_single); //номер_счета_на_который_хочет_получить_перевод
		
		$email_user_input_single = $('.email_user_input').val(); //email_пользователя
		$('#input_1_16').val($email_user_input_single); //email_пользователя  
		$('#input_1_19').val($email_user_input_single); //email_пользователя_для_отправки_уведомлений 
		
		$fio_user_single = $('.fio_user').val(); //фио_получателя
		$('#input_1_17').val($fio_user_single); //фио_получателя
		
		$memo_number_single = $('.memo_number').text(); //number memo
		$('#input_1_20').val($memo_number_single);  //number memo
		
		$('#gform_submit_button_1').trigger('click');
	};
	
	
	
	
	$('#step2-btn').click(toExchange);
	$('#step1-btn').click(Order);
	$('.input_export_crypto').keyup(keyup_input_crypto);
	$('.input_import_cash').keyup(keyup_input_cash);
	$('.post-currency-for-input_cash').click(click_post_currency_cash);
	$('.post-currency-for-input_crypto').click(click_post_currency_crypto);
	
	
	if ($('.status_order').length){
	  // делаем здесь что-то 
		$status_order = $('.status_order').text();
		$status_order_num = Number($status_order);
		console.log($status_order);
		if($status_order_num == 1){
			$('.step_exchange').removeClass('active_step_exchange');
			$('.step_exchange').addClass('complite_step_exchange');
			$('.list_step').removeClass('complite_step_exchange');
			$('.list_step').addClass('active_step_exchange');
			$('.step_3').addClass('display-none');
			$('.step_4').removeClass('display-none');
		
		} else {};
	
	};
	
	
	
});

$(document).ready(function() {		
	$("#feedback-top-modal-form-order-call-back").submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: "/wp-content/themes/burum/order-callback.php",
			beforeSend: function() {
				$(".load").fadeIn(400);
			},
			type: "post",
			data: $("#feedback-top-modal-form-order-call-back").serialize(),
			success: function(answer) {
				$("#answer-top-modal-form-order-call-back").html(answer);
			}
			}).done(function() {
			  $(".load").fadeOut(400);
			  $(".reset-input").val("");
			  setTimeout(function() {
				$(".modal-form").removeClass('display-block');
				$("#answer-top-modal-form-order-call-back").addClass('display-block');
			  }, 1);
			  setTimeout(function() {
				$("#answer-top-modal-form-order-call-back, .hover-site").removeClass('display-block');
			  }, 3000);
			});
	});
	
	$('.order-catalog-name-product').click(function (){
		var nameProduct = $(this).attr("data-name"); //записываем название товара для вывода в форме
		$("input[name=name_product]").val(nameProduct); 
	});		
	
	$('.phone-mask').mask("+7 (999) 999-99-99");		
	$('.wpcf7-submit').addClass('button-order');
	$('.wpcf7-submit').addClass('button-order-monitor1');
	
	document.addEventListener( 'wpcf7mailsent', function( event ) {
	  if ( '189' == event.detail.contactFormId ) {
		setTimeout(function() {
			$(".modal-form").removeClass('display-block');
			$("#answer-modal-form-ok, .hover-site").addClass('display-block');
			}, 1);
		setTimeout(function() {
			$("#answer-modal-form-ok, .hover-site").removeClass('display-block');
			 }, 3000);
		// Делаем ещё что-нибудь
	  }
	}, false );		
		  
});

//mobil
$(document).ready(function() {
	$('.mobile-menu').slideUp(10);
	$('.open-mobile-menu').click(function(){
		$('.mobile-menu').slideDown(300);
		$('.hover-site').addClass('display-block');
		$('.open-mobile-menu').addClass('display-none');
		$('.close-mobile-menu').addClass('display-flex');
	});
	$('.close-mobile-menu, .hover-site').click(function(){
		$('.mobile-menu').slideUp(300);
		$('.hover-site').removeClass('display-block');
		$('.open-mobile-menu').removeClass('display-none');
		$('.close-mobile-menu').removeClass('display-flex');
	});
});
//box-before-header
$(document).ready(function () {
	setTimeout(function() {
		var heightHeder = $('.header').height();
		var heightWindow = $(window).height();

		$('.box-before-header').css({
		"padding-top" : heightHeder + "px",
		});
		
		$('.mobile-menu').css({
		"top" : heightHeder + "px",
		"max-height" :  (heightWindow - heightHeder) + "px",
		"overflow-y" : "auto",
		});	
	}, 100);
	
});
//menu 
$(document).ready(function () {
	$('li.menu-item-has-children').addClass('arrow-bottom');
	$('li.menu-item-has-children').children('ul').slideUp(0);
	$('li.menu-item-has-children').children('ul').addClass('children-ul');
	$('li.menu-item-has-children').hover(function(){
		$(this).removeClass('arrow-bottom');
		$(this).addClass('arrow-top');
		$(this).children('ul').slideDown(250);
	}, function(){
		$(this).addClass('arrow-bottom');
		$(this).removeClass('arrow-top');
		$(this).children('ul').slideUp(250);
	});

//модальное окно всплывающее при прокрутке
	$(window).scroll(function () {
            if ($(window).scrollTop() >= "1500"){
				if ($('.modal-form-popap-avto').hasClass('scroll-tab')){
					setTimeout(function() {
					$('.modal-form-popap-avto').removeClass('scroll-tab');
					$('.modal-form-popap-avto').addClass('display-block');
					$('.hover-site').addClass('display-block');
				}, 3000);
				}
			}
     });

});

