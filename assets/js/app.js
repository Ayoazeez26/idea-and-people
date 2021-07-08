//? NAVIGATION
let smMenuBtn = document.querySelectorAll('.sm-menu-btn')
let smScreenNav = document.querySelector('.sm-screen-menu')

smMenuBtn.forEach(eventName => {
  eventName.addEventListener('click', e => {
    smScreenNav.classList.toggle('hidden')
  })
  
})


//? SLIDER
const blogTabs = document.querySelector('.blog-tabs');
if (blogTabs) {
  blogTabs.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.id;
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
  const desc = document.querySelector('.blog-desc').children;
  Array.prototype.forEach.call(desc, function(tab) {
    if (tab.classList.contains('flex')) {
      tab.classList.replace('flex', 'hidden');
    } else {
      false;
    }
    if (tab.classList.contains(id)) {
      tab.classList.replace('hidden', 'flex');
    } else {
      false;
    }
  });
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