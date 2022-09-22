
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
/* new code */
const contactArray = [

];

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

    /* New code - adds each new contact to an array and sorts the array alphabetically */
  
    contactArray.push(newContact);

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

      /* End new code */

    for (let i = 0; i < contactArray.length; i++) {

    /* let addContact = $(`<ul><li class="contactDetails">${contactArray[i].firstName} ${contactArray[i].lastName}: ${contactArray[i].phoneNumber}, ${contactArray[i].address}</li>
        <button id="deleteContact">Delete</button>
        </ul>
    </li>`); */
    
       for (let prop in alphabetContactList){
            if (contactArray[i].lastName.charAt(0).toUpperCase() === prop) {
                $(`.${prop}Letter ol`).empty();
                for (let i = 0; i < contactArray.length; i ++) 
                if (contactArray[i].lastName.charAt(0).toUpperCase() === prop) {{
                    $(`.${prop}Letter ol`).append(`<li>${contactArray[i].firstName} ${contactArray[i].lastName} <button id="deleteContact">Delete</button></li>`);
                }
            } }
        }

        }

  // Write this code snippet as a function because you use it twice!     
        document.querySelector("form").reset();
        $('form').hide();

        
}



);



// Delete a contact function

// CITATION - I used an adapted version of the code in this answer to make the delete button work: https://stackoverflow.com/questions/63694112/how-to-remove-a-created-li-by-clicking-on-button-with-jquery

$('ol').on("click", "#deleteContact", function(e){
    $(e.target).parent().remove();
    contactArray.splice(this,1);
 }
);

// Search - doesn't work yet - try looping through the array and checking each element/object?
$('#searchButton').click(function () {
    const search = $('#searchInput').val();

    for (let i = 0; i < contactArray.length; i++) {

    if (contactArray[i].firstName.includes(search)) {
        alert(`Contact found: ${contactArray[i].firstName} ${contactArray[i].lastName}`);
        break;
    } else {
        alert('No contacts found.');
        break;
    }
}
});
