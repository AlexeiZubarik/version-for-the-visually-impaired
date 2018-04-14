$(document).ready(function() {
    $('#poor-vision').click(function() {
        var clases = ['fa-eye', 'fa-flip-horizontal', 'fa-eye-slash'];

        $('.visually-impaired').slideToggle(0, function() {
            for (var i = 0; i < clases.length; i++) {
                $('#poor-vision i').toggleClass(clases[i])
            }
            $('#container').toggleClass('container-margin-top');
        });        
    });

    $('#small-fonts').click(function() {
        $('#container *').addClass('small-fonts').removeClass('medium-fonts big-fonts');
    });

    $('#medium-fonts').click(function() {
        $('#container *').addClass('medium-fonts').removeClass('small-fonts big-fonts');
    });

    $('#big-fonts').click(function() {
        $('#container *').addClass('big-fonts').removeClass('small-fonts medium-fonts');
    });

    $('#white-style').click(function() {
        $('body').addClass('black-text-white-fonts').removeClass('white-text-white-fonts blue-text-white-fonts green-text-white-fonts');
        $('#container *').addClass('black-text-white-fonts').removeClass('white-text-white-fonts blue-text-white-fonts green-text-white-fonts');
    });

    $('#black-style').click(function() {
        $('body').addClass('white-text-white-fonts').removeClass('black-text-white-fonts blue-text-white-fonts green-text-white-fonts');
        $('#container *').addClass('white-text-white-fonts').removeClass('black-text-white-fonts blue-text-white-fonts green-text-white-fonts');
    });

    $('#blue-style').click(function() {
        $('body').addClass('blue-text-white-fonts').removeClass('black-text-white-fonts white-text-white-fonts green-text-white-fonts');
        $('#container *').addClass('blue-text-white-fonts').removeClass('black-text-white-fonts white-text-white-fonts green-text-white-fonts');
    });

    $('#green-style').click(function() {
        $('body').addClass('green-text-white-fonts').removeClass('black-text-white-fonts white-text-white-fonts blue-text-white-fonts');
        $('#container *').addClass('green-text-white-fonts').removeClass('black-text-white-fonts white-text-white-fonts blue-text-white-fonts');
    });

});


    // if ($.cookie('CecutientCookie') === 'on') {
    //     $('.visually-impaired').toggle();
    //     CecutientOn();
    //     if ($.cookie("fonts")=="small"){SmallFonts();}
    //     if ($.cookie("fonts")=="medium"){MediumFonts();}
    //     if ($.cookie("fonts")=="big"){BigFonts();}
    //     if ($.cookie("image")=="on"){ImageOn();}
    //     if ($.cookie("image")=="off"){ImageOff();}
    //     if ($.cookie("style")=="white"){WhiteStyle();}
    //     if ($.cookie("style")=="black"){BlackStyle();}
    //     if ($.cookie("style")=="blue"){BlueStyle();}
    //     if ($.cookie("style")=="green"){GreenStyle();}
    // }
    //    alert("font " + $.cookie("fonts")+' & cookie '+$.cookie("CecutientCookie") + " & style " + $.cookie("style"));
    /*Включение стилей для слабовидящих*/
    // $('#CecutientOn').click(function(){CecutientOn();});
    /*Включение выключение изображений*/
    // $('#ImageOn').click(function(){ImageOn();});
    // $('#ImageOff').click(function(){ImageOff();});
    /*Размер шрифта*/
    // $('#SmallFonts').click(function(){SmallFonts();});
    // $('#MediumFonts').click(function(){MediumFonts();});
    // $('#BigFonts').click(function(){BigFonts();});
    /*Цветовая схема*/
    // $('#WhiteStyle').click(function(){
    //     WhiteStyle();});
    // $('#BlackStyle').click(function(){
    //     BlackStyle();});
    // $('#BlueStyle').click(function(){
    //     BlueStyle();});
    // $('#GreenStyle').click(function(){
    //     GreenStyle();});
    /*Функция обработчик включения стилей*/
    // function CecutientOn(){
    //     $('#CecutientOn').css("display","none");
	// 	$.cookie("CecutientCookie", "on");
    //     $('#CecutientOff').css("display","inline-block");
    //     $.cookie("CecutientCookie", "on" );
	// 	$('body').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
	// 	$('#content, #content *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
	// 	$('#header *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
	// 	$('#sidebar *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
	// 	$('#footer2, #footer2 *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");	
	// 	$('#footer1, #footer1 *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");	
	// 	$('#footer *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");	
	// 	$('#content a, .menu a').addClass("linkClass");
	// 	if($.cookie("style")=== "")
	// 	$.cookie("style", "white"
	// 	//, {
	// 	  //  expires: 365,
	// 	   // path: '/'
	// 	//}
	// 	);
    //     return false;
    // }
    /*Функции изменения размера шрифта*/
    // function SmallFonts(){
    //     if ($.cookie("CecutientCookie")=="on"){
    //         $('#header *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
    //         $('#sidebar *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
    //         $('#content *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
	// 		$('#footer2 *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
	// 		$('#footer1, #footer1*').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
	// 		$('#footer *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
    //         $.cookie("fonts", "small"//, {
                //expires: 365,
                //path: '/'
            //}
	// 		);
    //        return false;
    //     }
    // }
    // function MediumFonts(){
    //     if ($.cookie("CecutientCookie")=="on"){
    //         $('#header *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    //         $('#sidebar *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    //         $('#content *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    //         $('#footer2 *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    //         $('#footer1, #footer1*').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    //         $('#footer *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    //         $.cookie("fonts", "medium"//, {
               // expires: 365,
               // path: '/'
            //}
	// 		);
    //         return false;
    //     }
    // }
    // function BigFonts(){
    //    if ($.cookie("CecutientCookie")=="on"){
    //         $('#header *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    //         $('#sidebar *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    //         $('#content *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    //         $('#footer2 *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    //         $('#footer1, #footer1 *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    //         $('#footer *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    //        $.cookie("fonts", "big"//, {
                //expires: 365,
                //path: '/'
            //}
	// 		);
    //        return false;
    //     }
    // }
    /*Функции обработчик отображения изображений*/
    // function ImageOn(){
    //     if ($.cookie("CecutientCookie")=="on"){
	// 		if($('#ImageOn').css('display') === 'inline-block')
	// 	{const imgs = document.getElementsByTagName('img');
	// 		for (let i = 0; i < imgs.length; i++) {
	// 			removeElement(imgs[i]);
	// 		}
	// 	}
    //        // $('img').css("display","inline-block");
    //         $('#ImageOff').css("display","inline-block");
    //         $('#ImageOn').css("display","none");
    //         $.cookie("image", "on"/*, {
    //             expires: 365,
    //             path: '/'
    //         }*/);
    //         return false;
    //     }
    // }
    // function ImageOff(){
    //     if ($.cookie("CecutientCookie")=="on"){
            //$('img').css("display","none");
		// 	if($('#ImageOff').css('display') === 'inline-block')
		// {const imgs = document.getElementsByTagName('img');
		// 	for (let i = 0; i < imgs.length; i++) {
		// 		removeElement(imgs[i]);
		// 	}
		// }
        //     $('#ImageOff').css("display","none");
        //     $('#ImageOn').css("display","inline-block");
        //     $('#CecutientBtn img').css("display","inline-block");
        //     $.cookie("image", "off"/*, {
    //             expires: 365,
    //             path: '/'
    //         });
    //         return false;
    //     }
    // }
    /*Функции изменения цветовой схема*/
    // function WhiteStyle(){
    //     if ($.cookie("CecutientCookie")=="on"){
    //         $('body').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
    //         $('#content, #content *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
    //         $('#header *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
    //         $('#sidebar *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");
    //         $('#footer2, #footer2 *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");	
    //         $('#footer1, #footer1 *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");	
    //         $('#footer *').removeClass("greenTextBrounFonts whiteTextBlackFonts blueTextBlueFonts").addClass("blackTextWhiteFonts");	
	// 		$('.fake-img').removeClass("greenTableForImage blackTableForImage blueTableForImage").addClass("whiteTableForImage");
	// 		$('.menu li, .sub-menu li').removeClass("greenTable blackTable blueTable").addClass("whiteTable");
	// 		$.cookie("style", "white"
			//, {
              //  expires: 365,
               // path: '/'
            //}
	// 		);
    //         return false;
    //     }
    // }
    // function BlackStyle(){
    //     if ($.cookie("CecutientCookie")=="on"){
    //         $('body').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
    //         $('#content, #content *').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
    //         $('#header *').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
    //         $('#sidebar *').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
    //         $('#footer2, #footer2 *').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
    //         $('#footer1, #footer1 *').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
    //         $('#footer *').removeClass("greenTextBrounFonts blackTextWhiteFonts blueTextBlueFonts").addClass("whiteTextBlackFonts");
	// 		$('.fake-img').removeClass("greenTableForImage whiteTableForImage blueTableForImage").addClass("blackTableForImage");
	// 		$('.menu li, .sub-menu li').removeClass("greenTable whiteTable blueTable").addClass("blackTable");
	// 		$.cookie("style", "black"
			//, {
              //  expires: 365,
               // path: '/'
            //}
	// 		);
    //         return false;
    //     }
    // }
    // function BlueStyle(){
    //     if ($.cookie("CecutientCookie")=="on"){
    //         $('body').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
    //         $('#content, #content *').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
    //         $('#sidebar *').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
    //         $('#header *').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
    //         $('#footer2, #footer2 *').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
    //         $('#footer1, #footer1 *').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
    //         $('#footer *').removeClass("greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("blueTextBlueFonts");
	// 		$('.fake-img').removeClass("greenTableForImage whiteTableForImage blackTableForImage").addClass("blueTableForImage");
	// 		$('.menu li, .sub-menu li').removeClass("greenTable whiteTable blackTable").addClass("blueTable");
	// 		$.cookie("style", "blue"
			//, {
              //  expires: 365,
               // path: '/'
            //}
	// 		);
    //         return false;
    //     }
    // }
    // function GreenStyle(){
    //     if ($.cookie("CecutientCookie")=="on"){
    //         $('body').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
    //         $('#content, #content *').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
    //         $('#sidebar *').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
    //         $('#header *').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
    //         $('#footer2, #footer2 *').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
    //         $('#footer1, #footer1 *').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
    //         $('#footer *').removeClass("blueTextBlueFonts whiteTextBlackFonts blackTextWhiteFonts").addClass("greenTextBrounFonts");
	// 		$('.fake-img').removeClass("whiteTableForImage blackTableForImage blueTableForImage").addClass("greenTableForImage");
	// 		$('.menu li, .sub-menu li').removeClass("whiteTable blackTable blueTable").addClass("greenTable");
	// 		$.cookie("style", "green"
			//, {
              //  expires: 365,
               // path: '/'
            //}
	// 		);
    //        return false;
    //    }
    // }
    /*Отключение версии для слабовидящих*/
    // $('#CecutientOff').click(function(){
    //     $('#CecutientOn').css("display","inline-block");
    //     $('#CecutientOff').css("display","none");
    //     $.cookie("CecutientCookie", "off");
    //     $.cookie("style", "");
	// 	if($('#ImageOff').css('display') !== 'inline-block')
	// 	{const imgs = document.getElementsByTagName('img');
	// 		for (let i = 0; i < imgs.length; i++) {
	// 			removeElement(imgs[i]);
	// 		}
	// 	}
		//$('img').css("display","inline-block");
            // $('#ImageOff').css("display","inline-block");
            // $('#ImageOn').css("display","none");
            // $.cookie("image", "on"//, {
                //expires: 365,
              //  path: '/'
            //}
		// 	);
        // $.cookie("fonts", "");
		// $('.fake-img').removeClass("whiteTableForImage blackTableForImage blueTableForImage greenTableForImage");
        // $('body').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
        // $('#content, #content *').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
        // $('#header *').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
        // $('#sidebar *').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
        // $('#footer2, #footer2 *').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
        // $('#footer1, #footer1 *').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
        // $('#footer *').removeClass("SmallFonts MediumFonts BigFonts blueTextBlueFonts greenTextBrounFonts whiteTextBlackFonts blackTextWhiteFonts");
		// $('.menu li, .sub-menu li').removeClass("greenTable whiteTable blackTable blueTable");
		// $('#content a, .menu a').removeClass("linkClass");
	   // window.location.reload();
