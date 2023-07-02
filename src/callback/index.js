function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumNumbers){
    return sumNumbers(num1, num2 );
};

console.log(calc(2,2, sum));

setTimeout (function (){
    console.log ('Hola Javascript')
}, 5000)

function greeting(name){
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Dante')

///asdasdas

function execCallback(callback) {
    setTimeout(callback, 7000);
  }
  
  // Example usage
  console.log("Before pause");
  execCallback(() => {
    console.log("After 7 seconds");
  });
  console.log("After pause");
  