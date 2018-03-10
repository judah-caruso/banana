(function () {

  var banana = () => "Banana";
  const _banana = "Banana";

  banana.muffin = (opt) =>  {
    switch(opt) {
      case "ingredients": return ["1/4 cup butter (softened)", "1/2 cup sugar", "1 egg", "3/4 cup mashed ripe banana", "1/2 teaspoon vanilla extract", "1 cup all-purpose flour", "3/4 teaspoon baking powder", "1/4 teaspoon salt", "1/8 teaspoon ground cinnamon", "1/4 cup chopped walnuts"]; 
      case "directions": return ["0. Put cream, butter, and sugar into a small bowl. Beat in the egg.", "1. Combine the flour, baking powder, salt, baking soda, and cinnamon; add to the creamed mixture just until moistened.", "2. Fold in walnuts.", "3. Coat muffin cups with cooking spray or use paper liners.", "4. Fill two-thirds full with batter.", "5. Bake at 350° for 23-25 minutes or until a toothpick comes out clean.", "6. Cool for 5 minutes before removing pan to a wire rack."];
      default: return "A tasty treat. Great for breakfast, lunch, or even dinner!";
    }
  }
  banana.pudding = (opt) => {
    switch(opt){
      case "ingredients": return ["5 ounce package instant vanilla pudding mix", "12 ounce container frozen whipped topping, thawed", "2 cups cold milk", "14 ounces sweetened condensed milk", "14 bananas, sliced", "1 tablespoon vanilla extract"];
      case "directions": return ["0. In a large mixing bowl, beat pudding mix and milk for 2 minutes.", "1. Blend in condensed milk until smooth.", "2. Stir in vanilla extract and fold in whipped topping.", "3. Layer sliced bananas and pudding mixture in a glass serving bowl. Chill until serving."];
      default: return "Not as good as a muffin, but still tasty nonetheless."
    }
  }
  banana.smoothie = (opt) => {
    switch(opt){
      case "ingredients": return ["1 banana", "1/2 to 1 cup chilled milk", "1 tablespoon honey (optional)", "5 to 8 ice cubs (optional)"];
      case "directions": return ["0. Combine all of the ingredients in a blender and blend on medium-high speed until desired thickness.", "Tip: Combine ice cubes and milk first, then the other ingredients for a more even blend."];
      default: return "A timeless classic."
    }
  }

  banana.is = (input) => (input.toLowerCase() != banana().toLowerCase()) ? false : true; 
  banana.isLongerThan = (input) => (input.length < banana().length) ? true : false;

  banana.reversed = () => {
    var split = banana().toLowerCase().split("");
    var reversed = split.reverse();
    return reversed.join("");
  };

  banana.peel = () => "🍌";
  banana.color = () => "Yellow";

  banana.arabic        = ()   => "موز";
  banana.azerbaijani   = ()   => "banan";
  banana.basque        = ()   => "platano";
  banana.belarusian    = ()   => "банан";
  banana.burmese       = ()   => "ငှက်ပျောသီး";
  banana.catalan       = ()   => "plàtan";
  banana.cebuano       = ()   => "saging";
  banana.chinese       = (dialect) => {
    switch (dialect){
      case "mandarin" : return "香蕉";
      case "cantonese": return "香蕉";
      default         : return "香蕉";}}
  banana.czech         = ()   => "banán";
  banana.dutch         = ()   => "banan";
  banana.esperanto     = ()   => "banano";
  banana.english       = ()   => "banana";
  banana.estonian      = ()   => "banaan";
  banana.filipino      = ()   => "saging";
  banana.finnish       = ()   => "banaani";
  banana.french        = ()   => "banane";
  banana.georgian      = ()   => "ბანანი";
  banana.german        = ()   => "Banane";
  banana.greek         = ()   => "μπανάνα";
  banana.gujarati      = ()   => "બનાના";
  banana.haitianCreol  = ()   => "bannann";
  banana.hausa         = ()   => "ayaba";
  banana.hebrew        = ()   => "בננה";
  banana.hindi         = ()   => "केला";
  banana.hungarian     = ()   => "banán";
  banana.icelandic     = ()   => "banani";
  banana.igbo          = ()   => "unere";
  banana.indonesian    = ()   => "pisang";
  banana.japanese      = ()   => "バナナ";
  banana.kannada       = ()   => "ಬಾಳೆ";
  banana.kazakh        = ()   => "банан";
  banana.khmer         = ()   => "ចេក";
  banana.korean        = ()   => "바나나";

if(typeof module !== 'undefined' && module.exports) {
      module.exports = banana;
  } else if (typeof define === 'function' && define.amd){
    define(banana);
  } else if (window) {
    window.banana = banana;
  }
}());