import type { Program } from "../types/program";

export const programs: Program[] = [
  {
    id: "SAIT-001",
    name: "Software Development",
    credential: "Diploma",
    school: "School for Advanced Digital Technology",
    lengthInYears: 2,
    numberOfCredits: 120,
    deliveryMethod: "Blended",
    careerPath: ["Software Developer", "Web Developer", "Application Developer"],
    note: "Focuses on full-stack development and modern programming practices"
  },
  {
    id: "SAIT-002",
    name: "Business Administration",
    credential: "Degree",
    school: "School of Business",
    lengthInYears: 4,
    numberOfCredits: 160,
    deliveryMethod: "In-person",
    careerPath: ["Business Analyst", "Manager", "Entrepreneur"]
  },
  {
    id: "SAIT-003",
    name: "Renewable Energy",
    credential: "Certificate",
    school: "MacPhail School of Energy",
    lengthInYears: 1,
    numberOfCredits: 40,
    deliveryMethod: "Online",
    careerPath: ["Energy Technician", "Sustainability Consultant"]
  },
  {
    id: "SAIT-004",
    name: "Culinary Arts",
    credential: "Diploma",
    school: "School of Hospitality and Tourism",
    lengthInYears: 2,
    numberOfCredits: 100,
    deliveryMethod: "In-person",
    careerPath: ["Chef", "Restaurant Manager", "Catering Specialist"],
    note: "Includes hands-on kitchen training and internship opportunities"
  },
  {
    id: "SAIT-005",
    name: "Automotive Service Technician",
    credential: "Diploma",
    school: "School of Transportation",
    lengthInYears: 2,
    numberOfCredits: 110,
    careerPath: ["Automotive Technician", "Service Advisor", "Shop Foreman"]
  }
];