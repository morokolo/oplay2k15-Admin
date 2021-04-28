export const isUserLoggedIn = () => {
  try {
    const json = localStorage.getItem('oplay_user');
    const user = JSON.parse(json);
    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}