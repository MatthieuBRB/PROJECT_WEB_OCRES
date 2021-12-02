exports.findOne=(req,res) =>{
    LieuxFilms.findById(req.params.id)
    .then(lieuxFilms =>{
        if(!lieuxFilms){
            return res.status(404).send({message: 'LieuxFilms non trouvé avec id'+req.params.id});

        }
        res.send(lieuxFilms);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: 'LieuxFilms non trouvé avec id'+ req.params.id
            });
        }
        return res.status(500).send({message:'Error retrieving LieuxFilms avec id'+ req.params.id});
    });
};