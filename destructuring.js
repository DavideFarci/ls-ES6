const user = {
  name: "Mario",
  age: 50,
  country: "Italia",
};

const printUser = (currentUser) => {
  const { name, age } = currentUser;

  console.log(`L'utente ${name} ha ${age} anni.`);
};

const printUser2 = ({ name, age }) => {
  console.log(`L'utente ${name} ha ${age} anni.`);
};

printUser(user);
printUser2(user);
