const { User, Character } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, {userId}, context) => {
      console.log(userId)
      return User.findOne({_id: userId}).populate("cellar");
    },
    characters: async () => {
      return Character.find();
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    logout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      return { success: true };
    },
  },
};

module.exports = resolvers;
