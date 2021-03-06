const route = require("express").Router();
const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const verifyToken = require("./verifyToken");

// posts
route.get("/posts", PostController.showPosts);
route.get("/posts/:postId", PostController.getPost);
route.post("/posts/search", PostController.queryPost);
route.get("/posts/user/:userId", PostController.getUserPosts);
route.post("/posts/create", verifyToken, PostController.createPost);
route.put("/posts/update/:postId", verifyToken, PostController.updatePost);
route.delete("/posts/delete/:postId", verifyToken, PostController.deletePost);

// users

route.post("/user/signup", UserController.signup);
route.post("/user/login", UserController.login);
route.get("/users", UserController.showUsers);
route.get("/user/:userId", verifyToken, UserController.showUser);
route.get("/user/verify/:token", UserController.verifyAuth);
route.put("/user/edit/:userId", verifyToken, UserController.updateUser);
route.delete("/user/delete/:userId", verifyToken, UserController.deleteUser);

module.exports = route;
