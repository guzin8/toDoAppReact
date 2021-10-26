import React, { useState,useEffect } from 'react'
import ToDoItemService from '../services/ToDoItemService'
import { Table,Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default function ToDoItems() {

    const [toDoItems, setToDoItems] = useState([])

    useEffect(()=>{
        let toDoItemService = new ToDoItemService()
        toDoItemService.getToDoItems().then(result => setToDoItems(result.data.data))
    }, [])
    return (
        <div>

          <h1>To-do-Items</h1>

<Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>To-Do-Item-Name</Table.HeaderCell>
            <Table.HeaderCell>Is it done ? </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {toDoItems.map((toDoItem) => (
            <Table.Row key = {toDoItem.id}>
              <Table.Cell>{toDoItem.id}</Table.Cell>
              <Table.Cell>{toDoItem.itemName}</Table.Cell>
              <Table.Cell>{toDoItem.done}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> 
      <div>
   <Link to = {"/addItem"}> <Button>Add to list</Button> </Link>
        </div>   
        </div>
    )
}
