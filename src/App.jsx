import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pastSchool = [
    {
      name: "San Diego Miramar College",
      type: "Associates",
      major: "Sociology",
      graduated: true,
    },

  ]
  
  const contact = [
    {
    email: "claire.rhodes13@gmail.com",
    number: "858-442-6884",
    address: "Seattle, WA",
    website: "LinkedIn",
    }
  ]

  const mySkills = [
    {
      name:'JavaScript',
      comfort: 6,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 9,
      frontEnd: true,
      backend: false
    },
  ];

  const pastJobs = [
    {
      title: "Hybrid Store Manager-Driver",
      company: "Dominos",
      timeSpent: "2.5 years", 
    },
    {
      title: "Marketing Associate",
      company: "Drug Delivery Experts",
      timeSpent: "1.5 years",
    },
  ];

  return (
    <>
      <h1>Hi, my name is Claire Rhodes!</h1>
      <h3>I am an aspiring Software Developer</h3> 
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>

      <h2> Contact </h2>
        <ul> {contact.map((contact, index) => (
            <div className="contact" key={index}>
              <li>
                <h4>{contact.number}</h4>
                <h4>{contact.email}</h4>
                <h4>{contact.address}</h4>
                <h4>{contact.website}</h4>
            </li>
            </div>
           ))}
        </ul>
    </>
  )
}

export default App
