const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getIsLoadingStatus = state => state.auth.isFetchingCurrentUser;
const getAuthError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getIsLoadingStatus,
  getAuthError,
};
export default authSelectors;
