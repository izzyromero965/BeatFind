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
        {
          userId: 1,
          albumId: 2,
          imageUrl:
            "https://www.udiscovermusic.com/wp-content/uploads/2018/10/Slipknot-Day-Of-The-Gusano-press-shot-web-optimised-1000.jpg",
          content: "Clown 2020",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 2,
          imageUrl:
            "https://cmg-cmg-tv-10090-prod.cdn.arcpublishing.com/resizer/ExKfGHfQQUEOZtACFHBSZWyYHP4=/1440x810/filters:format(jpg):quality(70)/d1hfln2sfez66z.cloudfront.net/11-04-2021/t_c0433dc9e0c34f8f8843a12b3bd82098_name_Firefighters___Fans_set_fire_to_lawn_during_Slipknot_concert_in_Phoenix_Poster.jpg",
          content: "Number 7, Richmond VA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 2,
          imageUrl:
            "https://media2.fdncms.com/phx/imager/u/magnum/12345718/slipknot-phoenix-fire-crowd-ak-chin-pavilion-knotfest-roadshow-live-nation.jpg?cb=1635971541",
          content: "Fire in the moshpit!",
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
