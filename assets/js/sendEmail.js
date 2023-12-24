function sendMail(contactForm) {
    emailjs.send("service_6qwgais", "template_u37u7lm", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        }, "VQpj7lrNCJAybdUjf")
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}