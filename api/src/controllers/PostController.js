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
  async getPost(req, res) {
    const { postId } = req.params;

    try {
      const post = await Post.findOne({ _id: postId });

      if (!post) {
        return res.status(404).json({ message: "Post não encontrado." });
      }
      return res.status(200).json({ post: post });
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
  async getUserPosts(req, res) {
    const { userId } = req.params;

    const userPosts = await Post.find({ userId: userId });

    try {
      return res.status(200).json({ posts: userPosts });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
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
    } else {
      return res.status(401).json({ message: "Você não tem autorização." });
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
          .status(202)
          .json({ message: "Post atualizado com sucesso.", post: savedPost });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
      }
    } else {
      return res.status(401).json({ message: "Você não tem autorização." });
    }
  },
  async deletePost(req, res) {
    if (req.user) {
      const { postId } = req.params;

      try {
        await Post.findByIdAndRemove(postId);

        return res.status(202).json({ message: "Post deletado com sucesso." });
      } catch (err) {
        return res
          .status(500)
          .json({ message: "Algo aconteceu. Tente novamente mais tarde." });
      }
    } else {
      return res.status(401).json({ message: "Você não tem autorização." });
    }
  },
};
