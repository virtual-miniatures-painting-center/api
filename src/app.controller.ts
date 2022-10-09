import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    getOkStatus() {
        return { statusCode: 201 };
    }
}
