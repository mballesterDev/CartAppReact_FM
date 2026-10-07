export interface Product {
    id:      number; 
    image:    Image;
    name:     string;
    category: string;
    price:    number;
    
}

export interface CartItem extends Product {
    quantity: number
}

export interface CartOrder {
    items: CartItem[];
    total: number;
}

export interface Image {
    thumbnail: string;
    mobile:    string;
    tablet:    string;
    desktop:   string;
}
