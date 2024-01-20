import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateControleMaterialDto } from '../dto/create-material-control.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class FichaControleMaterialService {
    constructor(private readonly prisma: PrismaService) { }

    async execute(fichaControleMaterialData: CreateControleMaterialDto, colaborador_id: number) {
        const {
            paciente_id,
            procedimento_id,
            paciente_procedimento_id
        } = fichaControleMaterialData;

        const exists = await this.prisma.ficha_Controle_Material.findFirst({
            where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
        });

        if (exists) {
            throw new BadRequestException('Esta ficha de controle de material já existe para este paciente e procedimento');
        }

        return await this.prisma.ficha_Controle_Material.create({
            data: {
                fch_controle_material_status: fichaControleMaterialData.fch_controle_material_status,
                contagem_compressas_entregues: fichaControleMaterialData.contagem_compressas_entregues,
                contagem_compressas_devolvidas: fichaControleMaterialData.contagem_compressas_devolvidas,
                contagem_gases_entregues: fichaControleMaterialData.contagem_gases_entregues,
                contagem_gases_devolvidas: fichaControleMaterialData.contagem_gases_devolvidas,
                contagem_instrumental_entregues: fichaControleMaterialData.contagem_instrumental_entregues,
                contagem_instrumental_devolvidas: fichaControleMaterialData.contagem_instrumental_devolvidas,
                pecas_cirurgicas_anatomia: fichaControleMaterialData.pecas_cirurgicas_anatomia,
                pecas_cirurgicas_anatomia_quantidade: fichaControleMaterialData.pecas_cirurgicas_anatomia_quantidade,
                pecas_identificadas: fichaControleMaterialData.pecas_identificadas,
                soro_infusao_medicamentos_fluidos: fichaControleMaterialData.soro_infusao_medicamentos_fluidos,
                pulseira_identificacao: fichaControleMaterialData.pulseira_identificacao,
                problemas_equipamentos: fichaControleMaterialData.problemas_equipamentos,
                problemas_equipamentos_quais: fichaControleMaterialData.problemas_equipamentos_quais,
                Paciente: {
                    connect: {
                        paciente_id: +paciente_id,
                    },
                },
                Colaborador: {
                    connect: { colaborador_id: colaborador_id },
                },
                Procedimento: {
                    connect: {
                        procedimento_id: +procedimento_id,
                    },
                },
                Paciente_Procedimento: {
                    connect: {
                        paciente_Procedimento_id: +paciente_procedimento_id,
                    },
                },
            },
        });
    }
}
