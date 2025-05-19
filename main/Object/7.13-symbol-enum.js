//  Создание перечислений с помощью Symbol
// Задача
// Создать и сохранить небольшую группу взаимосвязанных констант, на которые
// можно ссылаться в коде по их именам.

{
  const UserRoles = {
    ADMIN: Symbol("admin"),
    USER: Symbol("user"),
    GUEST: Symbol("guest"),
  };

  const currentUser = {
    name: "Artem",
    role: UserRoles.ADMIN,
  };
  if (currentUser.role === UserRoles.ADMIN) {
    console.log("Пользователь - администратор");
  } else {
    console.log("Обычный пользователь");
  }
}
