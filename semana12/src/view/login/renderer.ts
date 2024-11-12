import Usuario from "../../entity/Usuario";
import "./login.css"

document.getElementById("cadastrar").addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("name") as HTMLInputElement;
    var dataNascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if(password.value !== passwordConfirmation.value){
        return;
    }
    
    var usuario = new Usuario(nome.value, email.value, password.value, new Date(dataNascimento.value))
    console.log(usuario);

    (window as any).bancoAPI.createUsuario(usuario);
      // CRIAR REPOSITORIO
    // VERIFICAR SE O USUÁRIO COM E-MAIL JÁ EXISTE
    // ARMEZENAR USUÁRIO NO BANCO
    
})
