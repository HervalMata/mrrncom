interface ICreateAddressDTO {
    id?: string;
    user_id: string;
    isBilling?: boolean;
    isShipping?: boolean;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
    country: "Brasil";
}

export { ICreateAddressDTO };