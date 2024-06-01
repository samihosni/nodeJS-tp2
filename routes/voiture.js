const express = require('express');
const router = express.Router();
let voitures =[
    {id:1 , name :"clio"},
    {id:2 , name :"megane"},
    {id:3 , name :"range"}

];



// ajouter une voiture 
router.post('/addVoiture', (req, res) => {
    const nouvelleVoiture = req.body;
    voitures.push(nouvelleVoiture);
    res.status(201).json(nouvelleVoiture);
});

// lister tous les voitures
router.get('/list', (req, res)=> {
    res.json(voitures)
});

// lister une voiture selon l'id passé en parametre

router.get('/voitures/:id', (req, res) => {
const voitureId= parseInt(req.params.id);
const voiture=voitures.find(v=> v.id ===voitureId);
    if(voiture) {
        res.json(voiture);
    }else{
        res.status(404).send("Voiture NOT FOUND !")
    }
});

// update voiture with id 
router.put('/update/:id', (req, res)=>{
    const voitureId=parseInt(req.params.id);
    const voitureUp=voitures.findIndex(v=> v.id ==voitureId);
    if(voitureUp !== -1){
        const updatedVoiture={... voitures[voitureUp], ...req.body};
        voitures[voitureUp]=updatedVoiture;
        res.send(updatedVoiture);
    }else{
        res.status(404).send("Voiture NOT FOUND !")
        
    }
});

// delete voiture with id 

router.delete('/delete/:id',(req, res)=>{
    const voitureId=parseInt(req.params.id);
    const voitureDeleted=voitures.findIndex(v => v.id === voitureId);
    if (voitureDeleted !== -1) {
        const delVoiture = voitures.splice(voitureDeleted, 1);
        res.send(delVoiture);
    }else{
        res.status(404).send(" Voiture NOT FOUND !");
    }
});

module.exports=router;