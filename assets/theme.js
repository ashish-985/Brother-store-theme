document.addEventListener('DOMContentLoaded', function () {
  const variantSelect = document.querySelector('[data-variant-select]');
  if (variantSelect) {
    variantSelect.addEventListener('change', function () {
      const url = new URL(window.location.href);
      url.searchParams.set('variant', this.value);
      window.history.replaceState({}, '', url);
    });
  }
});