const swiper = new Swiper('.main-slider', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  }
});

class MaterialInputs {
  constructor(selector = '.material-input input') {
    this.materialInputs = Array.from(document.querySelectorAll(selector));
    this.events();
  }
  events() {
    this.materialInputs.forEach(input => {
      input.addEventListener('input', () => {
        if(input.value !== '') {
          input.classList.add('non-empty');
        }else {
          input.classList.remove('non-empty');
        }
      });
    });
  }
}

new MaterialInputs();

// Responsive Blog Layout
const blogEnd = document.querySelector('.blog__e');
const blogStart = document.querySelector('.blog__s');

const responsiveBlog = () => {
  const query = matchMedia('screen and (max-width: 992px)');

  if(query.matches) {
    const blogEndCopy = blogEnd.cloneNode(true);
    blogEndCopy.classList.add('clear-container');

    if(!blogStart.querySelector('.blog__e')) {
      blogStart.insertBefore(blogEndCopy, blogStart.querySelector('.blog__content'));
    }
  }else {
    if(blogStart.querySelector('.blog__e')) {
      blogStart.querySelector('.blog__e').remove();
    }
  }
}

if(blogEnd) {
  responsiveBlog();
  window.addEventListener('resize', responsiveBlog);
}

// Search
const searchInput = document.getElementById('search');
const searchBlock = document.querySelector('.search');

if(searchInput) {

  searchInput.addEventListener('focus', () => {
    searchBlock.classList.add('show');
  });

  searchInput.addEventListener('blur', () => {
    searchBlock.classList.remove('show');
  });

}

// Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

const handleDropdownClick = e => {
  const tg = e.target;
  if(tg.classList.contains('dropdown__header')) {
    const dropdownList = tg.parentElement.querySelector('.dropdown__list');
    if(!dropdownList.classList.contains('show')) {
      dropdowns.forEach(dd => {
        dd.querySelectorAll('.dropdown__list').forEach(item => {
          item.classList.remove('show');
        })
      })
      dropdownList.classList.add('show');
    }else {
      dropdownList.classList.remove('show');
    }
  }
}

if(dropdowns.length > 0) {
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', handleDropdownClick);
  });
}