import mongoose from 'mongoose';
import Product from '../models/product'; 
import productsData from '../../../client/public/data/products.json'; 
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('A variável MONGO_URI não está definida no arquivo .env');
  process.exit(1);
}

const products = productsData.products;

mongoose.connect(mongoUri)
  .then(async () => {
    try {
      await Product.insertMany(products);
      console.log('Produtos inseridos com sucesso!');
      mongoose.connection.close();
    } catch (error) {
      console.error('Erro ao inserir produtos:', error);
    }
  })
  .catch(error => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });
