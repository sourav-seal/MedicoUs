export interface Product {
  id: string;
  productName: string;
  categoryName: string;
  description: string;
  imageUrl: string | File;
  price: string;
}
export interface Hospital {
  id: string;
  hospitalName: string;
  adminId: string;
  imageUrl: File | string;
  speciality: string;
  status: string;
  description: string;
  address: string;
}

export interface Bed {
  id: string;
  hospitalId: string;
  hospitalName: string;
  quantity: number;
  existingBed: number;
  ward: string;
  cost: number;
  bedType: string;
  date: Date;

}

export interface USER {
  _id: string;
  firstname: string;
  lastname: string;
  mobile: number;
  email: string;
  gender: string;
}

export interface Cart {
  id: string;
  status: string;
  createOn: Date;
  productId: string;
  uId: string;
  quantity: number;
  __v: number;
  UserCartList: [
    {
      id: string;
      outOfStock: boolean;
      productName: string;
      categoryName: string;
      description: string;
      imageUrl: string | File;
      price: number;
      __v: number;
    }
  ];
}