import React from 'react';

import 'styles/components/cards.sass'

import Card from './Card';

import { ReactComponent as tecnologia } from 'images/Cards/Dispositivos.svg'
import { ReactComponent as bebidas } from 'images/Cards/Bebida.svg'
import { ReactComponent as corrida } from 'images/Cards/Corrida.svg'
import { ReactComponent as saude } from 'images/Cards/Cuidados-de-saude.svg'
import { ReactComponent as ferramentas } from 'images/Cards/Ferramentas.svg'
import { ReactComponent as moda } from 'images/Cards/Moda.svg'
import { ReactComponent as supermercado } from 'images/Cards/Supermercado.svg'

const Cards: React.FC = () => {
    return (
        <section className='cards-services'>
            <Card link='/' svg={tecnologia}>Tecnologia</Card>
            <Card link='/' svg={supermercado}>Supermercado</Card>
            <Card link='/' svg={bebidas}>Bebidas</Card>
            <Card link='/' svg={ferramentas}>Ferramentas</Card>
            <Card link='/' svg={saude}>Saúde</Card>
            <Card link='/' svg={corrida}>Esportes e Fitness</Card>
            <Card link='/' svg={moda}>Moda</Card>
        </section>
    )
}

export default Cards;
