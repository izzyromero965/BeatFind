"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          userId: 1,
          albumId: 1,
          imageUrl:
            "https://townsquare.media/site/68/files/2014/02/454436785.jpg?w=980&q=75",
          content: "First photo I took at a The Neighborhood concert!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 2,
          imageUrl:
            "https://www.gannett-cdn.com/presto/2020/11/12/USAT/9e3dc0f3-83db-4b3b-81ef-3079c25a6ba2-AP_Hungary_Music_Slipknot.JPG?crop=3857,2170,x0,y166&width=3200&height=1801&format=pjpg&auto=webp",
          content: "Photo taken while playing eyeless.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