//         return false;
//     });
	
	
// function removeElement(element) {
//     let div = null
//     const prevElement = element.previousSibling;
// if(prevElement !== null){
// 	if(prevElement.className !== undefined)
// 	{
//     if (~prevElement.className.indexOf('fake-img') || ~prevElement.className.indexOf('fake-img hide')) {
//         div = prevElement;          
//     }
//     }
//       else {
//         div = createDivElement(element);        
//         element.parentNode.insertBefore(div, element);
// 	}
// }
//     toggle(element, 'hide');
//     toggle(div, 'hide'); 
// 	$('.fake-img').removeClass("whiteTableForImage blackTableForImage blueTableForImage greenTableForImage");
// 	 if ($.cookie("style")==="white"){$('.fake-img').addClass("whiteTableForImage");}
//      if ($.cookie("style")==="black"){$('.fake-img').addClass("blackTableForImage");}
//      if ($.cookie("style")==="blue"){$('.fake-img').addClass("blueTableForImage");}
//      if ($.cookie("style")==="green"){$('.fake-img').addClass("greenTableForImage");}
// }


// function createDivElement(imgElem) {
//     const height = imgElem.height;
//     const width = imgElem.width;
//     const alt = imgElem.alt;
//     const div = document.createElement('div');

//     div.className = 'fake-img hide';
//     div.style.height = `${height}px`;
//     div.style.width = `${width}px`;

//     if (alt) {
//         div.innerText = alt;
//     } else {
//         div.innerText = 'Нет описания к изображению';
//     }

//     return div;
// }

// function toggle(element, className) {
//     if (element !== null) {
//         if (element.classList) {
//             element.classList.toggle(className);
//         } else {
//             const classes = element.className.split(' ');
//             const i = classes.indexOf(className);

//             if (i >= 0) {
//                 classes.splice(i, 1);
//             } else {
//                 classes.push(className);
//                 element.className = classes.join(' ');
//             }
//         }
// 	}
// }	
	
// });