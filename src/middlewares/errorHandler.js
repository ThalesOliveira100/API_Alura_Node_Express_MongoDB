import mongoose from "mongoose";
import ErroBase from "../errs/ErroBase.js";
import RequisicaoIncorreta from "../errs/RequisicaoIncorreta.js";
import ErroValidacao from "../errs/ErroValidacao.js";
import NotFound from "../errs/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    console.log(err);

    if (err instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);

    } else if(err instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(err).enviarResposta(res);
        
    } else if(err instanceof NotFound) {
        err.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    };
};

export default errorHandler;