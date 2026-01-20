import Section from "../components/Section";
import CourseList from "./CourseList";
import {View, Text} from "react-native";

export default function CoursesSection() {
  
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the CourseList component
  return (
    <View> 
      <Section{{title: "hello", subtitle: "hello", children: "idk"}} />
      <CourseList />
    </View>
  );
}
