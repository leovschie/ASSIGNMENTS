for (let i = 1; i <= 100; i++) {

  let tableOf3 = i % 3;
  let tableOf5 = i % 5;

  if (tableOf3 == 0 && tableOf5 == 0){
    console.log("fizzbuzz")
  }

  else if (tableOf3 == 0){
    console.log("fizz");
  }
  
  else if (tableOf5 == 0){
    console.log("buzz");
  }

  else {
    console.log(i)
  }
}