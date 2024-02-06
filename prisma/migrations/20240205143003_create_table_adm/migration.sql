-- CreateTable
CREATE TABLE `Administrador` (
    `administrador_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `dtcadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtalteracao` DATETIME(3) NULL,
    `status` CHAR(1) NULL,

    UNIQUE INDEX `administrador_id`(`administrador_id`),
    UNIQUE INDEX `Administrador_cpf_key`(`cpf`),
    PRIMARY KEY (`administrador_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
