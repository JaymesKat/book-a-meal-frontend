import { menus } from '../../src/reducers/menu.reducer';
import { menuConstants } from '../../src/constants/menu.constants';

const menuAction = (actionType, actionId) => {
    if (typeof actionId !== 'undefined'){
      return {type: actionType, id: actionId}
    }
    return {type: actionType}
  }

const initial_state =[ 
    {
        "dateCreated": "Tue, 04 Sep 2018 11:38:16 GMT",
        "day": {
            "id": 3,
            "name": "Wednesday"
        },
        "mealIds": [
            7,
            8,
            9
        ],
        "mealList": [
        {
            "id": 7,
            "name": "Chicken Tikka",
            "price": 15
        },
        {
            "id": 8,
            "name": "Biryani Rice",
            "price": 10
        },
        {
            "id": 9,
            "name": "Chicken Curry",
            "price": 18
        }
    ]
    }
]

const  menuList = [
    {
        "dateCreated": "Tue, 04 Sep 2018 17:38:37 GMT",
        "day": {
            "id": 5,
            "name": "Friday"
        },
        "mealIds": [
            8
        ],
        "mealList": [
            {
                "id": 8,
                "name": "Biryani Rice",
                "price": 10
            }
        ]
    },
    {
        "dateCreated": "Tue, 04 Sep 2018 18:24:22 GMT",
        "day": {
            "id": 2,
            "name": "Tuesday"
        },
        "mealIds": [
            7,
            8,
            9
        ],
        "mealList": [
            {
                "id": 7,
                "name": "Chicken Tikka",
                "price": 15
            },
            {
                "id": 8,
                "name": "Biryani Rice",
                "price": 10
            },
            {
                "id": 9,
                "name": "Chicken Curry",
                "price": 18
            }
        ]
    }
] 

const menu = {
    "dateCreated": "Tue, 04 Sep 2018 11:38:16 GMT",
    "day": {
        "id": 3,
        "name": "Wednesday"
    },
    "mealIds": [
        7,
        8,
        9
    ],
    "mealList": [
        {
            "id": 7,
            "name": "Chicken Tikka",
            "price": 15
        },
        {
            "id": 8,
            "name": "Biryani Rice",
            "price": 10
        },
        {
            "id": 9,
            "name": "Chicken Curry",
            "price": 18
        }
    ]
}

describe('initial_state', () => {
    test('is correct', () => {
      const action = menuAction('fake_menuAction');
      const initialState = [];
  
      expect(menus(undefined, action)).toEqual(initialState);
    });
});

describe('Loading menus request', () => {
    test('it returns loading menu status', () => {
        const action = menuAction(menuConstants.LOAD_MENU_REQUEST)
        const expectedState =  [];
    
        expect(menus(undefined, action)).toEqual(expectedState);
      });
});

describe('Load menus successful', () => {
    test('it returns all menus', () => {
        let action = menuAction(menuConstants.LOAD_MENU_SUCCESS)
            action.menus = menuList 
        const expectedState =  action.menus;
    
        expect(menus(undefined, action)).toEqual(expectedState);
      });
});

describe('Load menus failure', () => {
    test('fails to return menus', () => {
        let action = menuAction(menuConstants.LOAD_MENU_FAILURE)
            action.error = "Failed to fetch menus"
        const expectedState = [];
    
        expect(menus(undefined, action)).toEqual(expectedState);
      });
});

describe('Create menu success', () => {
    test('it returns all menus with new menu', () => {
        
        let action = menuAction(menuConstants.CREATE_MENU_SUCCESS)
            action.menu = menu
        const expectedState =  [
            ...initial_state.filter(menu => menu.day.id !== action.menu.day.id),
            Object.assign({}, action.menu)
        ];
    
        expect(menus(undefined, action)).toEqual(expectedState);
      });
});

describe('Create menu failure', () => {
    test('it fails to create a menu', () => {
        
        let action = menuAction(menuConstants.CREATE_MENU_FAILURE)
            action.error = "Failed to create a menu"

        const expectedState =  initial_state;
    
        expect(menus(initial_state, action)).toEqual(expectedState);
      });
});

describe('Update menu success', () => {
    test('it returns all menus with updated menu', () => {
        
        let action = menuAction(menuConstants.UPDATE_MENU_SUCCESS)
            action.menu = menu

        const expectedState =  [
            ...initial_state.filter(menu => menu.day.id !== action.menu.day.id),
            Object.assign({}, action.menu)
        ];
    
        expect(menus(initial_state, menuAction)).toEqual(expectedState);
      });
});

describe('Update menu failure', () => {
    test('it fails to update a menu', () => {
        
        let action = menuAction(menuConstants.UPDATE_MENU_FAILURE)
            action.error = "Failed to update menu"
        
        const expectedState =  initial_state;
    
        expect(menus(initial_state, action)).toEqual(expectedState);
      });
});
