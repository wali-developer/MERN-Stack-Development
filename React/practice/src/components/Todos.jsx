import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Python",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "C++",
  },
  {
    id: 4,
    name: "Java",
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(data);
  const [showList, setShowList] = useState(true);

  const handleAddClick = () => {
    setShowList(false);
  };

  const addTodo = (name) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: prevState.length + 5,
        name: name,
      },
    ]);

    setShowList(true);
  };

  const deleteItem = (id) => {
    const filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Programming Languages</h1>
      <div className="mt-10 w-[300px] mx-auto">
        <div className="flex justify-between">
          <button onClick={handleAddClick}>Add new</button>
          {todos.length > 0 && (
            <button
              onClick={() => {
                setTodos([]);
              }}
            >
              Delete All
            </button>
          )}
        </div>
        {showList ? (
          <ul className="mt-5 space-y-5 ">
            {todos.map((language, index) => (
              <div key={index} className="flex gap-4">
                <li className="w-full text-lg border-2 border-white rounded-lg py-2">
                  {language.name}
                </li>
                <button onClick={() => deleteItem(language.id)}>Delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <AddForm addTodo={addTodo} />
        )}
      </div>
    </div>
  );
};

const AddForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className="mt-10"
      onSubmit={(event) => {
        event.preventDefault();
        addTodo(value);
      }}
    >
      <input
        type="text"
        placeholder="Enter language name"
        className="w-full py-2 px-4 border-2"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="mt-4" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Todos;
