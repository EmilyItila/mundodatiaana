// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(
'.card, .member, .form-card'
);

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;
      entry.target.style.transform =
      'translateY(0)';

    }

  });

});

cards.forEach(card=>{

  card.style.opacity = 0;

  card.style.transform =
  'translateY(40px)';

  card.style.transition =
  '0.6s ease';

  observer.observe(card);

});


// FAQ

const faqItems =
document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const question =
  item.querySelector('.faq-question');

  question.addEventListener('click', () => {

    item.classList.toggle('active');

  });


});
// ANIMAÇÃO DA GALERIA

const galeriaCards =
document.querySelectorAll('.galeria-card');

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;

      entry.target.style.transform =
      'translateY(0)';

    }

  });

});

galeriaCards.forEach(card=>{

  card.style.opacity = 0;

  card.style.transform =
  'translateY(40px)';

  card.style.transition =
  '0.6s ease';

  observer.observe(card);

});