const connection = require('./../connection');
var md5 = require('md5');
var ReverseMd5 = require('reverse-md5')
exports.createuser = function(req,res){

    var sql = "INSERT INTO users(firstname, lastname, email, password) VALUES(?, ?, ?, ?)"
    var values =[req.body.firstname, req.body.lastname, req.body.email, md5(req.body.password)]
    connection.query(sql,values,function(err, result){
        if(err){
            res.json({error:err});
        }
        res.json({massage:"data saved successfully",status:200})


    })
}
exports.getuser = function(req,res){

    var sql = "SELECT * FROM users ORDER BY firstname";
    connection.query(sql,function(err, result){
        if(err){
            res.json({error:err});
        }
        res.json({massage:"data received successfully",status:200,user:result})


    })
}
exports.updateuser = function(req,res){
    var sql = "UPDATE users set firstname = ?, lastname = ?, email = ?, password = ? WHERE id = ?";
    var values = [req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.params.id]

    connection.query(sql,values,function(err, result){
        if(err){
            res.json({error:err});
        }
        res.json({massage:"data updated successfully",status:200})


    })
}
exports.deleteuser = function(req,res){
    var sql = "DELETE FROM users WHERE id = ?";
    var values = [req.params.id]

    connection.query(sql,values,function(err, result){
        if(err){
            res.json({error:err});
        }
        res.json({massage:"data deleted successfully",status:200})


    })
}
exports.getbyiduser = function(req,res){
    var sql = "SELECT * FROM users WHERE id = ?";
    var values = [req.params.id]

    connection.query(sql,values,function(err, result){
        if(err){
            res.json({error:err});
        }
        res.json({massage:"data received successfully",user:result, status:200})


    })
}
