import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      question: Model,
    },

    seeds(server) {
      server.create("question", { id: "1", pergunta: "Qual café usar?", visualizacoes: 50, votos: 3, respostas: 3, tags: [{id: 1, descricao: 'tag1'}, {id: 3, descricao: 'tag3'}] })
      server.create("question", { id: "2", pergunta: "Qual moedor usar?", visualizacoes: 70, votos: 1, respostas: 1, tags: [{id: 2, descricao: 'tag2'}] })
      server.create("question", { id: "3", pergunta: "Qual cafeteira comprar?", visualizacoes: 10, votos: 2, respostas: 2, tags: [{id: 3, descricao: 'tag3'}] })
    },

    routes() {
      this.namespace = "api"

      this.get("/questoes", (schema) => {
        return schema.questions.all();
      })
    },
  })

  return server
}