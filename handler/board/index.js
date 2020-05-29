'use strict';

module.exports.list = (req,res) => {
    res.status(200).json({
        method: '목록조회'
    });
}