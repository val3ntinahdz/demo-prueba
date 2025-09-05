async function enviarDinero() {
  console.log("💸 Enviando $50 USD a María...");
  
  // Simulación de Open Payments
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log("✅ ¡Pago enviado!");
}

enviarDinero();