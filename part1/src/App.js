import { useState } from 'react';
import { useEffect } from 'react';

const nameOfSite = "NotReddit";



export default function App() {
  const [status, setStatus] = useState("loggedOut");
  const [data, setData] = useState(null);

  console.log(data);
  
  function openLoginForm() {
    setStatus("loginForm");
  }

  function logOut() {
    setStatus("loggedOut");
  }

  function logIn() {
    setStatus("loggedIn");
  }

  function createAccount() {
    setStatus("creatingAccount");
  }

  if (status === "loginForm") {
    return (
    <>
    <form onSubmit={logIn} >
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
    <button onClick={createAccount}>Create Account</button>
    <button onClick={logOut}>Go Back Home</button>
    </>
    )
  }
  if (status === "loggedIn") {
    return (
      <div>
        <div>Welcome to {nameOfSite}</div>
        <button>Create Post</button>
        <button onClick={logOut}>Logout</button>
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
        <button onClick={openLoginForm}>Login</button>
        <SearchBox/>
        <SortBy/>
        <Feed/>
      </div>
    )
  }
  if (status === "creatingAccount") {
    return (
      <>
    <form onSubmit={createAccount} >
      <label>
        Choose a username
        <input name="new-username" />
      </label>
      <br/>
      <label>
        Choose a password
        <input name="new-password" />
      </label>
      <br />
      <button>Create Account</button>
    </form>
    <button onClick={logOut}>Go Back Home</button>
    </>
    )
  }
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



