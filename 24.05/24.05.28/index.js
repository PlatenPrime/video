function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {

    // Розрахунок часу, необхідного вам, щоб доплисти до понтона
    const yourTime = pontoonDistance / youSpeed;
    
    // Якщо дельфін поруч, швидкість акули зменшується вдвічі
    const effectiveSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    
    // Розрахунок часу, необхідного акулі, щоб доплисти до вас
    const sharkTime = sharkDistance / effectiveSharkSpeed;
   
    // Порівняння часу
    return yourTime <= sharkTime ? "Живий!" : "Приманка для акул!";

  }
  
  // Приклади виклику функції
  console.log(shark(12, 50, 4, 8, true)); // Живий!
  console.log(shark(7, 55, 4, 16, true)); // Живий!
  console.log(shark(24, 0, 4, 8, true)); // Приманка для акул!!