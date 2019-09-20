import faker from 'faker';
const bcrypt = require('bcryptjs');
import User from '../models/user.model';

export async function userSeed(count) {
  const users = [];
  const hash = await bcrypt.hash('password', 10);
  Array.from({ length: count || 5 }).map(() => {
    const fakerUser = {
      email: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      password: hash
    };
    return users.push(fakerUser);
  });
  // Inser many don't call hook pre-save
  return await User.insertMany(users);
}
