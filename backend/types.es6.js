import express from 'express';
import db from './db.es6.js';

let typesRouter = express.Router();

typesRouter.get("/",
  (req, res, next) => {
    db.types.find({}, (err, docs) => {
      res.json({types: docs});
    });
  }
)

typesRouter.get("/:id",
  (req, res, next) => {
    db.types.find({_id: req.params.id}, (err, docs) => {
      res.json({type: docs ? docs[0] : {}});
    });
  }
)

typesRouter.post("/",
  (req, res, next) => {
    let type = Object.assign({name: ""}, req.body.type);
    db.types.insert(type, (err, doc)=>{
      if(err !== null) {
        res.status(422).json({type: type, errors: [err]});
      }
      else {
        res.json({type: doc});
      }
    })
  }
)

typesRouter.put("/:id",
  (req, res, next) => {
    let type = Object.assign({name: ""}, req.body.type);
    db.types.update({_id: req.params.id}, type, {}, (err, num, doc)=>{
      console.log(num);
      if(err !== null) {
        res.status(422).json({type: type, errors: [err]});
      }
      else {
        db.types.find({_id: req.params.id}, (err, docs) => {
          res.json({type: docs ? docs[0] : {}});
        });
      }
    })
  }
)

typesRouter.delete("/:id",
  (req, res, next) => {
    let type = Object.assign({name: ""}, req.body.type);
    db.types.remove({_id: req.params.id}, {}, (err, num, doc)=>{
      console.log(num);
      if(err !== null) {
        res.status(422).json({type: type, errors: [err]});
      }
      else {
        res.status(200).json({type: {_id: type._id}})
      }
    })
  }
)

export default typesRouter;
