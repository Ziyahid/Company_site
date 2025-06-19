import express from 'express';
import { getCompanies } from '../controllers/companyController.js';
import Company from '../models/companyModel.js'; 

const router = express.Router();

// Get all companies
router.get('/', getCompanies);

// Get specific company
router.get('/:companyId', async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    console.error('Error fetching company:', err);
    res.status(500).json({ message: 'Error fetching company' });
  }
});

// ➕ ADD EVENT TO COMPANY
router.post('/:companyId/events', async (req, res) => {
  const { companyId } = req.params;
  const { title, date, description } = req.body;

  console.log('POST /events - Adding event to company:', companyId);
  console.log('Event data:', { title, date, description });

  // Validate input
  if (!title || !date || !description) {
    return res.status(400).json({ 
      message: 'Missing required fields: title, date, and description are required' 
    });
  }

  try {
    const company = await Company.findById(companyId);
    if (!company) {
      console.log('Company not found:', companyId);
      return res.status(404).json({ message: 'Company not found' });
    }

    console.log('Company found:', company.name);

    // Create new event object
    const newEvent = {
      title: title.trim(),
      date,
      description: description.trim()
    };

    // Add event to company's events array
    company.events.push(newEvent);
    await company.save();

    // Get the newly created event (with its generated _id)
    const addedEvent = company.events[company.events.length - 1];
    console.log('Event added successfully:', addedEvent);

    res.status(201).json(addedEvent);
  } catch (err) {
    console.error('Error adding event:', err);
    res.status(500).json({ 
      message: 'Error adding event', 
      error: err.message 
    });
  }
});

// 🗑️ DELETE EVENT FROM COMPANY
router.delete('/:companyId/events/:eventId', async (req, res) => {
  const { companyId, eventId } = req.params;
  
  console.log(`DELETE /events - Removing event ${eventId} from company ${companyId}`);

  try {
    const company = await Company.findById(companyId);
    if (!company) {
      console.log('Company not found:', companyId);
      return res.status(404).json({ message: 'Company not found' });
    }

    console.log('Company found:', company.name);
    console.log('Events before deletion:', company.events.length);

    // Find and remove the event
    const initialLength = company.events.length;
    company.events.pull({ _id: eventId });
    
    if (company.events.length === initialLength) {
      console.log('Event not found:', eventId);
      return res.status(404).json({ message: 'Event not found' });
    }

    await company.save();
    console.log('Event deleted successfully. Events remaining:', company.events.length);
    
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ 
      message: 'Error deleting event', 
      error: err.message 
    });
  }
});

export default router;