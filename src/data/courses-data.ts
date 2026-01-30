import type { Course } from "../types/course-type";

export const courses: Course[] = [
  {
    courseId: "CPRG303A2026",
    courseCode: "CPRG303",
    courseName: "Mobile Web Dev",
    courseDescription: "Learning about web development in mobile devices",
    termNumber: 122,
    deliveryMethod: "In-person",
    credits: 3,
    note: "This course is required for the Software Development program."
  },
  {
    courseId: "CPRG30A72026",
    courseCode: "CPRG307",
    courseName: "Database Programming II",
    courseDescription: "Database Programming with database",
    termNumber: 123,
    deliveryMethod: "Online",
    credits: 3,
    note: "This course is required for the Software Development program."
    
  },
  {
    courseId: "CPRG304A2026",
    courseCode: "CPRG304",
    courseName: "Object Oriented Programming 3",
    courseDescription: "Programming object oriented 3",
    credits: 3,
    note: "This course is required for the Software Development program."
  }, 
  {
    courseId: "CPRG306A2026",
    courseCode: "CPRG306",
    courseName: "Web Development II",
    termNumber: 122,
    deliveryMethod: "Blended",
    courseDescription: "Second semester web dev",
    credits: 3,
    note: "This course is required for the Software Development program."
  }
];
