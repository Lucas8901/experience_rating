const stars = document.querySelectorAll('.stars i');

  // fazendo loop sobre as Estrelas 
  stars.forEach((star, index1)=>{ 
  // Adicionando evento ao click na Estrela
  star.addEventListener('click',()=>{
  // Pecorrendo Estrelas
  stars.forEach((star, index2)=>{
    index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
  });
  });
});