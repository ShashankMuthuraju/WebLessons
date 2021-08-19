let carData = [/*0*/[/*0*/"Car" ,/*1*/"Model" ,/*2*/"Color"],
     /*1*/[/*0*/"Toyota",/*1*/"Avalon",/*2*/"Red"],
     /*2*/[/*0*/"Toyota",/*1*/"Camry",/*2*/"White"],
     /*3*/[/*0*/"Nissan",/*1*/"Altima",/*2*/"Black"],
     /*4*/[/*0*/"Toyota",/*1*/"Avalon",/*2*/"Blue"],
     /*5*/[/*0*/"Toyota",/*1*/"Camry",/*2*/"Grey"],
     /*6*/[/*0*/"Nissan",/*1*/"Altima",/*2*/"White"],
     /*7*/[/*0*/"Toyota",/*1*/"Avalon",/*2*/"Black"],
     /*8*/[/*0*/"Toyota",/*1*/"Camry",/*2*/"Red"],
     /*9*/[/*0*/"Nissan",/*1*/"Altima",/*2*/"Blue"]]

     for (let i=0; i < carData.lenght; i = i + 1){
         for (let j = 0; j < [i].lenght; j = j + 1){
          if (i = !0){
              console.log(carData[0][j], ":", carData[i][j]);
          }
         }
          console.log("------------------");
     }