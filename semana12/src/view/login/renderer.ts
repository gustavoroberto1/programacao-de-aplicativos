document.getElementById("cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;

  const user = {
    name, email, password
  }

  await (window as any).bancoUserAPI.create(user)
})