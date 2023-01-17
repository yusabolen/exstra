const input=document.querySelector('#input');
let buton = document.querySelector("input[type='button']");
const text=document.querySelector('.text');
const img=document.querySelector('img');
const inputDiv = document.querySelector('#inputDiv');

console.log(inputDiv);
let sayac = 5;
let sayac1 = 0;


let number = (Math.floor(Math.random()*51));
console.log(number);

buton.addEventListener('click',()=>{
    
    console.log(input.value);
    if(Number(input.value)){
        sayac--;
        sayac1++;
        if(input.value<number){
            text.innerHTML=` <p class="hak"><span>${sayac}</span> tahmin hakkınız kaldı.</p><p class="artır"><span >${input.value}</span> <i class="fa-sharp fa-solid fa-arrow-up"></i> </p>`;
        }
        else if (input.value>number){
            text.innerHTML=` <p class="hak"><span>${sayac}</span> tahmin hakkınız kaldı.</p><p class="azalt"><span >${input.value}</span> <i class="fa-sharp fa-solid fa-arrow-down"></i> </p>`;
    
        }
        
        else if (input.value == number && sayac>=0){
            text.innerHTML= ` <p class="hak">tebrikler bildiniz  <span>${sayac1}. hakkinizda</span> </p>`
            inputDiv.style.display="none"
            img.src=`./img/tebrikler.jpg`
            
        }
        if( sayac == 0){
             text.innerHTML=` <p class="hak">Oyunu Kaybettiniz.</p>`
            inputDiv.style.display="none"
            img.src=`./img/bacground.jpg`
        }
        
        
        
    }
    else{
        // alert('Lutfen bir sayi giriniz')
        text.innerHTML=` <p class="hak">Lutfen bir sayi giriniz</p>`
    }
      input.value =''  
    }
    
    );


