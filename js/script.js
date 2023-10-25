// GLOBAL VAR
let id
let name
let ext
let email
let department
let form

// HELPER FUNCTION
const $ = (id) => document.getElementById(id)

form = $('form')
id = $("id")
name = $("name")
ext= $("ext")
email = $("email")
department = $("department")

form.addEventListener('submit',()=>{
    event.preventDefault()
    console.log(`ID: ${id.value}`)
    console.log(`Name: ${name.value}`)
    console.log(`Extension: ${ext.value}`)
    console.log(`Email: ${email.value}`)
    console.log(`Department: ${department.value}`)
})