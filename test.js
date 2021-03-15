var assert = require('assert');
var banana = require('./');

assert.equal("🍌", 					banana.peel(), 				"Should be '🍌'");
assert.equal("-... .- -. .- -. .-", banana.morse(), 			"Should be '-... .- -. .- -. .-'");
assert.equal("YmFuYW5h",			banana.base64(), 			"Should be 'YmFuYW5h'");
assert.equal("#ffe135",				banana.hex(),				"Should be '#ffe135'");
assert.equal("yellow",				banana.color(),				"Should be 'yellow'");
assert.equal("no.",					banana.phone(),				"Should be 'no.'");
assert.equal("🦍",					banana.holder(),					"Should be '🦍'");

assert.equal(true, 				  	banana.isLongerThan("Dog"), "Dog has less characters than Banana, so it sould be false");

assert.equal("زوم", 			  	banana.reversed("arabic"), 	"موز backwards should be زوم");
assert.equal("းီသာေျပ်ကှင",	  	banana.reversed("burmese"), "ငှက်ပျောသီး backwards should be းီသာေျပ်ကှင");

assert.equal("موز", 				banana("arabic"), 			"Should be 'موز'")
assert.equal("banan", 				banana("azerbaijani"), 		"Should be 'banan'")
assert.equal("platano", 			banana("basque"), 			"Should be 'platano'")
assert.equal("банан", 				banana("belarusian"), 		"Should be 'банан'")
assert.equal("ငှက်ပျောသီး", 	banana("burmese"), 			"Should be 'ငှက်ပျောသီး'")														
assert.equal("plàtan", 				banana("catalan"), 			"Should be 'plàtan'")
assert.equal("saging", 				banana("cebuano"), 			"Should be 'saging'")
assert.equal("香蕉", 				banana("cantonese"), 		"Should be '香蕉'")
assert.equal("banán", 				banana("czech"), 			"Should be 'banán'")
assert.equal("banan", 				banana("dutch"), 			"Should be 'banan'")
assert.equal("banano", 				banana("esperanto"), 		"Should be 'banano'")
assert.equal("banana", 				banana("english"), 			"Should be 'banana'")
assert.equal("banaan", 				banana("estonian"), 		"Should be 'banaan'")
assert.equal("saging", 				banana("filipino"), 		"Should be 'saging'")
assert.equal("banaani", 			banana("finnish"), 			"Should be 'banaani'")
assert.equal("banane", 				banana("french"), 			"Should be 'banane'")
assert.equal("ბანანი", 				banana("georgian"), 		"Should be 'ბანანი'")
assert.equal("Banane", 				banana("german"), 			"Should be 'Banane'")
assert.equal("μπανάνα", 			banana("greek"), 			"Should be 'μπανάνα'")
assert.equal("બનાના", 				banana("gujarati"), 		"Should be 'બનાના'")
assert.equal("bannann", 			banana("haitian creol"),	"Should be 'bannann'")
assert.equal("ayaba", 				banana("hausa"),			"Should be 'ayaba'")
assert.equal("בננה", 				banana("hebrew"),			"Should be 'בננה'")
assert.equal("केला", 				banana("hindi"),			"Should be 'केला'")
assert.equal("banán", 				banana("hungarian"),		"Should be 'banán'")
assert.equal("banani", 				banana("icelandic"),		"Should be 'banani'")
assert.equal("unere", 				banana("igbo"),				"Should be 'unere'")
assert.equal("pisang", 				banana("indonesian"),		"Should be 'pisang'")
assert.equal("バナナ", 				banana("japanese"),			"Should be 'バナナ'")
assert.equal("ಬಾಳೆ", 				banana("kannada"),			"Should be 'ಬಾಳೆ'")
assert.equal("банан", 				banana("kazakh"),			"Should be 'банан'")
assert.equal("ចេក", 				banana("khmer"),			"Should be 'ចេក'")
assert.equal("바나나", 				banana("korean"),			"Should be '바나나'")
assert.equal("香蕉", 				banana("mandarin"),			"Should be '香蕉'")
