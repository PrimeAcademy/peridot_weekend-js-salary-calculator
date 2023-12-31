console.log("Hello World!")

// Submit function that will colect our input into variables.
// Calculate monthly cost
// Append new employee to the DOM
// Clear the inputs
// If monthly cost is > $20,000 make background of footer red.
// Delete button that removes employee from the DOM, does not need to affect the total monthly.

let totalAnnualSalary = 0

function submitHandler(event) {
    event.preventDefault()
    console.log("inside of submitHandler()")

    // ! Grab data from the input fields
    const firstName = document.getElementById("firstNameInput").value
    const lastName = document.getElementById("lastNameInput").value
    const id = document.getElementById("idInput").value
    const title = document.getElementById("titleInput").value
    const annualSalary = document.getElementById("annualSalaryInput").value

    // ! Add new employee annual salary to the totalAnnualSalary
    totalAnnualSalary += Number(annualSalary)
    console.log("Total Annual Salary:", totalAnnualSalary)

    // Create selector for employee data
    const employeeData = document.getElementById("employeeData")

    // ! Add new employee row at the end of the tbody
    employeeData.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>#${id}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
            <td><button onClick="deleteHandler(event)">DELETE 🗑️</button></td>
        </tr>
    `

    // ! Calculate Total Monthly Salary
    const totalMonthlyNumber = document.getElementById("totalMonthlyNumber")
    const totalMonthlySalary = totalAnnualSalary / 12
    console.log("Total Monthly:", totalMonthlySalary)

    // ! Replaceing the total salary on the DOM with the updated number.
    totalMonthlyNumber.textContent = totalMonthlySalary

    // Select monthlyTotal
    let monthlyTotalFooter = document.getElementById("monthlyTotalFooter")
    
    console.log("MonthlyTotalFooter: ", monthlyTotalFooter)
    
    // ! If the total monthly is greater than 20,000 then make the background red
        // * Check the CSS file to understand what these classes represent
    console.log("totalMonthlyNumber: ", totalMonthlyNumber)

    if (Number(totalMonthlySalary) > 20000) {
        console.log("Total Monthly Above 20k")
        monthlyTotalFooter.classList.replace("basicTotalBG", "alertTotalBG")
    }
    
    // ! Clear the input fields.
    document.getElementById("firstNameInput").value = ''
    document.getElementById("lastNameInput").value = ''
    document.getElementById("idInput").value = ''
    document.getElementById("titleInput").value = ''
    document.getElementById("annualSalaryInput").value = ''
}


// Will handle deleting of rows on the employeeData table.
function deleteHandler(event) {
    // ! This will delete the closet <tr> parent node, which is the row that the button exists on for the employee.
    event.target.closest('tr').remove()
}