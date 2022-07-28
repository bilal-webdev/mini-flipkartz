import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    const userExist = await User.findOne({ username: request.body.username });

    if (userExist) {
      return response.status(401).json({ message: "Username already exist" });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: newUser });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    const userFound = await User.findOne({
      username: username,
      password: password,
    });

    if (userFound) {
      return response
        .status(200)
        .json({ data: userFound });
    } else {
      return response.status(401).json({ message: "Invalid Login" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
