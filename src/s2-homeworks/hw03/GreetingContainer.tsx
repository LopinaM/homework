import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: (name: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name === "") {
    setError("Ошибка! Введите имя!");
  } else {
    addUserCallback(name);
    setName(name);
  }
};

export const pureOnBlur = (name: string, setError: (name: string) => void) => {
  // если имя пустое - показать ошибку
  if (name === "") {
    setError("Ошибка! Введите имя!");
  }
};

export const pureOnEnter = (
  e: React.KeyboardEvent<HTMLInputElement>,
  addUser: any
) => {
  // если нажата кнопка Enter - добавить
  if (e.key === "Enter") {
    addUser();
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string | null>(""); // need to fix any

  const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    setName(e.currentTarget.value); // need to fix

    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
    setTotalUsers(totalUsers + 1);
    setLastUserName(name);
    setName("");
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  //   const totalUsers = 0; // need to fix
  //   const lastUserName = "some name"; // need to fix
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [lastUserName, setLastUserName] = React.useState("");

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
