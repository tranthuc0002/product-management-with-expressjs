const logFeature = (req, res, next) => {
    console.log("Đây là tính năng lấy danh sách product");
    next();// chạy xuống middleware tiếp theo
};

module.exports = {
    logFeature,
}