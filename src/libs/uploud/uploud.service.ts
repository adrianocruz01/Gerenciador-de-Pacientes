import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  private readonly uploadPath = path.join(__dirname, "..", "..", "..", "pdfs");

  constructor() {
    this.ensureUploadPathExists();
  }

  private ensureUploadPathExists(): void {
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath, { recursive: true });
    }
  }

}
