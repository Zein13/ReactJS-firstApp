// import ExpenseItem from "./components/ExpenseItem";
// import Poster from "./components/Poster";
// import React from "react"; - LIBA of posting Data by old approach of react
import Expenses from "./components/expenses/Expenses";
import PostsData from "./components/post/PostsData";
import NewExpense from "./components/NewExpense/NewExpense";
import NewPost from "./components/NewPost/NewPost";

const App = () => {
    const expenses = [
        {id:'e1', title: 'Mercedes-AMG engine', amount: 15000, date:  new Date('2022, 06, 08')  },
        {id:'e2', title: 'Audi-A8 engine', amount: 13000, date:  new Date('2022, 09, 18')  },
        {id:'e3', title: 'Peugoet508 engine', amount: 11000, date:  new Date('2022, 07, 18')  },
        {id:'e4', title: 'Skoda-rapid engine', amount: 8000, date:  new Date('2022, 11, 28')  }
    ];
    const post = [
        {name: 'John', surname:'Doe', age: 25,story:"I was burn in London and currently living in Antalya. My income is equals to 7000$ peer week."},
        {name: 'Martin', surname:'McCaliser', age:27 ,story:"I was burn in London and currently living in Los-Angeles. My income is equals to 50000$ peer week"}
    ];

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expenses);
    };

    const AddPostsHandeler = poster => {
        console.log('Poster In App.js');
        console.log(post);
    };
    // return React.createElement('div', 
    // {}, 
    // React.createElement('h2',{}, 'Welcome to workplace N#1'),
    // React.createElement(Expenses, {items: expenses}),
    // React.createElement('h2', {},'Welcome to Posts of users worplace N#2<' ),
    // React.createElement(PostsData, {posts: post})
    // ); WAY To POST DATAS BY react attribute 
return (
    <div>
              <h2 className="centro">Welcome to workplace N#1</h2>
              <NewExpense onAddExpense = {addExpenseHandler}/>
              <Expenses items = {expenses}/>

              <h2 className="centro">Welcome to Posts of users worplace N#2</h2>
              <NewPost onAddPost = {AddPostsHandeler}/>
              <PostsData posts = {post}/>
   </div>
);
}

export default App;
