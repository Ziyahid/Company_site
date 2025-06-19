const companies = [
  {
    name: "Alpha Corp",
    services: [
      {
        name: "Taxation",
        status: "Completed",
        events: ["KYC Verification", "Company Name Verification"]
      },
      {
        name: "Risk & Compliance",
        status: "In Progress",
        events: ["Registered Office Verification"]
      },
      {
        name: "Market Entry Advisories",
        status: "Not Started",
        events: []
      }
    ]
  },
  {
    name: "Beta Ltd",
    services: [
      {
        name: "Taxation",
        status: "In Progress",
        events: ["KYC Verification"]
      },
      {
        name: "Risk & Compliance",
        status: "Completed",
        events: ["Registered Office Verification"]
      },
      {
        name: "Market Entry Advisories",
        status: "Completed",
        events: ["Company Name Verification"]
      }
    ]
  },
  {
    name: "Gamma Group",
    services: [
      {
        name: "Taxation",
        status: "Not Started",
        events: []
      },
      {
        name: "Risk & Compliance",
        status: "In Progress",
        events: ["KYC Verification", "Registered Office Verification"]
      },
      {
        name: "Market Entry Advisories",
        status: "Completed",
        events: ["Company Name Verification"]
      }
    ]
  }
];

export default companies;
