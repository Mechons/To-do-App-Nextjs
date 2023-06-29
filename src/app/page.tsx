import AddToDo from '@/components/AddToDo/AddToDo'
import Navbar from '@/components/Navbar/Navbar'
import Todos from '@/components/ViewTodos/Todos'
import React from 'react'

const page = () => {
  return (
    <main>
      <h2> To-Do Next App</h2>
      <Navbar/>
      <AddToDo/>
      <Todos/>
    </main>
  )
}

export default page