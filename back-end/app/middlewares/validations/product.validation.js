const checkEmpty = (req,res,next) => {
    const {name, amount, price, sale} = req.body;
    if(name && amount && price && sale){
        next();
    }else{
        res.status(500).send("Không được để trống name, amount, price, sale");
    }
};

const checkNegative = (req,res,next) => {
    const { amount, price} = req.body;
    if(amount >=0 && price >=0){
        next();
    }else{
        res.status(500).send("amount, price không thể là số âm");
    }
}

module.exports = {
    checkEmpty,
    checkNegative,
};