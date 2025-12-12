document
  .getElementById("appointmentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      age: Number(formData.get("age")),
    };

    await fetch("/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Appointment submitted!");
    location.reload();
  });
