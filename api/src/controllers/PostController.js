const Post = require("../models/Post");

module.exports = {
  async showPosts(req, res) {
    const posts = await Post.find();

    try {
      return res.status(200).json({ posts: posts });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
    }
  },
  async createPost(req, res) {
    const { title } = req.body;

    if (!title) {
      return res.status(406).json({ message: "Título é necessário." });
    }

    const havePost = await Post.findOne({ title: title });

    if (havePost) {
      return res.status(406).json({ message: "Esse título já existe." });
    }

    const newPost = await Post.create({
      ...req.body,
      userId: req.user.id,
    });

    try {
      const savedPost = await newPost.save();

      return res
        .status(201)
        .json({ message: "Post criado com sucesso", post: savedPost });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
    }
  },
  async updatePost(req, res) {
    const { postId } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(postId, {
      $set: req.body,
    });

    try {
      const savedPost = await updatedPost.save();

      return res
        .status(200)
        .json({ message: "Post atualizado com sucesso.", post: savedPost });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
    }
  },
  async deletePost(req, res) {
    const { postId } = req.params;

    try {
      await Post.findByIdAndRemove(postId);

      return res.status(200).json({ message: "Post deletado com sucesso." });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
    }
  },
};
