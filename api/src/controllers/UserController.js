const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  async showUsers(req, res) {
    const users = await User.find();

    return res.status(200).json({ users: users });
  },
  async signup(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Todas as informações são necessárias." });
    }

    const haveUserEmail = await User.findOne({ email });
    const haveUsername = await User.findOne({ username });

    if (haveUserEmail || haveUsername) {
      return res
        .status(400)
        .json({ message: "Nome de usuário ou email já existe." });
    }

    const passCrypted = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    const newUser = await User.create({
      ...req.body,
      password: passCrypted,
    });

    try {
      const savedUser = await newUser.save();

      return res
        .status(201)
        .json({ message: "Usuário criado com sucesso.", user: savedUser });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo Aconteceu. Tente novamente mais tarde." });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Todas as informações são necessárias." });
      }

      const haveUser = await User.findOne({ email: email });

      if (!haveUser) {
        return res.status(404).json({ error: "Email ou senha incorretos." });
      }

      const bytes = CryptoJS.AES.decrypt(
        haveUser.password,
        process.env.SECRET_KEY
      );
      const originalPass = bytes.toString(CryptoJS.enc.Utf8);

      if (originalPass !== password) {
        return res.status(404).json({ message: "Email ou senha inválidos." });
      }

      const accessToken = jwt.sign(
        {
          id: haveUser._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );

      const { password: pass, ...info } = haveUser._doc;
      return res.status(200).json({ user: { ...info, accessToken } });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Algo Aconteceu. Tente novamente mais tarde." });
    }
  },
  async updateUser(req, res) {
    if (req.user) {
      const user = await User.findByIdAndUpdate(req.params.userId, {
        $set: req.body,
      });
      try {
        const savedUser = await user.save();

        return res
          .status(202)
          .json({ message: "Seus dados foram atualizados.", user: savedUser });
      } catch (err) {
        return res
          .status(500)
          .json({ message: "Algo Aconteceu. Tente novamente mais tarde." });
      }
    } else {
      return res.status(401).json({ message: "Você não tem autorização." });
    }
  },
  async deleteUser(req, res) {
    if (req.user) {
      try {
        await User.findByIdAndRemove(req.params.userId);
        return res.status(202).json({ message: "Seus dados foram removidos." });
      } catch (err) {
        return res
          .status(500)
          .json({ message: "Algo Aconteceu. Tente novamente mais tarde." });
      }
    } else {
      return res.status(401).json({ message: "Você não tem autorização." });
    }
  },
  async verifyAuth(req, res) {
    const { token } = req.params;

    try {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json("Token not valid");
        }
        return res.status(200).json({ user: decoded });
      });
    } catch (err) {
      res.status(500).json({ error: "Algo deu errado." });
    }
  },
};
