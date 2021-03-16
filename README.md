# Banana.js

A banana library to end all banana libraries.

[![CI](https://github.com/kyoto-shift/banana/actions/workflows/ci.yml/badge.svg)](https://github.com/kyoto-shift/banana/actions/workflows/ci.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/a7b2a7e8b93b120f0025/maintainability)](https://codeclimate.com/github/kyoto-shift/banana/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a7b2a7e8b93b120f0025/test_coverage)](https://codeclimate.com/github/kyoto-shift/banana/test_coverage)

## Set up 

**Installing**
```
npm install banana-js
```

**Importing**

``Module:``
```javascript
var banana = require("banana-js");
```

``Browser:``
```html
<script type="text/javascript" src="./banana.js"></script>
```

## Usage

Banana currently supports 34 languages, including:
> Arabic, Azerbaijani, Basque, Belarusian, Burmese, Catalan, Cebuano, Cantonese (and Mandarin), Czech, Dutch, Esperanto, English, Estonian, Filipino, Finnish, French, Georgian, German, Greek, Gujarati, Haitian Creol, Hausa, Hebrew, Hindi, Hungarian, Icelandic, Igbo, Indonesian, Japanese, Kannada, Kazakh, Khmer, Korean and Russian!


```javascript
banana("arabic"); 	// موز
banana("english"); 	// banana
banana("korean");	// 바나나
```

Ever needed the ingredients or directions to make banana nut muffins, pudding, or even smoothies?

```javascript
// banana.muffin("ingredients" | "directions");
// banana.pudding("ingredients" | "directions");

banana.smoothie("ingredients" | "directions");
// ingredients:
	// [ "1 banana", "1/2 to 1 cup chilled milk", 
	// "1 tablespoon honey (optional)", 
	// "5 to 8 ice cubs (optional)" ]
// directions:
	// [ "0. Combine all of the ingredients in a blender and blend on medium-high speed until desired thickness.", 
	// "Tip: Combine ice cubes and milk first, then the other ingredients for a more even blend." ]
```

Unsure about if something is, in fact, a banana? Maybe it's in a language you don't understand!

```javascript
var unsureBanana = "바나나";
banana.is(unsureBanana, "english");	// false
banana.is(unsureBanana, "korean");	// true
```

If you're ever feeling insignificant, check to see if something is longer than the word banana in a specific language!

```javascript
var longer = "much larger";
var shorter = "short";
banana.isLongerThan(longer, "english");	 // false
banana.isLongerThan(shorter, "english"); // true
```

Feeling down? Need some banana facts to pick up your spirits? Generate some random ones!

```javascript
banana.fact(); // 'Bananas are low in calories and have no fat, no sodium, and no cholesterol. They contain vitamin C, potassium, fiber, and vitamin B6.'
banana.fact(); // 'Wrapping banana stems tightly in cling wrap will make them last three to five days longer.'
banana.fact(); // 'Bananas are technically berries.'
```

**Other**
```javascript
banana.peel();		// 🍌
banana.morse();		// -... .- -. .- -. .-
banana.base64();	// YmFuYW5h
banana.hex();		// #ffe135
banana.color();		// yellow
banana.phone();		// no.
banana.holder();	// 🦍
banana.cousin();	// 🍆
```

## Development

Like a real banana, all of the code is contained in one file:
```
./banana.js
```

Tests are in ``test.js`` and can be run using:
```
npm run test OR npm test
```

## License

MIT
