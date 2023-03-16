const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/post");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//Since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, postsController.getPost);

//Enables user to create post w/ cloudinary for media uploads
// Change sigle file upload to multiple
router.post("/createPost", upload.single("file"), postsController.createPost);

router.post("/favoritePost/:id", postsController.favoritePost);

//Enables user to delete post. In controller, uses POST model to delete post from MongoDB collection
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
