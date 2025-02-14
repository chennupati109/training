import React from 'react';

// Profile Component (target component)
function Profile({ name, email }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Child Component 2
function Child2({ name, email }) {
  return <Profile name={name} email={email} />;
}

// Child Component 1
function Child1({ name, email }) {
  return <Child2 name={name} email={email} />;
}

// App Component (parent component)
function App() {
  const user = {
    name: 'chennupati srinivasulu',
    email: 'vasuchennupati20@gmail.com',
  };

  return (
    <div>
      <Child1 name={user.name} email={user.email} />
    </div>
  );
}

export default App;
