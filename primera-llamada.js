import dotenv from 'dotenv';
import { createUnauthenticatedClient } from '@interledger/open-payments';

dotenv.config();

async function verBilletera() {
    console.log("Buscando información de la billetera...");
    
    const client = await createUnauthenticatedClient({
        walletAddressUrl: process.env.WALLET_ADDRESS
    });
    
    const billetera = await client.walletAddress.get({
        url: process.env.WALLET_ADDRESS
    });
    
    console.log("¡Encontrada!");
    console.log("Moneda:", billetera.assetCode);
    console.log("ID:", billetera.id);
}

verBilletera();