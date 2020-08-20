import React, { useState, useEffect } from "react";
import "./App.css";
import queryString from "query-string";
import PostList from "./component/PostList";
import Pagination from "./component/pagination";
import FitlerForm from "./component/FitlerForm";
function App() {
  const [postslist, setpostList] = useState([]);
  const [page, changePage] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    async function fetchPostlist() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const reponse = await fetch(requestUrl);
        const reponseJson = await reponse.json();
        const { data, pagination } = reponseJson;
        setpostList(data);
        changePage(pagination);
      } catch (error) {
        console.log("erro" + error);
      }
    }
    fetchPostlist();
  }, [filters]);

  function handlePageChange(newpage) {
    setFilters({
      ...filters,
      _page: newpage,
    });
  }

  //danh cho tim kiem
  function handleFilterChange(newFilter) {
    console.log(newFilter);
    setFilters({
      ...filters,
      title_like: newFilter.searchTerm,
      _page: 1,
    });
  }
  return (
    <div>
      <FitlerForm onSubmit={handleFilterChange}></FitlerForm>
      <PostList posts={postslist}></PostList>
      <Pagination
        pagination={page}
        onPageChange={handlePageChange}
      ></Pagination>
    </div>
  );
}

export default App;

// import TodoList from "./component/TodoList";
// import TodoForm from "./component/TodoForm";
// const [todoList, setTodoList] = useState([
//   { id: 1, title: "di hoc" },
//   { id: 2, title: "di cho" },
//   { id: 3, title: "di tam" },
//   { id: 4, title: "di choi" },
// ]);

// function handleFormSummit(formvalue) {
//   console.log(formvalue);
//   const newTodo = {
//     id: todoList.length + 1,
//     ...formvalue,
//   };
//   const newTodoList = [...todoList, newTodo];
//   setTodoList(newTodoList);
// }
// function handletodoclick(todo) {
//   console.log(todo);
//   const index = todoList.findIndex((x) => x.id === todo.id);
//   if (index < 0) return;
//   const newTodolist = [...todoList];
//   newTodolist.splice(index, 1);
//   setTodoList(newTodolist);
// }
