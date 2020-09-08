const display1 = () =>{
  console.log("display 1 function");
  for(let i=0;i<200;i++){
      
  }
}

const display2 = () =>{
  console.log("display 2 function");
}


let myFirstPromise = new Promise((resolve, reject) => {
    display1();
    console.log("display1 completed");
    resolve('done');
  })
  
  myFirstPromise.then((successMessage) => {
      console.log(successMessage); const isSorted = () => {
        const array = this.state.array;
        let ans = true;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                ans = false;
                break;
            }
        }
        return ans;
    };
      display2();
  });