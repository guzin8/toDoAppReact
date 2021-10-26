import axios from "axios";

export default class ToDoItemService {
    
    getToDoItems(){
        return axios.get("http://localhost:8080/api/toDoItems/getAll");
    }

}


