# Anthropic 

Test harness to evaluate Anthropic claude on a variety of test cases.

```bash
npm start
```

## outputs

```bash
Running task: TASK: lorem ipsum text
 COMPONENT_SCAFFOLD:
~~~
TEXT(lorem ipsum text,loremIpsumText)
~~~

Running task: TASK: tesla order form
 COMPONENT_SCAFFOLD:
~~~
*FORM(a form for users to order a Tesla vehicle,teslaOrderForm)
**TEXT(says design your tesla,formTitle)
**CONTAINER(holds vehicle options,vehicleOptions)
***DROPDOWN[Model S, Model X, Model 3, Model Y](for selecting vehicle model,vehicleModelDropdown)
***DROPDOWN[Long Range, Performance](for selecting vehicle trim,vehicleTrimDropdown)
***DROPDOWN[White, Black, Red, Blue, Silver](for selecting vehicle color,vehicleColorDropdown)
***CHECKBOX(adds full self driving capability,fullSelfDrivingCheckbox)
**CONTAINER(holds customer info,customerInfo)
***INPUT(says Enter your first name,firstNameInput)
***INPUT(says Enter your last name,lastNameInput)
***INPUT(says Enter your email,emailInput)
***INPUT(says Enter your phone number,phoneNumberInput)
***INPUT(says Enter your address,addressInput)
**BUTTON(says Place your order,submitOrderButton)
**TEXT(terms of service text,tosText)
~~~

Running task: TASK: employee expense management form
 COMPONENT_SCAFFOLD:
~~~
*FORM(a form for employees to submit expense reports,expenseReportForm)
**TEXT(says Expense Report,formTitle)
**TEXT(says Please fill out the following expense report.,formDescription)
**INPUT(says Employee Name,employeeNameInput)
**INPUT(says Employee ID,employeeIdInput)
**INPUT(says Expense Date,expenseDateInput)
**DROPDOWN[Travel, Meals, Office Supplies, Other](for selecting expense category,expenseCategoryDropdown)
**INPUT(says Expense Amount,expenseAmountInput)
**INPUT(says Description of Expense,expenseDescriptionInput)
**FILE_INPUT(for uploading receipt image,receiptFileInput)
**BUTTON(says Submit Report,submitButton)
~~~

Running task: TASK: 5 buttons with different colors
 COMPONENT_SCAFFOLD:
~~~
CONTAINER(holds 5 colored buttons,buttonContainer)
*BUTTON(red button,redButton)
*BUTTON(blue button,blueButton)
*BUTTON(yellow button,yellowButton)
*BUTTON(green button,greenButton)
*BUTTON(purple button,purpleButton)
~~~

Running task: TASK: employee onboarding checklist
 COMPONENT_SCAFFOLD:
~~~
*CONTAINER(a container for the onboarding checklist,onboardingChecklist)
**TEXT(says Employee Onboarding Checklist,checklistTitle)
**DATA_TABLE(a table showing the onboarding tasks and status,onboardingTable)
***CONTAINER(a container for the table header,tableHeader)
****TEXT(says Task,taskHeader)
****TEXT(says Status,statusHeader)
***CONTAINER(a container for the first row,firstRow)
****TEXT(says Complete employee information form,firstTask)
****CHECKBOX(to show task is complete,firstTaskCheckbox)
***CONTAINER(a container for the second row,secondRow)
****TEXT(says Review employee handbook,secondTask)
****CHECKBOX(to show task is complete,secondTaskCheckbox)
***CONTAINER(a container for the third row,thirdRow)
****TEXT(says Complete necessary training,thirdTask)
****CHECKBOX(to show task is complete,thirdTaskCheckbox)
***CONTAINER(a container for the fourth row,fourthRow)
****TEXT(says Meet with manager,fourthTask)
****CHECKBOX(to show task is complete,fourthTaskCheckbox)
~~~
```