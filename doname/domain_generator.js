//return array of synonyms
var getSynonym = function(word){
	var xhr = new XMLHttpRequest();
	var URL = "http://words.bighugelabs.com/api/" + 2 + "/" + "5fa516708bc527c4bbbb36a7c62fc18f"  + "/" + word;
	xhr.open('GET',url,false);

	return docToArray(xhr.response);
};

var docToArray = function(word){
	var ret = [];
	var lines = word.split("\n");
	for (int i = 0; i < lines.size(); i++){
		var line = lines[i].split("|");
		var unspace = line[2].replace(/ /g,"");
		ret.push(unspace);
	}
	return ret;
}


//return one layer array of all synonyms of all words
var getSynonyms = function(words){
	var ret = [];

	for (var i = 0; i < words.size(); i++){
		var synonyms = getSynonym(words[i]);
		for (var j = 0; j < synonyms.size(); j++){
			ret.push(synonyms[j]);
		}
	}
	return ret;
}

//get all possible domain names
var getDomainNames = function(keywords){
	var allsynonyms = getSynonyms(keywords);
	console.log(allsynonyms);
	//feed into godaddy search somehow
}