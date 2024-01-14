-- CreateTable
CREATE TABLE `Colaborador` (
    `colaborador_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `senha` VARCHAR(255) NULL,
    `especialidade` VARCHAR(255) NULL,
    `matricula` VARCHAR(255) NULL,
    `matricula_estado` VARCHAR(255) NULL,
    `dtcadastro` DATETIME(3) NULL,
    `dtalteracao` DATETIME(3) NULL,
    `status` CHAR(1) NULL,

    UNIQUE INDEX `colaborador_id`(`colaborador_id`),
    UNIQUE INDEX `Colaborador_cpf_key`(`cpf`),
    PRIMARY KEY (`colaborador_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Admissao_Paciente_Unidade` (
    `fch_admissao_paciente_unidade_id` INTEGER NOT NULL,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_admissao_paciente_unidade_status` CHAR(1) NULL,
    `pulseira_identificacao` CHAR(1) NULL,
    `fumante` CHAR(1) NULL,
    `alergia_intolerancia_medicamentosa` CHAR(1) NULL,
    `alergia_intolerancia_medicamentosa_qual` VARCHAR(255) NULL,
    `alergia_intolerancia_alimentar` CHAR(1) NULL,
    `alergia_intolerancia_alimentar_qual` VARCHAR(255) NULL,
    `jejum_inicio_hora` VARCHAR(255) NULL,
    `jejum_inicio_dia` VARCHAR(255) NULL,
    `doenca_previa` CHAR(1) NULL,
    `doenca_previa_qual` VARCHAR(255) NULL,
    `medicacao_continua` CHAR(1) NULL,
    `medicacao_continua_qual` CHAR(1) NULL,
    `tricotomia` CHAR(1) NULL,
    `tricotomia_regiao` VARCHAR(255) NULL,
    `tricotomia_metodo` VARCHAR(255) NULL,
    `banho_pre_operatorio` CHAR(1) NULL,
    `banho_pre_operatorio_horario` VARCHAR(255) NULL,
    `banho_pre_operatorio_dia` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_admissao_paciente_unidade_id`(`fch_admissao_paciente_unidade_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_admissao_paciente_unidade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Avaliacao_Nutricional` (
    `fch_avaliacao_nutricional_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_avaliacao_nutricional_status` CHAR(1) NULL,
    `diabetes` VARCHAR(3) NULL,
    `medicamento_diabetes` CHAR(1) NULL,
    `medicamento_diabetes_qual` VARCHAR(255) NULL,
    `horario_isulina` VARCHAR(255) NULL,
    `hipertensao` CHAR(1) NULL,
    `medicamento_hipertensao` CHAR(1) NULL,
    `medicamento_hipertensao_quais` VARCHAR(255) NULL,
    `dislipidemias` CHAR(1) NULL,
    `disturbios_renais` CHAR(1) NULL,
    `distubios_tireoide` CHAR(1) NULL,
    `disturbios_hepaticos` CHAR(1) NULL,
    `cardiopatias` CHAR(1) NULL,
    `doencao_respiratoria` CHAR(1) NULL,
    `outras_patologias_quais` VARCHAR(255) NULL,
    `fumante` CHAR(1) NULL,
    `fumante_frequencia` VARCHAR(255) NULL,
    `mastigacao` CHAR(1) NULL,
    `medicamento_diaria` CHAR(1) NULL,
    `medicamento_diaria_qual` VARCHAR(255) NULL,
    `azia_gastrite_refluxo` CHAR(1) NULL,
    `azia_gastrite_refluxo_qual` VARCHAR(255) NULL,
    `funcionamento_intestinal_regular` CHAR(1) NULL,
    `funcionamento_intestinal_costipado` CHAR(1) NULL,
    `alergias` CHAR(1) NULL,
    `alergias_qual` VARCHAR(255) NULL,
    `aversao_intolerancia_alimentares` CHAR(1) NULL,
    `aversao_intolerancia_alimentares_qual` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_avaliacao_nutricional_id`(`fch_avaliacao_nutricional_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_avaliacao_nutricional_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Controle_Material` (
    `fch_controle_material_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_controle_material_status` CHAR(1) NULL,
    `contagem_compressas_entregues` VARCHAR(255) NULL,
    `contagem_compressas_devolvidas` VARCHAR(255) NULL,
    `contagem_gases_entregues` VARCHAR(255) NULL,
    `contagem_gases_devolvidas` VARCHAR(255) NULL,
    `contagem_instrumental_entregues` VARCHAR(255) NULL,
    `contagem_instrumental_devolvidas` VARCHAR(255) NULL,
    `pecas_cirurgicas_anatomia` CHAR(1) NULL,
    `pecas_cirurgicas_anatomia_quantidade` VARCHAR(255) NULL,
    `pecas_identificadas` CHAR(1) NULL,
    `soro_infusao_medicamentos_fluidos` CHAR(1) NULL,
    `pulseira_identificacao` CHAR(1) NULL,
    `problemas_equipamentos` CHAR(1) NULL,
    `problemas_equipamentos_quais` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_controle_material_id`(`fch_controle_material_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_controle_material_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Diagnostico_Enfermagem` (
    `fch_diagnostico_enfermagem_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_diagnostico_enfermagem_status` CHAR(1) NULL,
    `insonia_relacionado_ansiedade` CHAR(1) NULL,
    `deficit_autocuidado_banho` CHAR(1) NULL,
    `retencao_urinario` CHAR(1) NULL,
    `deambulacao_projudicada_dor` CHAR(1) NULL,
    `nausea_medo_ansiedade` CHAR(1) NULL,
    `ansiedade_relacionado_estressores` CHAR(1) NULL,
    `risco_lesao_presao` CHAR(1) NULL,
    `risco_reacao_alergica` CHAR(1) NULL,
    `risco_lesao_trato_urinario` CHAR(1) NULL,
    `risco_queda_hipontensao` CHAR(1) NULL,
    `risco_tromboembolismo_veneso` CHAR(1) NULL,
    `risco_hiportemia_perioperatoria` CHAR(1) NULL,
    `observacao` VARCHAR(255) NULL,
    `verificacao_ssvv` VARCHAR(255) NULL,
    `observar_posicionamento_paciente` VARCHAR(255) NULL,
    `observar_nauseas_vomitos` VARCHAR(255) NULL,
    `atentar_queixar_dor` VARCHAR(255) NULL,
    `estimular_deambulacao` VARCHAR(255) NULL,
    `observar_dreno_sonda` VARCHAR(255) NULL,
    `realizar_protecao_proeminencias_osseas` VARCHAR(255) NULL,
    `observar_local_puncao_venosa` VARCHAR(255) NULL,
    `manter_grades_elevadas` VARCHAR(255) NULL,
    `manter_monitorizacao_hemodinamica` VARCHAR(255) NULL,
    `realizar_banho_aspersao` VARCHAR(255) NULL,
    `realizar_curativo` VARCHAR(255) NULL,
    `estimular_eliminacao_espontanea` VARCHAR(255) NULL,
    `realizar_sondagem_vesical` VARCHAR(255) NULL,
    `manter_paciente_aquecido` VARCHAR(255) NULL,
    `checar_identificador_alergia` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_diagnostico_enfermagem_id`(`fch_diagnostico_enfermagem_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_diagnostico_enfermagem_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Encaminhamento_Paciente` (
    `fch_encaminhamento_paciente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_encaminhamento_paciente_status` CHAR(1) NULL,
    `encaminhamento_horario` VARCHAR(255) NULL,
    `cateter_venoso` CHAR(1) NULL,
    `cateter_venoso_local` VARCHAR(255) NULL,
    `sonda_vesical_demora` CHAR(1) NULL,
    `dreno` CHAR(1) NULL,
    `dreno_qual` VARCHAR(255) NULL,
    `dreno_local` VARCHAR(255) NULL,
    `peca_patologica` CHAR(1) NULL,
    `prontuario_completo` CHAR(1) NULL,
    `prontuario_completo_observacao` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_encaminhamento_paciente_id`(`fch_encaminhamento_paciente_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_encaminhamento_paciente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Encaminhamento_Paciente_Cirurgia` (
    `fch_encaminhamento_paciente_cirurgia_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_encaminhamento_paciente_cirurgia_status` CHAR(1) NULL,
    `consentimento_cirurgico_assinado` CHAR(1) NULL,
    `consentimento_anestesico_assinado` CHAR(1) NULL,
    `avaliacao_pre_anestesico` CHAR(1) NULL,
    `exames_complementares_imagem` CHAR(1) NULL,
    `retirada_pecas_intimas` CHAR(1) NULL,
    `retirada_orteose_proteses_adernos` CHAR(1) NULL,
    `sitio_cirurgico_demarcado` CHAR(1) NULL,
    `sitio_cirurgico_demarcado_observacao` VARCHAR(255) NULL,
    `encaminhamento_centro_cirurgico_horario` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_encaminhamento_paciente_cirurgia_id`(`fch_encaminhamento_paciente_cirurgia_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_encaminhamento_paciente_cirurgia_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Intraoperatoria` (
    `fch_intraoperatoria_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_intraoperatoria_status` CHAR(1) NULL,
    `questionar_paciente` CHAR(1) NULL,
    `termos_consentimento_assinados` CHAR(1) NULL,
    `sitio_demarcado` CHAR(1) NULL,
    `sitio_demarcado_nao_aplica` CHAR(1) NULL,
    `oximetro_instalado_funcionando` CHAR(1) NULL,
    `eletrodos_pneumatico_pa` VARCHAR(255) NULL,
    `eletrodos_pneumatico_mmhg` VARCHAR(255) NULL,
    `paciente_alergico` CHAR(1) NULL,
    `paciente_alergico_qual` VARCHAR(255) NULL,
    `risco_broncoaspiracao` CHAR(1) NULL,
    `profilaxia_para_tev` CHAR(1) NULL,
    `profilaxia_para_tev_horario` VARCHAR(255) NULL,
    `profilaxia_para_tev_qual` VARCHAR(255) NULL,
    `antibioticoprofilaxia` CHAR(1) NULL,
    `antibioticoprofilaxia_horario` VARCHAR(255) NULL,
    `acesso_venoso_periferico` CHAR(1) NULL,
    `acesso_venoso_periferico_local` VARCHAR(255) NULL,
    `pam` CHAR(1) NULL,
    `pam_local` VARCHAR(255) NULL,
    `acesso_dificil` CHAR(1) NULL,
    `perda_acesso` CHAR(1) NULL,
    `tipo_fixacao` VARCHAR(255) NULL,
    `posicao_operatorio_trendelemburg` CHAR(1) NULL,
    `posicao_operatorio_lateral_direira` CHAR(1) NULL,
    `posicao_operatorio_lateral_esquerda` CHAR(1) NULL,
    `posicao_operatorio_lateral_dorsal` CHAR(1) NULL,
    `posicao_operatorio_lateral_ventral` CHAR(1) NULL,
    `posicao_operatorio_lateral_semiGinecologica` CHAR(1) NULL,
    `posicao_operatorio_lateral_Ginecologica` CHAR(1) NULL,
    `assistencia_ventilosa_ar_ambiente` CHAR(1) NULL,
    `assistencia_ventilosa_masc_02` CHAR(1) NULL,
    `assistencia_ventilosa_catete_02` CHAR(1) NULL,
    `assistencia_ventilosa_mascara_laringea` VARCHAR(255) NULL,
    `assistencia_ventilosa_mascara_venture` CHAR(1) NULL,
    `assistencia_ventilosa_tubo_endotraqueal` VARCHAR(255) NULL,
    `mobilizacao` CHAR(1) NULL,
    `implantacao_materiais_equipamentos_disponiveis` CHAR(1) NULL,
    `prontuario_preenchido` CHAR(1) NULL,
    `mobilizacao_local` CHAR(1) NULL,
    `meia_elastica` CHAR(1) NULL,
    `ataduras` CHAR(1) NULL,
    `bota_pneumatica` CHAR(1) NULL,
    `higienizacao_clorex_dergemate` CHAR(1) NULL,
    `higienizacao_alcoolica` CHAR(1) NULL,
    `higienizacao_aquosa` CHAR(1) NULL,
    `higienizacao_responsavel` VARCHAR(255) NULL,
    `placa_bisturi` CHAR(1) NULL,
    `placa_bisturi_localizacao` VARCHAR(255) NULL,
    `placa_bisturi_frequencia` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_intraoperatoria_id`(`fch_intraoperatoria_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_intraoperatoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Recebimento_Paciente_Cirurgia` (
    `fch_recebimento_paciente_cirurgia_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_recebimento_paciente_cirurgia_status` CHAR(1) NULL,
    `horario_chegada` VARCHAR(255) NULL,
    `sala` VARCHAR(255) NULL,
    `responsavel_recebimento_paciente` VARCHAR(255) NULL,
    `anexo` CHAR(1) NULL,
    `anexo_qual` VARCHAR(255) NULL,
    `materiais_implantes_equipamentos` CHAR(1) NULL,
    `prazo_validacao_esterilizacao` CHAR(1) NULL,
    `integradores_quimicos_todas_caixas` CHAR(1) NULL,
    `montagem_so_conforme_procedimento` CHAR(1) NULL,
    `observacao` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_recebimento_paciente_cirurgia_id`(`fch_recebimento_paciente_cirurgia_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_recebimento_paciente_cirurgia_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_SAE_Triagem` (
    `fch_SAE_Triagem_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_SAE_Triagem_status` CHAR(1) NULL,
    `dt_internacao` DATE NULL,
    `apartamento` VARCHAR(255) NULL,
    `numero_registro` VARCHAR(255) NULL,
    `idade` VARCHAR(255) NULL,
    `medico` VARCHAR(255) NULL,
    `procedimento` VARCHAR(255) NULL,
    `sinais_vitais_fc` VARCHAR(255) NULL,
    `sinais_vitais_pa` VARCHAR(255) NULL,
    `sinais_vitais_saturacao` VARCHAR(255) NULL,
    `percepcao_sensorial` VARCHAR(255) NULL,
    `umidade` VARCHAR(255) NULL,
    `atividade` VARCHAR(255) NULL,
    `mobilidade` VARCHAR(255) NULL,
    `nutricao` VARCHAR(255) NULL,
    `friccao_cisalhamento` VARCHAR(255) NULL,
    `total_escala_branden` VARCHAR(255) NULL,
    `historico_quedas` CHAR(1) NULL,
    `diagnostico_secundario` CHAR(1) NULL,
    `auxilio_deambulacao` VARCHAR(255) NULL,
    `terapia_endovenosa_salinizado_heparinizado` CHAR(1) NULL,
    `marcha` VARCHAR(255) NULL,
    `estado_mental` VARCHAR(255) NULL,
    `pontuacao_total_escala_morse` VARCHAR(255) NULL,

    UNIQUE INDEX `fch_SAE_Triagem_id`(`fch_SAE_Triagem_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_SAE_Triagem_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha_Transferencia_Paciente` (
    `fch_transferencia_paciente_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `colaborador_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `fch_transferencia_paciente_status` CHAR(1) NULL,
    `apartamento` CHAR(1) NULL,
    `srpa` CHAR(1) NULL,
    `alta` CHAR(1) NULL,
    `recomendacoes` CHAR(1) NULL,
    `recomendacoes_quais` VARCHAR(255) NULL,
    `horario_encaminhamento` VARCHAR(255) NULL,
    `nome_enfermeiro_tecnico_enfermagem` CHAR(1) NULL,
    `nome_anestesista` VARCHAR(255) NULL,
    `consciencia_total_indicealdrete` INTEGER NULL,
    `consciencia_total_aochegar` INTEGER NULL,
    `consciencia_total_30min` INTEGER NULL,
    `consciencia_total_antesalta` INTEGER NULL,
    `desperta_ao_chamado_indicealdrete` INTEGER NULL,
    `desperta_chamado_aochegar` INTEGER NULL,
    `desperta_ao_chamado_30min` INTEGER NULL,
    `desperta_ao_chamado_antesalta` INTEGER NULL,
    `nao_responde_ao_indicealdrete` INTEGER NULL,
    `nao_responde_aochegar` INTEGER NULL,
    `nao_responde_30min` INTEGER NULL,
    `nao_responde_antesalta` INTEGER NULL,
    `capaz_respirar_profundamente_indicealdrete` INTEGER NULL,
    `capaz_respirar_profundamente_aochegar` INTEGER NULL,
    `capaz_respirar_profundamente_30min` INTEGER NULL,
    `capaz_respirar_profundamente_antesalta` INTEGER NULL,
    `dispineia_movimento_respiratorio_indicealdrete` INTEGER NULL,
    `dispineia_movimento_respiratorio_aochegar` INTEGER NULL,
    `dispineia_movimento_respiratorio_30min` INTEGER NULL,
    `dispineia_movimento_respiratorio_antesalta` INTEGER NULL,
    `apneia_indicealdrete` INTEGER NULL,
    `apneia_aochegar` INTEGER NULL,
    `apneia_30min` INTEGER NULL,
    `apneia_antesalta` INTEGER NULL,
    `pa_20_indicealdrete` INTEGER NULL,
    `pa_20_aochegar` INTEGER NULL,
    `pa_20_30min` INTEGER NULL,
    `pa_20_antesalta` INTEGER NULL,
    `pa_20_50_indicealdrete` INTEGER NULL,
    `pa_20_50_aochegar` INTEGER NULL,
    `pa_20_50_30min` INTEGER NULL,
    `pa_20_50_antesalta` INTEGER NULL,
    `pa_superior_50_indicealdrete` INTEGER NULL,
    `pa_superior_50_aochegar` INTEGER NULL,
    `pa_superior_50_30min` INTEGER NULL,
    `pa_superior_50_antesalta` INTEGER NULL,
    `movimentar_4_extremidades_indicealdrete` INTEGER NULL,
    `movimentar_4_extremidades_aochegar` INTEGER NULL,
    `movimentar_4_extremidades_30min` INTEGER NULL,
    `movimentar_4_extremidades_antesalta` INTEGER NULL,
    `movimentar_2_extremidades_indicealdrete` INTEGER NULL,
    `movimentar_2_extremidades_aochegar` INTEGER NULL,
    `movimentar_2_extremidades_30min` INTEGER NULL,
    `movimentar_2_extremidades_antesalta` INTEGER NULL,
    `movimentar_qualquer_extremidades_indicealdrete` INTEGER NULL,
    `movimentar_qualquer_extremidades_aochegar` INTEGER NULL,
    `movimentar_qualquer_extremidades_30min` INTEGER NULL,
    `movimentar_qualquer_extremidades_antesalta` INTEGER NULL,
    `saturacao_95_100_indicealdrete` INTEGER NULL,
    `saturacao_95_100_aochegar` INTEGER NULL,
    `saturacao_95_100_30min` INTEGER NULL,
    `saturacao_95_100_antesalta` INTEGER NULL,
    `saturacao_92_95_indicealdrete` INTEGER NULL,
    `saturacao_92_95_aochegar` INTEGER NULL,
    `saturacao_92_95_30min` INTEGER NULL,
    `saturacao_92_95_antesalta` INTEGER NULL,
    `saturacao_92_indicealdrete` INTEGER NULL,
    `saturacao_92_aochegar` INTEGER NULL,
    `saturacao_92_30min` INTEGER NULL,
    `saturacao_92_antesalta` INTEGER NULL,
    `sem_dor_0min` INTEGER NULL,
    `sem_dor_30min` INTEGER NULL,
    `sem_dor_60min` INTEGER NULL,
    `sem_dor_90min` INTEGER NULL,
    `sem_dor_120min` INTEGER NULL,
    `leve_1a3_0min` INTEGER NULL,
    `leve_1a3_30min` INTEGER NULL,
    `leve_1a3_60min` INTEGER NULL,
    `leve_1a3_90min` INTEGER NULL,
    `leve_1a3_120min` INTEGER NULL,
    `moderada_4a6_0min` INTEGER NULL,
    `moderada_4a6_30min` INTEGER NULL,
    `moderada_4a6_60min` INTEGER NULL,
    `moderada_4a6_90min` INTEGER NULL,
    `moderada_4a6_120min` INTEGER NULL,
    `intensa_7a10_0min` INTEGER NULL,
    `intensa_7a10_30min` INTEGER NULL,
    `intensa_7a10_60min` INTEGER NULL,
    `intensa_7a10_90min` INTEGER NULL,
    `intensa_7a10_120min` INTEGER NULL,
    `8a10_condicao_alta_srpa` CHAR(1) NULL,
    `5a7_vigilancia_relativa` CHAR(1) NULL,

    UNIQUE INDEX `fch_transferencia_paciente_id`(`fch_transferencia_paciente_id`),
    INDEX `colaborador_id`(`colaborador_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`fch_transferencia_paciente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paciente` (
    `paciente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `sexo` VARCHAR(1) NULL,
    `dtnascimento` DATETIME(3) NOT NULL,
    `dtcadastro` DATETIME(3) NULL,
    `dtalteracao` DATETIME(3) NULL,
    `status` CHAR(1) NULL,

    UNIQUE INDEX `paciente_id`(`paciente_id`),
    UNIQUE INDEX `Paciente_cpf_key`(`cpf`),
    PRIMARY KEY (`paciente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paciente_Procedimento` (
    `paciente_Procedimento_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NULL,
    `procedimento_id` INTEGER NULL,
    `status` CHAR(1) NULL,
    `dtregistro` DATETIME(3) NOT NULL,
    `hrregistro` DATETIME(3) NOT NULL,
    `preenchido` BOOLEAN NOT NULL,

    UNIQUE INDEX `paciente_Procedimento_id`(`paciente_Procedimento_id`),
    INDEX `paciente_id`(`paciente_id`),
    INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`paciente_Procedimento_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Procedimento` (
    `procedimento_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `descricao` VARCHAR(255) NULL,
    `status` CHAR(1) NULL,

    UNIQUE INDEX `procedimento_id`(`procedimento_id`),
    PRIMARY KEY (`procedimento_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ficha_Admissao_Paciente_Unidade` ADD CONSTRAINT `Ficha_Admissao_Paciente_Unidade_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Admissao_Paciente_Unidade` ADD CONSTRAINT `Ficha_Admissao_Paciente_Unidade_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Admissao_Paciente_Unidade` ADD CONSTRAINT `Ficha_Admissao_Paciente_Unidade_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Avaliacao_Nutricional` ADD CONSTRAINT `Ficha_Avaliacao_Nutricional_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Avaliacao_Nutricional` ADD CONSTRAINT `Ficha_Avaliacao_Nutricional_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Avaliacao_Nutricional` ADD CONSTRAINT `Ficha_Avaliacao_Nutricional_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Controle_Material` ADD CONSTRAINT `Ficha_Controle_Material_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Controle_Material` ADD CONSTRAINT `Ficha_Controle_Material_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Controle_Material` ADD CONSTRAINT `Ficha_Controle_Material_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Diagnostico_Enfermagem` ADD CONSTRAINT `Ficha_Diagnostico_Enfermagem_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Diagnostico_Enfermagem` ADD CONSTRAINT `Ficha_Diagnostico_Enfermagem_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Diagnostico_Enfermagem` ADD CONSTRAINT `Ficha_Diagnostico_Enfermagem_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Encaminhamento_Paciente` ADD CONSTRAINT `Ficha_Encaminhamento_Paciente_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Encaminhamento_Paciente` ADD CONSTRAINT `Ficha_Encaminhamento_Paciente_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Encaminhamento_Paciente` ADD CONSTRAINT `Ficha_Encaminhamento_Paciente_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Encaminhamento_Paciente_Cirurgia` ADD CONSTRAINT `Ficha_Encaminhamento_Paciente_Cirurgia_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Encaminhamento_Paciente_Cirurgia` ADD CONSTRAINT `Ficha_Encaminhamento_Paciente_Cirurgia_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Encaminhamento_Paciente_Cirurgia` ADD CONSTRAINT `Ficha_Encaminhamento_Paciente_Cirurgia_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Intraoperatoria` ADD CONSTRAINT `Ficha_Intraoperatoria_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Intraoperatoria` ADD CONSTRAINT `Ficha_Intraoperatoria_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Intraoperatoria` ADD CONSTRAINT `Ficha_Intraoperatoria_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Recebimento_Paciente_Cirurgia` ADD CONSTRAINT `Ficha_Recebimento_Paciente_Cirurgia_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Recebimento_Paciente_Cirurgia` ADD CONSTRAINT `Ficha_Recebimento_Paciente_Cirurgia_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Recebimento_Paciente_Cirurgia` ADD CONSTRAINT `Ficha_Recebimento_Paciente_Cirurgia_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_SAE_Triagem` ADD CONSTRAINT `Ficha_SAE_Triagem_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_SAE_Triagem` ADD CONSTRAINT `Ficha_SAE_Triagem_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_SAE_Triagem` ADD CONSTRAINT `Ficha_SAE_Triagem_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Transferencia_Paciente` ADD CONSTRAINT `Ficha_Transferencia_Paciente_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Transferencia_Paciente` ADD CONSTRAINT `Ficha_Transferencia_Paciente_ibfk_2` FOREIGN KEY (`colaborador_id`) REFERENCES `Colaborador`(`colaborador_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ficha_Transferencia_Paciente` ADD CONSTRAINT `Ficha_Transferencia_Paciente_ibfk_3` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Paciente_Procedimento` ADD CONSTRAINT `Paciente_Procedimento_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`paciente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Paciente_Procedimento` ADD CONSTRAINT `Paciente_Procedimento_ibfk_2` FOREIGN KEY (`procedimento_id`) REFERENCES `Procedimento`(`procedimento_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
