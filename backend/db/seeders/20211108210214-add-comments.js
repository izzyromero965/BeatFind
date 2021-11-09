"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 2,
          imageId: 2,
          comment: "Yooooo that's awesome!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageId: 1,
          comment: "sick photo man!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
