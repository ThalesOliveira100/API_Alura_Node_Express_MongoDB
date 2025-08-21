import NotFound from "../errs/NotFound.js";
import livros from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res, next) {
        try {
            const listaLivros = await livros.find()
                .populate("autor")
                .exec();

            if (listaLivros.length !== 0) {
                res.status(200).json(listaLivros);
            } else {
                next(new NotFound("Nenhum livro foi encontrado."));
            };            
        } catch (err) {
            next(err);
        };
    };

    static async listaLivroPorId (req, res, next) {
        try {
            const livroEncontrado = await livros.findById(req.params.id)
                .populate("autor", "nome")
                .exec();
            
            if (livroEncontrado !== null) {
                res.status(200).json(livroEncontrado);
            } else {
                next(new NotFound("Id do Livro não encontrado."));
            };
        } catch (err) {
            next(err);
        };
    };

    static async cadastrarLivro(req, res, next) {
        try {
            let livro = new livros(req.body);
            const livroResultado = await livro.save();

            res.status(201).send(livroResultado.toJSON());
            
        } catch (err) {
            next(err);
        };
    };

    static async atualizarLivro (req, res, next) {
        try {
            const id = req.params.id;
            
            if (await livros.findByIdAndUpdate(id, {$set: req.body}) !== null) {
                res.status(200).json({ message: "Livro atualizado"});
            } else {
                next(new NotFound("Id do Livro não encontrado."));
            };
        } catch (err) {
            next(err);
        };
    };

    static async excluirLivro (req, res, next) {
        try {
            if (await livros.findByIdAndDelete(req.params.id) !== null) {
                res.status(200).json({ message: "Livro removido com sucesso."})
            } else {
                next(new NotFound("Id do Livro não encontrado."));
            };
        } catch (err) {
            next(err);
        };
    };

    static async listarLivrosPorEditora (req, res, next) {
        try {
            const editora = req.query.editora;
            const livrosPorEditora = await livros.find({"editora": editora });

            if (livrosPorEditora.length !== 0) {
                res.status(200).json(livrosPorEditora);
            } else {
                next(new NotFound("Nenhum livro atribuído à editora foi encontrado."));
            };
        } catch (err) {
            next(err);
        };
    };
};

export default LivroController