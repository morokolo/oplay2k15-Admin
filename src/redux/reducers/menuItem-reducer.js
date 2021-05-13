const menuItemReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_MENU_ITEM':
      return action.item
    default:
      return state
  }
}

export { menuItemReducer as default }