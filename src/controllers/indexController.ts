class IndexController{
    get(req, res){
        res.send( { versao: '0.0.1' } )
    }
}

export default new IndexController();