const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let run;
let time;
   
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
return (seconds) => {

    
    
    if(seconds != undefined){
     if(time>1){
         clearInterval(time);
    }
    time = setInterval(() => {
    isRunning(1);
        
    const date = new Date(null);
    date.setSeconds(seconds); 
    const result = date.toISOString().slice(11, 19);
    
      
    timerEl.innerHTML = result;
    if(seconds == 0){
          clearInterval(time);
         isRunning(0);
      }
    seconds = seconds-1;
       
        
      
  },1000)
   
    }
}
  
    
    
    
};
const isRunning = (isbool) =>{
    run = isbool;
}
const getIsRunning = () =>{
    return run;
} 
const animateTimer = createTimerAnimator();


inputEl.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  
  if (run == 1){
      clearInterval(time);
  }
  animateTimer(seconds);

  inputEl.value = '';
});
