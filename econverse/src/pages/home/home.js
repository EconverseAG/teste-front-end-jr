import React from "react";
import Header from "../layouts/header";

function Home(props) {
    const { list } = props;
    return (
        <div>
            {<Header />}
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <p class="lead">Venha conhecer nossas</p>
                    <p class="lead">promoções</p>
                    <p class="lead">50% off nos produtos</p>
                    <div>
                        <button>Ver produto</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;