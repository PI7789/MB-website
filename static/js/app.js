const container = document.getElementById('dropdownContainer');

document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('#ProductTable tbody tr');

    rows.forEach(function(row) {
        const priceCell = row.querySelector('.price');
        const amountInput = row.querySelector('.amount-input');
        const totalCell = row.querySelector('.total');

        // Add event listener for input change
        amountInput.addEventListener('input', function() {
            const price = parseFloat(priceCell.textContent); // Get the price for the current row
            const amount = parseInt(amountInput.value) || 0; // Get the input value and default to 0 if it's not a number

            const total = price * amount; // Calculate the total price for this row

            totalCell.textContent = total.toFixed(2); // Update the total cell in the row

            // Recalculate the grand total after each input change
            updateGrandTotal();
        });
    });

    // Function to update the grand total outside the table
    function updateGrandTotal() {
        let grandTotal = 0;

        // Loop through each row to sum up the total column
        rows.forEach(function(row) {
            const totalCell = row.querySelector('.total');
            const total = parseFloat(totalCell.textContent) || 0; // Get the total for the row and default to 0 if not a number
            grandTotal += total; // Add it to the grand total
        });

        // Update the grand total display
        
    }
});

function addDropdown() {
    const container = document.getElementById('dropdownContainer');
    
    // Get the current number of dropdowns (used to create unique names)
    const dropdownCount = container.getElementsByTagName('select').length;

    const label = document.createElement('label');
    label.setAttribute('for', `products_${dropdownCount + 1}`);  // Unique 'for' for each dropdown
    label.textContent = "Add another product";

    // Create a new dropdown (select element)
    const newDropdown = document.createElement('select');
    newDropdown.name = `Products_${dropdownCount + 1}`; // Unique name for each dropdown
    newDropdown.id = `products_${dropdownCount + 1}`;

    const newinput = document.createElement('input');
    newinput.id = `input_${dropdownCount + 1}`;
    newinput.name = `input_${dropdownCount + 1}`;

    const horizontalRule = document.createElement('hr');
    const lineBreak = document.createElement('br');
    const heading = document.createElement('p');
    heading.textContent = " Amount (+ for buy - for sell) ";
    
    const option1 = document.createElement('option');
option1.value = '1';
option1.textContent = 'Post 9ft';

const option2 = document.createElement('option');
option2.value = '2';
option2.textContent = 'Post 8ft';

const option3 = document.createElement('option');
option3.value = '3';
option3.textContent = 'Post 7ft';

const option4 = document.createElement('option');
option4.value = '4';
option4.textContent = 'Post 6ft';

const option42 = document.createElement('option');
option42.value = '42';
option42.textContent = 'Post 5ft';

const option5 = document.createElement('option');
option5.value = '5';
option5.textContent = 'End Post 9ft';

const option6 = document.createElement('option');
option6.value = '6';
option6.textContent = 'End Post 8ft';

const option7 = document.createElement('option');
option7.value = '7';
option7.textContent = 'End Post 7ft';

const option8 = document.createElement('option');
option8.value = '8';
option8.textContent = 'End Post 6ft';

const option9 = document.createElement('option');
option9.value = '9';
option9.textContent = 'Corner Post 9ft';

const option10 = document.createElement('option');
option10.value = '10';
option10.textContent = 'Corner Post 8ft';

const option11 = document.createElement('option');
option11.value = '11';
option11.textContent = 'Corner Post 7ft';

const option12 = document.createElement('option');
option12.value = '12';
option12.textContent = 'Corner Post 6ft';

const option13 = document.createElement('option');
option13.value = '13';
option13.textContent = '3 Way 9ft';

const option14 = document.createElement('option');
option14.value = '14';
option14.textContent = '3 Way 8ft';

const option15 = document.createElement('option');
option15.value = '15';
option15.textContent = '3 Way 7ft';

const option16 = document.createElement('option');
option16.value = '16';
option16.textContent = '3 Way 6ft';

const option17 = document.createElement('option');
option17.value = '17';
option17.textContent = 'Panel {SS} 6ft';

const option18 = document.createElement('option');
option18.value = '18';
option18.textContent = 'Panel {SS} 5ft';

const option19 = document.createElement('option');
option19.value = '19';
option19.textContent = 'Panel {SS} 4ft';

const option20 = document.createElement('option');
option20.value = '20';
option20.textContent = 'Panel {SS} 3ft';

const option21 = document.createElement('option');
option21.value = '21';
option21.textContent = 'Panel {DS ARCH} 6ft';

const option22 = document.createElement('option');
option22.value = '22';
option22.textContent = 'Panel {DS ARCH} 5ft';

const option23 = document.createElement('option');
option23.value = '23';
option23.textContent = 'Panel {DS ARCH} 4ft';

const option24 = document.createElement('option');
option24.value = '24';
option24.textContent = 'Panel {DS ARCH} 3ft';

const option25 = document.createElement('option');
option25.value = '25';
option25.textContent = 'Panel {SS FE} 6ft';

const option26 = document.createElement('option');
option26.value = '26';
option26.textContent = 'Panel {SS FE} 5ft';

const option27 = document.createElement('option');
option27.value = '27';
option27.textContent = 'Panel {SS FE} 4ft';

const option28 = document.createElement('option');
option28.value = '28';
option28.textContent = 'Panel {SS FE} 3ft';

const option29 = document.createElement('option');
option29.value = '29';
option29.textContent = 'Panel {SS ARCH} 6ft';

const option30 = document.createElement('option');
option30.value = '30';
option30.textContent = 'Panel {SS ARCH} 5ft';

const option31 = document.createElement('option');
option31.value = '31';
option31.textContent = 'Panel {SS ARCH} 4ft';

const option32 = document.createElement('option');
option32.value = '32';
option32.textContent = 'Panel {SS ARCH} 3ft';

const option33 = document.createElement('option');
option33.value = '33';
option33.textContent = 'Gravel Board Rock 1ft';

const option34 = document.createElement('option');
option34.value = '34';
option34.textContent = 'Gravel Board Flat 1ft';

const option35 = document.createElement('option');
option35.value = '35';
option35.textContent = 'Gravel Board Rock 6 inch';

const option36 = document.createElement('option');
option36.value = '36';
option36.textContent = 'Gravel Board Flat 6 inch';

const option37 = document.createElement('option');
option37.value = '37';
option37.textContent = 'Wooden Post 8ft';

const option38 = document.createElement('option');
option38.value = '38';
option38.textContent = 'Grain Sand 1 ton bag';

const option39 = document.createElement('option');
option39.value = '39';
option39.textContent = 'Building Sand 1 ton bag';

const option40 = document.createElement('option');
option40.value = '40';
option40.textContent = 'Crusher 1 ton bag';

const option41 = document.createElement('option');
option41.value = '41';
option41.textContent = 'Post Mix 20kg';

// Append all options in order to the new dropdown
newDropdown.appendChild(option1);
newDropdown.appendChild(option2);
newDropdown.appendChild(option3);
newDropdown.appendChild(option4);
newDropdown.appendChild(option42);
newDropdown.appendChild(option5);
newDropdown.appendChild(option6);
newDropdown.appendChild(option7);
newDropdown.appendChild(option8);
newDropdown.appendChild(option9);
newDropdown.appendChild(option10);
newDropdown.appendChild(option11);
newDropdown.appendChild(option12);
newDropdown.appendChild(option13);
newDropdown.appendChild(option14);
newDropdown.appendChild(option15);
newDropdown.appendChild(option16);
newDropdown.appendChild(option17);
newDropdown.appendChild(option18);
newDropdown.appendChild(option19);
newDropdown.appendChild(option20);
newDropdown.appendChild(option21);
newDropdown.appendChild(option22);
newDropdown.appendChild(option23);
newDropdown.appendChild(option24);
newDropdown.appendChild(option25);
newDropdown.appendChild(option26);
newDropdown.appendChild(option27);
newDropdown.appendChild(option28);
newDropdown.appendChild(option29);
newDropdown.appendChild(option30);
newDropdown.appendChild(option31);
newDropdown.appendChild(option32);
newDropdown.appendChild(option33);
newDropdown.appendChild(option34);
newDropdown.appendChild(option35);
newDropdown.appendChild(option36);
newDropdown.appendChild(option37);
newDropdown.appendChild(option38);
newDropdown.appendChild(option39);
newDropdown.appendChild(option40);
newDropdown.appendChild(option41);



    // Append the new dropdown to the container
    dropdownContainer.appendChild(label);
    container.appendChild(newDropdown);
    container.appendChild(lineBreak);
    container.appendChild(heading);
    dropdownContainer.appendChild(newinput);
    container.appendChild(horizontalRule);
}

