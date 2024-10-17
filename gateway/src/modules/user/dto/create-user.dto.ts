import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        required: true,
        example: "John"
    })
    name: string
    @ApiProperty({
        required: true,
        example: "exmaple.jpg"
    })
    image: string
    @ApiProperty({
        required: true,
        example: 'example@example.com'
    })
    email: string
    @ApiProperty({
        required: true,
        example: "+998-XX-XXX-XX-XX"
    })
    phone: string
}
