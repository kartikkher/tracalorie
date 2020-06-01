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
    addItem: function (name, calorie) {
      let ID;
      // Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calorie);

      // Create new Item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
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
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
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
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calorie: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    getSelctors: function () {
      return UISelectors;
    },
  };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  //  Load event listners
  const loadEventListners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelctors();
    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };

  // Add Item Submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();
    // Check for name and calorie input
    if (input.name !== "" && input.calorie !== "") {
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calorie);
    }
    e.preventDefault();
  };
  // Public methods
  return {
    init: function () {
      // Fetch Items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);

      // Load event listners
      loadEventListners();
    },
  };
})(ItemCtrl, UICtrl);

App.init();
