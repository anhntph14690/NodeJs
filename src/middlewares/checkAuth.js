import expressJWT from 'express-jwt';

export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        console.log('Chim cút');
    }
}

export const requiredSigin = expressJWT({
    algorithms: ['HS256'],// thuật toán mã hoá
    secret: '123456', //nhận về secret là mk cố định
    requestProperty: "auth" // req.auth
});

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id; //kiểm tra profile và auth có khớp hay k
    if (!status) { //còn k ngược lại
        res.status(401).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next();// khớp thực hiện bước tiếp
}
export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) { //check role
        res.status(401).json({
            message: "Bạn không phải là admin. Chim cút"
        })
    }
    next();
}