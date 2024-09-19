let min = 5 , max = 8 , minSize = 20 ,
   maxSize = 150 , minPos = 0 , 
   maxPos = 100, minDelay = 0,
   maxDelay = 1,minTime = 1,
   maxTime = 2,minDist = -20,
   maxDist = -50, minBot = 0 ,
   maxBot = 20;
   let c = document.querySelector(".container");

   for (let i = 1; i <= 36; i++) {
    let bubbleC = document.createElement('div');
    bubbleC.classList.add('bubble-container');
    bubbleC.style.setProperty("--i",i);
    c.prepend(bubbleC);

    let rand = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let j = 1; j <= rand; j++) {
     let bubble = document.createElement('div');
     bubble.classList.add('bubble');

     let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
     let pos = Math.floor(Math.random() * (maxPos - minPos + 1)) + minPos;
     let bot = Math.floor(Math.random() * (maxBot - minBot + 1)) + minBot;
     let dist = Math.floor(Math.random() * (maxDist - minDist + 1)) + minDist;

     let delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay + Math.random();
     let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime + Math.random();

     bubble.style.setProperty("--s",size);
     bubble.style.setProperty("--p",pos);
     bubble.style.setProperty("--d",delay);
     bubble.style.setProperty("--t",time);
     bubble.style.setProperty("--di",dist);
     bubble.style.setProperty("--b",bot);

     bubbleC.appendChild(bubble);
    }
   }