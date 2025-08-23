// Booking Form Handler
const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    service: form.service.value,
    date: form.date.value,
    message: form.message.value.trim()
  };

  try {
    // Kirim ke backend
    const response = await fetch("https://be-antokspet.vercel.app/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Gagal menyimpan booking ke server");
    }

    // Redirect ke WhatsApp
    const phoneNumber = "6281231666758";
    const waText = `Halo Antok Spet,%0ASaya *${data.name}* ingin booking jasa *${data.service}* pada tanggal *${data.date}*.%0A*No HP: ${data.phone}*%0A*Pesan:* ${data.message || "-"}%0A%0ATerima kasih 🙏`;
    
    window.location.href = `https://wa.me/${phoneNumber}?text=${waText}`;
  } catch (err) {
    console.error(err);
    alert("Booking gagal, coba lagi.");
  }
});


// Toggle Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  } else {
    console.error("❌ Hamburger or navList not found in DOM");
  }
});
