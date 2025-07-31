
const translations = {
  en: {
    shopSmart: "Shop Smart",
    search: "Shop New & Used",
    compare: "Compare Vehicles",
    recalls: "Recall Check",
    trade: "Trade-In Estimator",
    report: "Smart Buyer™ Report",
    value: "Cars That Hold Value",
    avoid: "Cars to Avoid",
    deals: "Local Deals"
  },
  es: {
    shopSmart: "Compra Inteligente",
    search: "Buscar Autos Nuevos y Usados",
    compare: "Comparar Vehículos",
    recalls: "Verificar Llamados a Revisión",
    trade: "Estimador de Intercambio",
    report: "Informe Smart Buyer™",
    value: "Autos con Buen Valor",
    avoid: "Autos a Evitar",
    deals: "Ofertas Locales"
  }
};

document.getElementById("language-toggle").addEventListener("change", function () {
  const lang = this.value;

  document.getElementById("shopSmartBtn").textContent = translations[lang].shopSmart;
  document.getElementById("menu-search").textContent = translations[lang].search;
  document.getElementById("menu-compare").textContent = translations[lang].compare;
  document.getElementById("menu-recalls").textContent = translations[lang].recalls;
  document.getElementById("menu-trade").textContent = translations[lang].trade;
  document.getElementById("menu-report").textContent = translations[lang].report;
  document.getElementById("menu-value").textContent = translations[lang].value;
  document.getElementById("menu-avoid").textContent = translations[lang].avoid;
  document.getElementById("menu-deals").textContent = translations[lang].deals;
});
