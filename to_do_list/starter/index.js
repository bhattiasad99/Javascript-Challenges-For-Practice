let users = [
  {
    id: 0,
    username: "ahmed",
    password: "ahmedpassword",
    isLoggedIn: false,
  },
  {
    id: 1,
    username: "hassan",
    password: "hassanpassword",
    isLoggedIn: false,
  },
];

// Problem 1:
// Create a function that can register a new user with a username and password
// TEST CASES:
// registerUser('alice', 'password123') -> User registered: alice
// registerUser('alice', 'password1234') -> Username "alice" is already taken!

// Problem 2:
// Create a function that can log in a user with a given username and password
// loginUser('alice', 'password12345') -> Invalid credentials!
// loginUser('alice', 'password123') -> Logged In Successfully
// loginUser('ahmed', 'ahmedpassword') -> Logged In Successfully

// Problem 3:
// Create a function that can log out the currently logged-in user
// logoutUser('ahmed') -> User logged out

// Problem 4:
// Create a function that returns the details of the currently logged-in users
// getActiveUsers() -> [ {id: 2, username: 'alice'} ] <password should NOT be returned>
