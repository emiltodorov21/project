import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/books';


export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`);
    return result;
};

// export const getLatest = async () =>{
//     // const query = new URLSearchParams({
//     //     sortBy: `_createdOn desc`,
//     //     offset:0,
//     //     pageSize:3,
//     // });
//     const result = await request.get(`${baseUrl}?sortBy=_createdOn desc&offset=0&pageSize=3`);
//     // const result = await request.get(`${baseUrl}?${query}`);

//     return result;
// };


export const getRandomBooks = async () => {
    const allData = await request.get(baseUrl);
    const threeRandomObjects = random(allData, 3);

    return threeRandomObjects;

};

const random = (array, count) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    const selectedItems = shuffledArray.slice(0, count);

    return selectedItems;
};


export const create = async (bookData) => {
    const result = await request.post(baseUrl, bookData);


    return result;
};

export const edit = async (bookId, bookData) => {
    const result = await request.put(`${baseUrl}/${bookId}`, bookData);


    return result;
};

export const remove = async (bookId) => request.del(`${baseUrl}/${bookId}`);


