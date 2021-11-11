const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Album, Image } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const albums = await Album.findAll();
    console.log(albums);
    res.json(albums);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log("I'm in the routeeeeee");
    const images = await Image.findAll({
      where: {
        albumId: id,
      },
    });
    res.json(images);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const album = await Album.findByPk(id);
    await album.destroy();
    res.send("Album destroyed successfully!");
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { userId, title, albumCoverUrl } = req.body;
    const newAlbum = await Album.create({
      userId,
      title,
      albumCoverUrl,
    });
    if (!newAlbum) {
      const error = new Error("Album failed to post.");
      error.status = 401;
      error.title = "Posting album failed";
      error.errors = ["Your album did not post."];
      return next(error);
    }
    return res.json(newAlbum);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, albumCoverUrl } = req.body;
    const album = await Album.findByPk(id);
    const err = new Error("Album not found!");
    if (album) {
      await album.update({
        title,
        albumCoverUrl,
      });

      res.json(album);
    } else {
      next(err);
    }
  })
);

module.exports = router;
