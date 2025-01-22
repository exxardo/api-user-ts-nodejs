import {GetUsersControllerProtocols} from "./GetUsersControllerProtocols";

export class GetUsersController implements GetUsersControllerProtocols {

    getUsersRepository: GetUsersRepository;

    constructor(getUsersRepository: GetUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }
    handle() {
        // Validar requisiçao
        // Direcionar para o repository
        try: {
            const users = await this.getUsersRepository.getUsers();
            return {
                statusCode: 200,
                body: users
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: "Error"
            }
        }
    }
}