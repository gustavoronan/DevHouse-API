const {Router} = require('express') // desestruturando, recebendo apenas Router contido em express

const routes = new Router() // routes recebe a funcao Router contida no express

routes.get('/', (req, res)=>{
    return res.json({message: "rota acessada"})
})

module.exports = routes //exportando para ser acessado pelo app na linha 2 do app