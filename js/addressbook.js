
// Generate alphabetical contact list

const alphabetContactList = {
    A: undefined, B: undefined, C: undefined, D: undefined, E: undefined,
    F: undefined, G: undefined, H: undefined, I: undefined, J: undefined,
    K: undefined, L: undefined, M: undefined, N: undefined, O: undefined,
    P: undefined, Q: undefined, R: undefined, S: undefined, T: undefined,
    U: undefined, V: undefined, W: undefined, X: undefined, Y: undefined,
    Z: undefined
};

for (let prop in alphabetContactList){
    $('#contactDirectory').append(`<li class='${prop}Letter letter'>${prop}<ol></ol></li>`);
};


// Show and hide the add-contact form

$('form').hide();
$('.contactInfoListing').hide();

$('#addContact').click(function() {
    $('form').show();
}
);

function hideReset() {
    document.querySelector("form").reset();
    $('form').hide();}

$('#cancel').click(function(){
    hideReset()});

// $('#cancel').click(function hideReset() {
//    document.querySelector("form").reset();
//    $('form').hide();
//}
//);


// Collects form  input values and stores them as objects in an array

const contactArray = [

];

$('#submitContact').click(function() {
    const newContact = {
        firstName: $('#newFname').val(),
        lastName: $('#newLname').val(),
        phoneNumber: $('#newPhone').val(),
        address: $('#newAddress').val()
    };
    
    contactArray.push(newContact);

// Sort the array alphabetically each time a new contact is added
// Citation for function compare code: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

    function compare( a, b ) {
        if ( a.lastName < b.lastName ){
          return -1;
        }
        if ( a.lastName > b.lastName ){
          return 1;
        }
        return 0;
      }
      
      contactArray.sort( compare );

// Delete and rewrite the array data to the page each time a new contact is added

    for (let i = 0; i < contactArray.length; i++) {
    
       for (let prop in alphabetContactList){
            if (contactArray[i].lastName.charAt(0).toUpperCase() === prop) {
                $(`.${prop}Letter ol`).empty();
                for (let i = 0; i < contactArray.length; i ++) 
                if (contactArray[i].lastName.charAt(0).toUpperCase() === prop) {{
                    $(`.${prop}Letter ol`).append(`<li>${contactArray[i].firstName} ${contactArray[i].lastName}<br><span class="phoneAddress">${contactArray[i].phoneNumber}<br>${contactArray[i].address}</span> <button id="deleteContact">Delete</button></li>`);
                }
            } }
        }

        }

       hideReset();
        
}

);


// Delete a contact function
// CITATION - I used an adapted version of the code in this answer to make the delete button work: https://stackoverflow.com/questions/63694112/how-to-remove-a-created-li-by-clicking-on-button-with-jquery

$('ol').on("click", "#deleteContact", function(e){
    $(e.target).parent().remove();
    contactArray.splice(this,1);
 }
);

// Search function
$('#searchButton').click(function () {
    let searchResults = [];
    const search = $('#searchInput').val().toUpperCase();

    for (let i = 0; i < contactArray.length; i++) {
        for(let prop in contactArray[i]) {
         if (contactArray[i][prop].toUpperCase().includes(search)) {
             searchResults.push(contactArray[i]);
                break;
         }
    }
}

console.log(searchResults);

// $('#searchDiv').append(`<p>${searchResults[0].firstName}</p>`);
if(searchResults.length > 0) {

    for(let i = 0; i < searchResults.length; i++) {
alert(`Contact found:\n${searchResults[i].firstName} ${searchResults[i].lastName}: ${searchResults[i].phoneNumber}\n${searchResults[i].address}`);
}}
else {
    alert('No contacts found.');
}
}
)
  /*

$('#searchButton').click(function () {
    const search = $('#searchInput').val().toUpperCase();

    if(contactArray.length == 0){alert("No contacts found - your address book is empty");}

    for (let i = 0; i < contactArray.length; i++) {

    if (contactArray[i].firstName.toUpperCase().includes(search)) {
        alert(`Contact found: ${contactArray[i].firstName} ${contactArray[i].lastName}`);
        break;
    } else if (contactArray[i].lastName.toUpperCase().includes(search)){
        alert(`Contact found: ${contactArray[i].firstName} ${contactArray[i].lastName}`);
        break;
    }
    else {
        alert('No contacts found.');
        break;
    }
}
});
*/