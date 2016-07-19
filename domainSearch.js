function domainSearch (keyWords){
	var search = [],
		errs = [],
		names = [],
		availDomains = [],
		keyPair = 'cLUi_YDVxkQR3CmewB5AhgMTfxU:YDW48kSbMair9FyBanEML4';

	for (var w in keyWords) {
		var word = keyWords[w];
		var alpha = new RegExp(/^[a-zA-Z]+$/);
		if (word.match(alpha)) {
			search.push(word);
		}
		else {
			errs.push(word + ' was not included since it contains invalid characters.');
		}
	}

	names = ['prototypicaldomain.net']; //getNames(search);

	//call https://api.godaddy.com/v1/domains/available?domain={domainNames}&checkType=FULL&forTransfer=false

	require("jsdom").env("", function(err, window) {
	    if (err) {
	        console.error(err);
	        return;
	    }
	 
	    $ = require("jquery")(window);

		for (var n in names) {
			var name = names[n],
				url = 'https://api.godaddy.com/v1/domains/available?domain=' + name;

			$.ajax({
    			type: "GET",
			    url: url,
				headers: {
					"Authorization": "sso-key " + keyPair
				},
				success: function(body) { 
					if (body.available) {
						availDomains.push({
							name: body.domain,
							price: parseFloat(body.price/100) + ' ' + body.currency,
							purchaseLink: 'https://www.godaddy.com/domains/searchresults.aspx?checkAvail=1&tmskey=&domainToCheck=' + body.domain
						});
					}
				},
				error: function (error){
					console.log('ERROR: ' + error.responseJSON.message);
				}
			 });
		}

		if (availDomains.length === 0) {
			return 'Sorry, no available domains found for the specified keywords.';
		}

		return availDomains;
	});
}