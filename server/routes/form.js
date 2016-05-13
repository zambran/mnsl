var jwt = require('jwt-simple');
var form={
  create : function(req,res){
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    var decoded = jwt.decode(token, require('../config/secret.js')());
    id=decoded.mailad;
    var mailform = id;
    var numdiplome = req.body.numdiplome || '';
    var datedebformation = req.body.datedebformation || '';
    var datefinformation = req.body.datefinformation || '';
    var typeformation = req.body.typeformation || '';
    var nbplace = req.body.nbplace || '';
    console.log(req.body);
     var data = {text: req.body.text, complete: false};

    if (numdiplome == '' || datedebformation == '' || typeformation == '') {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid credentials"
        });
        return;
    }
      var stringQuery = "INSERT INTO formation(mailform, numdiplome, datedebformation,datefinformation,typeformation,nbparticipant,nbplace) values('"+mailform+"','"+numdiplome+"','"+datedebformation+"','"+datefinformation+"','"+typeformation+"','0','"+nbplace+"')";
      client.query(stringQuery);
      res.status(200);
      res.json({
        "status" : 200,
        "message" : "succes to insert formation"
      })
      return;
  },
  addPart : function(req,res){
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    var decoded = jwt.decode(token, require('../config/secret.js')());
    id=decoded.mailad;
    var mailform = id;
    var numformation = req.body.numFormation || '';
     var data = {text: req.body.text, complete: false};
    if (numformation == '') {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid credentials"
        });
        return;
    }

      var stringQuery = "INSERT INTO participer_form VALUES ('"+numformation+"','"+id+"')";
            client.query(stringQuery,function(err,result){
              if(err==undefined){
                res.status(200);
                res.json({
                  "status" : 200,
                  "message" : "succes to insert participer_form"
                })
              }else{
                res.status(500);
                res.json({
                  "status" : 500,
                  "message" : "failed to insert participer_form"
                })
              }
            });
      return;
  },
  getAll: function(req, res) {
    var stringQuery = "SELECT * FROM formation f, diplome d WHERE d.numdiplome=f.numdiplome";
    var query=client.query(stringQuery,function(err,result){
       res.send(result);
    });

    return;
  },
}
module.exports = form;
