const { db, User, Image, Project } = require('./server/models');
const Setting = require('./server/models/setting');

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
    const globalSettings = await Setting.create({
      sitename: 'Tierra Bruja',
      sitedescription: 'A landscape Architecture design firm',
      defaultemail: 'tierrabruja@gmail.com',
      aboutdescription:
        'Tierra Bruja was founded by Babbie Dunnington and Margaret ...',
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
