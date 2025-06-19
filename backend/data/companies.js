
const companies = [

  {
    "name": "Thomas-Clayton",
    "registrationNumber": "REG-2024-001",
    "about": "Digitized leadingedge installation",
    "agentName": "Sarah Johnson",
    "email": "sarah.johnson@corporateservices.com",
    "services": [
      {
        "name": "Audit",
        "status": "In Progress"
      },
      {
        "name": "Logistics Setup",
        "status": "In Progress"
      }
    ],
    "events": [
      {
        "title": "Company Name Verification",
        "date": "2025-03-19",
        "description": "Trademark Approval process"
      },
      {
        "title": "Trademark Approval",
        "date": "2025-03-26",
        "description": "Registered Office Verification process"
      },
      {
        "title": "Registered Office Verification",
        "date": "2025-05-30",
        "description": "KYC Verification process"
      }
    ],
    "directors": [
      {
        "name": "Marie Perez",
        "dob": "1993-02-24",
        "nationality": "Japanese"
      }
    ],
    "jurisdiction": "USA"
  },
  {
    "name": "Bell, Lee and Huang",
    "registrationNumber": "REG-2024-002",
    "about": "Front-line client-driven product",
    "agentName": "Michael Chen",
    "agentEmail": "michael.chen@corporateservices.com",
    "services": [
      {
        "name": "Logistics Setup",
        "status": "Not Started"
      },
      {
        "name": "Audit",
        "status": "Completed"
      },
      {
        "name": "Registration",
        "status": "In Progress"
      }
    ],
    "events": [
      {
        "title": "Trademark Approval",
        "date": "2025-03-29",
        "description": "Compliance Review process"
      },
      {
        "title": "Compliance Review",
        "date": "2025-05-04",
        "description": "Registered Office Verification process"
      }
    ],
    "directors": [
      {
        "name": "Chelsea Raymond",
        "dob": "1971-09-14",
        "nationality": "Australian"
      }
    ],
    "jurisdiction": "USA"
  },
  {
    "name": "Cole-Garcia",
    "registrationNumber": "REG-2024-003",
    "about": "Organic full-range synergy",
    "agentName": "Emily Rodriguez",
    "agentEmail": "emily.rodriguez@corporateservices.com",
    "services": [
      {
        "name": "Advisory",
        "status": "Completed"
      },
      {
        "name": "Infrastructure",
        "status": "Not Started"
      }
    ],
    "events": [
      {
        "title": "Trademark Approval",
        "date": "2025-04-01",
        "description": "KYC Verification process"
      }
    ],
    "directors": [
      {
        "name": "Sharon Williams",
        "dob": "1983-05-27",
        "nationality": "Canadian"
      },
      {
        "name": "Carrie Harris",
        "dob": "1965-09-05",
        "nationality": "German"
      }
    ],
    "jurisdiction": "USA"
  },
  {
    "name": "Thomas Ltd",
    "registrationNumber": "REG-2024-004",
    "about": "Front-line coherent productivity",
    "agentName": "David Thompson",
    "agentEmail": "david.thompson@corporateservices.com",
    "services": [
      {
        "name": "Advisory",
        "status": "Not Started"
      },
      {
        "name": "Advisory",
        "status": "Completed"
      }
    ],
    "events": [
      {
        "title": "KYC Verification",
        "date": "2025-05-09",
        "description": "Registered Office Verification process"
      },
      {
        "title": "Registered Office Verification",
        "date": "2025-03-25",
        "description": "Registered Office Verification process"
      }
    ],
    "directors": [
      {
        "name": "Jennifer Cruz",
        "dob": "1989-11-08",
        "nationality": "Japanese"
      },
      {
        "name": "Joshua Richards",
        "dob": "1966-08-26",
        "nationality": "Japanese"
      }
    ],
    "jurisdiction": "USA"
  },
  {
    "name": "Campbell, Salas and Chandler",
    "registrationNumber": "REG-2024-005",
    "about": "Function-based client-driven adapter",
    "agentName": "Lisa Anderson",
    "agentEmail": "lisa.anderson@corporateservices.com",
    "services": [
      {
        "name": "Security Audit",
        "status": "Not Started"
      },
      {
        "name": "Onboarding",
        "status": "Completed"
      },
      {
        "name": "Legal",
        "status": "Completed"
      },
      {
        "name": "Legal",
        "status": "In Progress"
      }
    ],
    "events": [
      {
        "title": "Compliance Review",
        "date": "2025-03-21",
        "description": "Company Name Verification process"
      },
      {
        "title": "Compliance Review",
        "date": "2025-05-17",
        "description": "Registered Office Verification process"
      }
    ],
    "directors": [
      {
        "name": "Alexander Gould",
        "dob": "1965-10-18",
        "nationality": "American"
      }
    ],
    "jurisdiction": "USA"
  },
  {
    "name": "Hicks-Johnson",
    "registrationNumber": "REG-2024-006",
    "about": "Organized fresh-thinking frame",
    "agentName": "Robert Martinez",
    "agentEmail": "robert.martinez@corporateservices.com",
    "services": [
      {
        "name": "IT Support",
        "status": "In Progress"
      },
      {
        "name": "Security Audit",
        "status": "Not Started"
      },
      {
        "name": "Logistics Setup",
        "status": "Completed"
      },
      {
        "name": "HIPAA Compliance",
        "status": "Completed"
      }
    ],
    "events": [
      {
        "title": "Company Name Verification",
        "date": "2025-06-13",
        "description": "KYC Verification process"
      }
    ],
    "directors": [
      {
        "name": "Robin Holland",
        "dob": "1974-07-27",
        "nationality": "American"
      }
    ],
    "jurisdiction": "USA"
  },
  {
    "name": "Brooks Group",
    "registrationNumber": "REG-2024-007",
    "about": "Vision-oriented analyzing capacity",
    "agentName": "Jennifer Wilson",
    "agentEmail": "jennifer.wilson@corporateservices.com",
    "services": [
      {
        "name": "Logistics Setup",
        "status": "Completed"
      },
      {
        "name": "Legal",
        "status": "Completed"
      },
      {
        "name": "Onboarding",
        "status": "In Progress"
      }
    ],
    "events": [
      {
        "title": "Company Name Verification",
        "date": "2025-05-24",
        "description": "Trademark Approval process"
      }
    ],
    "directors": [
      {
        "name": "Jamie Landry",
        "dob": "1965-05-31",
        "nationality": "British"
      },
      {
        "name": "Donna Jones",
        "dob": "1966-07-04",
        "nationality": "Canadian"
      }
    ],
    "jurisdiction": "USA"
  }
]

export default companies;
