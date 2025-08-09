# Desafio de Projeto: Gerador de QR-Codes e Senhas

## Introdução

O desafio proposto pela DIO, que consiste em desenvolver um gerador de QR-Codes e senhas, utilizando o arquivo `.env` para adicionar condições a geração de senhas.

---

## Arquitetura da Solução

```plaintext
📂 src/ 
|    ├── 📂 prompts/                     
|    |   ├── prompt-main.js
|    |   └── prompt-qrcode.js            
|    |
|    ├── 📂 services/
|    |   ├── 📂 password/
|    |   |   ├── create.js
|    |   |   └── handle.js
|    |   |
|    |   └── 📂 qr-code/                     
|    |       ├── create.js 
|    |       └── handle.js 
|    └── index.js
├── .env                        
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

---

## Como instalar

```bash
git clone https://github.com/JulioCesar-A/Projeto-QRCODE-JS.git
cd 07-PROJETO-QRCODE
npm install
```

### **Execução**
Execute o projeto usando o seguinte comando:

```bash
npm run dev
```


---