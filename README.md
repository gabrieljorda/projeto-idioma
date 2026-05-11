# 🌐 Sistema Multilíngue com React Context API

Um projeto educacional demonstrando o uso do **Context API** do React para gerenciamento global de idioma, com suporte a múltiplos idiomas (Português, Inglês, Espanhol) e persistência de preferências.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar na prática como utilizar o **Context API** do React para gerenciar estado global de forma eficiente, sem a necessidade de "prop drilling" (passar props manualmente por vários níveis de componentes).

### 🎯 Objetivo Educacional

Demonstrar os conceitos fundamentais do Context API:
- ✅ Criação e configuração de Contexto
- ✅ Implementação de Provider global
- ✅ Consumo de contexto com custom hook
- ✅ Persistência de dados com localStorage
- ✅ Componentização e boas práticas React

### 🌍 Idiomas Suportados

| Idioma | Código | Bandeira |
|--------|--------|----------|
| Português (Brasil) | `pt` | 🇧🇷 |
| English (EUA) | `en` | 🇺🇸 |
| Español | `es` | 🇪🇸 |

## 🚀 Funcionalidades

- 🔄 **Troca de idioma em tempo real** - Selecione o idioma e veja toda interface se adaptar instantaneamente
- 💾 **Persistência de preferência** - O idioma escolhido é salvo no localStorage e mantido entre sessões
- 🔔 **Notificações visuais** - Feedback ao trocar de idioma
- 📱 **Design responsivo** - Adapta-se a diferentes tamanhos de tela
- 🎨 **Interface moderna** - Estilizada com TailwindCSS
- 🔁 **Reset para padrão** - Botão para voltar ao idioma original (Português)


## 🔧 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node)

### Passo a Passo

#### 1. Clone o repositório (ou crie os arquivos manualmente)

```bash
# Se estiver usando git
git clone <url-do-repositorio>

### Instale e configure o TailwindCSS

https://tailwindcss.com/docs/installation/using-vite

### Executar o Projeto

npm install
npm run dev
