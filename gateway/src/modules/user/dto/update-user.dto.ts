import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        example: "John"
    })
    name: string
    @ApiProperty({
        example: "exmaple.jpg"
    })
    image: string
    @ApiProperty({
        example: 'example@example.com'
    })
    email: string
    @ApiProperty({
        example: "+998-XX-XXX-XX-XX"
    })
    phone: string
}
