function calculateVacationPrice(count, type, day) {
   const prices = {
      Students: {
         Friday: 8.45,
         Saturday: 9.8,
         Sunday: 10.46,
      },
      //...
   };

   let sum = 0;
   const cost = prices[type][day];

   sum = count * cost;


   if(type === `Students` && count >= 30) {
      sum -= sum*0.15;
   }
    

    console.log(`Total price: ${sum.toFixed(2)}`);
   }

   calculateVacationPrice(30,"Students", "Sunday");