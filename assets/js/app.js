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
  const business = document.querySelector('#business');
  const fleer = document.querySelector('.fleer');
  const driver = document.querySelector('.driver');
  const indiv = document.querySelector('.indiv');
  const bus = business.getBoundingClientRect();
  const busHeight = bus.height;
  blogDesc.style.height = `${busHeight}px`;
  blogDesc.addEventListener('scroll', () => {
    const blogPos = blogDesc.getBoundingClientRect();
    const topPos = blogPos.top;
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

}

//? SLIDER
const blogTabs = document.querySelector('.blog-tabs');
if (blogTabs) {
  blogTabs.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.dataset.nav;
    console.log(id);
    changeBlogActive(e);
    changeBlogDesc(id);
  })
}

const changeBlogActive = (e) => {
  const blogTabs = document.querySelector('.blog-tabs').children;
  if (e.target.classList.contains('blog-active')) {
    false;
  } else {
    Array.prototype.forEach.call(blogTabs, function(tab) {
      if (tab.children[0].classList.contains('blog-active')) {
        tab.children[0].classList.remove('blog-active');
      } else {
        false;
      }
    });
    e.target.classList.add('blog-active');
  }
}

const changeBlogDesc = (id) => {
  document.querySelector(`#${id}`).scrollIntoView();
}

//? FAQ SECTION
const questions = document.querySelector('.questions');
if (questions) {
  questions.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus')) {
      e.target.classList.add('none');
      e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('none');
    } else if (e.target.classList.contains('minus')) {
      e.target.nextSibling.classList.remove('none');
      e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('none');
    }
  })
}