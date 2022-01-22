const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                  <img style={{width: "80%"}} src="/images/moleconpollo.jpg" alt="Mole with Chicken and Rice!" />
                  <div>
                    Photo from <a href="https://www.cardamomo.news/comida/Enmoladas-de-pollo-con-mole-Dona-Maria-y-arroz-receta-facil-20210130-0004.html">Cardamomo.com</a>
                  </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home