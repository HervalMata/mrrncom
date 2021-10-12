import { v4 as uuidV4 } from "uuid";

class Category {
    id?: string;
    name: string;
    description: string;
    isActive: boolean;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };