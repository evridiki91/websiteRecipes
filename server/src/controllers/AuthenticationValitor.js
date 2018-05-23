const Joi = require('joi')

module.exports = {
    register (req, res, next){
        const schema = {
            name: Joi.string().min(2).max(32),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body,schema)
        if (error){
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'You must provide a valid password'
                    })
                    break
                case 'name':
                    res.status(400).send({
                        error: 'You must provide a valid name'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Please provide valid registration information '
                    })
            }
        }
        else {
            next()
        }
    }
}