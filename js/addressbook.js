
// Generate alphabetical contact list

const alphabetContactList = {
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
};

for (let prop in alphabetContactList){
    $('#contactDirectory').append(`<li>${prop}<ol></ol></li>`);
};

// Search function


// Show and hide add a contact form
$('form').hide();
$('.contactInfoListing').hide();

$('#addContact').click(function() {
    $('form').show();
}
);

// Cancel and clear the form

$('#cancel').click(function() {
    document.querySelector("form").reset();
    $('form').hide();
}
);

// Add function for creating new variables from inputs and put inside click: $('#submitContact').click();
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

    let addContact = $(`<li>${newContact.firstName} ${newContact.lastName}</li>`);
    $('.letter').append(addContact);


}
);




// Delete a contact function