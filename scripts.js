function showForm(formId) {
    // Hide all forms
    var forms = document.querySelectorAll('.form-container');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });

    // Show the selected form
    document.getElementById(formId).style.display = 'block';
}
