
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Company from './models/companyModel.js';
import companies from './data/companies.js';

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Company.deleteMany({});
    await Company.insertMany(companies);
    console.log('Seeded', companies.length, 'companies!');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
