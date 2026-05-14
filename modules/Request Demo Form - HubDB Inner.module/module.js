  $(function () {
    window.addEventListener("message", function (event) {
      if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
        console.log("Form submitted event data:", event.data);

        const submissionValues = event.data.data.submissionValues;

        // Extract the email from submissionValues
        if (submissionValues && submissionValues.email) {
          const email = submissionValues.email;
          localStorage.setItem("submitted_email", email);
          console.log("Email saved to localStorage:", email);
        } else {
          console.warn("Email not found in submissionValues.");
        }
      }
    });
  });