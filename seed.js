const { db, User, Image, Project } = require('./server/models');

const seed = async () => {
  try {
    await db.sync({ force: true });
    const user1 = await User.create({
      firstname: 'Tierra',
      lastname: 'Bruja',
      email: 'admin@tierrabruja.com',
      password: 'password',
      isAdmin: true,
    });
    const project1 = await Project.create({
      title: 'site 1',
      description: 'This is a test site and not the real thing.',
      address: '409 quincy brooklyn ny 11221',
      state: 'NY',
      city: 'NY',
      status: 'PENDING',
    });
    await Image.create({
      type: 'user',
      fullImage:
        'https://firebasestorage.googleapis.com/v0/b/tierrabruja-48654.appspot.com/o/images%2Fusers%2Ffull%2FTH.png?alt=media&token=63ee3b18-a4f9-43bc-b478-e840974893c3',
      fullImagePath: 'images/users/full/TH.png',
      userId: user1.id,
    });
    console.log(`Successful seeding in tierrabruja.`);
    await process.exit(0);
  } catch (e) {
    console.log('ERROR', e);
    console.error(`Error with seeding tierrabruja!`);
    process.exit(1);
  }
};

module.exports = seed;

if (require.main === module) {
  seed();
}
