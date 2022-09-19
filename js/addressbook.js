
// Generate alphabetical contact list

const alphabetContactList = {
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
};

for (let prop in alphabetContactList){
    $('#contactDirectory').append(`<li class='${prop}Letter letter'>${prop}<ol></ol></li>`);
};


// Show and hide add contact form
$('form').hide();
$('.contactInfoListing').hide();

$('#addContact').click(function() {
    $('form').show();
}
);

$('#cancel').click(function() {
    document.querySelector("form").reset();
    $('form').hide();
}
);

// Collect inputs and save into an object

$('#submitContact').click(function() {
    const newContact = {
        firstName: undefined,
        lastName: undefined,
        phoneNumber: undefined,
        address: undefined
    };
    
    newContact.firstName = $('#newFname').val();
    newContact.lastName = $('#newLname').val();
    newContact.phoneNumber = $('#newPhone').val();
    newContact.address = $('#newAddress').val();
    console.log(newContact);

    let addContact = $(`<ul><li>${newContact.firstName} ${newContact.lastName}: ${newContact.phoneNumber}, ${newContact.address}</li>
        <button id="deleteContact">Delete</button>
        </ul>
    </li>`);
    
        for (let prop in alphabetContactList){
            if (newContact.lastName.charAt(0).toUpperCase() === prop) {
                $(`.${prop}Letter`).append(addContact);
        };
        }

       
        document.querySelector("form").reset();
}



);



// Delete a contact function

// CITATION - I used an adapted version of the code in this answer to make the delete button work: https://stackoverflow.com/questions/63694112/how-to-remove-a-created-li-by-clicking-on-button-with-jquery

$('ol').on("click", "#deleteContact", function(e){
    $(e.target).parent('ul').remove();
}
);