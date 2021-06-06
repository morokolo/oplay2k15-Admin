const sideBarReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        toggle: action.toggle
      }
    case 'SIDEBAR_MATCH':
      return {
        ...state,
        game: action.game
      }
    default:
      return state
  }
}

export { sideBarReducer as default }