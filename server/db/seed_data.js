use bodySystems;

db.dropDatabase();

db.systems.insert([
  {
    name: "Endocrine",
    function: "regulate hormones",
    primaryOrgan: "Pituitary"
  },
  {
    name: "Digestive",
    function: "extract nutrients from food",
    primaryOrgan:  "Stomach"
  }
]);
db.systems.find();
