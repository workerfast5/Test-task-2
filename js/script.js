let masCompany = ['Apple', 'Google', 'Facebook(Meta)', 'Amazon', 'Instagram', 'IBM', 'Microsoft', 'Samsung', 'Walmart'];
// let mass = ['Ковры и ковровые изделия', 'Ковры и ковровые покрытия', 'Легковые пассажирсие автомобили', 'Шелковые ткани']

const input = document.querySelector('.search'),
      p = document.querySelector('.coincidence'),
      select = document.querySelector('.output');
      check = document.querySelector('.check');

let nameCompany;

input.addEventListener("keyup", () => {
    nameCompany = input.value;
    select.innerHTML = '';
    let sizeSelect = 1;
    masCompany.forEach((item, i) => {
        if (item.toLowerCase().includes(nameCompany.toLowerCase()) && nameCompany != ""){
            select.innerHTML += `<option value="${item}"> ${item} </option>`;
            sizeSelect++;
        }

        select.size = `${sizeSelect}`;
    });

});


select.addEventListener('change', () => {
    let selected = document.querySelectorAll('.output option:checked');
    let values = Array.from(selected).map(el => el.value);
    // let temp = `<p class="check"> Выбранное ${values.length} </p>`;
    let temp = ` Выбранное ${values.length}`;
    // let check;
    if (values.length > 0) {
        // p.after().innerHTML = `<p class="check"> Выбранное ${values.length} </p>`; 
        // check.innerHTML = `<p class="check"> Выбранное ${values.length} </p>`;
        p.textContent = "Совпадения";
        p.textContent += temp;
        
        check.addEventListener('click', () => {
            select.classList.toggle('hide');
        });

    } else {
        p.textContent -= temp;
        // check.innerHTML = "";
    }
});
