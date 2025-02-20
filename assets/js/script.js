function getGreeting() {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {

        return "Good morning!";
    } else if (currentTime < 18) {

        return "Good afternoon!";
    } else {

        return "Good evening!";
    }
}

function isFriday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)

    // Friday is represented by 5
    return dayOfWeek === 5;
}

function isWednesday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)


    return dayOfWeek === 3;
}

function isSaturday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)


    return dayOfWeek === 6;
}

function isSunday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)


    return dayOfWeek === 0;
}






function getMeal() {
    const currentTime = new Date().getHours();
    let title = document.getElementById("meal-title");
    let meal = document.getElementById("meal-options");
    let eat = document.getElementById("eat");
    if (currentTime < 12) {
        title.innerText = "What do you want for Breakfast?"
        eat.innerHTML = '<img src="./assets/images/breakfast.jpg" class="card-img-top"' +
                                    'style="object-fit: cover;width: 100%; height: 100%" alt="Happy mood">'

        meal.innerHTML = '<p class="h1 text-center py-2">Option 1 <span id="speak41" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
            '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
            'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
            ' data-bs-target="#breakfast1" data-bs-dismiss="modal">' +

            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/cereal1.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            'alt="Cereal">' +
            '</div>' +
            '<div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Cereal' +
            '</p>' +

            '</div>' +
            '</div>' +
            '<div style="width: 40px; height: 40px;">' +
            ' <img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
            'class="card-img-top" alt="Unwell mood">' +
            '</div>' +
            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/sandwich-ham.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            'alt="Sandwich">' +
            ' </div>' +
            ' <div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Sandwich' +
            '</p>' +

            '</div>' +
            '</div>' +
            '<div style="width: 40px; height: 40px;">' +
            '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
            'class="card-img-top" alt="Unwell mood">' +
            ' </div>' +
            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/actimel.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            'alt="Actimel">' +
            '</div>' +
            '<div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Actimel' +
            '</p>' +

            '</div>' +
            '</div>' +
            '<div style="width: 40px; height: 40px;">' +
            '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
            'class="card-img-top" alt="Unwell mood">' +
            '</div>' +
            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/medication.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            'alt="Medication">' +
            '</div>' +
            '<div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Medication' +
            '</p>' +

            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +



            '<p class="h1 text-center py-2 m-0">Option 2 <span id="speak42" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
            '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3"' +
            'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#breakfast2" data-bs-dismiss="modal">' +

            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/cereal2.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            ' alt="Cereal">' +
            '</div>' +
            ' <div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Cereal' +
            ' </p>' +

            '</div>' +
            '</div>' +
            ' <div style="width: 40px; height: 40px;">' +
            '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
            'class="card-img-top" alt="Unwell mood">' +
            '</div>' +
            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/sandwich-ham.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            'alt="Sandwich">' +
            '</div>' +
            ' <div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Sandwich' +
            '</p>' +

            ' </div>' +
            '</div>' +
            '<div style="width: 40px; height: 40px;">' +
            '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
            'class="card-img-top" alt="Unwell mood">' +
            '</div>' +
            '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/actimel.jpg"' +
            'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            '  alt="Actimel">' +
            '</div>' +
            '<div class="card-body">' +
            '<p class="card-text h4 text-center">' +
            'Actimel' +
            ' </p>' +

            ' </div>' +
            ' </div>' +
            ' <div style="width: 40px; height: 40px;">' +
            '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
            'class="card-img-top" alt="Unwell mood">' +
            ' </div>' +
            ' <div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;">' +
            '<img src="./assets/images/medication.jpg"' +
            ' style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
            'alt="Medication">' +
            ' </div>' +
            '<div class="card-body">' +
            ' <p class="card-text h4 text-center">' +
            ' Medication' +
            ' </p>' +

            ' </div>' +
            ' </div>' +
            '</div>'


        return "I want my Breakfast";
    } else if (currentTime < 18) {
        title.innerText = "What do you want for Lunch?"

        eat.innerHTML = '<img src="./assets/images/lunch.jpg" class="card-img-top"' +
                                    'style="object-fit: cover;width: 100%; height: 100%" alt="Happy mood">'

        meal.innerHTML = '<p class="h1 text-center py-2">Option 1 <span id="speak43" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
        '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3"' +
        'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' + 'data-bs-target="#lunch1"' +
        'data-bs-dismiss="modal">' +
        '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/cup_tea.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +  'alt="Cup of Tea/ Coffee">' +
            '</div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">Cup of Tea/ Coffee</p>' +
            '</div>' +
        '</div>' +
        '<div style="width: 40px; height: 40px;"><img src="./assets/images/plus.png"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"'  + 'alt="Unwell mood"></div>' +
        '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/sandwich-ham.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                    'alt="Sandwich with ham and Butter"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">Sandwich with ham and Butter</p>' +
            '</div>' +   
       ' </div>' +
        '<div style="width: 40px; height: 40px;"><img src="./assets/images/plus.png"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' + 'alt="Unwell mood"></div>' +
        '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/raspberry.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' + 'alt="Raspberry"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">Jam</p>' +
            '</div>' +
        '</div>' +
        '<div style="width: 40px; height: 40px;"><img src="./assets/images/plus.png"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' + 'alt="Unwell mood"></div>' +
        '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/yoghurt.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' + 'alt="Yoghurt"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">Yoghurt</p>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
    '<p class="h1 text-center py-2 m-0">Option 2 <span id="speak44" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
    '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3"' +
        'style="border: 2px solid orange; cursor: pointer;" data-bs-dismiss="modal">' +
        '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/cup_tea.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Cup of Tea/ Coffee">' +
            '</div>' +
           ' <div class="card-body">' +
                '<p class="card-text h4 text-center">Cup of Tea/ Coffee</p>' +
            '</div>' +
       ' </div>' +
        '<div style="width: 40px; height: 40px;"><img src="./assets/images/plus.png"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Unwell mood"></div>' +
       ' <div class="card shadow-sm" style="width: 15em;">' +
           ' <div style="width: 100%; height: 40vh;"><img src="./assets/images/sandwish-omelet.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                    'alt="Sandwich with Omelette">' +
            '</div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">Sandwich with Omelette</p>' +
            '</div>' +      
       ' </div>' +
        '<div style="width: 40px; height: 40px;"><img src="./assets/images/plus.png"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Unwell mood"></div>' +
       ' <div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/raspberry.jpg"' +
                   ' style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Raspberry"></div>' +
            '<div class="card-body">' +
               ' <p class="card-text h4 text-center">Jam</p>' +
            '</div>' +
       ' </div>' +
       ' <div style="width: 40px; height: 40px;"><img src="./assets/images/plus.png"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Unwell mood">'  +
        '</div>' +
        '<div class="card shadow-sm" style="width: 15em;">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/yoghurt.jpg"' +
                   ' style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Yoghurt"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">Yoghurt</p>' +
            '</div>' +
        '</div>' +
   ' </div>' +
   ' <div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
    '<p id="read45" class="h1 text-center py-2">Option 3: I want to Have my Lunch Out <span id="speak45" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
   ' <div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3">' +
       ' <div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout1" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/McDonald.png"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="MCDONALD"></div>' +
            '<div class="card-body">' +
                '<p id="read46" class="card-text h4 text-center">MCDONALD <span id="speak46" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
            '</div>' +
        '</div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout2" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/KFC.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="KFC"></div>' +
            '<div class="card-body">' +
                '<p id="read47" class="card-text h4 text-center">KFC <span id="speak47" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
            '</div>' +
        '</div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
           ' data-bs-target="#eatout3" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/asda-dartford.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="ASDA DARTFORD"></div>' +
            '<div class="card-body">' +
               ' <p id="read48" class="card-text h4 text-center">ASDA CAFE IN DARTFORD <span id="speak48" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
           ' </div>' +
       ' </div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout4" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/Time-Plaice.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Time & Plaice"></div>' +
           ' <div class="card-body">' +
                '<p id="read49" class="card-text h4 text-center">Time & Plaice <span id="speak49" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
            '</div>' +
        '</div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout5" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/coastacafe-dartford.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="MCDONALD"></div>' +
           ' <div class="card-body">' +
                '<p id="read50" class="card-text h4 text-center">COSTA COFFEE DARTFORD <span id="speak50" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
           ' </div>' +
       ' </div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout5" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/costacofee_longfield.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="MCDONALD"></div>' +
            '<div class="card-body">' +
                '<p id="read51" class="card-text h4 text-center">COSTA COFFEE LONGFIELD <span id="speak51" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
           ' </div>' +
       ' </div>' 
        return "I want my Lunch";
    } else {
        title.innerText = "What do you want for Dinner?"

        eat.innerHTML = '<img src="./assets/images/dinner.jpg" class="card-img-top"' +
                                    'style="object-fit: cover;width: 100%; height: 100%" alt="Happy mood">'

        if (isFriday()) {
            meal.innerHTML = '<p class="h1 text-center py-2">Friday Dinner</p>' +
                '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
                'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
                'data - bs - target="#dinner1" data - bs - dismiss="modal" >' +

                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/fish-chips.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Mashed Potatoes">' +
                '</div>' +
                '<div class="card-body">' +
                '<p id="read52 class="card-text h4 text-center">' +
                'Fish and Chips <span id="speak52" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>' +
                '</p>' +

                '</div>' +
                '</div>' +

                '</div > '
        } else {
            meal.innerHTML = '<p id="read53" class="h1 text-center py-2">Option 1 <span id="speak53" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
                ' <div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
                'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
                'data-bs-target="#dinner1" data-bs-dismiss="modal">' +

                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/mashed-potatoes.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Mashed Potatoes">' +
                '</div>' +
                '<div class="card-body">' +
                '<p  class="card-text h4 text-center">' +
                'Mashed Potatoes' +
                '</p>' +

                '</div>' +
                '</div>' +
                '<div style="width: 40px; height: 40px;">' +
                '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                'class="card-img-top" alt="Unwell mood">' +
                '</div>' +
                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/sauce.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Sandwich">' +
                '</div>' +
                '<div class="card-body">' +
                '<p  class="card-text h4 text-center">' +
                'Already made sauce ' +
                ' </p>' +

                '</div>' +
                '</div>' +
                '<div style="width: 40px; height: 40px;">' +
                '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                'class="card-img-top" alt="Unwell mood">' +
                '</div>' +
                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/vegetables.webp"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Vegetable">' +
                '</div>' +
                '<div class="card-body">' +
                ' <p  class="card-text h4 text-center">' +
                'Vegetable' +
                '</p>' +

                '</div>' +
                ' </div>' +
                '<div style="width: 40px; height: 40px;">' +
                '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                'class="card-img-top" alt="Unwell mood">' +
                '</div>' +
                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/cup_tea.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Medication">' +
                '</div>' +
                '<div class="card-body">' +
                '<p  class="card-text h4 text-center">' +
                'Cup of tea/coffee ' +

                '</p>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
                ' <p id="read54" class="h1 text-center py-2 m-0">Option 2 <span id="speak54" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
                '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
                'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
                'data-bs-target="#dinner2" data-bs-dismiss="modal">' +

                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/rice.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Rice">' +
                '</div>' +
                '<div class="card-body">' +
                '<p class="card-text h4 text-center">' +
                'Rice' +
                '</p>' +

                '</div>' +
                ' </div>' +
                '<div style="width: 40px; height: 40px;">' +
                '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                'class="card-img-top" alt="Unwell mood">' +
                '</div>' +
                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/sauce.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Sandwich">' +
                '</div>' +
                '<div class="card-body">' +
                '<p class="card-text h4 text-center">' +
                'Already made sauce' +
                ' </p>' +

                '</div>' +
                '</div>' +
                '<div style="width: 40px; height: 40px;">' +
                '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                'class="card-img-top" alt="Unwell mood">' +
                '</div>' +
                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/vegetables.webp"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Vegetable">' +
                '</div>' +
                '<div class="card-body">' +
                '<p class="card-text h4 text-center">' +
                'Vegetable' +
                '</p>' +

                '</div>' +
                '</div>' +
                '<div style="width: 40px; height: 40px;">' +
                '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                'class="card-img-top" alt="Unwell mood">' +
                '</div>' +
                '<div class="card shadow-sm" style="width: 15em;">' +
                '<div style="width: 100%; height: 40vh;">' +
                '<img src="./assets/images/cup_tea.jpg"' +
                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                'alt="Medication">' +
                '</div>' +
                '<div class="card-body">' +
                '<p class="card-text h4 text-center">' +
                'Cup of tea/coffee' +

                '</p>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
                ' <p id="read55" class="h1 text-center py-2 m-0">Option 3 <span id="speak55" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
                '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
                'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
                'data-bs-target="#dinner3" data-bs-dismiss="modal">' +

                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/Spaghetti.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Spaghetti">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Spaghetti' +   
                            '</p>' +
                        '</div>' +
                    ' </div>' +
                    '<div style="width: 40px; height: 40px;">' +
                        '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                            'class="card-img-top" alt="Unwell mood">' +
                    '</div>' +
                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/sauce.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Sandwich">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Already made sauce' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div style="width: 40px; height: 40px;">' +
                        '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                            'class="card-img-top" alt="Unwell mood">' +
                    '</div>' +
                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/vegetables.webp"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Vegetable">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Vegetable' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div style="width: 40px; height: 40px;">' +
                        '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                            'class="card-img-top" alt="Unwell mood">' +
                    '</div>' +
                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/cup_tea.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    ' alt="Medication">' +
                '       </div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                ' Cup of tea/coffee' +

                            '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
                ' <p id="read56" class="h1 text-center py-2 m-0">Option 4 <span id="speak56" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
                '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
                'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
                'data-bs-target="#dinner4" data-bs-dismiss="modal">' +

                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/pasta.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Pasta">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Pasta' +       
                            '</p>' +
                        '</div>' +
                    ' </div>' +
                    '<div style="width: 40px; height: 40px;">' +
                        '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                            'class="card-img-top" alt="Unwell mood">' +
                    '</div>' +
                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/sauce.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Sauce">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Already made sauce' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div style="width: 40px; height: 40px;">' +
                        '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                            'class="card-img-top" alt="Unwell mood">' +
                    '</div>' +
                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/vegetables.webp"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Vegetable">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Vegetable' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div style="width: 40px; height: 40px;">' +
                        '<img src="./assets/images/plus.png" style="object-fit: cover;width: 100%; height: 100%"' +
                            'class="card-img-top" alt="Unwell mood">' +
                    '</div>' +
                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/cup_tea.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    ' alt="Medication">' +
                '       </div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                ' Cup of tea/coffee' +

                            '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                

                '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
                '<p id="read57" class="h1 text-center py-2 m-0">Option 5 <span id="speak57" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span></p>' +
                '<div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3 choice"' +
                'style="border: 2px solid orange; cursor: pointer;" data-bs-toggle="modal"' +
                'data-bs-target="#dinner5" data-bs-dismiss="modal">' +

                    '<div class="card shadow-sm" style="width: 15em;">' +
                        '<div style="width: 100%; height: 40vh;">' +
                            '<img src="./assets/images/cheese-onionpie.jpg"' +
                                'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top"' +
                                    'alt="Cheese and onion pie with corned beef and baked beans">' +
                        '</div>' +
                        '<div class="card-body">' +
                            '<p class="card-text h4 text-center">' +
                                'Cheese and onion pie with corned beef and baked beans' +
                            '</p>' +
                        '</div>' +
                    ' </div>' +
                    
                '</div>' 
        }
        return "I want my Dinner";
    }
}

