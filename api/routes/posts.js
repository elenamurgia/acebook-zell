const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.getAllPosts);
router.post("/", PostsController.createPost);
router.get("/:id", PostsController.getPostById);
router.delete("/:id", PostsController.deletePostById);


module.exports = router;
