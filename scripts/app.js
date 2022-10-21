
// function hello() {   
//     let userName = 'nata';
//     alert(`Привет ${userName}`);
// }
// hello();


let userName = prompt("Как Вас зовут?", "Имя");

function showMessage() {
    let message = 'Привет, ' + userName;
    alert(message);
}
showMessage(); // Привет, Алевтина