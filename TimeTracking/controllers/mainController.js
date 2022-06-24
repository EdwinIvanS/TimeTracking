const data = require("../database/data");

const controladorMain = {

    index : function(req, res){
        console.log(data);
        res.render('index');
    }
}

module.exports = controladorMain;