import { IAuthPassword } from '../../types/IUser';
import '../global.css';
import './styles.css';

document.getElementById("button-login")?.addEventListener("click", async (event: MouseEvent) => {
  event.preventDefault();
  const email = document.getElementById("email") as HTMLInputElement
  const password = document.getElementById("password") as HTMLInputElement

  const user = await window.userAPI.findByEmail(email.value);

  if(!user){
    console.log("CREDENCIAIS INCORRETA...")
  }
  
  const passwords = {password: password.value, password_hash: user.password_hash } as IAuthPassword;
  const isValidPassword = await window.authAPI.comparePassword(passwords)

  if(!isValidPassword){
    console.log("CREDENCIAIS INCORRETA...")
    return;
  }

  window.navigateAPI.toPage("dashboard")
})