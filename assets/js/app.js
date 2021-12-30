//? NAVIGATION
let smMenuBtn = document.querySelectorAll('.sm-menu-btn')
let smScreenNav = document.querySelector('.sm-screen-menu')

smMenuBtn.forEach(eventName => {
  eventName.addEventListener('click', e => {
    smScreenNav.classList.toggle('hidden')
  })
})


const blogDesc = document.querySelector('.blog-desc');
if (blogDesc) {
  const business = document.querySelector('#indiv');
  const bus = business.getBoundingClientRect();
  const busHeight = bus.height;
  blogDesc.style.height = `${busHeight}px`;
  blogDesc.addEventListener('scroll', () => {
    const blogPos = blogDesc.getBoundingClientRect();
    const topPos = blogPos.top + 50;
    const blogAll = blogDesc.children;
    // console.log(blogPos.top);
    Array.prototype.forEach.call(blogAll, function(child) {
      const childPos = child.getBoundingClientRect();
      const blogTabs = document.querySelector('.blog-tabs').children;
      if (childPos.top <= topPos && childPos.bottom >= topPos) {
        Array.prototype.forEach.call(blogTabs, function(tabChild) {
          const tab = tabChild.children[0];
          if (tab.classList.contains(child.id)) {
            if (tab.classList.contains('blog-active')) {
              false;
            } else {
              Array.prototype.forEach.call(blogTabs, function(tab) {
                if (tab.children[0].classList.contains('blog-active')) {
                  tab.children[0].classList.remove('blog-active');
                } else {
                  false;
                }
              });
              tab.classList.add('blog-active');
            }
          }
        });
      }
    });
  })

  const trigger = document.querySelector('.what-text').getBoundingClientRect();
  if (trigger.top <= 50) {
    document.querySelector('.blog-desc').focus();
  }
  document.querySelector('.blog-tabs').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.hasAttribute('data-nav')) {
      // const tabPos = document.querySelector('.blog-tabs').getBoundingClientRect();
      // const tabPosBot = tabPos.bottom;
      // console.log(tabPosBot);
      const targetElem = document.querySelector('#business');
      const finalTargetElem = targetElem.getBoundingClientRect();
      const dataNav = e.target.dataset.nav;
      // finalTargetElem.top = tabPosBot + 30;
      const targetElemHeight = finalTargetElem.height;
      // console.log(finalTargetElem.top);
      gsap.registerPlugin(ScrollToPlugin);
      const blogDesc = document.querySelector('.blog-desc');
      gsap.to(blogDesc, {duration: 0.5, scrollTo: () => `${targetElemHeight * dataNav - targetElemHeight}`});
    }
  })
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // ScrollTrigger.defaults({
  //   toggleActions: "restart pause resume pause"
  // });
  
  // document.querySelectorAll(".anchor").forEach(anchor => {
  //   anchor.addEventListener("click", function(e) {
  //     e.preventDefault();
  
  //     const targetElem = document.querySelector(e.target.getAttribute("href"));
  //     gsap.to(window, {
  //       scrollTo: {
  //         y: targetElem,
  //         autoKill: false
  //       },
  //       duration: 1
  //     });
  //     // gsap.from(".business", {
  //     //   scrollTrigger: {
  //     //     trigger: "#what",
  //     //     scrub: true,
  //     //     pin: true,
  //     //     markers: true,
  //     //     start: "10% 200px",
  //     //     end: () => `+=${document.querySelector('#business').getBoundingClientRect().height * 4}`
  //     //   },
  //     //   // scaleX: 0, 
  //     //   // transformOrigin: "left center", 
  //     //   ease: "none"
  //     // });
      
  //   });
  // });
  
  
  
  
  
}

//? SLIDER
// const blogTabs = document.querySelector('.blog-tabs');
// if (blogTabs) {
//   blogTabs.addEventListener('click', (e) => {
//     e.preventDefault();
//     // const id = e.target.dataset.nav;
//     // console.log(id);
//     changeBlogActive(e);
//     // changeBlogDesc(id);
//   })
// }

// const changeBlogActive = (e) => {
//   const blogTabs = document.querySelector('.blog-tabs').children;
//   if (e.target.classList.contains('blog-active')) {
//     false;
//   } else {
//     Array.prototype.forEach.call(blogTabs, function(tab) {
//       if (tab.children[0].classList.contains('blog-active')) {
//         tab.children[0].classList.remove('blog-active');
//       } else {
//         false;
//       }
//     });
//     e.target.classList.add('blog-active');
//   }
// }

// const changeBlogDesc = (id) => {
//   document.querySelector(`#${id}`).scrollIntoView();
// }

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause"
// });

// document.querySelectorAll(".anchor").forEach(anchor => {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault();

//     const targetElem = document.querySelector(e.target.getAttribute("href"));
//     gsap.to(window, {
//       scrollTo: {
//         y: targetElem,
//         autoKill: false
//       },
//       duration: 1
//     });
//     // if(targetElem) {
//     //   const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

//     //   gsap.to(window, {
//     //     scrollTo: {
//     //       y: containerOffset,
//     //       autoKill: false
//     //     },
//     //     duration: 1
//     //   });
//     // } else {
//     //   gsap.to(window, {
//     //     scrollTo: {
//     //       y: targetElem,
//     //       autoKill: false
//     //     },
//     //     duration: 1
//     //   });
//     // }
//   });
// });





//? FAQ SECTION
const questions = document.querySelector('.questions');
if (questions) {
  questions.addEventListener('click', (e) => {
    if (e.target.classList.contains('cursor-pointer')) {
      e.target.parentElement.parentElement.children[1].classList.toggle('none');
      e.target.parentElement.children[1].children[1].classList.toggle('none');
    }
    if (e.target.classList.contains('plus')) {
      e.target.classList.add('none');
      e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('none');
    } else if (e.target.classList.contains('minus')) {
      e.target.nextSibling.classList.remove('none');
      e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('none');
    }
  })
}
