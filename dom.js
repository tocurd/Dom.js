var Dom = (function(){
	var domBin = function(){};
	var _self = {} , 
		_thisDom = '';

	domBin.prototype.get = function(domName , params , is_jquery){
		var domText = $('script[type="text/dom"]').html() + 'var';
		if(domText.indexOf('var ' + domName + '=') == -1 && domText.indexOf('var ' + domName + ' =') == -1) return false;

		var headerName = domText.match(new RegExp("var " + domName + "(.*)=[ ]{1}"));
		if(typeof headerName[0] == 'undefined') return false;
		headerName = headerName[0];

		domText = $.trim(domText.substring(domText.indexOf(headerName) + headerName.length, domText.length));
		domText = domText.substring(0 , domText.indexOf('var'));

		if(typeof params == 'undefined') return domText;
		$.each(params , function(key, value) {
			if(domText.indexOf("{%" + key + "%}") != false){
				domText = _self.replaceAll(domText , "{%" + key + "%}" , value);
			}
		});

		_thisDom = domText;
		domText = domText.replace(/<!--[^>]+-->/g,"");
		return typeof is_jquery == 'boolean' && is_jquery ? $(_thisDom) : domText;
	}


	domBin.prototype.$this = function(){
		return $(_thisDom);
	}

	_self.replaceAll = function(str, search , replace){
		while (str.indexOf(search) >= 0){
			str = str.replace(search, replace);
		}
		return str;
	}


	return domBin;
})(jQuery);

