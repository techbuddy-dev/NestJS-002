import { Controller, Delete, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    console.log(`User with id ${id} deleted.`);
  }
}
