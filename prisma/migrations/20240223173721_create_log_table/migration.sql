-- CreateTable
CREATE TABLE `Log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_responsavel_mudanca` INTEGER NOT NULL,
    `flag_responsavel` ENUM('C', 'P') NOT NULL,
    `acao` VARCHAR(191) NOT NULL,
    `atributo` VARCHAR(191) NULL,
    `id_afetado` INTEGER NOT NULL,
    `flag_afetado` ENUM('C', 'P') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Log_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
