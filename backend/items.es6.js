import express from 'express';
import db from './db.es6.js';

let itemsRouter = express.Router();

itemsRouter.get("/",
  (req, res, next) => {
    db.items.find({}).sort({ createdAt: 1 }).exec((err, docs) => {
      res.json({items: docs});
    });
  }
)

itemsRouter.get("/:id",
  (req, res, next) => {
    db.items.find({_id: req.params.id}, (err, docs) => {
      res.json({item: docs ? docs[0] : {}});
    });
  }
)

itemsRouter.post("/",
  (req, res, next) => {
    let item = Object.assign({name: "", description: "", type_id: null}, req.body.item);
    db.items.insert(item, (err, doc)=>{
      if(err !== null) {
        res.status(422).json({item: item, errors: [err]});
      }
      else {
        res.json({item: doc});
      }
    })
  }
)

itemsRouter.put("/:id",
  (req, res, next) => {
    let item = Object.assign({name: "", description: "", type_id: null}, req.body.item);
    db.items.update({_id: req.params.id}, item, {}, (err, num, doc)=>{      
      if(err !== null) {
        res.status(422).json({item: item, errors: [err]});
      }
      else {
        db.items.find({_id: req.params.id}, (err, docs) => {
          res.json({item: docs ? docs[0] : {}});
        });
      }
    })
  }
)

itemsRouter.delete("/:id",
  (req, res, next) => {
    let item = Object.assign({name: "", description: "", type_id: null}, req.body.item);
    db.items.remove({_id: req.params.id}, {}, (err, num, doc)=>{
      if(err !== null) {
        res.status(422).json({item: item, errors: [err]});
      }
      else {
        res.status(200).json({item: {_id: item._id}})
      }
    })
  }
)

export default itemsRouter;
