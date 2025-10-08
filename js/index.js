const drink = prompt("Виберіть каву,чай або сік").toLowerCase().trim()
switch(drink){
    case "чай":
    alert("Чай")
    break;
    case "кава":
    alert("Кава")
    break;
    case "сік":
    alert("Сік")
    break;
    default: 
    alert("Введіть заново")
    break;
}

const day = prompt("введіть день тижня").toLowerCase().trim();
switch(day){
    case "monday":
        alert("це робочий день")
        break;
    case "tuesday":
        alert("це робочий день")
        break;
    case "wednesday":
        alert("це робочий день")
        break;
    case "thursday":
        alert("це робочий день")
        break;
    case "friday":
        alert("це робочий день")
        break;
    case "saturday":
        alert("це вихідний день")
        break;
    case "sunday":
        alert("це вихідний день")
        break;
        default:
            alert("не вірно введені данні")
            break;
}

const month = Number(prompt("Введіть число місяця"))
switch(month){
    case 1:
    alert("Січень")
    break;
    case 2:
    alert("Лютий")
    break;
    case 3:
    alert("Березень")
    break;
    case 4:
    alert("Квітень")
    break;
    case 5:
    alert("Травень")
    break;
    case 6:
    alert("Червень")
    break;
    case 7:
    alert("Липень")
    break;
    case 8:
    alert("Серпень")
    break;
    case 9:
    alert("Вересень")
    break;
    case 10:
    alert("Жовтень")
    break;
    case 11:
    alert("Листопад")
    break;
    case 12:
    alert("Грудень")
    break;
    default:
    alert("Неправильне число, Вибирайте від 1 до 12")
}

const color = prompt("Введіть червоний, жовтий або зелений").toLowerCase().trim()
switch(color){
    case "червоний":
    alert("стоп")
    break;
    case "жовтий":
    alert("чекати")
    break;
    case "зелений":
    alert("йти")
    break;
    default:
    alert("Неправильно введено, перечитайте умову")
}

const a = prompt("Перше число:");
const b = prompt("Друге число:");
const op = prompt("Операція (+ - * /):");

switch(op){
    case "+":
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case "-":
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case "*":
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case "/":
        if(a || b === 0){
            alert("На нуль ділити не можна")
        }else{
        console.log(`${a} / ${b} = ${a / b}`);
        }
        break;
        default:
        console.log("error"); 
}