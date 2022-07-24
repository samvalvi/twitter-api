import { IsString, IsNotEmpty } from "class-validator";

export class UpdateTuitDto {
  @IsNotEmpty({ message: "message is required" })
  @IsString({ message: "message must be a string" })
  readonly message: string;
}