function toggleSlide(){
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");

    if(slide1.classList.contains("hide")){
        slide1.classList.remove('hide')
    }else{
        slide1.classList.add("hide")
    }

    if(slide2.classList.contains("hide")){
        slide2.classList.remove('hide')
    }else{
        slide2.classList.add("hide")
    }
}

setInterval(()=> toggleSlide(), 5000);

function getCurrentDate() {
    const date = new Date();
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const suffix = getDaySuffix(dayOfMonth);

    return `Today is ${day}, ${dayOfMonth}${suffix} ${month}, ${year}`;
}

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

let display_date = document.getElementById("display-date");
display_date.innerHTML = "<div id='read1'> <div class='row'><div  class='col text-center' style='margin-top: 30px'> <div id='speak1' style='cursor:pointer'><i class='fa-solid fa-volume-high'></i></div> <p>" + getGreeting() + ", Mr. Andrew McCracken" + "</p></div><div><div class='row'><div class='col text-center' style='padding-bottom: 30px' > <p >" + getCurrentDate() + "</p></div><div></div>";

let meal = document.getElementById("meal");
meal.innerHTML = getMeal() + " <span id='speak8' style='cursor: pointer;'><i class='fa-solid fa-volume-high'></i></span>";


function speakText(message) {
        if (message.trim() !== "") {
            const speech = new SpeechSynthesisUtterance(message);
            speech.lang = "en-US"; // Set language
            speech.rate = 1; // Set speech rate
            speech.pitch = 1; // Set pitch
            speechSynthesis.speak(speech);
        } else {
            alert("No text to speak.");
        }
    }

