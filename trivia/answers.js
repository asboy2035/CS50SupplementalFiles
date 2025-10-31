export const correctAnswerSelectors = [
  ".question#flamingo > #grey",
  ".question#panda > #bamboo",
  ".question#koala > #koala",
  ".question#penguin > #antarctica",
  ".question#chick > #chick",
  ".question#bunny > #kit",
  ".question#bee > #pollen"
]

export const wrongAnswerSelectors = [
  ".question#flamingo > #pink",
  ".question#flamingo > #blue",

  ".question#panda > #lakes",
  ".question#panda > #cities",

  ".question#koala > #cat",
  ".question#koala > #rabbit",

  ".question#penguin > #desert",
  ".question#penguin > #jungle",

  ".question#chick > #kitten",
  ".question#chick > #puppy",

  ".question#bunny > #pup",
  ".question#bunny > #cub",

  ".question#bee > #leaves",
  ".question#bee > #dew"
]

export const freeResponseAnswers = {
  "kitten-sound": ["meow"],
  "bear-home": ["arctic", "north pole"],
  "duck-babies": ["duckling"],
  "bee-make": ["honey"],
  "fish-breathe": ["gills"]
}
