const day = 'saturday';

switch(day){
    case 'monday':
        console.log("There are 4 days until the weekend.");
        break;
      case 'tuesday':
        console.log("There are 3 days until the weekend.");
        break;
      case 'wednesday':
        console.log("There are 2 days until the weekend.");
        break;
      case 'thursday':
        console.log("There is 1 day until the weekend.");
        break;
      case 'friday':
        console.log("The weekend is tomorrow!");
        break;
      case 'saturday':
      case 'sunday':
        console.log("It's the weekend today!");
        break;
      default:
        console.log("Invalid input. Please provide a valid day of the week.");
}
