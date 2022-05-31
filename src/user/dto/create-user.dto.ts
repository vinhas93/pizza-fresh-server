import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Apenas para exibição.',
    example: 'Fulano da Silva',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Deve ser único. Utilizado no login.',
    example: 'silvafulano',
  })
  nickName: string;

  @IsString()
  @MinLength(6)
  @Matches(/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login.',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação de senha deve ser igual a senha.',
    example: 'Abcd@1234',
  })
  ConfirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://avatars.githubusercontent.com/u/95504029?v=4',
  })
  image: string;
}
