

window.onload = function(){
    maquina_escrever('nome')
}

function maquina_escrever(id){

    let elemento = document.querySelector(`#${id}`)

    let lista = elemento.innerHTML.split('')
    
    elemento.innerHTML = ''

    lista.forEach((letra,i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 80 * i)
    })
}


let cont = 1

if(cont<=1){
    let span2 = document.getElementById('span2')
    
   setTimeout(()=>{
    span2.textContent = 'Full Stack'
    maquina_escrever('span2')
    cont++
   },2500)

}

// Animação 
// let divsEstudo = document.querySelectorAll('.oculto')

// const elementes = new IntersectionObserver((elemento)=>{
//    elemento.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.remove('oculto')
//             entry.target.classList.add('show')
//         }
//         // else{
//         //     entry.target.classList.remove('show')
//         // }
//    })
// })

// divsEstudo.forEach((e)=>{
//     elementes.observe(e)
// })