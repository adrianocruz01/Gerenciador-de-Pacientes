/*
  Warnings:

  - The primary key for the `Ficha_Controle_Material` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `fch_controle_material_id` on the `Ficha_Controle_Material` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.
  - The primary key for the `Ficha_Intraoperatoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `fch_intraoperatoria_id` on the `Ficha_Intraoperatoria` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.
  - The primary key for the `Ficha_Transferencia_Paciente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `fch_transferencia_paciente_id` on the `Ficha_Transferencia_Paciente` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Ficha_Controle_Material` DROP PRIMARY KEY,
    MODIFY `fch_controle_material_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`fch_controle_material_id`);

-- AlterTable
ALTER TABLE `Ficha_Intraoperatoria` DROP PRIMARY KEY,
    MODIFY `fch_intraoperatoria_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`fch_intraoperatoria_id`);

-- AlterTable
ALTER TABLE `Ficha_Transferencia_Paciente` DROP PRIMARY KEY,
    MODIFY `fch_transferencia_paciente_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`fch_transferencia_paciente_id`);
