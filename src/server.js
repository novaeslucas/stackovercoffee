import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      question: Model,
    },

    seeds(server) {
      server.create("question", { id: 1, titulo: "Qual café usar?", conteudo: "Conteudo pergunta 1", visualizacoes: 50, votos: 3, data: "2021-12-03 11:00", respostas: [{id: 1, conteudo: "Café 1", data: '2021-12-03 12:00', usuario: {id: 2}},{id: 2, conteudo: " Café 2", data: '2021-12-03 13:00', usuario: {id: 3}},{id: 3, conteudo: "Café 3", data: '2021-12-03 14:00', usuario: {id: 2}}], tags: [{id: 1, descricao: 'tag1'}, {id: 3, descricao: 'tag3'}], usuario: {id:1, nome : "Lucas Novaes", login: "novaeslucas"} })
      server.create("question", { id: 2, titulo: "Qual moedor usar?", conteudo: "Conteudo pergunta 2", visualizacoes: 70, votos: 1, data: "2022-01-03 12:00", respostas: [{id: 4, conteudo: "Teste 1", data: '2022-01-03 16:00', usuario: {id: 3}},{id: 5, conteudo: "Teste 2", data: '2022-01-03 12:00', usuario: {id: 1}}], tags: [{id: 2, descricao: 'tag2'}], usuario: {id:2, nome : "João", login: "joao"} })
      server.create("question", { id: 3, titulo: "Qual cafeteira comprar?", conteudo: "Conteudo pergunta 3", visualizacoes: 10, votos: 2, data: "2021-12-04 07:00", respostas: [{id: 6, conteudo: "Teste 3", data: '2021-12-04 12:00', usuario: {id: 1}}], tags: [{id: 3, descricao: 'tag3'}], usuario: {id:3, nome : "Maria", login: "maria"} })
      server.create("question", { id: 4, titulo: "Como preparar capuccino?", conteudo: "Conteudo pergunta 4", visualizacoes: 10, votos: 2, data: "2022-01-04 16:00", respostas: [], tags: [{id: 2, descricao: 'tag2'}], usuario: {id:4, nome : "Helena", login: "helena"} })
    },

    routes() {
      this.namespace = "api"

      this.get("/questoes", (schema) => {
        return schema.questions.all();
      })

      this.get("/questao/:id", (schema, request) => {
        return schema.questions.find(request.params.id);
      })
    },
  })

  return server
}