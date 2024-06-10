const Course = require('../models/Course')


class MeController {



    //[GET] /search
    storedCourses(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('me/stored-courses', { courses }))
            .catch(next);

    }


}
module.exports = new MeController;

