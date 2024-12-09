import { Router } from "express" // desestruturando, recebendo apenas Router contido em express

const routes = new Router() // routes recebe a funcao Router contida no express

routes.get('/', (req, res)=>{
    return res.json({message: "rota acessada"})
})

export default routes //exportando para ser acessado pelo app na linha 2 do app