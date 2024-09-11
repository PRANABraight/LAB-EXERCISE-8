import React, { useState } from 'react';
import './App.css'; 
import reactLogo from './svg/react.png'; 
import jsLogo from './svg/js.png'; 
import pyLogo from './svg/py.png';
import cppLogo from './svg/cpp.png'; 
import javaLogo from './svg/Java.png';
import sqlLogo from './svg/sql.jpg';

import Course from './Course'; 

function App() {
  const initialCourses = [
    {
      id: 1,
      title: 'Course 1: React Basics',
      features: ['Component-based', 'Reusable code', 'Virtual DOM'],
      imageUrl: reactLogo,
    },
    {
      id: 2,
      title: 'Course 2: Advanced JavaScript',
      features: ['Closures', 'Async programming', 'Prototypes'],
      imageUrl: jsLogo,
    },
    {
      id: 3,
      title: 'Course 3: Python for Data Science',
      features: ['Pandas', 'NumPy', 'Machine Learning'],
      imageUrl: pyLogo,
    },
    {
      id: 4,
      title: 'Course 4: C/C++ Fundamentals',
      features: ['Pointers', 'Memory Management', 'Object-oriented Programming'],
      imageUrl: cppLogo,
    },
    {
      id: 5,
      title: 'Course 5: Java Programming',
      features: ['OOP Concepts', 'Multithreading', 'Java Collections'],
      imageUrl: javaLogo,
    },
    {
      id: 6,
      title: 'Course 6: SQL for Beginners',
      features: ['Database Design', 'Queries', 'Joins'],
      imageUrl: sqlLogo,
    },
  ];

  const [courses, setCourses] = useState(
    initialCourses.map(course => ({ ...course, isLiked: false }))
  );

  const toggleLike = (id) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, isLiked: !course.isLiked } : course
    ));
  };

  return (
    <div className="app">
      <h1 className='title is-2'>LearnSphere</h1>
      <hr/>
      <div className="card-list">
        {courses.map((course) => (
          <Course
            key={course.id}            
            title={course.title}
            features={course.features}
            imageUrl={course.imageUrl} 
            isLiked={course.isLiked}
            toggleLike={() => toggleLike(course.id)}
          />
          
        ))}
      </div>
    </div>
  );
}

export default App;
