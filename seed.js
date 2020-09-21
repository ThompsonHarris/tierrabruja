const { db, User } = require('./server/models');

const seed = async () => {
  try {
    await db.sync({ force: true });
    await User.create({
      firstname: 'Tierra',
      lastname: 'Bruja',
      email: 'admin@tierrabruja.com',
      username: 'admin',
      password: 'password',
      isAdmin: true,
    });
    console.log(`Successful seeding in tierrabruja.`);
    await process.exit(0);
  } catch {
    console.log('ERROR', e);
    console.error(`Error with seeding tierrabruja!`);
    process.exit(1);
  }
};

module.exports = seed;

if (require.main === module) {
  seed();
}
