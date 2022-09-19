
// Generate alphabetical contact list

const alphabetContactList = {
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
};

for (let prop in alphabetContactList){
    $('#contactDirectory').append(`<li class='${prop}Letter'>${prop}<ol></ol></li>`);
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

    let addContact = $(`<li>${newContact.firstName} ${newContact.lastName}
        <ul>
        <li>${newContact.phoneNumber}, ${newContact.address}</li>
        </ul>
    </li>`);
    
        for (let prop in alphabetContactList){
            if (newContact.lastName.charAt(0).toUpperCase() === prop) {
                $(`.${prop}Letter`).append(addContact);
        };
        }
    
    //$('.letter').append(addContact);

}
);




// Delete a contact function