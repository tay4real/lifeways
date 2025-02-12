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

        meal.innerHTML = '<p class="h1 text-center py-2">Option 1</p>' +
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



            '<p class="h1 text-center py-2 m-0">Option 2</p>' +
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

        eat.innerHTML = '<img src="./assets/images/breakfast.jpg" class="card-img-top"' +
                                    'style="object-fit: cover;width: 100%; height: 100%" alt="Happy mood">'

        meal.innerHTML = '<p class="h1 text-center py-2">Option 1</p>' +
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
    '<p class="h1 text-center py-2 m-0">Option 2</p>' +
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
    '<p class="h1 text-center py-2">Option 3: I want to Have my Lunch Out</p>' +
   ' <div class="d-flex flex-wrap gap-2 justify-content-center  rounded-3 p-3">' +
       ' <div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout1" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/McDonald.png"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="MCDONALD"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">MCDONALD</p>' +
            '</div>' +
        '</div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout2" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/KFC.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="KFC"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">KFC</p>' +
            '</div>' +
        '</div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
           ' data-bs-target="#eatout3" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/asda-dartford.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="ASDA DARTFORD"></div>' +
            '<div class="card-body">' +
               ' <p class="card-text h4 text-center">ASDA CAFE IN DARTFORD</p>' +
           ' </div>' +
       ' </div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout4" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/Time-Plaice.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="Time & Plaice"></div>' +
           ' <div class="card-body">' +
                '<p class="card-text h4 text-center">Time & Plaice</p>' +
            '</div>' +
        '</div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout5" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/coastacafe-dartford.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="MCDONALD"></div>' +
           ' <div class="card-body">' +
                '<p class="card-text h4 text-center">COSTA COFFEE DARTFORD</p>' +
           ' </div>' +
       ' </div>' +
        '<div class="card shadow-sm" style="border: 2px solid orange;width: 15em;cursor: pointer;" data-bs-toggle="modal"' +
            'data-bs-target="#eatout5" data-bs-dismiss="modal">' +
            '<div style="width: 100%; height: 40vh;"><img src="./assets/images/costacofee_longfield.jpg"' +
                    'style="object-fit: cover;width: 100%; height: 100%" class="card-img-top" alt="MCDONALD"></div>' +
            '<div class="card-body">' +
                '<p class="card-text h4 text-center">COSTA COFFEE LONGFIELD</p>' +
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
                '<p class="card-text h4 text-center">' +
                'Fish and Chips' +
                '</p>' +

                '</div>' +
                '</div>' +

                '</div > '
        } else {
            meal.innerHTML = '<p class="h1 text-center py-2">Option 1</p>' +
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
                '<p class="card-text h4 text-center">' +
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
                ' <p class="card-text h4 text-center">' +
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
                '<p class="card-text h4 text-center">' +
                'Cup of tea/coffee' +

                '</p>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="my-4" style="height: 10px; background-color: gray; width: 100%;"></div>' +
                ' <p class="h1 text-center py-2 m-0">Option 2</p>' +
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
                ' <p class="h1 text-center py-2 m-0">Option 3</p>' +
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
                ' <p class="h1 text-center py-2 m-0">Option 4</p>' +
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
                '<p class="h1 text-center py-2 m-0">Option 5</p>' +
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
display_date.innerHTML = " <div class='row'><div class='col text-center' style='margin-top: 30px'> <p >" + getGreeting() + ", Mr. Andrew McCracken" + "</p></div><div><div class='row'><div class='col text-center' style='padding-bottom: 30px' > <p >" + getCurrentDate() + "</p></div><div>";

let meal = document.getElementById("meal");
meal.innerHTML = getMeal();


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

});