function receipt() {
    const QtyContent = document.getElementById('Qty');
    const DescContent = document.getElementById('Desc');
    const pricelist = document.getElementById('pricelist');
    const totalprice = document.getElementById('totalprice');

    // Clear previous content in the receipt sections
    QtyContent.innerHTML = '';
    DescContent.innerHTML = '';
    pricelist.innerHTML = '';
    totalprice.innerHTML = '';

    // Get all rows from the table and calculate the total per row
    const rows = document.querySelectorAll('#ProductTable tbody tr');
    
    let grandTotal = 0; // Initialize the grand total to 0

    // Loop through each row to collect product details, amount, and calculate total price
    rows.forEach(function(row) {
        const productType = row.querySelector('td:nth-child(1)').textContent; // Product name from first column
        const productSize = row.querySelector('td:nth-child(2)').textContent; // Product size from second column

        // Combine product name and size for the description
        const ProductName = `${productType} (${productSize})`; // Combined product name and size
        const price = parseFloat(row.querySelector('.price').textContent); // Price of the product
        const amount = row.querySelector('.amount-input').value || 0; // Amount from input field (default to 0 if empty)

        // Calculate the total price for this product (price * amount)
        const total = price * amount;

        // If valid data exists, append it to the receipt
        if (ProductName && amount && total > 0) {
            // Append the product name to the Desc section
            const productItem = document.createElement('h1');
            productItem.classList.add('product-item');
            productItem.innerHTML = `${ProductName}`;
            DescContent.appendChild(productItem);

            // Append the amount to the Qty section
            const amountItem = document.createElement('h1');
            amountItem.classList.add('amount-item');
            amountItem.innerHTML = `${amount}`;
            QtyContent.appendChild(amountItem);

            // Append the price * amount to the pricelist section
            const priceItem = document.createElement('h1');
            priceItem.classList.add('price-item');
            priceItem.innerHTML = `£${total.toFixed(2)}`;
            pricelist.appendChild(priceItem);

            // Add the current total to the grand total
            grandTotal += total;
        }
    });

    // After appending all items, update the grand total display
    const grandTotalElement = document.createElement('strong');
    grandTotalElement.innerHTML = `Grand Total: £${grandTotal.toFixed(2)}`;
    totalprice.appendChild(grandTotalElement); // Append grand total to the totalprice section

    let paytype = document.getElementById("cash/card").value;

    let pay_out = document.getElementById("cash/card_output");

    pay_out.innerHTML = "Paid with: "+ paytype

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;

    let today = document.getElementById("today");

    today.innerHTML = "Date: "+ formattedDate
}


function printReceipt() {
    const receiptContent = document.getElementById('receiptContainer');  // Get the receipt content
    const printWindow = window.open('', '', 'height=500,width=800');  // Open a new window

    printWindow.document.write('<html><head><title>Receipt</title></head><body>'); // Write the HTML head

    const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
    stylesheets.forEach((stylesheet) => {
    printWindow.document.write(stylesheet.outerHTML);  // Append each stylesheet
});


    // Copy the content from the receipt container and append it to the print window
    printWindow.document.write(receiptContent.innerHTML);

    printWindow.document.write('</body></html>');
    printWindow.document.close();  // Close the document to finish writing
    printWindow.print();  // Trigger the print dialog
}