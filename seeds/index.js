const sequelize = require("../config/connections");
const seedBands = require("./bandData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBands();

  process.exit(0);
};

seedAll();
