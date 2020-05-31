// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calorie) {
    this.id = id;
    this.name = name;
    this.calorie = calorie;
  };

  // Data Structure / State
  const data = {
    items: [
      {
        id: 0,
        name: "Chicken Burger",
        calorie: "400",
      },
      {
        id: 1,
        name: "Cookie",
        calorie: "200",
      },
      {
        id: 2,
        name: "Eggs",
        calorie: "100",
      },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  // Public Methods
  return {};
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function () {
      console.log("Initializing App.....");
    },
  };
})(ItemCtrl, UICtrl);

App.init();
