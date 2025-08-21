import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    console.log(err);

    if (err instanceof mongoose.Error.CastError) {
        res.status(400).json({message: "Um ou mais dados fornecidos estão incorretos."});
    } else if(err instanceof mongoose.Error.ValidationError) {
        const mensagensErro = Object.values(err.errors)
            .map(err => err.message)
            .join("; ");

        res.status(400).json({message: `Os seguintes erros foram encontrados: ${mensagensErro}`});
    } else {
        res.status(500).json({ message: "Erro  interno do servidor."});
    };
};

export default errorHandler;