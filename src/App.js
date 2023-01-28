import { faker } from '@faker-js/faker'
import React from 'react'
import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <UserCard
    avatar={faker.image.avatar()}
    name={faker.name.fullName()}
    location={faker.random.locale()}
    userName={faker.internet.userName()}
    descript={faker.name.jobDescriptor()}
 
/>
  );
}

export default App;
