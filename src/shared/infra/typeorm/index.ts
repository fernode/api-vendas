import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: 5432,
	username: 'postgres',
	password: 'docker',
	database: 'apivendas',
	entities: ['./src/modules/**/typeorm/entities/*.ts'],
	migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
})

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!')
	})
	.catch(err => {
		console.error('Error during Data Source initialization', err)
	})
