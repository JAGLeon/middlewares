let usersAdmin = ['Ada','Greta', 'Vim', 'Tim']


function admin(req,res,next){
    if (usersAdmin.includes(req.query.user)) {
        next();
    } else {
        res.send('No pasas de acá pichon!');
    }
}

module.exports = admin;