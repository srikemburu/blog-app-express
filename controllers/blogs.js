const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs.js');

// find all documents
// executes, passing results to callback

// router.get("/", (req,res) => {
//     res.send('Awesome MERN BLOG')
// })

router.get('/', (req, res)=>{
    Blogs.find({}, (err, foundBlogs)=>{
        res.json(foundBlogs);
    });
});

router.get('/:id', (req,res) => {
    Blogs.findById(req.params.id, (err,foundBlog)=> {
        res.json(foundBlog)
    })
})

router.delete('/:id', (req,res) => {
    Blogs.findByIdAndRemove(req.params.id, (err,deletedBlog) => {
        res.json(deletedBlog)
    })
})

router.post('/', (req,res) => {
    Blogs.create(req.body, (err, createdBlog) => {
        res.json(createdBlog)
    })
})

router.put('/:id', (req,res) => {
    Blogs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedBlog) => {
        res.json(updatedBlog)
    })
})

module.exports = router;