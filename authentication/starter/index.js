let users = [
  {
    id: 0,
    username: "kamrankhan123",
  },
  {
    id: 1,
    username: "ahmedhassan",
  },
  {
    id: 2,
    username: "shahid",
  },
  {
    id: 3,
    username: "admin",
  },
];

let blogs = [
  {
    id: 0,
    createdBy: 1,
    title: "Blog Title",
    description: "This is blog description",
  },
];
/**
 * 
TASK: BUILD AN AUTHENTICATION AND AUTHORIZATION SYSTEM
// Problem 1:
// Create a function that can add a blog article against a user ID
// Test cases:
// createBlog({title: "Hello world", description: "My name is Asad"}, authorId: 2) -> adds a blog article to the system. Blogs array becomes: [  
  {
    id: 0,
    createdBy: 1,
    title: "Blog Title",
    description: "This is blog description",
  },
  {
    id: 1,
    createdBy: 2,
    title: "Hello world",
    description: "My name is Asad",
  },
]

createBlog({title: "My world", description: "This is another article"}, authorId: 2) -> adds a blog article to the system. Blogs array becomes: [  
  {
    id: 0,
    createdBy: 1,
    title: "Blog Title",
    description: "This is blog description",
  },
  {
    id: 1,
    createdBy: 2,
    title: "Hello world",
    description: "My name is Asad",
  },
  {
    id: 2,
    createdBy: 2,
    title: "My world",
    description: "This is another article",
  },
]

// PROBLEM 2:
// Build a function that can return a list of blogs written by a user
// getBlogs(2) -> [{
    id: 1,
    createdBy: 2,
    title: "Hello world",
    description: "My name is Asad",
  },
  {
    id: 2,
    createdBy: 2,
    title: "My world",
    description: "This is another article",
  }]

 */
