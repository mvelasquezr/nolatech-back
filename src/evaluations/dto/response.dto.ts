import { IsString } from "class-validator";

export class ResponseDto {
  @IsString()
  question: string;  

  @IsString()
  response?: string;
}
