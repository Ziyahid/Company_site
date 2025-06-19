import mongoose from 'mongoose';


const serviceSchema = new mongoose.Schema({
  name: String,
  status: String
});

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String
});

const directorSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  nationality: String
});

const companySchema = new mongoose.Schema({
  name: String,
  registrationNumber: String,
  about: String,
  logoUrl: String,
  email: String,
  jurisdiction: String,
  agentName: String,
  services: [serviceSchema],
  events: [eventSchema],
  directors: [directorSchema]
});

const Company = mongoose.model('Company', companySchema);
export default Company;
