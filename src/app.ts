import dotenv from 'dotenv'
import axios from 'axios'
import { Telegraf, Telegram } from 'telegraf'
import { EquipmentsStore } from './model/response.model';

dotenv.config();

const endpoint = 'https://servicos-nos.nos.pt/api/EquipmentsStore/GetStoreEquipments?query={"Campaign":"CAMPAIGN_00695","Brand":"67","ProductType":"telemoveis"}'

const bot = new Telegram(process.env.TELEGRAM_API_KEY)

async function callApi () {
  const res = await axios.get(endpoint);

  const product = (res.data as EquipmentsStore).Data.Products.filter( p => (p.Title.includes('10T') && !p.Title.includes('Lite')));
  product.length > 0 ? bot.sendMessage(process.env.TELEGRAM_USER_ID,"Xiaomi MI 10T já está disponível.") : console.log("Ainda não há nada...");
}

function callApiEveryNSeconds(n) {
  setInterval(callApi, n * 1000);
}

callApi()
callApiEveryNSeconds(1800);



// Enable graceful stop
process.once('SIGINT', () => bot.close())
process.once('SIGTERM', () => bot.close())

