const form = document.querySelector('.search-bar');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const condition = document.getElementById('condition').value;
  const make = document.getElementById('make').value.trim();
  const model = document.getElementById('model').value.trim();
  const zip = document.getElementById('zip').value.trim();
  if (!make || !model || !zip) return;
  // Redirect to search results (adjust URL as needed)
  window.location.href = `/search?condition=${condition}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&zip=${encodeURIComponent(zip)}`;
});
