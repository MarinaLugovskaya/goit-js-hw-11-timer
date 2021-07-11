import './sass/main.scss';

class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.timerId = null;
      this.selector = selector;
      this.targetDate = targetDate;
  
      this.start()
        
    };
  
    getRefs() {
      return {
        days: document.querySelector(
          `${this.selector} [data-value="days"]`,
        ),
        hours: document.querySelector(
          `${this.selector} [data-value="hours"]`,
        ),
        mins: document.querySelector(
          `${this.selector} [data-value="mins"]`,
        ),
        secs: document.querySelector(`${this.selector} [data-value="secs"]`),
      };
    };
  
    pad(value) {
      return String(value).padStart(2, '0');
    };
  
  
    start() {
      this.timerId = setInterval(() => {
        const time = this.targetDate - Date.now();
        const { days, hours, mins, secs } = this.getRefs();
  
        days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  
        hours.textContent = this.pad(Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ));
  
        mins.textContent = this.pad(Math.floor(
          (time % (1000 * 60 * 60)) / (1000 * 60),
        ));
        
        secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      }, 1000);
    }
  };
  
    
  
  // Экземпляр
  const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
  
  });


// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// }

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.timerId = null;
//   }

//   start() {
//         const startTime = Date.now();

//         this.intervalId = setInterval(() => {
//           const currentTime = Date.now();
//           const deltaTime = this.targetDate - Date.now();
//           const time = this.getTimeComponents(deltaTime);
//         },1000);
//   }
//   getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
//     return {days, hours, mins, secs};
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

//   const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

  
//   function updateClockFace({days, hours, mins, secs}) {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
//   }

//   function countdownTimer() {
//     if (deltaTime  <= 0) {
//       clearInterval(timerId);
//     }
//   }