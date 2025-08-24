const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("✅ Thank you! Your message has been sent.");
    form.reset();
  } else {
    alert("❌ Oops! Something went wrong. Please try again.");
  }
});
