const connection = require('../connection');


exports.createcustomers = function(req,res){
    var sql = "INSERT INTO customers(customername, contactname, address, city, postalcode, country) VALUES(?, ?, ?, ?, ?, ?)"; 
    var values =[req.body.customername, req.body.contactname, req.body.address, req.body.city, req.body.postalcode, req.body.country]
    connection.query(sql,values,function(error,result){
        if(error){
            res.json({error:error,status:404,message:'Something went wrong'})
        }
        res.json({message:'Customer added successfully',status:200,customer:result})

    })
}

exports.getcustomers = function(req,res){
    var sql = "SELECT * FROM customers ORDER BY id DESC"; 
    connection.query(sql,function(error,result){
        if(error){
            res.json({error:error,status:404,message:'Something went wrong'})
        }
        res.json({message:'Customer listing',status:200,customer:result})

    })
}
exports.updatecustomers = function(req,res){
    var sql = "UPDATE customers SET customername = ?, contactname =?, address=?, city=?, postalcode=?, country=? WHERE id=?"; 
    var values =[req.body.customername, req.body.contactname, req.body.address, req.body.city, req.body.postalcode, req.body.country,req.params.id]
    connection.query(sql,values,function(error,result){
        if(error){
            res.json({error:error,status:404,message:'Something went wrong'})
        }
        res.json({message:'Customer updated successfully',status:200,customer:result})

    })
}
exports.getcustomersbyid = function(req,res){
    var sql = "SELECT * FROM customers WHERE id=?"; 
    var values =[req.params.id]
    connection.query(sql,values,function(error,result){
        if(error){
            res.json({error:error,status:404,message:'Something went wrong'})
        }
        res.json({message:'Get customer by id',status:200,customer:result})

    })
}
