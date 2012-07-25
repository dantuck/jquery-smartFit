(function ($, window, undefined) {
    
    /* 
     * public methods
     * 
     * $(selector).smartFit('methodName', arg1, arg2, ... argn)
     * where "autoFitText" is the name of your plugin and "methodName" is the name of a function available in
     * the "methods" object below; arg1 ... argn are arguments to be passed to the method
     * 
     * or, from within the plugin itself, as
     * methods.methodName.call($this, arg1, arg2, ... argn);
     * where "methodName" is the name of a function available in the "methods" object below
     */

    var methods = {
        init: function (opts) {
            var options = $.extend({}, $.fn.smartFit.defaults, opts),
                $this = $(this).data('options', options);
            
            return this.each(function () {
                methods.smartFit.call($this);
            });
        },

        // Public: smartFit text within the element
        //
        // minFontPx : 14, // Smallest the font will get in px. default: 14
        // maxFontPx : 16, // Largest the font will get in px. The font guessing will begin at this size. default: 16
        // innerWrapper : 'span' // inner wrapping element type, ex. span or div.
        //
        // Returns: the jQuery elements 
        //
        // Examples
        //
        //   $('.smartfit').smartFit({maxFontPx: 44, minFontPx:12});
        //   $('.smartfit').smartFit({innerWrapper: 'div'});
        
        smartFit: function () {
            var $this = this,
                opt = this.data('options'),
                element = $(this),
                fontSize = opt.maxFontPx,
                minFontSize = opt.minFontPx,
                $text,
                textHeight,
                textWidth,
                maxHeight = element.height(),
                maxWidth = element.width();

            if (element.children().length === 0) {
                element.wrapInner('<' + opt.innerWrapper + '/>');
                $text = $(opt.innerWrapper, element);
            } else $text = $(':first-child', element);

            do {
                element.css('font-size', fontSize);
                textHeight = $text.height();
                textWidth = $text.width();

                fontSize--;
            } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > minFontSize);
            return element;
        }
    };

    $.fn.smartFit = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.smartFit');
        }
    };

    $.fn.smartFit.defaults = {
        'minFontPx': 14, // Smallest the font will get in px. default: 14
        'maxFontPx': 16, // Largest the font will get in px. The font guessing will begin at this size. default: 16
        'innerWrapper': 'span' // inner wrapping element type, ex. span or div.
    };

})(jQuery, window);