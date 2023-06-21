import { useState } from 'react';

// reddit clone
const nameOfSite = "NotReddit";

export default function App() {
  const [status, setStatus] = useState("loggedOut");

  function handleSubmit() {
    return 0;
  }

  if (status === "loginForm") {
    return LoginForm();
  }
  if (status === "loggedIn") {
    return (
      <div>
        <div>Welcome to {nameOfSite}</div>
        <button>Create Post</button>
        <button>Logout</button>
        <SearchBox/>
        <SortBy/>
        <Feed/>
      </div>
    )
  }
  if (status === "loggedOut") {
    return (
      <div>
        <div>Welcome to {nameOfSite}</div>
        <button>Login</button>
        <SearchBox/>
        <SortBy/>
        <Feed/>
      </div>
    )
  }

 function LoginForm() {
   return (
    <>
    <form onSubmit={handleSubmit} >
      <label>
        Username
        <input name="submitted-username" />
      </label>
      <br/>
      <label>
        Password
        <input name="submitted-password" />
      </label>
      <br />
      <button>Login</button>
    </form>
    <button>Go Back Home</button>
  </>
   )
 }
}



      
    



function openLoginBox() {
  
}

function SearchBox() {
  let search = "Search ";
  return (
    <input
    type="search"
    placeholder = {search.concat(nameOfSite)}>

    </input>
  )
}

function CreatePostField() {
  return (
    <div>
      <PostEntryBox />
      <AddImageButton />
      <SubmitPost />
    </div>
  )
}

function PostEntryBox() {
  return (
    <input placeholder = "Create Post"></input>
  )
}

function AddImageButton() {
  return (
    <button>Add an Image</button>
  )
}

function SubmitPost() {
  return (
    <button>Submit</button>
  )
}

function SortBy() {
  return (
    <div>
      <button>Best</button>
      <button>Hot</button>
      <button>New</button>
      <button>Random</button>
    </div>
  )
}

function Feed() {
  return (
    <div>

    </div>
  )
}



