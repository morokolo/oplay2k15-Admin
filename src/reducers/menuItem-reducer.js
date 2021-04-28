const menuItemReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_MENU_ITEM':
      return action.item
      break;

    default:
      return state
      break;
  }
}

export { menuItemReducer as default }