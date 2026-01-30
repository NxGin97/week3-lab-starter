import type { Staff } from "../types/staff-type";

export const staff: Staff[] = [
  {
    staffId: "STF-001",
    name: "Emily Chen",
    role: "Instructor",
    school: "School for Advanced Digital Technology",
    officeLocation: "Room B214",
    email: "emily.chen@northview.edu",
    startYear: 2018,
    specialties: ["Mathematics", "Calculus", "AP Prep"],
    funFact: "Has climbed Mount Fuji"
  },
  {
    staffId: "STF-002",
    name: "Michael Rodriguez",
    role: "Program Chair",
    school: "School of Health and Public Safety",
    officeLocation: "Main Office",
    email: "michael.rodriguez@northview.edu",
    startYear: 2012,
    specialties: ["School Operations", "Policy", "Student Services"]
  },
  {
    staffId: "STF-003",
    name: "Aisha Patel",
    role: "Coordinator",
    school: "School of Manufacturing and Automation",
    email: "aisha.patel@eastwood.edu",
    startYear: 2020,
    specialties: ["Career Guidance", "Mental Wellness", "University Applications"],
    funFact: "Speaks three languages"
  },
  {
    staffId: "STF-004",
    name: "Daniel Thompson",
    role: "Instructor",
    school: "School for Advanced Digital Technology",
    officeLocation: "Science Wing S109",
    startYear: 2015,
    specialties: ["Physics", "Robotics", "STEM Clubs"]
  }
];

