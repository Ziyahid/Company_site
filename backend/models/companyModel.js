import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: String,
  status: String,
  events: [String]
});

const companySchema = new mongoose.Schema({
  name: String,
  logoUrl: String,
  services: [serviceSchema]
});

const Company = mongoose.model('Company', companySchema);
export default Company;
