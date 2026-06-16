const SupervisorBot = {
    welcomeMessage: "<strong>supervisorbot:</strong> Fala, recruta! Totalmente operacional por aqui. Sou o <strong>supervisorbot</strong>! Manda seu bizu ou dúvida sobre as aulas de <strong>Supervisão</strong>, <strong>Segurança</strong> ou <strong>Promotor</strong>, ou use as sugestões de clique rápido logo acima que eu te respondo no padrão! Selva! ⚔️",

    database: {
        promocao: {
            titulo: "Promoção",
            tokens: ["promoc", "promov", "criterio", "requisito", "hierarquia", "excelenc", "aspirante", "tenente", "soldado", "cabo", "ortograf", "proativid"],
            resposta: "<strong>[APOSTILA — PROMOÇÃO]</strong><br><br>" +
                "• <strong>Senso Crítico:</strong> Gratificar um militar com promoção exige um alto senso de observação. Certifique-se de que ele demonstre excelência.<br>" +
                "• <strong>Diferença de Requisitos:</strong> <em>Soldado para Cabo</em> exige desempenho na recepção e boa ortografia. <em>Aspirante a Tenente</em> exige presença, proatividade, atuação na companhia, conhecimento da constituição e rigidez."
        },
        punicoes: {
            titulo: "Rebaixamento e Demissão",
            tokens: ["rebaix", "demiss", "punica", "punico", "advertenc", "exonerac", "transgress", "traic", "crime"],
            resposta: "<strong>[APOSTILA — REBAIXAMENTO E DEMISSÃO]</strong><br><br>" +
                "• <strong>As 6 Punições:</strong> Advertência verbal, advertência escrita, rebaixamento, demissão, exoneração e medalhas efetivas negativas.<br>" +
                "• <strong>Rebaixamento:</strong> Aplicado em transgressões disciplinares (conduta imprópria, desrespeito, abuso de poder).<br>" +
                "• <strong>Demissão:</strong> Punição mais severa aplicada diante de transgressão disciplinar grave, como o crime de traição."
        },
        dialogos: {
            titulo: "Diálogos - DPP e DPR",
            tokens: ["dialogo", "dpp", "dpr", "pos-promoc", "pos-rebaix", "motiv", "reincid", "ajuda", "carreira"],
            resposta: "<strong>[APOSTILA — DIÁLOGOS DPP E DPR]</strong><br><br>" +
                "• <strong>DPP (Diálogo Pós-Promoção):</strong> Aborda os critérios da promoção, desafios da nova patente, responsabilidades e pontos de melhoria.<br>" +
                "• <strong>DPR (Diálogo Pós-Rebaixamento):</strong> Focado na motivação do militar punido, fazendo-o compreender seu erro e evitar a reincidência.<br>" +
                "• <strong>Onde Encontrar:</strong> No fórum em: <em>Apostilas: Dicas e ajudas -> Auxílios para a carreira</em>."
        },
        nepotismo: {
            titulo: "Nepotismo",
            tokens: ["nepotism", "parent", "amigo", "favorec", "arvore genealogic", "cpm", "codigo penal"],
            resposta: "<strong>[APOSTILA — NEPOTISMO]</strong><br><br>" +
                "• <strong>Definição (CPM):</strong> Favorecimento de militar pertencente à mesma árvore genealógica ou com fortes vínculos de amizade em detrimento de policiais mais aptos.<br>" +
                "• <strong>Punição:</strong> É gradativa para ambos os envolvidos, acarretando no cancelamento do requerimento e rebaixamento direto."
        },
        regras: {
            titulo: "Regras de Promoção e Autonomia",
            tokens: ["regra", "limite", "sargento", "permiss", "oficial", "corpo militar", "corpo executiv", "ei", "especializac", "autonomia"],
            resposta: "<strong>[APOSTILA — REGRAS DE PROMOÇÃO]</strong><br><br>" +
                "• <strong>Limites do Subtenente:</strong> Puede promover até <strong>Sargento</strong>, com a permissão de um oficial (militar ou executivo) com Especialização Intermediária (EI) ou superior.<br>" +
                "• <strong>Autonomia:</strong> Em casos de transgressões de subordinados, subtenentes possuem total autonomia para rebaixamento ou demissão."
        },
        permissoes: {
            titulo: "Permissões e Captura de Tela (Prints)",
            tokens: ["permiss", "requeriment", "print", "printscreen", "captur", "tela cheia", "data", "hora", "edica", "corte", "mobile", "celular", "windows", "macbook"],
            resposta: "<strong>[APOSTILA — PERMISSÕES E PRINTS]</strong><br><br>" +
                "• <strong>Validação:</strong> Devem constar na aba 'PERMISSÕES' do RCCSystem.<br>" +
                "• <strong>Regra do Print:</strong> Deve ser feito em tela cheia, com data e hora visíveis, sem edições ou cortes (no mobile a data/hora é dispensada se o print for íntegro)."
        },
        hospedagem: {
            titulo: "Hospedagem de Imagens",
            tokens: ["hosped", "imgur", "upload", "new post", "choose photo", "f5"],
            resposta: "<strong>[APOSTILA — HOSPEDAGEM DE IMAGENS]</strong><br><br>" +
                "• <strong>Plataforma:</strong> O site recomendado é o <strong>imgur.com</strong>.<br>" +
                "• <strong>Dica Tática:</strong> No Windows ou Mac, você pode colar a imagem direto no site. Se perder qualidade, pressione <strong>F5</strong>."
        },
        seguranca_usuario: {
            titulo: "Segurança do Usuário e Contas Fakes",
            tokens: ["seguranc", "senha", "compartilh", "fake", "fakes", "falsific", "nick", "verific", "identific", "guilherme", "marcos"],
            resposta: "<strong>[APOSTILA — SEGURANÇA E CONTAS FAKES]</strong><br><br>" +
                "• <strong>Regras:</strong> Nunca compartilhe seus dados. Use e-mails e senhas diferentes para o Habbo, Fórum e RCCSystem. Não clique em links estranhos.<br>" +
                "• <strong>Fakes:</strong> Contas que falsificam cargos ou nomes. Repare em nicks capciosos (Ex: <code>GuiIherme</code> com I maiúsculo). Valide no RCCSystem."
        },
        emergencias: {
            titulo: "Emergências de Conta",
            tokens: ["hacke", "invad", "invasa", "roub", "general", "superintendent", "transfer", "fazer", "oque fazer", "perdi conta"],
            resposta: "<strong>[APOSTILA — PROTOCOLO DE EMERGÊNCIA]</strong><br><br>" +
                "• <strong>O que fazer:</strong> Se for hackeado, procure IMEDIATAMENTE um militar com patente de <strong>General+ ou cargo de Superintendent+ com Especialização Intermediária (EI)</strong> para transferir sua conta e congelar seus dados."
        },
        online_visibilidade: {
            titulo: "Modo Online e Visibilidade",
            tokens: ["online", "visibilid", "perfil", "ativo", "normativa", "24 hora", "companhia"],
            resposta: "<strong>[APOSTILA — VISIBILIDADE E MODO ONLINE]</strong><br><br>" +
                "• <strong>Regulamento:</strong> É obrigatório manter a visibilidade do perfil e o modo online ativos no Habbo. O descumprimento gera rebaixamento a cada 24 horas de irregularidade."
        },
        sala_controle: {
            titulo: "Segurança do Batalhão e Sala de Controle",
            tokens: ["batalha", "sala de estado", "oficial da guarda", "recepca", "sentinela", "operador", "op1", "op2", "op3", "op4", "emblema", "dono", "goph", "inativo"],
            resposta: "<strong>[APOSTILA — SEGURANÇA DO BATALHÃO & CONTROLE]</strong><br><br>" +
                "• <strong>OP2 (Emblemas):</strong> Os donos oficiais dos emblemas RCC são <code>RCCEmblemas</code>, <code>-Edhone</code>, <code>Mine315-BAN</code> e <code>douglasfon71</code>.<br>" +
                "• <strong>OP3 e OP4:</strong> Pesquise no System. Se constar como <strong>ESTADO INATIVO</strong> ou <strong>EXONERADO</strong>, a entrada é proibida. Liberar militares irregulares pune o Operador com 50 medalhas negativas."
        },
        forum_registro: {
            titulo: "Fórum da RCC e Ativação no System",
            tokens: ["forum", "registr", "termo", "conectar", "system", "ativar conta", "codigo", "missa", "pausa"],
            resposta: "<strong>[APOSTILA — CADASTRO NO FÓRUM E SYSTEM]</strong><br><br>" +
                "• <strong>Ativação no RCC System:</strong> Acesse o sistema, selecione 'Ativar Conta', insira seu nick. Antes de confirmar, copie o código exibido, cole na sua missão do Habbo, salve no jogo e clique em 'Ativar'."
        }
    },

    socialResponses: {
        saudacoes: {
            tokens: ["ola", "oi", "eae", "opa", "salve", "bom dia", "boa tarde", "boa noite", "comandante", "combatente"],
            resposta: "Olá, combatente! Central de instruções pronta. Me pergunte sobre tópicos da apostila como <strong>promoções, diálogos (DPP/DPR), punições, fakes ou segurança</strong>."
        },
        status: {
            tokens: ["tudo bem", "como voce ta", "como vai", "suave", "beleza"],
            resposta: "Sistema operacional operando com 100% de precisão de dados! Qual a sua dúvida doutrinária hoje?"
        },
        agradecimento: {
            tokens: ["obrigado", "obrigada", "valeu", "tamo junto", "tmj", "perfeito"],
            resposta: "Sem problemas, combatente! Mantenha a guarda alta e boa instrução. Selva! 🦅"
        }
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.renderWelcome();
    },

    cacheDOM() {
        this.widgetBtn   = document.getElementById("btn-toggle-intelbot");
        this.chatWindow  = document.getElementById("intelbot-chat-window");
        this.closeBtn    = document.getElementById("btn-close-intelbot");
        this.clearBtn    = document.getElementById("btn-clear-intelbot"); 
        this.chatForm    = document.getElementById("intelbot-form");
        this.chatInput   = document.getElementById("intelbot-input");
        this.msgArea     = document.getElementById("intelbot-messages");
        this.suggestArea = document.getElementById("intelbot-suggestions");
    },

    bindEvents() {
        if (this.widgetBtn) {
            this.widgetBtn.addEventListener("click", () => {
                this.chatWindow.classList.toggle("open");
                if (this.chatWindow.classList.contains("open")) this.chatInput.focus();
            });
        }
        if (this.closeBtn) {
            this.closeBtn.addEventListener("click", () => this.chatWindow.classList.remove("open"));
        }
        
        // INTERCEPTADOR DA LIXEIRA: Garante limpeza e reinício sem engasgos
        if (this.clearBtn) {
            this.clearBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.clearChatHistory();
            });
        }


        if (this.suggestArea) {
            this.suggestArea.addEventListener("click", (e) => {
                const btn = e.target.closest(".suggest-btn");
                if (btn) {
                    const query = btn.getAttribute("data-query");
                    this.executeSearchPipeline(query);
                }
            });
        }

        if (this.chatForm) {
            this.chatForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const text = this.chatInput.value.trim();
                if (text) this.executeSearchPipeline(text);
            });
        }
    },

    renderWelcome() {
        if (this.msgArea) {
            this.msgArea.innerHTML = "";
            this.appendMessageBubble("System", this.welcomeMessage);
        }
    },

    clearChatHistory() {
        this.renderWelcome();
        if (this.chatInput) this.chatInput.value = "";
    },

    executeSearchPipeline(userInput) {
        this.appendMessageBubble("User", userInput);
        if (this.chatInput) this.chatInput.value = "";

        this.appendMessageBubble("System typing", "<span>supervisorbot processando dados operacionais...</span>");

        setTimeout(() => {
            const typingBubble = this.msgArea.querySelector(".typing");
            if (typingBubble) typingBubble.remove();

            const cleanText = userInput.toLowerCase()
                                       .normalize("NFD")
                                       .replace(/[\u0300-\u036f]/g, "")
                                       .replace(/[^a-z0-9\s-]/g, "");

            const inputWords = cleanText.split(/\s+/);
            let finalReply = null;
            let bestMatch = null;
            let maxScore = 0;

            // Busca Ponderada de Relevância
            for (const key in this.database) {
                const block = this.database[key];
                let currentScore = 0;

                block.tokens.forEach(token => {
                    if (inputWords.some(word => word.includes(token)) || cleanText.includes(token)) {
                        currentScore += (token.length > 4) ? 3 : 1;
                    }
                });

                if (currentScore > maxScore) {
                    maxScore = currentScore;
                    bestMatch = block.resposta;
                }
            }

            if (maxScore >= 2) {
                finalReply = bestMatch;
            }

            if (!finalReply) {
                for (const key in this.socialResponses) {
                    const group = this.socialResponses[key];
                    if (inputWords.some(word => group.tokens.includes(word))) {
                        finalReply = group.resposta;
                        break;
                    }
                }
            }

            if (!finalReply) {
                finalReply = "<strong>[Aviso do Sistema]</strong><br>Desculpe, combatente! Este módulo específico ainda está em <strong>fase de desenvolvimento experimental</strong>. Eu ainda estou aprendendo todo o conhecimento e diretrizes da apostila da RCC, mas irei estudar essa questão detalhadamente. Assim que possível, estarei pronto para responder de forma correta! 🦅";
            }

            this.appendMessageBubble("System", `<span>${finalReply}</span>`);
        }, 400);
    },

    appendMessageBubble(sender, text) {
        const bubble = document.createElement("div");
        bubble.className = (sender === "System typing") ? "bot-msg System typing" : `bot-msg ${sender}`;
        bubble.innerHTML = text;
        this.msgArea.appendChild(bubble);
        this.msgArea.scrollTop = this.msgArea.scrollHeight;
    }
};

document.addEventListener("DOMContentLoaded", () => SupervisorBot.init());