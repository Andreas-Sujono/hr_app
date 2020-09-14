const event = 'auth'

export const selectIsAuthenticated = state => state[event].isAuthenticated; // check if user has logged in
