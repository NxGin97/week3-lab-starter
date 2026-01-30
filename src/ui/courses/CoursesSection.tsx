import Section from "../components/Section";
import CourseList from "./CourseList";
import { View, Text } from "react-native";

export default function CoursesSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the CourseList component
  return (
    <Section title="Courses" subtitle="Welcome to your Courses">
      <CourseList />
    </Section>
  );
}
