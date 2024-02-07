import React, { useEffect } from "react";
import Back from "../Home/back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  useEffect(() => {
    document.body.classList.add("course-page");
    return () => {
      document.body.classList.remove("course-page");
    };
  }, []);
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
