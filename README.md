# Wikidados App

Wiki Dados Project

## Criar arquivo `.env`

1. No diretório raiz do projeto, crie um arquivo chamado `.env`.

2. Adicione as variáveis de ambiente necessárias ao arquivo, seguindo o formato `CHAVE=VALOR`. Exemplo:

```env
VITE_API_BASE_URL=https://reqres.in/api
```

## Instalar as dependências

```bash
npm install
```

### Rodar aplicação

```bash
npm run dev
```

⚠️ Aviso Importante:
O login está mockado, ou seja, qualquer dado inserido no campo de login permitirá o acesso ao sistema.
Essa funcionalidade foi configurada apenas para fins de desenvolvimento e testes.

### Verifique os arquivos com o lint

```bash
npm run lint
```

### Formatar arquivos

```bash
npm run format
```

### Build da applicação

```bash
npm run build
```
