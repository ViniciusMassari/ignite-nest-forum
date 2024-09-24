import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { Public } from '@/infra/auth/public';

@Controller('/attachments')
@Public()
export class UploadAttachmentController {
  //   constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async handle(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator(
            { maxSize: 1024 * 1024 * 2 } // 2MB
          ),
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|pdf)' }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    console.log();
  }
}
