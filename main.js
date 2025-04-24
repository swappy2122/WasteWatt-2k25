document.getElementById('disposal-request-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const materials = Array.from(document.querySelectorAll('input[name="materials"]:checked')).map(cb => cb.value);

  const formData = {
    company: document.getElementById('company').value,
    contactPerson: document.getElementById('contactPerson').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    serviceType: document.getElementById('serviceType').value,
    address: document.getElementById('address').value,
    materials,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    notes: document.getElementById('notes').value
  };

  fetch('/api/disposal-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById('reference-number').textContent = data.referenceNumber;
      document.getElementById('confirmation-modal').style.display = 'block';
      this.reset();
    } else {
      alert('❌ Error: ' + data.message);
    }
  })
  .catch(err => {
    console.error(err);
    alert('❌ An error occurred. Please try again later.');
  });
});

document.querySelector('.close-modal')?.addEventListener('click', () => {
  document.getElementById('confirmation-modal').style.display = 'none';
});
