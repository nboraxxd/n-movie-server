import cors from 'cors'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { openapiSpecification } from '@/utils/swagger'
import envVariables from '@/schemas/env-variables.schema'
import databaseService from '@/services/database.services'
import { defaultErrorHandler } from '@/middlewares/default-error.middleware'
import usersRouter from '@/routes/users.routes'
import authRouter from '@/routes/auth.routes'
import moviesRouter from '@/routes/movies.routes'
import discoverRouter from '@/routes/discover.routes'

const app = express()
const port = envVariables.PORT

// kết nối với database
databaseService.connect()

// Quy định CORS
app.use(cors({ origin: '*' }))

// parse json của client gởi lên, chuyển thành dạnh object để xử lý
app.use(express.json())

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

app.use('/users', usersRouter)

app.use('/auth', authRouter)

app.use('/movies', moviesRouter)

app.use('/discover', discoverRouter)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