$(document).ready(function () {

    $(document).on("click", "#nextSlide", function () {
        let welcome = document.getElementById("welcome-page");
        let mood = document.getElementById("mood");

        welcome.classList.add("d-none");
        mood.classList.remove("d-none");
    });

    $(document).on("click", "#firstSlide", function () {
        let welcome = document.getElementById("welcome-page");
        let mood = document.getElementById("mood");

        mood.classList.add("d-none");
        welcome.classList.remove("d-none");
    });

    $(document).on("click", "#happy", function () {
        let mood = document.getElementById("mood");
        let activity = document.getElementById("activity1");

        mood.classList.add("d-none");
        activity.classList.remove("d-none");
    });

    $(document).on("click", "#excited", function () {
        let mood = document.getElementById("mood");
        let activity = document.getElementById("activity1");

        mood.classList.add("d-none");
        activity.classList.remove("d-none");
    });


    $(document).on("click", "#backSlide1", function () {
        let activity = document.getElementById("activity1");
        let mood = document.getElementById("mood");

        activity.classList.add("d-none");
        mood.classList.remove("d-none");
    });

    $(document).on("click", "#backActivitySad", function () {
        let activity = document.getElementById("activity-sad");
        let mood = document.getElementById("mood");

        activity.classList.add("d-none");
        mood.classList.remove("d-none");
    });



    $(document).on("click", "#backActivityUnwell", function () {
        let activity = document.getElementById("activity-unwell");
        let mood = document.getElementById("mood");

        activity.classList.add("d-none");
        mood.classList.remove("d-none");
    });


    $(document).on("click", "#nextSlide1", function () {
        let activity1 = document.getElementById("activity1");
        let activity2 = document.getElementById("activity2");

        activity1.classList.add("d-none");
        activity2.classList.remove("d-none");
    });

    $(document).on("click", "#backSlide2", function () {
        let activity1 = document.getElementById("activity1");
        let activity2 = document.getElementById("activity2");

        activity1.classList.remove("d-none");
        activity2.classList.add("d-none");
    });


    $(document).on("click", "#nextSlide2", function () {
        let activity2 = document.getElementById("activity2");
        let activity3 = document.getElementById("activity3");

        activity2.classList.add("d-none");
        activity3.classList.remove("d-none");
    });

    $(document).on("click", "#nextSlide3", function () {
        let activity3 = document.getElementById("activity3");
        let activity4 = document.getElementById("activity4");

        activity3.classList.add("d-none");
        activity4.classList.remove("d-none");
    });

    $(document).on("click", "#backSlide3", function () {
        let activity2 = document.getElementById("activity2");
        let activity3 = document.getElementById("activity3");

        activity2.classList.remove("d-none");
        activity3.classList.add("d-none");
    });

    $(document).on("click", "#backSlide4", function () {
        let activity3 = document.getElementById("activity3");
        let activity4 = document.getElementById("activity4");

        activity3.classList.remove("d-none");
        activity4.classList.add("d-none");
    });


    $(document).on("click", "#sad", function () {
        let mood = document.getElementById("mood");
        let activity = document.getElementById("activity-sad");

        mood.classList.add("d-none");
        activity.classList.remove("d-none");
    });

    $(document).on("click", "#unwell", function () {
        let mood = document.getElementById("mood");
        let activity = document.getElementById("activity-unwell");

        mood.classList.add("d-none");
        activity.classList.remove("d-none");
    });

    $(document).on("click", "#speak1", function () {
        const message = document.getElementById('read1').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak2", function () {
        const message = document.getElementById('read2').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak3", function () {
        const message = document.getElementById('read3').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak4", function () {
        const message = document.getElementById('read4').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak5", function () {
        const message = document.getElementById('read5').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak6", function () {
        const message = document.getElementById('read6').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak7", function () {
        const message = document.getElementById('read7').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak8", function () {
        const message = document.getElementById('meal').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak9", function () {
        const message = document.getElementById('read9').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak10", function () {
        const message = document.getElementById('read10').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak11", function () {
        const message = document.getElementById('read11').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak12", function () {
        const message = document.getElementById('read12').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak13", function () {
        const message = document.getElementById('read13').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak14", function () {
        const message = document.getElementById('read14').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak15", function () {
        const message = document.getElementById('read15').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak16", function () {
        const message = document.getElementById('read16').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak17", function () {
        const message = document.getElementById('read17').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak18", function () {
        const message = document.getElementById('read18').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak19", function () {
        const message = document.getElementById('read19').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak20", function () {
        const message = document.getElementById('read20').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak21", function () {
        const message = document.getElementById('read21').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak22", function () {
        const message = document.getElementById('read22').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak23", function () {
        const message = document.getElementById('read23').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak24", function () {
        const message = document.getElementById('read24').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak25", function () {
        const message = document.getElementById('read25').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak26", function () {
        const message = document.getElementById('read26').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak27", function () {
        const message = document.getElementById('read27').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak28", function () {
        const message = document.getElementById('read28').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak29", function () {
        const message = document.getElementById('read29').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak30", function () {
        const message = document.getElementById('read30').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak31", function () {
        const message = document.getElementById('read31').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak32", function () {
        const message = document.getElementById('read32').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak33", function () {
        const message = document.getElementById('read33').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak34", function () {
        const message = document.getElementById('read34').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak35", function () {
        const message = document.getElementById('read35').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak36", function () {
        const message = document.getElementById('read36').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak37", function () {
        const message = document.getElementById('read37').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak38", function () {
        const message = document.getElementById('read38').textContent;
        speakText(message);
    });

     $(document).on("click", "#speak39", function () {
        const message = document.getElementById('read39').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak40", function () {
        const message = document.getElementById('read40').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak41", function () {
        speakText("cereal plus sandwich plus actimel plus medication");
    });

    $(document).on("click", "#speak42", function () {
        speakText("cereal plus sandwich plus actimel plus medication");
    });

     $(document).on("click", "#speak43", function () {
        speakText(" Cup of Tea / Coffee plus Sandwich with ham and Butter plus Jam plus Yoghurt");
    });
    
     $(document).on("click", "#speak44", function () {
        speakText("Cup of Tea/ Coffee plus Sandwich with Omelette plus Jam plus Yoghurt");
    });
    
    $(document).on("click", "#speak45", function () {
        const message = document.getElementById('read45').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak46", function () {
        const message = document.getElementById('read46').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak47", function () {
        const message = document.getElementById('read47').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak48", function () {
        const message = document.getElementById('read48').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak49", function () {
        const message = document.getElementById('read49').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak50", function () {
        const message = document.getElementById('read50').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak51", function () {
        const message = document.getElementById('read51').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak52", function () {
        const message = document.getElementById('read52').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak53", function () {
        speakText("Mashed Potatoes plus Already made sauce plus Vegetable plus Cup of tea/coffee");
    });

    $(document).on("click", "#speak54", function () {
        speakText("Rice plus Already made sauce plus Vegetable plus Cup of tea/coffee");
    });

    $(document).on("click", "#speak55", function () {
        speakText("Spaghetti plus Already made sauce plus Vegetable plus Cup of tea/coffee");
    });

    $(document).on("click", "#speak56", function () {
        speakText("Pasta plus Already made sauce plus Vegetable plus Cup of tea/coffee");
    });

    $(document).on("click", "#speak57", function () {
        speakText("Cheese and onion pie with corned beef and baked beans");
    });

    $(document).on("click", "#speak58", function () {
        const message = document.getElementById('read58').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak59", function () {
        const message = document.getElementById('read59').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak59", function () {
        const message = document.getElementById('read59').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak59", function () {
        const message = document.getElementById('read59').textContent;
        speakText(message);
    });


    $(document).on("click", "#speak60", function () {
        const message = document.getElementById('read60').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak61", function () {
        const message = document.getElementById('read61').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak62", function () {
        const message = document.getElementById('read62').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak63", function () {
        const message = document.getElementById('read63').textContent;
        speakText(message);
    });

    $(document).on("click", "#speak64", function () {
        const message = document.getElementById('read64').textContent;
        speakText(message);
    });
 
});




