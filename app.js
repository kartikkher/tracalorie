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
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
  };
  // Public Methods
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calorie} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });

      // Insert list item
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
  };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function () {
      // Fetch Items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    },
  };
})(ItemCtrl, UICtrl);

App.init();
