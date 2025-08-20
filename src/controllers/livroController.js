import livros from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res, next) {
        try {
            const listaLivros = await livros.find()
                .populate("autor")
                .exec();

            res.status(200).json(listaLivros);
            
        } catch (err) {
            next(err);
        };
    };

    static async listaLivroPorId (req, res, next) {
        try {
            const livroEncontrado = await livros.findById(req.params.id)
                .populate("autor", "nome")
                .exec();

            res.status(200).json(livroEncontrado);

        } catch (err) {
            next(err);
        };
    };

    static async cadastrarLivro(req, res, next) {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save()

            res.status(201).send(livroResultado.toJSON());
            
        } catch (err) {
            next(err);
        };
    };

    static async atualizarLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body});

            res.status(200).json({ message: "Livro atualizado"});

        } catch (err) {
            next(err);
        };
    };

    static async excluirLivro (req, res, next) {
        try {
            await livros.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Livro removido com sucesso."})

        } catch (err) {
            next(err);
        };
    };

    static async listarLivrosPorEditora (req, res, next) {
        try {
            const editora = req.query.editora;

            const livrosPorEditora = await livros.find({"editora": editora });
            res.status(200).json(livrosPorEditora);
            
        } catch (err) {
            next(err);
        };
    };
};

export default LivroController