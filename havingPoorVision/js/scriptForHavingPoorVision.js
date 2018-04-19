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
            applyStyle('#container *', 'medium-font', fontsClasses);
            applyStyle('body, #container *', 'white-style', colorClasses);            
            $('#inf-img').text('Включены'); 
       }
    });

    $('#off-visually-impaired').click(function() {
        controlPanel = !controlPanel; 
        toggleControlPanel();
    });

    $('#small-font').click(function() {
        applyStyle('#container *', 'small-font', fontsClasses);
    });

    $('#medium-font').click(function() {
        applyStyle('#container *', 'medium-font', fontsClasses);
    });

    $('#big-font').click(function() {
        applyStyle('#container *', 'big-font', fontsClasses);
    });

    $('#white-style').click(function() {
        applyStyle('body, #container *', 'white-style', colorClasses);
    });

    $('#black-style').click(function() {
        applyStyle('body, #container *', 'black-style', colorClasses);        
    });

    $('#blue-style').click(function() {
        applyStyle('body, #container *', 'blue-style', colorClasses);
    });

    $('#green-style').click(function() {
        applyStyle('body, #container *', 'green-style', colorClasses);        
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

function applyStyle(selectors, className, arrayClasses) {
    var title = $('#' + className).attr('title');
    var removeClasses = arrayClasses.filter(function(element){
        return element !== className;
    });

    $('#inf' + className.match(/-\w+/)).text(title);
    $(selectors).addClass(className).removeClass(removeClasses.join(' '));
}

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
    
    $(element).toggleClass('hide');
    $(div).toggleClass('hide');
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
