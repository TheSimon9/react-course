const mockList = {
    lista: [
        {
            id: 1,
            value: "birra"
        },
        {
            id: 2,
            value: "patatine"
        }, {
            id: 3,
            value: "spritz"
        }
    ]
}


export async function doGet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(mockList), 1000)
    })


}