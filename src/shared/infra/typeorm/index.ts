import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: 5432,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: 'apivendas',
})

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!')
	})
	.catch(err => {
		console.error('Error during Data Source initialization', err)
	})
