const toggleSwitch = document.getElementById('toggleSwitch');
const monthlyPrice= document.querySelectorAll('.price-monthly')
const annuallyPrice= document.querySelectorAll('.price-annually')
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        monthlyPrice.forEach(price => {
            price.classList.add('active')
        });
        annuallyPrice.forEach(price=>{
            price.classList.remove('active')
        })
        
    } else {
        monthlyPrice.forEach(price => {
            price.classList.remove('active')
        });
        annuallyPrice.forEach(price=>{
            price.classList.add('active')
        })
    }
});