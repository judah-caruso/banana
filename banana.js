"use strict";

(function () {
  var languages = [{
    name: "arabic",
    word: "موز"
  }, {
    name: "azerbaijani",
    word: "banan"
  }, {
    name: "basque",
    word: "platano"
  }, {
    name: "belarusian",
    word: "банан"
  }, {
    name: "burmese",
    word: "ငှက်ပျောသီး"
  }, {
    name: "catalan",
    word: "plàtan"
  }, {
    name: "cebuano",
    word: "saging"
  }, {
    name: "cantonese",
    word: "香蕉"
  }, {
    name: "czech",
    word: "banán"
  }, {
    name: "dutch",
    word: "banan"
  }, {
    name: "esperanto",
    word: "banano"
  }, {
    name: "english",
    word: "banana"
  }, {
    name: "estonian",
    word: "banaan"
  }, {
    name: "farsi",
    word: "موز"
  }, {
    name: "filipino",
    word: "saging"
  }, {
    name: "finnish",
    word: "banaani"
  }, {
    name: "french",
    word: "banane"
  }, {
    name: "georgian",
    word: "ბანანი"
  }, {
    name: "german",
    word: "Banane"
  }, {
    name: "greek",
    word: "μπανάνα"
  }, {
    name: "gujarati",
    word: "બનાના"
  }, {
    name: "haitian creol",
    word: "bannann"
  }, {
    name: "hausa",
    word: "ayaba"
  }, {
    name: "hebrew",
    word: "בננה"
  }, {
    name: "hindi",
    word: "केला"
  }, {
    name: "hungarian",
    word: "banán"
  }, {
    name: "icelandic",
    word: "banani"
  }, {
    name: "igbo",
    word: "unere"
  }, {
    name: "indonesian",
    word: "pisang"
  }, {
    name: "japanese",
    word: "バナナ"
  }, {
    name: "kannada",
    word: "ಬಾಳೆ"
  }, {
    name: "kazakh",
    word: "банан"
  }, {
    name: "khmer",
    word: "ចេក"
  }, {
    name: "korean",
    word: "바나나"
  }, {
    name: "mandarin",
    word: "香蕉"
  }, {
    name: "persian",
    word: "موز"
  }, {
    name: "russian",
    word: "банан"
  }];

  var banana = function banana(lang) {
    var index = languages.findIndex(function (x) {
      return x.name == lang;
    });

    if (index != -1) {
      return languages[index].word;
    } else {
      null;
    }
  };

  banana.muffin = function (opt) {
    switch (opt) {
      case "ingredients":
        return ["1/4 cup butter (softened)", "1/2 cup sugar", "1 egg", "3/4 cup mashed ripe banana", "1/2 teaspoon vanilla extract", "1 cup all-purpose flour", "3/4 teaspoon baking powder", "1/4 teaspoon salt", "1/8 teaspoon ground cinnamon", "1/4 cup chopped walnuts"];

      case "directions":
        return ["0. Put cream, butter, and sugar into a small bowl. Beat in the egg.", "1. Combine the flour, baking powder, salt, baking soda, and cinnamon; add to the creamed mixture just until moistened.", "2. Fold in walnuts.", "3. Coat muffin cups with cooking spray or use paper liners.", "4. Fill two-thirds full with batter.", "5. Bake at 350° for 23-25 minutes or until a toothpick comes out clean.", "6. Cool for 5 minutes before removing pan to a wire rack."];

      default:
        return "A tasty treat. Great for breakfast, lunch, or even dinner!";
    }

    ;
  };

  banana.pudding = function (opt) {
    switch (opt) {
      case "ingredients":
        return ["5 ounce package instant vanilla pudding mix", "12 ounce container frozen whipped topping, thawed", "2 cups cold milk", "14 ounces sweetened condensed milk", "14 bananas, sliced", "1 tablespoon vanilla extract"];

      case "directions":
        return ["0. In a large mixing bowl, beat pudding mix and milk for 2 minutes.", "1. Blend in condensed milk until smooth.", "2. Stir in vanilla extract and fold in whipped topping.", "3. Layer sliced bananas and pudding mixture in a glass serving bowl. Chill until serving."];

      default:
        return "Not as good as a muffin, but still tasty nonetheless.";
    }
  };

  banana.smoothie = function (opt) {
    switch (opt) {
      case "ingredients":
        return ["1 banana", "1/2 to 1 cup chilled milk", "1 tablespoon honey (optional)", "5 to 8 ice cubs (optional)"];

      case "directions":
        return ["0. Combine all of the ingredients in a blender and blend on medium-high speed until desired thickness.", "Tip: Combine ice cubes and milk first, then the other ingredients for a more even blend."];

      default:
        return "A timeless classic.";
    }
  };

  banana.is = function (input) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "english";
    return input.toLowerCase() != banana(lang).toLowerCase();
  };

  banana.isLongerThan = function (input) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "english";
    return input.length < banana(lang).length;
  };

  banana.reversed = function (lang) {
    var split = banana(lang).toLowerCase().split("");
    var reversed = split.reverse();
    return reversed.join("");
  };

  banana.peel = function () {
    return "🍌";
  };

  banana.cousin = function () {
    return "🍆";
  };

  banana.morse = function () {
    return "-... .- -. .- -. .-";
  };

  banana.base64 = function () {
    return "YmFuYW5h";
  };

  banana.hex = function () {
    return "#ffe135";
  };

  banana.color = function () {
    return "yellow";
  };

  banana.phone = function () {
    return "no.";
  };

  banana.holder = function () {
    return "🦍";
  };

  banana.fact = function () {
    // http://thebananapolice.com/fun-facts/
    var facts = ["The scientific name for banana is musa sapientum, which means \“fruit of the wise men.\”", "Thanks to its oil, rubbing the inside of a banana peel on a mosquito bite (or other bug bite) or on poison ivy will help keep it from itching and getting inflamed.", "The fastest marathon ever run by a competitor dressed as a fruit was 2 hours, 58 minutes, and 20 seconds—recorded at the Barcelona Marathon on March 6, 2011. The runner was Patrick Wightman from the United Kingdom, who dressed as a banana.", "Bananas float in water, as do apples and watermelons.", "Hawaii is the only place in the U.S. where bananas are grown commercially, although at one time they were also grown in southern California and Florida. The overwhelming majority of the bananas Americans eat come from countries in Latin America and South America, including Costa Rica, Ecuador, Colombia, Honduras, Panama, and Guatemala.", "The type of banana you see in the supermarket is called a Cavendish banana. The preferred variety was originally the Gros Michel, which essentially became extinct by 1960, thanks to a fungus called Panama disease.", "Some cultures (most notably Japan) use the fiber in the banana plant to make fabric and sometimes even paper.", "You can use the inside of a banana peel to clean and polish leather shoes.", "Banana peels also make a good silver polish—just rub silver with the inside of a peel and then buff with a cloth.", "More than 100 billion bananas are eaten every year in the world, making them the fourth most popular agricultural product.", "Americans eat an average of 27 pounds of bananas per person every year.", "51 percent of bananas are eaten for breakfast at home.", "India produces more bananas than any other country on the planet, accounting for about 28 percent of the worldwide crop. (China is number two, with ten percent.)", "A man in India once ate 81 bananas in a half hour.", "More songs have been written about bananas than about any other fruit.", "Bananas don’t actually grow on trees. They grow on plants that are officially classified as an herb (not surprisingly, the world’s largest herb). They’re in the same family as lilies, orchids, and palms.", "Bananas are technically berries.", "A cluster of bananas is called a hand, and a single banana is called a finger. Each banana hand has about 10 to 20 fingers.", "Banana plants grow not from seeds but from bulbs.", "Bananas have been depicted in ancient Egyptian hieroglyphs.", "Portuguese sailors introduced bananas to the Americas, bringing them from West Africa in the 16th century. Bananas first became popular with the masses at the 1876 Philadelphia Centennial Celebration, where they were sold wrapped in foil for 10 cents each.", "David Evans Strickler invented the banana split in 1904 when he was a 23-year-old employee at the Tassel Pharmacy soda fountain in Latrobe, Pennsylvania.", "Bananas are low in calories and have no fat, no sodium, and no cholesterol. They contain vitamin C, potassium, fiber, and vitamin B6.", "Research shows that eating bananas may lower the risk of heart attacks and strokes, as well as decrease the risk of getting some cancers.", "Bananas are the only fruit that contains the amino acid tryptophan plus vitamin B6. They help your body produce serotonin—a natural substance that alleviates depression.", "About half of all people who are allergic to latex are often also allergic to bananas.", "Bananas are naturally slightly radioactive (thanks to their potassium content)—but the level of radiation is not high enough to cause harm.", "Wrapping banana stems tightly in cling wrap will make them last three to five days longer.", "Banana peels are actually edible if cooked.", "If you peel a banana from the bottom up (holding on to the stem like a handle), you will avoid the stringy bits that cling to the fruit inside.", "Bananas ripen best if they are picked when green.", "To ripen bananas faster, put them in a sealed container—ideally a brown paper bag. Adding another fruit to the container (such as an apple or even a tomato) will further speed the ripening.", "If you put a banana in the refrigerator, the peel will turn dark brown or black, but it won’t affect the fruit inside."];
    var rng = Math.floor(Math.random() * facts.length);
    return facts[rng];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = banana;
  } else if (typeof define === 'function' && define.amd) {
    define(banana);
  } else if (window) {
    window.banana = banana;
  }
})();