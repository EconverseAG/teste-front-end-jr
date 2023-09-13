import tech from '../assets/tech.svg'
import supermarket from '../assets/supermarket.svg'
import whiskey from '../assets/whiskey.svg'
import tools from '../assets/tools.svg'
import health from '../assets/health.svg'
import running from '../assets/running.svg'
import fashion from '../assets/fashion.svg'

const categories = [
    {
      isFirstCategory: true,
      urlImage: tech,
      name: 'Tecnologia',
      id: 1
    },
    {
      isFirstCategory: false,
      urlImage: supermarket,
      name: 'Supermercado',
      id: 2
    },
    {
      isFirstCategory: false,
      urlImage: whiskey,
      name: 'Bebidas',
      id: 3
    },
    {
      isFirstCategory: false,
      urlImage: tools,
      name: 'Ferramentas',
      id: 4
    },
    {
      isFirstCategory: false,
      urlImage: health,
      name: 'Saúde',
      id: 5
    },
    {
      isFirstCategory: false,
      urlImage: running,
      name: 'Esportes e Fitness',
      id: 6
    },
    {
      isFirstCategory: false,
      urlImage: fashion,
      name: 'Moda',
      id: 7
    },
  
  ]
  
  
  export default categories