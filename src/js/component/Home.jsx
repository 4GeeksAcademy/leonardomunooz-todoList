import React, { useState, useEffect } from "react"


const objectTask = {
    label: '',
    is_done: false
}

const URL_BASE = 'https://playground.4geeks.com/todo'


const Home = () => {

    const [task, setTask] = useState(objectTask)
    const [todos, setTodos] = useState([])
    const [users, setUsers] = useState("")


    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    // FETCH QUE AGREGA TAREAS AL TODO LIST
    const addTask = async (e) => {
        try {
            if (e.key === "Enter") {
                if (task.label.trim() !== "") {
                    const response = await fetch(`${URL_BASE}/todos/leonardo`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(task)

                    })
                    setTask(objectTask)

                    if (response.ok) {
                        getAllTask()

                    } else {
                        console.log("debo manejar el error");
                    }
                }

            }
        } catch (error) {
            console.log(error);

        }

    }
    const deleteTask = (id) => {
        // const newTask = todos.filter((item, index) => index != id)
        // setTodos(newTask)
        fetch(`${URL_BASE}/todos/${id}`, {
            method: "DELETE"

        })
            .then((response => {
                getAllTask()
                setTask(objectTask)
            }))
            .catch((error) => console.log(error))



    }
    const getUser = async () => {

        try {
            let response = await fetch(`${URL_BASE}/users/leonardo`)
            let data = await response.json()
            setUsers(data.name)

            console.log(`El valor de data es: ${users} `);


        } catch (error) {
            console.log(error);

        }



    }

    const getAllTask = async () => {
        try {
            let response = await fetch(`${URL_BASE}/users/leonardo`)
            let data = await response.json()
            if (response.status === 404) {
                createUser()
                getAllTask()
            } else {
                setTodos(data.todos)
            }


        } catch (error) {
            console.log(error);

        }
    }


    const createUser = async () => {

        try {
            let response = await fetch(`${URL_BASE}/users/leonardo`, {
                method: "POST",
            })
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteAll = async () => {
        try {
            let response = await fetch(`${URL_BASE}/users/leonardo`, {
                method: "DELETE"
            })
            if (response.status == 204) {
                getAllTask()
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getAllTask()
        getUser()
    }, [])

    return (

        <div className="container">
            <div className="row mt-4 ">
                <div className="col-12 md-7 border  ">
                    <h1 className="text-center">TODO LIST APP</h1>
                    <h5
                        className="bagde text-wrap text-bg-success text-center p-2"
                        style={{ width: "100" }}
                    >{`Usuario actual ${users}`}</h5>
                    <form
                        className="border p-4 mb-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="col-sm-10 w-100 text-center">
                            <input

                                className="form-control "
                                id="inputEmail3"
                                name="label"
                                placeholder="Add Task"
                                value={task.label}
                                onChange={handleChange}
                                onKeyDown={addTask}
                            />
                        </div>

                    </form>
                    {
                        todos.map((item) => {
                            return (
                                <div key={item.id} className="d-flex justify-content-between  mt-2   p-2  border border-light-subtl">
                                    <div className="text-center">
                                        {item.label}
                                    </div>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteTask(item.id)}
                                    >x</button>
                                </div>

                            )
                        })
                    }
                    <button className="btn btn-danger mt-4"
                        onClick={() => handleDeleteAll()}

                    >Delete All</button>
                </div>
            </div>
        </div>

    )
}

export default Home





// const addTask = (e) => {
//     if (e.key === "Enter") {
//         if (task.label.trim() !== "") {
//             setTodos([
//                 ...todos, task // mantiene una copia de las tareas y la agrega en todos
//             ])
//             setTask(objectTask) // Borra la tarea 
//         }

//     }

// }