const Course = require('../models/Course')


class SiteController {


    //[Get] /
    index(req, res) {
        Course.find({}).lean()
            .then(courses => {
                // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
                // Render Json
                //res.json(courses);
                res.render('home', { courses });
            })
            .catch(err => {
                // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });


        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search')
    }


}
module.exports = new SiteController;

