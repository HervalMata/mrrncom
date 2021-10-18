interface ICreateUsersProfileDTO {
    id?: string;
    user_id: string;
    cpf: string;
    phone_number: string;
    avatar?: string;
}

export { ICreateUsersProfileDTO };