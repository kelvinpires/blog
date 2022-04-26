const route = require("express").Router();
const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const verifyToken = require("./verifyToken");

// posts
route.get("/posts", PostController.showPosts);
route.get("/posts/:postId", PostController.getPost);
route.post("/posts/search", PostController.queryPost);
route.post("/posts/create", verifyToken, PostController.createPost);
route.put("/posts/update/:postId", verifyToken, PostController.updatePost);
route.delete("/posts/delete/:postId", verifyToken, PostController.deletePost);

// users

route.post("/user/signup", UserController.signup);
route.post("/user/login", UserController.login);
route.get("/user", UserController.showUsers);

module.exports = route;
