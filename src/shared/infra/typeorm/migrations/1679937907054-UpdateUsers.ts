import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateUsers1679937907054 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('ALTER TABLE users ADD COLUMN avatar varchar(255)')
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('ALTER TABLE users DROP COLUMN avatar')
	}
}
