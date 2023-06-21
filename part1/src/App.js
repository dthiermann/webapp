import { useState } from 'react';

// reddit clone
const nameOfSite = "NotReddit";

export default function App() {
  const [status, setStatus] = useState("loggedOut");

  
  function openLoginForm() {
    setStatus("loginForm");
  }

  function closeLoginForm() {
    setStatus("loggedOut");
  }

  function handleLoginAttempt() {
    setStatus("loggedIn");
  }

  function logOut() {
    setStatus("loggedOut");
  }

  if (status === "loginForm") {
    return LoginForm();
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

 function LoginForm() {
   return (
    <>
    <form onSubmit={handleLoginAttempt} >
      <label>
        Username
        <input name="LoginAttemptted-username" />
      </label>
      <br/>
      <label>
        Password
        <input name="LoginAttemptted-password" />
      </label>
      <br />
      <button>Login</button>
    </form>
    <button onClick={closeLoginForm}>Go Back Home</button>
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



