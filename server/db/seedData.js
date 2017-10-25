use bodySystems;

db.dropDatabase();

db.system.insert([
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
db.system.find();
