const chalk = require('chalk');
const readLineSync= require('readline-sync');

function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')


console.log('1. Binary to Decimal\n2. Binary to Hex \n3. Binary to Octal\n4. Decimal to Hex\n5. Decimal to Binary\n6. Decimal to Octal\n7. Hex to Binary\n8. Hex to Decimal\n9. Hex to Octal\n10. Octal to Binary\n11. Octal to Decimal\n12. Octal to Hex')

const choice=readLineSync.question(chalk.green.bold('Which app you want to use?\n'));
return choice;
}

const choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  const val=readLineSync.question(chalk.green.bold('Enter the value which you want to convert?\n'));

 switch (choice) {
  case "1":
    //let digit = parseInt(val, 2);
    console.log(BinaryToDecimal(val));
    break;
  case "2":
    console.log(BinaryTHex(val));
    break;
  case "3":
     console.log(BinaryToOctal(val));
    break;
  case "4":
    console.log(DecimalToHex(val));
    break;
  case "5":
   console.log(DecimalToBinary(val));
    break;
  case "6":
    console.log(DecimalToOctal(val));
    break;
  case "7":
    console.log(HexToBinary(val));
    break;
  case "8":
  console.log(HexToDecimal(val));
  break;
  case "9":
  console.log(HexToOctal(val));
  break;
  case "10":
  console.log(OctaltoBinary(val));
  break;
  case "11":
  console.log(OctaltoDecimal(val));
  break;
  case "12":
  console.log(OctaltoHex(val));
  break;
 default:
  console.log("You have entered the wrong choice!Try Again\n");
  let choice=menu();
  proceedChoice(choice);
  break;
}

const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  const choice=menu();
  proceedChoice(choice);
}


}

function BinaryToDecimal(val)
{
   return parseInt(val, 2);
}

function BinaryTHex(val)
{  return parseInt(val, 2).toString(16);
  
}

function BinaryToOctal(val)
{
  return parseInt(val, 2).toString(8);
}

function DecimalToHex(val)
{
  return Number(val).toString(16);
  
}

function DecimalToBinary(val)
{
  return Number(val).toString(2);
  
}

function DecimalToOctal(val)
{
  return Number(val).toString(8);
}

function HexToBinary(val)
{
  return (parseInt(val, 16).toString(2)).padStart(8, '0'); 
}

function HexToDecimal(val)
{
  return (parseInt(val, 16).toString(10));
  
}

function HexToOctal(val)
{
   return (parseInt(val, 16).toString(8)); 
}

function OctaltoBinary(val)
{
 return  (parseInt(val, 8).toString(2)).padStart(8, '0');
}

function OctaltoDecimal(val)
{
  return (parseInt(val, 8).toString(10));
}

function OctaltoHex(val)
{
  return (parseInt(val, 8).toString(16));
}
