import { Controller, Get,Request, Post, Req, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from './maratona.model';
import { Repository } from 'typeorm';

@Controller('maratona')
export class MaratonaController {


    constructor(
        @InjectRepository(Maratona)
        private readonly repository: Repository<Maratona>
    ) {

    }

    @Get()
    async index() {
        return await this.repository.find({})
    }

    @Get(':id')
    async show(@Param('id') id) {
        return await this.repository.findOneOrFail({where: {id}});
    }


    @Post()
    async store(@Req() request: Request) {
        const maratona = this.repository.create(request.body as any);
        await this.repository.save(maratona);
        return maratona;
    }
}
