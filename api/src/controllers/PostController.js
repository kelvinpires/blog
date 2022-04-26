const Post = require("../models/Post");

module.exports = {
  async showPosts(req, res) {
    const posts = await Post.find();

    try {
      return res.status(200).json({ posts: posts.reverse() });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
    }
  },
  async queryPost(req, res) {
    const { title } = req.query;
    const searchQuery = title.split(" ");
    const allPosts = await Post.find();

    let posts = [];

    try {
      searchQuery.map((item) => {
        const filteredPosts = allPosts.filter((post) =>
          post.title.toLowerCase().includes(item.toLowerCase())
        );
        if (!posts.includes(...filteredPosts)) {
          return posts.push(...filteredPosts);
        }
        return;
      });

      return res.status(200).json({ posts: posts.reverse() });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Algo deu errado. Tente novamente mais tarde." });
    }
  },
  async createPost(req, res) {
    if (req.user) {
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
    }
  },
  async updatePost(req, res) {
    if (req.user) {
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
    }
  },
  async deletePost(req, res) {
    if (req.user) {
      const { postId } = req.params;

      try {
        await Post.findByIdAndRemove(postId);

        return res.status(200).json({ message: "Post deletado com sucesso." });
      } catch (err) {
        return res
          .status(500)
          .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
      }
    }
  },
};
