/**
 * 🦅 RCC IntelOps — Módulo supervisorbot v9.2.0
 * Motor Inteligente Anticonflito com Validação de Escopo e Limpeza de Histórico
 */

const SupervisorBot = {
    // Mensagem Padrão de Entrada
    welcomeMessage: "<strong>supervisorbot:</strong> Saudações, combatente! Sou o assistente virtual dos Professores. Digite sua dúvida sobre a nossa aula (Promoções, Diálogos, Punições, Fakes ou Prints) e eu trarei as diretrizes na hora.",

    // Base de conhecimento estruturada diretamente da apostila enviada
    database: {
        promocao: {
            titulo: "Promoção",
            tokens: ["promoc", "promov", "criterio", "requisito", "hierarquia", "excelenc", "aspirante", "tenente", "soldado", "cabo", "ortograf", "proativid"],
            resposta: "<strong>[APOSTILA — PROMOÇÃO]</strong><br><br>" +
                "• <strong>Senso Crítico:</strong> Gratificar um militar com promoção exige um alto senso de observação antes de decidir. Certifique-se de que ele demonstre excelência em todos os aspectos necessários para o novo posto.<br>" +
                "• <strong>Diferença de Requisitos:</strong> Cada patente exige diferentes níveis. Um <em>Soldado para Cabo</em> é promovido com base no desempenho na recepção e boa ortografia. Já um <em>Aspirante a Tenente</em> exige desempenho no batalhão, presença, proatividade, atuação na companhia, conhecimento da constituição, rigidez, postura e conduta."
        },
        punicoes: {
            titulo: "Rebaixamento e Demissão",
            tokens: ["rebaix", "demiss", "punica", "punico", "advertenc", "exonerac", "transgress", "traic", "crime"],
            resposta: "<strong>[APOSTILA — REBAIXAMENTO E DEMISSÃO]</strong><br><br>" +
                "• <strong>As 6 Punições Administrativas:</strong> Advertência verbal, advertência escrita (para oficiais), rebaixamento, demissão, exoneração e medalhas efetivas negativas.<br>" +
                "• <strong>Rebaixamento:</strong> Punição intermediária aplicada em transgressões disciplinares (conduta imprópria, desrespeito/insubordinação, abuso de poder). Os crimes possuem punições graduais, podendo reter-se em advertências a depender do caso.<br>" +
                "• <strong>Demissão:</strong> Punição mais severa aplicada diante de uma transgressão disciplinar grave, como o crime de traição. Na sua patente atual, você contará com assistência de superiores para decidir o veredito."
        },
        dialogos: {
            titulo: "Diálogos - DPP e DPR",
            tokens: ["dialogo", "dpp", "dpr", "pos-promoc", "pos-rebaix", "motiv", "reincid", "ajuda", "carreira"],
            resposta: "<strong>[APOSTILA — DIÁLOGOS DPP E DPR]</strong><br><br>" +
                "• <strong>DPP (Diálogo Pós-Promoção):</strong> Aborda os critérios da promoção, os desafios associados à nova patente, proatividade, responsabilidades, comprometimento e pontos de melhoria para o contínuo desenvolvimento.<br>" +
                "• <strong>DPR (Diálogo Pós-Rebaixamento):</strong> Condução formal focada na motivação do militar punido, fazendo-o compreender seu erro, corrigir sua postura e evitar a reincidência da transgressão.<br>" +
                "• <strong>Onde Encontrar:</strong> No fórum, acesse a apostila em: <em>Apostilas: Dicas e ajudas -> Auxílios para a carreira</em>. Recomenda-se a leitura após a aula."
        },
        nepotismo: {
            titulo: "Nepotismo",
            tokens: ["nepotism", "parent", "amigo", "favorec", "arvore genealogic", "cpm", "codigo penal"],
            resposta: "<strong>[APOSTILA — NEPOTISMO]</strong><br><br>" +
                "• <strong>Definição (CPM):</strong> É o favorecimento de militar pertencente à mesma árvore genealógica (parentes) ou com fortes vínculos de amizade em detrimento de policiais mais aptos em promoções, gratificações, grupos de tarefas, etc.<br>" +
                "• <strong>Prevenção:</strong> Para evitar falsas acusações, peça opiniões de terceiros e avalie o desempenho do policial em funções do batalhão e testes teóricos para obter provas de aptidão.<br>" +
                "• <strong>Punição:</strong> É gradativa para ambos os envolvidos. Acarreta no cancelamento do requerimento e rebaixamento direto, podendo chegar à exoneração em casos graves."
        },
        regras: {
            titulo: "Regras de Promoção e Autonomia",
            tokens: ["regra", "limite", "sargento", "permiss", "oficial", "corpo militar", "corpo executiv", "ei", "especializac", "autonomia"],
            resposta: "<strong>[APOSTILA — REGRAS DE PROMOÇÃO]</strong><br><br>" +
                "• <strong>Limites do Subtenente:</strong> Com a aula de promotor concluída, o subtenente pode promover até o posto de <strong>Sargento</strong> (ou equivalência), com a permissão de um oficial do Corpo Militar ou Executivo com Especialização Intermediária (EI) ou superior. Cheque a EI na aba 'dados primários' do perfil dele no RCCSystem.<br>" +
                "• <strong>Autonomia Decisória:</strong> Em casos de transgressões cometidas por subordinados, os subtenentes possuem total autonomia para tomar decisões de rebaixamento ou demissão sem necessitar de permissão."
        },
        permissoes: {
            titulo: "Permissões e Captura de Tela (Prints)",
            tokens: ["permiss", "requeriment", "print", "printscreen", "captur", "tela cheia", "data", "hora", "edica", "corte", "mobile", "celular", "windows", "macbook"],
            resposta: "<strong>[APOSTILA — PERMISSÕES E PRINTS]</strong><br><br>" +
                "• <strong>Validação:</strong> Devem constar na aba 'PERMISSÕES' do RCCSystem. Exija um printscreen do oficial confirmando a permissão como prova.<br>" +
                "• <strong>Como Tirar Prints:</strong><br>" +
                "  - <strong>Windows:</strong> Teclas <code>Windows + Prt Sc</code> (Salva na pasta Imagens -> Capturas de Tela).<br>" +
                "  - <strong>MacBook:</strong> Teclas <code>Shift + Command + 3</code> (Salva na Área de Trabalho).<br>" +
                "  - <strong>Mobile:</strong> Pressione simultaneamente <code>Ligar/Desligar + Diminuir Volume</code> (Salva na galeria).<br>" +
                "• <strong>Regra do Print:</strong> Deve ser feito em tela cheia, com data e hora visíveis, sem edições ou cortes. Na versão mobile, a data/hora é dispensada, contanto que o print seja completo e íntegro."
        },
        hospedagem: {
            titulo: "Hospedagem de Imagens",
            tokens: ["hosped", "imgur", "upload", "new post", "choose photo", "f5"],
            resposta: "<strong>[APOSTILA — HOSPEDAGEM DE IMAGENS]</strong><br><br>" +
                "• <strong>Plataforma:</strong> O site recomendado é o <strong>imgur.com</strong> (substitua o 'w' da apostila por 'u').<br>" +
                "• <strong>Procedimento:</strong> Acesse, clique em 'New Post' -> 'Choose Photo/Video' e selecione o arquivo. Use a opção 'Add another image' para carregar sequências.<br>" +
                "• <strong>Dica Tática:</strong> No Windows ou Mac, você pode colar a imagem direto no site. Se perder qualidade, basta atualizar a página pressionando <strong>F5</strong>."
        },
        seguranca_usuario: {
            titulo: "Segurança do Usuário e Contas Fakes",
            tokens: ["seguranc", "senha", "compartilh", "fake", "fakes", "falsific", "nick", "verific", "identific", "guilherme", "marcos"],
            resposta: "<strong>[APOSTILA — SEGURANÇA E CONTAS FAKES]</strong><br><br>" +
                "• <strong>Regras de Ouro:</strong> Nunca compartilhe seus dados ou conta com terceiros (o comprometimento de contas causará punições). Use e-mails e senhas inteiramente diferentes para o Habbo, o Fórum e o RCCSystem. Não clique em links estranhos, sites de moedas grátis ou subornos.<br>" +
                "• <strong>Identificação de Fakes:</strong> São contas que falsificam cargos, patentes ou nomes. Observe a data de criação, nível de conquistas e nicks capciosos (Ex: 'Guilherme' escrito com 'I' maiúsculo: <code>GuiIherme</code>, ou 'Marcos' com pontos: <code>Marcos.-</code>). Valide sempre no perfil do RCCSystem e avise um oficial superior."
        },
        emergencias: {
            titulo: "Emergências de Conta",
            tokens: ["hacke", "invad", "invasa", "roub", "general", "superintendent", "transfer", "fazer", "oque fazer", "perdi conta"],
            resposta: "<strong>[APOSTILA — PROTOCOLO DE EMERGÊNCIA]</strong><br><br>" +
                "• <strong>O que fazer:</strong> Se for hackeado, procure na mesma hora um militar com patente de <strong>General+ ou cargo de Superintendent+ com Especialização Intermediária (EI)</strong> para transferir sua conta e congelar seus dados.<br>" +
                "• <strong>Consequências:</strong> O oficial usará métodos para validar sua identidade e te removerá dos grupos para proteger a instituição. Contas comprometidas geram riscos, podendo acarretar rebaixamento ou exoneração."
        },
        online_visibilidade: {
            titulo: "Modo Online e Visibilidade",
            tokens: ["online", "visibilid", "perfil", "ativo", "normativa", "24 hora", "companhia"],
            resposta: "<strong>[APOSTILA — VISIBILIDADE E MODO ONLINE]</strong><br><br>" +
                "• <strong>Regulamento:</strong> É obrigatório a todos os policiais ativos manter a visibilidade do perfil e o modo online ativos no Habbo (salvo com permissão da Supremacia ou Inteligência).<br>" +
                "• <strong>Punições por Descumprimento:</strong> Policiais em companhias sofrerão <strong>rebaixamento imediato a cada 24 horas</strong> de irregularidade. Praças sem companhia serão orientados na primeira ocorrência; se reincidirem ou permanecerem no erro, também sofrerão o rebaixamento a cada 24 horas."
        },
        sala_controle: {
            titulo: "Segurança do Batalhão e Sala de Controle",
            tokens: ["batalha", "sala de estado", "oficial da guarda", "recepca", "sentinela", "operador", "op1", "op2", "op3", "op4", "emblema", "dono", "goph", "inativo"],
            resposta: "<strong>[APOSTILA — SEGURANÇA DO BATALHÃO & CONTROLE]</strong><br><br>" +
                "• <strong>Postos de Defesa:</strong> Na <em>Sala de Estado</em>, use sua percepção e avise o Oficial da Guarda se vir problemas. Na <em>Recepção</em>, barre nomes inadequados e chame o Cabo da Guarda. A <em>Sentinela</em> deve reter a porta do corredor fechada.<br>" +
                "• <strong>Operador 01 & 02:</strong> O OP1 valida a missão e fardamento (Anexo I do Código de Conduta). O OP2 checa grupos externos: os donos oficiais dos emblemas RCC são <code>RCCEmblemas</code>, <code>-Edhone</code>, <code>Mine315-BAN</code> e <code>douglasfon71</code> (Se for GOPH: Org-GOPH. e dr.jefferson105).<br>" +
                "• <strong>Operador 03 & 04:</strong> Copie o nick por sussurro e pesquise no System. Se constar como <strong>ESTADO INATIVO</strong> ou <strong>EXONERADO</strong>, a entrada é proibida. Liberar militares irregulares pune o Operador e o Auxiliar com <strong>50 medalhas efetivas negativas</strong>."
        },
        forum_registro: {
            titulo: "Fórum da RCC e Ativação no System",
            tokens: ["forum", "registr", "termo", "conectar", "system", "ativar conta", "codigo", "missa", "pausa"],
            resposta: "<strong>[APOSTILA — CADASTRO NO FÓRUM E SYSTEM]</strong><br><br>" +
                "• <strong>Registro no Fórum:</strong> Acesse o link, clique em 'Conectar-se' -> 'Registrar-se', dê aceite nos termos. O nick deve ser rigorosamente o mesmo do Habbo e as senhas diferentes em todas as plataformas.<br>" +
                "• <strong>Pausa Obrigatória:</strong> Feito o cadastro, volte imediatamente ao Habbo e avise ao Supervisor. A liberação ocorre em até 24 horas.<br>" +
                "• <strong>Ativação no RCC System:</strong> Acesse o sistema, selecione 'Ativar Conta', insira seu nick. <strong>ATENÇÃO:</strong> Antes de clicar em ativar, copie o código exibido e cole na sua missão do Habbo. Salve no jogo, volte ao site e finalize clicando em 'Ativar'."
        }
    },

    socialResponses: {
        saudacoes: {
            tokens: ["ola", "oi", "eae", "opa", "salve", "bom dia", "boa tarde", "boa noite", "comandante", "combatente", "selva"],
            resposta: "Olá, combatente! Central de instruções pronta. Me pergunte sobre tópicos da apostila como <strong>promoções, diálogos (DPP/DPR), punições, fakes ou segurança</strong>."
        },
        status: {
            tokens: ["tudo bem", "como voce ta", "como vai", "suave", "beleza"],
            resposta: "Sistema operacional operando com 100% de precisão de dados! Qual a sua dúvida doutrinária hoje?"
        },
        agradecimento: {
            tokens: ["obrigado", "obrigada", "valeu", "tamo junto", "tmj", "perfeito", "excelente"],
            resposta: "Sem problemas, combatente! Mantenha a guarda alta e boa instrução. Selva! 🦅"
        }
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
    },

    cacheDOM() {
        this.widgetBtn   = document.getElementById("btn-toggle-intelbot");
        this.chatWindow  = document.getElementById("intelbot-chat-window");
        this.closeBtn    = document.getElementById("btn-close-intelbot");
        this.clearBtn    = document.getElementById("btn-clear-intelbot");
        this.chatForm    = document.getElementById("intelbot-form");
        this.chatInput   = document.getElementById("intelbot-input");
        this.msgArea     = document.getElementById("intelbot-messages");
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
        if (this.clearBtn) {
            this.clearBtn.addEventListener("click", () => this.clearChatHistory());
        }
        if (this.chatForm) {
            this.chatForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.processIncomingMessage();
            });
        }
    },

    clearChatHistory() {
        this.msgArea.innerHTML = "";
        this.appendMessageBubble("System", this.welcomeMessage);
    },

    processIncomingMessage() {
        const rawText = this.chatInput.value.trim();
        if (!rawText) return;

        this.appendMessageBubble("User", rawText);
        this.chatInput.value = "";

        this.appendMessageBubble("System typing", "<span>supervisorbot está verificando os arquivos confidenciais...</span>");

        setTimeout(() => {
            const typingBubble = this.msgArea.querySelector(".typing");
            if (typingBubble) typingBubble.remove();

            // Limpeza profunda de acentuações e caracteres
            const cleanText = rawText.toLowerCase()
                                     .normalize("NFD")
                                     .replace(/[\u0300-\u036f]/g, "")
                                     .replace(/[^a-z0-9\s-]/g, "");

            const inputWords = cleanText.split(/\s+/);
            let finalReply = null;

            // NOVA REGRA ANTICONFLITO: Só responde social se o input for curto ou contiver APENAS palavras sociais.
            // Se o usuário digitou uma frase estruturada complexa, pulamos direto para a checagem da base de conhecimento.
            if (inputWords.length <= 3) {
                for (const key in this.socialResponses) {
                    const group = this.socialResponses[key];
                    // Confere se alguma palavra exata da frase do usuário bate inteira com o token social
                    const isStrictSocial = inputWords.some(word => group.tokens.includes(word));
                    if (isStrictSocial) {
                        finalReply = group.resposta;
                        break;
                    }
                }
            }

            // Pesquisa Avançada por Varredura de Sinais de Equivalência
            if (!finalReply) {
                let bestMatch = null;
                let maxHits = 0;

                for (const key in this.database) {
                    const block = this.database[key];
                    let currentHits = 0;

                    block.tokens.forEach(token => {
                        // Verifica correspondência parcial por radicais das palavras ou frase corrida
                        const hit = inputWords.some(word => word.includes(token)) || cleanText.includes(token);
                        if (hit) {
                            // Se bater um token muito específico (como hacke, roub, invad), ganha peso duplo
                            currentHits += (token.length > 4) ? 2 : 1;
                        }
                    });

                    if (currentHits > maxHits) {
                        maxHits = currentHits;
                        bestMatch = block.resposta;
                    }
                }

                if (maxHits > 0) {
                    finalReply = bestMatch;
                }
            }

            // Fallback de contingência institucional
            if (!finalReply) {
                finalReply = "<strong>[Diretriz Não Catalogada]</strong><br>Negativo, combatente. Não identifiquei essa instrução específica na apostila.<br><br>Seja direto. Experimente termos como: <em>'promoções', 'diálogos', 'punição', 'nepotismo', 'prints', 'hackeado' ou 'sala de controle'</em>.";
            }

            this.appendMessageBubble("System", `<span><strong>supervisorbot:</strong> ${finalReply}</span>`);
        }, 450);
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