const template = {
  name: "Alireza",
  email: "alireza@example.com",
  age: 27,
  city: "Tehran",
  isActive: true,
  role: "admin",
};

const users = Array.from({ length: 10 }, (_, i) => {
  const user = {
    ...template,
    id: i + 1,
    isActive: i % 2 === 0 ? false : template.isActive,
  };

  if (i === 2) {
    user.age = 23;
    user.city = "اصفهان";
  }

  return user;
});

const result = {
  even: {
    parent: {
      ...users[0],
      children: users.filter((user) => user.id % 2 === 0),
    },
  },
  odd: {
    parent: {
      ...users[1],
      children: users.filter((user) => user.id % 2 !== 0),
    },
  },
};
