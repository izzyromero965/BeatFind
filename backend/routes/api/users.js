const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Album, Image } = require("../../db/models");

const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

//Home Page:

router.get("/:id(\\d+)/homepage", requireAuth, async (req, res, next) => {
  const { userId } = req.session.auth;
  console.log("helloooooo from homepage!", userId);
});

router.get(
  "/:id/albums",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const albums = await Album.findAll({
      where: {
        userId: id,
      },
    });
    console.log(albums);
    res.json(albums);
  })
);

router.get(
  "/:id/images",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await Image.findAll({
      where: {
        userId: id,
      },
    });
    console.log(images);
    res.json(images);
  })
);

module.exports = router;
