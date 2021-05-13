const sideBarReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return action.toggle
    default:
      return state
  }
}

export { sideBarReducer as default }