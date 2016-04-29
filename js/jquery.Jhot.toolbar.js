(function($) {
	"use strict";

	var methods;
	$.extend({
		toolbar: function(options) {
			var settings, ops, personQrCode, subscribeCode;
			settings = {
				root: '',
				topElement: '.hottech_top_anchor',
				parentElement: 'body',
				personQrElement: '.hottech_wechat_code',
				subscribeElement: '.hottech_share_code',
			};
			ops = $.extend(settings, options);
			personQrCode = {
				codeElement: ops.personQrElement,
				codeURL: ops.root + '/bind/personCode'
			};
			subscribeCode = {
				codeElement: ops.subscribeElement,
				codeURL: ops.root + '/bind/subscribeCode'
			};

			methods.createDOM(ops.parentElement);
			methods.createTwoDimensionCode(personQrCode, subscribeCode);
			methods.goToAnchor(ops.topElement);
		}
	});

	methods = {
		createDOM: function(parentElement) {
			var parent = $(parentElement),
				div = $('<div id="tool-bar"></div>'),
				container = [];

			container.push('<ul>');
			container.push('<li id="hottech_wechat">');
			container.push('<div class="hottech_wechat_code"></div>');
			container.push('</li>');
			container.push('<li id="hottech_share">');
			container.push('<div class="hottech_share_code"></div>');
			container.push('</li>');
			container.push('<li id="hottech_top">');
			container.push('<a class="hottech_top_anchor"></a>');
			container.push('</li>');
			container.push('</ul>');
			
			div.html(container.join(""));
			parent.append(div);
		},

		createTwoDimensionCode: function() {
			$.each(arguments, function(v, i) {
				$(i.codeElement).css('background-image', "url(" + i.codeURL + ")");
			});
		},

		goToAnchor: function(clickElment) {
			$(clickElment).on('click', function() {
				$("html, body").animate({
					scrollTop: 0
				}, 300);
				return false;
			});
		},

	};

})(jQuery);