var iconClases = ['fa-eye', 'fa-eye-slash', 'fa-flip-horizontal'];
var fontsClasses = ['small-font', 'medium-font', 'big-font'];
var colorClasses = ['white-style', 'black-style', 'blue-style', 'green-style'];
var infImg = false;

$(document).ready(function() {
    var controlPanel = false;

    $('#poor-vision').click(function() {
        controlPanel = !controlPanel;        
        toggleControlPanel();

        if (controlPanel) {
            $('#inf-font').text('Средний шрифт');
            $('#inf-style').text('Черным по белому');
            $('#inf-img').text('Включены');            
            $('#container *').addClass('medium-font').removeClass('small-font big-font');
            $('body, #container *').addClass('white-style').removeClass('black-style blue-style green-style');
       }
    });

    $('#off-visually-impaired').click(function() {
        controlPanel = !controlPanel; 
        toggleControlPanel();
    });

    $('#small-font').click(function() {
        var title = $(this).attr('title');
        $('#inf-font').text(title);
        $('#container *').addClass('small-font').removeClass('medium-font big-font');
    });

    $('#medium-font').click(function() {
        var title = $(this).attr('title');
        $('#inf-font').text(title);
        $('#container *').addClass('medium-font').removeClass('small-font big-font');
    });

    $('#big-font').click(function() {
        var title = $(this).attr('title');
        $('#inf-font').text(title);
        $('#container *').addClass('big-font').removeClass('small-font medium-font');
    });

    $('#white-style').click(function() {
        var title = $(this).attr('title');
        $('#inf-style').text(title);
        $('body, #container *').addClass('white-style').removeClass('black-style blue-style green-style');
    });

    $('#black-style').click(function() {
        var title = $(this).attr('title');
        $('#inf-style').text(title);
        $('body, #container *').addClass('black-style').removeClass('white-style blue-style green-style');
    });

    $('#blue-style').click(function() {
        var title = $(this).attr('title');
        $('#inf-style').text(title);
        $('body, #container *').addClass('blue-style').removeClass('white-style black-style green-style');
    });

    $('#green-style').click(function() {
        var title = $(this).attr('title');
        $('#inf-style').text(title);
        $('body, #container *').addClass('green-style').removeClass('white-style black-style blue-style');
    });

    $('#imgs').click(function() {
        var imgs = $('img');
        
        if (infImg) {
            $('#inf-img').text('Включены');
        } else {
            $('#inf-img').text('Выключены');
        }

        infImg = !infImg;

        for (var i = 0; i < imgs.length; i++) {
            removeElement(imgs[i]);
        }
    });
});

function toggleControlPanel() {
    for (var i = 0; i < iconClases.length; i++) {
        $('#poor-vision i').toggleClass(iconClases[i]);
    }   
    
    for (var i = 0; i < fontsClasses.length; i++) {
        $('#container *').removeClass(fontsClasses[i]);
    }

    for (var i = 0; i < colorClasses.length; i++) {
        $('body, #container *').removeClass(colorClasses[i]);
    }

    if(infImg) {
        var imgs = $('img');
        
        for (var i = 0; i < imgs.length; i++) {
            removeElement(imgs[i]);
        }
        infImg = !infImg;
    }

    $('.visually-impaired').slideToggle('slow'); 
    $('#container').toggleClass('container-margin-top');
}
	
function removeElement(element) {
    let div = null;
    const prevElement = element.previousSibling;
    if (prevElement !== null) {
	    if (prevElement.className !== undefined) {
            if (~prevElement.className.indexOf('fake-img') || ~prevElement.className.indexOf('fake-img hide')) {
                div = prevElement;          
            }
        } else {
            div = createDivElement(element);        
            element.parentNode.insertBefore(div, element);
	    }
    }
    toggle(element, 'hide');
    toggle(div, 'hide');
    $('.fake-img').addClass('whiteTableForImage'); 
	// $('.fake-img').removeClass('whiteTableForImage blackTableForImage blueTableForImage greenTableForImage');
	// if ($.cookie("style")==="white"){$('.fake-img').addClass("whiteTableForImage");}
    // if ($.cookie("style")==="black"){$('.fake-img').addClass("blackTableForImage");}
    // if ($.cookie("style")==="blue"){$('.fake-img').addClass("blueTableForImage");}
    // if ($.cookie("style")==="green"){$('.fake-img').addClass("greenTableForImage");}
}

function createDivElement(imgElem) {
    const height = imgElem.height;
    const width = imgElem.width;
    const alt = imgElem.alt;
    const div = document.createElement('div');

    div.className = 'fake-img hide';
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;

    if (alt) {
        div.innerText = alt;
    } else {
        div.innerText = 'Нет описания к изображению';
    }

    return div;
}

function toggle(element, className) {
    if (element !== null) {
        if (element.classList) {
            element.classList.toggle(className);
        } else {
            const classes = element.className.split(' ');
            const i = classes.indexOf(className);

            if (i >= 0) {
                classes.splice(i, 1);
            } else {
                classes.push(className);
                element.className = classes.join(' ');
            }
        }
	}
}	
