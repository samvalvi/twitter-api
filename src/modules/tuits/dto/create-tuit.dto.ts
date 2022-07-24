import { IsString, IsNotEmpty } from "class-validator";

export class CreateTuitDto {
  @IsNotEmpty({ message: "Id is required" })
  @IsString({ message: 'Id must be a string' })
  readonly id: string;

  @IsNotEmpty({ message: "Message is required" })
  @IsString({ message: 'Message must be a string' })
  readonly message: string;
}
